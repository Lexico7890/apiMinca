const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json());



var notes = [
  {
    id: 1,

    body:
      "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    important: true
  },
  {
    id: 2,

    body:
      "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    important: true
  },
  {
    id: 3,

    body:
      "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut",
    important: true
  },
  {
    id: 4,

    body:
      "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit",
    important: true
  },
  {
    id: 5,

    body:
      "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque",
    important: true
  },
  {
    id: 6,

    body:
      "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae",
    important: true
  }
];

app.get("/", (req, res) => {
  res.send("<h1>Hello Api Express");
});

app.get("/api/note", (req, res) => {
  res.json(notes);
});

app.get("/api/note/:id", (req, res) => {
  const id = Number(req.params);
  const note = notes.find((n) => n.id === id);
  if (note) {
    res.json(note);
  } else {
    res.status(404).end();
  }
});

app.delete("/api/note/:id", (req, res) => {
  const id = Number(req.params);
  notes = notes.filter((n) => n.id !== id);
  res.status(204).end();
});

app.post("/api/note", (req, res) => {
  const note = res.body;
  const ids = notes.map((n) => n.id);
  const maxId = Math.max(...ids);

  const newNote = {
    id: maxId + 1,
    body: note.body,
    important: typeof note.important !== "undefined" ? note.important : false
  };
  notes = notes.concat(newNote);
  res.json(newNote);
});

app.use((req, res) => {
    res.status(404).json({
        error: "Not found"
    })
})

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`server running ${PORT}`);
});
