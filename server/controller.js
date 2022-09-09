const fortunesDB = require('./db.json')
let globalId = 1
let notesDB = [];
module.exports = {
    createNote: (req, res) => {
        console.log(req.body)
        let { title, body } = req.body
        let newNote = {
            id: globalId,
            title,
            body
        }

        globalId++
        notesDB.push(newNote)
        res.status(200).send(notesDB)

    }
}
