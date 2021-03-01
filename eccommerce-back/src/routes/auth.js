// Calling Dependencies
const express = require('express');
const { signup, signin, requireSignin } = require('../controllers/auth');
const User = require('../models/user')


// Initalizing Express router for calling routes
const router = express.Router();


// Declaring Routes
router.post('/signup', signup)
router.post('/signin', signin)
router.post('/profile', requireSignin, (req, res) => {
    res.status(200).json({
        user: "profile"
    })

})

// Exporting Module
module.exports = router