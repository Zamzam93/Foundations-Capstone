//const { default: axios } = require("axios")

let noteList = document.querySelector('.notes__lists')
let addNoteButton = document.querySelector('.add__notes')
const notesCallback = ({ data: notesDB }) => displayNotes(notesDB)



//make function that looks like #6
// function submitHandler(e){
//     e.preventDefault();
//     console.log("hello, world")

    
let noteContainer = document.querySelector('.notes__preview')
function createNoteCards(notes){
    noteList.innerHTML = "<div>"
    //do a for loop to loop through and create note for each note
    for (let i = 0; i < notes.length ; i++) {
        let note = notes[i]
        let noteCard = document.createElement('div')
        noteCard.innerHTML = `<div><h4>${note.title}</h4><p>${note.body}</p><button class="deleteBtn" onClick="deleteNote(${note.id})">delete</button></div>`
        noteList.append(noteCard) 
    }
    noteList.innerHTML += "</div>"

    /*

        Problem is we stack cards in a single Notelist. 
        When a card is clicked for deletion, every card gets deleted.
        We need to seperate the cards out into their own elements
    */
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
    // let noteTitle = document.querySelector(".notes__small-tittle")
    
    // let noteBody = document.querySelector(".notes__small-body")
    // const note = document.createElement("div")

    // note.textContent = noteTitle.value;
}

function displayNotes(arr){
    noteContainer.innerHTML = ``
    for(let i = 0; i < arr.length; i++){
        createNoteCard(arr[i])
    }
}

//get post to work hopefully by tomorrow.

//once addnote works note then in the createnote function put in the hmtl function for delete button
addNoteButton.addEventListener('click', addNote)
window.addEventListener('load', getAllNotes)
