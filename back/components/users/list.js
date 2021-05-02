const express = require('express');
const User = require('../../models/User')
const router = express.Router();
const Group = require('../../models/Group')
const io = require('../socket/socket');
const UserGroup = require('../../models/UserGroup');
const Message = require('../../models/Message');
const { Op } = require("sequelize");
const bodyParser = require("body-parser");
const httpRes = require("http-response-status-code")
const serializer = require("sequelize-to-json")
const userSheme = require('../sheme/userSheme')

var app = express()

app.use(express.json()) // for parsing application/json






// list all user
router.get('/', (req, res) => User.findAll().then(
    users => {
        res.json(serializer.serializeMany(users, User, userSheme))
        res.sendStatus(200)
    }
).catch(e => console.log(e))); 

// find user by id

router.get('/:id([0-9]+)', (req, res) => {
    const {id} = req.params;
    User.findOne({
        where: {
            id: id
        },
        include: Group
    }).then(
        user => {
            if (!user) {
                res.json({
                    error: "User not found"
                })
                res.sendStatus(httpRes.NOT_FOUND)
                res.send();
                return
            }
            const userSerializer  = new serializer(User, userSheme);
            res.json(userSerializer.serialize(user))
            res.sendStatus(200)
        }
    ).catch(e => console.log(e))
}
);

// create user

router.get('/create', (req, res) => User.create({ firstName: "John", lastName: "Doe" }).then(
    user => {
        console.log(user);
            io.emit('usercreated', (user))
        
        res.sendStatus(201)
    }
).catch(e => console.log(e)));

// GroupList

router.get('/usergroups', (req, res) => {
    const {UserId} = req.query;
    User.findOne({
        where: {
            id: UserId
        },
        include: Group
    }).then(
        userGroups => {
            console.log(userGroups);
            res.json(userGroups)
            res.sendStatus(201)
        }
    ).catch(e => console.log(e))
}
);
// Get Group

router.get('/group', (req, res) => {
    const {id} = req.query;
    Group.findAll({
        where: {
            id
        }
    }).then(
        Group => {
            console.log(Group);
            res.json(Group)
            res.sendStatus(201)
        }
    ).catch(e => console.log(e))
}
);
// Get Group by ids

router.get('/group_by_ids', (req, res) => {
    const {ids} = req.query;
    Group.findAll({
        where: {
            id: {
                [Op.or] : ids
            }
        }
    }).then(
        Group => {
            console.log(Group);
            res.json(Group)
            res.sendStatus(201)
        }
    ).catch(e => console.log(e))
}
);
// Get Message for group by ids

router.get('/message_by_group_id', (req, res) => {
    const {id} = req.query;
    Message.findAll({
        where: {
            GroupId: id
        }
    }).then(
        Messages => {
            console.log(Messages);
            res.json(Messages)
            res.sendStatus(200)
        }
    ).catch(e => console.log(e))
}
);



module.exports = router;