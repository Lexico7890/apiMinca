const {Schema, model} = require('mongoose')

const vehicleSchema = new Schema({
    brand: String,
    vehicleNew: Boolean,
    mileage: Number,
    numberOwner: Number,
    color: String,
    serial: Number
},{
    timestamps: true,
    versionKey: false
})

vehicleSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Vehicle = model('Vehicle', vehicleSchema)


module.exports = Vehicle