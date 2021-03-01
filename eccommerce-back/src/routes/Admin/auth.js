// Calling Dependencies
const express = require('express');
const { adminSignup, adminSignin } = require('../../controllers/Admin/auth');


// Initalizing Express router for calling routes
const router = express.Router();


// Declaring Routes
router.post('/admin/signup', adminSignup)
router.post('/admin/signin', adminSignin)

// Exporting Module
module.exports = router