require('dotenv').config()
require('./mongo')

const express = require('express');
const cors = require('cors')
const app = express();
const Note = require('./models/Note');
const { response } = require('express');




app.use(cors())
app.use(express.json());



var notes = [];

app.get("/", (req, res) => {
  res.send("<h1>Hello Api Express");
});

app.get("/api/note", (req, res) => {
  Note.find({}).then(notes => {
    res.json(notes);
  })
});

app.get("/api/note/:id", (req, res) => {
  const note = notes.find((n) => n.id === id);
  if (note) {
    res.json(note);
  } else {
    res.status(404).end();
  }
});

app.delete("/api/note/:id", (req, res, next) => {
  Note.findById(id).then(note => {
    if(note){
      return res.json(note)
    }else{
      res.status(404).end()
    }
  }).catch(err => {
    next(err)
  })
});

app.post("/api/note", (req, res) => {
  const note = req.body

  if(!note.body){
    return response.status(400).json({
      error: "required body field is missing"
    })
  }

  const newNote = new Note({
    body: note.body,
    important: typeof note.important !== "undefined" ? note.important : false
  })

  newNote.save()
    .then(savedNote => {
      res.json(savedNote)
    })
  res.json(newNote);
});

app.use((error, req, res, next) => {
    console.error(error)
    console.log(error.name)
    
    if(error.name === 'CastError'){
      res.status(400).end()
    }else{
      res.status(500).end()
    }
})

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server running ${PORT}`);
});
