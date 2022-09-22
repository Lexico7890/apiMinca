
const { httpError } = require('../helpers/handleError')
const vehicleModel = require('../models/Vehicle')


const getVehicles = async (req, res) => {
  try {
    const listAll = await vehicleModel.find({})
    res.send({data: listAll})
  } catch (err) {
    httpError(res, e)
  }
}

const getVehicle = async (req, res, next) => {
  const {id} = req.params
  try {
    const vehicle = await vehicleModel.findById(id)
    if(vehicle){
      res.send({data: vehicle})
    }else{
      res.status(404).end()
    }
  } catch (err) {
    next(err)
  }
  
}

const createVehicles = async (req, res, next) => {
  try {
    const {brand, vehicleNew, mileage, numberOwner, color, serial} = req.body
    const resDetail = await vehicleModel.create({
      brand, vehicleNew, mileage, numberOwner, color, serial
    })
    res.send({data: resDetail})
  } catch (err) { 
    httpError(res, err)
    next()
  }
}

const updateVehicles = (req, res, next) => {
  const {id} = req.params
  const vehicle = req.body
  const newVehicle = {
    brand: vehicle.brand,
    vehicleNew: vehicle.vehicleNew,
    mileage: vehicle.mileage,
    numberOwner: vehicle.numberOwner,
    color: vehicle.color,
    serial: vehicle.serial
  }

  vehicleModel.findByIdAndUpdate(id, newVehicle, { new: true})
    .then(result => {
      res.json(result)
    })
    .catch(next)
  

}

const deleteVehicles = (req, res) => {
  
}

module.exports = {getVehicles, getVehicle, createVehicles, updateVehicles, deleteVehicles}

/*function getAllVehicle(req, res){
    User.find({}).then(vehicles => {
        res.json(vehicles);
    })
}

function getVehicle(req, res, next){
    const { id } = req.params
    User.findById(id).then(vehicle => {
        if (vehicle) {
          res.json(vehicle);
        } else {
          res.status(404).end();
        }
      }).catch(err => {
        next(err)
      })
}*/