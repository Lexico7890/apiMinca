const mongoose = require('mongoose')
const connectionString = process.env.MONGO_DB_URI



mongoose.connect(connectionString)
    .then(() => {
        console.log('DataBase conneted')
    }).catch((err) => {
        console.error(err)
    })


/*const noteSchema = mongoose.Schema({
    body: String,
    important: Boolean
})



const note = new Note({
    body: 'Primera nota ingresada',
    important: true
})

note.save()
    .then(res => {
        console.log(res)
        mongoose.connection.close()
    })
    .catch(err => {
        console.error(err)
    })*/
