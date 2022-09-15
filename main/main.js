//const { default: axios } = require("axios")

let noteList = document.querySelector('.notes__lists')
let addNoteButton = document.querySelector('.add__notes')
const notesCallback = ({ data: notesDB }) => displayNotes(notesDB)





    
let noteContainer = document.querySelector('.notes__preview')
function createNoteCards(notes){
    noteList.innerHTML = "<div>"
    
    for (let i = 0; i < notes.length ; i++) {
        let note = notes[i]
        let noteCard = document.createElement('div')
        noteCard.innerHTML = `<div><h4>${note.title}</h4><p>${note.body}</p><button class="deleteBtn" onClick="deleteNote(${note.id})">delete</button></div>`
        noteList.append(noteCard) 
    }
    noteList.innerHTML += "</div>"

}


function getAllNotes() {
    console.log('TEST')
    axios.get('http://localhost:4000/api/getNotes/').then(
        res => {
            console.log(res.data);
            createNoteCards(res.data)
        }
    )
}

function deleteNote(id) {
    console.log('Testing DELETE with ID:', id)
    let path = `http://localhost:4000/api/deleteNote/${id}`
    console.log(path)
    axios.delete(path)
    .then(res => {
        console.log("WE RETURNED")
        console.log("Returned data: ", res.data)
        createNoteCards(res.data)
    })
}

function addNote(){
    console.log('note added works')
    const noteTitle = document.querySelector(".notestitle")
    const noteBody = document.querySelector(".notes-body")
   let obj = {
    title: noteTitle.value,
    body: noteBody.value
   }
   console.log(obj)

   axios.post('http://localhost:4000/api/notesDB/', obj)
   .then(res => {
       console.log(res.data)
       createNoteCards(res.data)
   })
    
}

function displayNotes(arr){
    noteContainer.innerHTML = ``
    for(let i = 0; i < arr.length; i++){
        createNoteCard(arr[i])
    }
}


addNoteButton.addEventListener('click', addNote)
window.addEventListener('load', getAllNotes)
