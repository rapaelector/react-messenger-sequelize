require('dotenv').config()
const express = require('express');
const User = require('../../models/User')
const router = express.Router();
const Group = require('../../models/Group')
const io = require('../socket/socket');
const UserGroup = require('../../models/UserGroup');
const Message = require('../../models/Message');
const { Op } = require("sequelize");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt")
const jwt = require('jsonwebtoken')
const httpRes = require('http-response-status-code')


var app = express()

app.use(express.json()) // for parsing application/json




// list all user
router.post('/register', async(req, res, next) => {
    const {email, password, firstName, lastName} = req.body;
    const salt = await bcrypt.genSalt();
    const passwordHashed = await bcrypt.hash(password, salt);
    try{
        await User.create({
            email,
            "password": passwordHashed, 
            firstName, 
            lastName 
        }).then(user => {
            console.log(user)
            res.status(httpRes.CREATED)
            res.json(user)
            res.send()
        }).catch((e)=> {
            const errorList = []
            e.errors.forEach(error => {
                const {message, path} = error;
                errorList.push({
                    message, path
                })
            })
            // let result = JSON.stringify(errorList)
            res.status(httpRes.BAD_REQUEST)
            res.json(errorList)
            res.send()
        })
    } catch(e) {
        console.log(e)
        res.status(httpRes.BAD_REQUEST)
        res.json(e)
        res.send()
    }
});  


// list all user
router.post('/login', async(req, res, next) => {
    const {email, password} = req.body;
    
    const currentUser = null;
    const user = await User.findOne({
        where:{
            email: email
        }
    })
    if (!user) {
        res.status(404)
        res.json('Bad Credential')
        res.send();
        // return;
    }

    const match = await bcrypt.compare(password, user.password)

    if (!match) {
        res.status(404)
        res.json('Bad Credential')
        res.send();
        // return;
    }

    const parsedUser = {id: user.id, email: user.email, firstName: user.firstName, lastName: user.lastName }

    const token = jwt.sign(parsedUser, process.env.JWT_SECRET)
    res.status(200);
    res.json({token});
});  

module.exports = router;
