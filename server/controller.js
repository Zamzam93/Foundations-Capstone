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

    },
    getAllNotes: (req,res) => {
        console.log("Testing get function ", notesDB)
        res.status(200).send(notesDB)
    },
    deleteNote: (req,res) => {
        console.log("DID WE REACH HERE")
        console.log(req.params.id)
        const {id} =  parseInt(req.params);
        console.log('ID is: ',id)
        notesDB.splice(id,1);
        console.log(notesDB)
        res.status(200).send(notesDB)
    }
}
