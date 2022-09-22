const express = require('express')
const checkOrigin = require('../../middleware/origin')
const router = express.Router()
const {getVehicles, getVehicle, createVehicles, updateVehicles, deleteVehicles} = require('../controllers/vehicle')


router.get('/', getVehicles)

router.get('/:id', getVehicle)

router.post('/', checkOrigin, createVehicles)

router.patch('/:id', updateVehicles)

router.delete('/:id', deleteVehicles)

module.exports = router