require('dotenv').config()
const express = require("express");
const cors = require("cors");

const app = express();
const {createNote, deleteNote, getAllNotes} = require('./controller')

app.use(express.json());
app.use(cors());

const {addNote} = require('./controller')
const port = process.env.PORT || 4000;
app.post('/api/notesDB/', createNote)
app.get('/api/getNotes/', getAllNotes)
app.delete( '/api/deleteNote/:id', deleteNote)


app.listen(4000,() => console.log("Server running on 4000"));