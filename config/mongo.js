const mongoose = require('mongoose')



const dbConnect = () => {
    const connectionString = process.env.MONGO_DB_URI
    mongoose.connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, (err, res) => {
        if(!err){
            console.log('*** CONEXION CORRECTA ***')
        }else{
            console.log('*** ERROR DE CONEXION ***')
        }
    })
}

module.exports = { dbConnect }