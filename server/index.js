const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const {addNote} = require('./controller')

app.post('api/notesDB/', createNote)


app.listen(4000,() => console.log("Server running on 4000"));