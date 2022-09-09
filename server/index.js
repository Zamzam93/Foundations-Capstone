require('dotenv').config()
const express = require("express");
const cors = require("cors");

const app = express();
const {createNote} = require('./controller')

app.use(express.json());
app.use(cors());

const {addNote} = require('./controller')
const port = process.env.PORT || 4000;
app.post('/api/notesDB/', createNote)


app.listen(4000,() => console.log("Server running on 4000"));