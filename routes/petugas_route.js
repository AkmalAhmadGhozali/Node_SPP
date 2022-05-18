'use strict'

const express = require('express')

const pembayaranController = require('../controllers/pembayaran_controller')
const router = new express.Router();
const {tokenPetugas} = require('../auth/tokenValidation_Petugas')

router.post("/addPembayaran",tokenPetugas,pembayaranContsroller.addPembayaran)

module.exports = router