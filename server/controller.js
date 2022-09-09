const fortunesDB = require('./db.json')
let globalId = 1

module.exports = {
createNote: (req, res) => {

    let { title, body } = req.body
let newNote = {
id: globalId,
title,
body
}
notesDB.push(newNote)
res.status(200).send(notesDB)

}}
