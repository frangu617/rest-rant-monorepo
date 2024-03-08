const router = require('express').Router()
const db = require("../models")
const bcrypt = require('bcrypt')
const user = require('../models/user')
const currentUser = require('../middleware/defineCurrentUser')

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
        req.session.userId = user.userId
        res.json({user})
        
    }
    console.log(user)
})

router.get('/profile', async (req, res) => {
  res.json(req.currentUser)
    console.log(req.session.userId)
})

router.post('/super-important-route', async (req, res) => {
    if(req.session.userId){
        console.log('Do the really super important thing')
        res.send('Done')
    } else {
        console.log('You are not authorized to do the super important thing')
        res.send('Denied')
    }
})



module.exports = router
