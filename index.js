








/*

const { response } = require('express');
const notFound = require('./middleware/notFound');
const handleError = require('./middleware/handleError');


app.get("/", (req, res) => {
  res.send("<h1>Hello Api Express");
});



app.get("/api/note/:id", (req, res, next) => {
  
  
});

app.delete("/api/note/:id", (req, res, next) => {
  const {id} = req.params
  Note.findByIdAndDelete(id)
    .then(() => res.status(204).end())
    .catch(err => next(err))
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

app.put('/api/note/:id',(req, res, next) => {
  const { id } = req.params
  const note = req.body
  const newNoteInfo = {
    body: note.body,
    important: note.important
  }

  Note.findByIdAndUpdate(id, newNoteInfo, {new: true}).then(result => {
    res.json(result)
  }).catch(err => next(err))
})



const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server running ${PORT}`);
});*/
