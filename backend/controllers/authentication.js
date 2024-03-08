const router = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')
const user = require('../models/user')

const { User } = db

router.post('/', async (req, res) => {
    
    let user = await User.findOne({
        where: {
            email: req.body.email
        }
    })

    if (!user || !await bcrypt.compare(req.body.password, user.passwordDigest)) {
        res.status(400).send('Could not find user with the provided credentials')
    } else {
        res.json({user})
        
    }
    console.log(user)
})

module.exports = router
