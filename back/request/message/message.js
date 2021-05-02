require('dotenv').config()
const express = require('express');
const router = express.Router();
const Group = require('../../models/Group')
const io = require('../../components/socket/socket');
const UserGroup = require('../../models/UserGroup');
const httpRes = require('http-response-status-code')
const base64 = require('base-64')

// app.use(express.json()) // for parsing application/json
// app.use(cors()) // for parsing application/json

router.post('/create', async(req, res, next) => {
    const {users} = req.body;
    let ids = [];
    // get all id of user and sort
    users.forEach(user=> {ids.push(user.id)})
    // sort these ids
    ids.sort()
    // then convert to base 64
    let idsStringify = JSON.stringify(ids)
    idsStringify = base64.encode(idsStringify)
    // then check if group already exist
    const group = await Group.findOne({
        where: {
            groupUserIds: idsStringify
        }
    })

    // then create group if not exist
    if (!group) {
        let names = [];
        users.forEach(user=> {names.push(user.firstName)})
        // create group
        const group = await Group.create({
            name: JSON.stringify(names),
            groupUserIds: idsStringify
        })
        // then add it to users
        await users.forEach(user=> {
            UserGroup.create({
                UserId : user.id,
                GroupId: group.id
            })
        }) 
        io.emit('groupadd', (group))
        res.status(httpRes.ACCEPTED)
        res.json(group)
        res.send()
    }
    
    res.status(httpRes.ACCEPTED)
    res.json(group)
    res.send()
}); 
 

module.exports = router;
