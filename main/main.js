
let addNoteButton = document.querySelector('.add__notes')
const notesCallback = ({ data: notesDB }) => displayNotes(notesDB)

const createNote = body => axios.post('http://localhost:4000/api/notesDB/', body).then(notesCallback).catch(errCallback)
//make function that looks like #6
function submitHandler(e){
    e.preventDefault();

    let title = document.querySelector('.notes_small-tittle')
    let noteBody = document.querySelector('.notes_small-body')


    let bodyObj = {
        title: title.value,
        noteBody: noteBody.value,
    }
    createNote(bodyObj)

    title.value = ''
    noteBody.value = ''


}
let noteContainer = document.querySelector('.notes__preview')
function createNoteCard(note){
    let noteCard = document.createAttribute('div')
    noteCard.innerHTML = `<h4>${note.title}</h4><p>${note.body}</p>`

notesPreview.appendChild(noteCard)
}


function addNote(){
    console.log('note added works')
    console.log()
    let noteTitle = document.querySelector(".notes__small-tittle")
    
    let noteBody = document.querySelector(".notes__small-body")
    const note = document.createElement("div")

    note.textContent = noteTitle.value;
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