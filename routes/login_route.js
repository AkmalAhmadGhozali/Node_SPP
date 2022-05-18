'use strict'

const express = require('express')

const loginController = require('../controllers/login_controller')
const router = new express.Router()

router.post("/login",loginController.login)

module.exports = router