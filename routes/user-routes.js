const express = require("express")
const router = express.Router()
const user = require('../models/user')
var bodyParser = require("body-parser"); 
// log in router 

router.get('/login',(req,res)=>{
    res.render('user/login')
})

// log in post 

router.post('/login',(req,res)=>{
    console.log(req.body)
    let newuser = new user ({
        email: req.body.email,
        password: req.body.password
    })

    //save db
    newuser.save( (err)=>{
        if (!err)
        {
            console.log('login ok !!')
        } else
        {
            console.log(err)
        }
    })
    res.redirect('profile')
})

router.get('/profile',(req,res)=>{
    res.render('user/profile')
})

module.exports = router