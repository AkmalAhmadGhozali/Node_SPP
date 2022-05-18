'use strict'

const express = require('express')

const adminController = require('../controllers/admin_controller')
const petugasController = require('../controllers/petugas_controller')
const kelasController = require('../controllers/kelas_controller')
const siswaController = require('../controllers/siswa_controller')
const sppController = require('../controllers/spp_controller')
const pembayaranController = require('../controllers/pembayaran_controller')

const router = new express.Router();

const {tokenAdmin} = require('../auth/tokenValidation_Admin');
const { route } = require('express/lib/application')

//Endpoint Register
router.post("/signup",tokenAdmin,adminController.signup)

//Endpoint Petugas
router.get("/dataPetugas",tokenAdmin,petugasController.dataPetugas)
router.get("/dataPetugas/:id",tokenAdmin,petugasController.idPetugas)
router.post("/addPetugas",tokenAdmin,petugasController.addPetugas)
router.put("/updatePetugas/:id",tokenAdmin,petugasController.updatePetugas)
router.delete("/deletePetugas/:id",tokenAdmin,petugasController.deletePetugas)

//Endpoint Kelas
router.get("/dataKelas",tokenAdmin,kelasController.dataKelas)
router.get("/dataKelas/:id",tokenAdmin,kelasController.idKelas)
router.post("/addKelas",tokenAdmin,kelasController.addKelas)
router.put("/updateKelas/:id",tokenAdmin,kelasController.updateKelas)
router.delete("/deleteKelas/:id",tokenAdmin,kelasController.deleteKelas)

//Endpoint Siswa
router.get("/dataSiswa",tokenAdmin,siswaController.dataSiswa)
router.get("/dataSiswa/:nisn",tokenAdmin,siswaController.idSiswa)
router.post("/addSiswa",tokenAdmin,siswaController.addSiswa)
router.put("/updateSiswa/:nisn",tokenAdmin,siswaController.updateSiswa)
router.delete("/deleteSiswa/:nisn",tokenAdmin,siswaController.deleteSiswa)

//Endpoint SPP
router.get("/dataSpp",tokenAdmin,sppController.dataSpp)
router.get("/dataSpp/:id",tokenAdmin,sppController.idSpp)
router.post("/addSpp",tokenAdmin,sppController.addSpp)
router.put("/updateSpp/:id",tokenAdmin,sppController.updateSpp)
router.delete("/deleteSpp/:id",tokenAdmin,sppController.deleteSpp)

//Endpoint Pembayaran
router.get("/dataPembayaran",tokenAdmin,pembayaranController.dataPembayaran)
router.get("/dataPembayaran/:id",tokenAdmin,pembayaranController.idPembayaran)
router.post("/addPembayaran",tokenAdmin,pembayaranController.addPembayaran)
router.delete("/deletePembayaran/:id",tokenAdmin,pembayaranController.deletePembayaran)

module.exports = router