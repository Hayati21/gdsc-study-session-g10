import { useState } from 'react'
import './App.css'

function App() {
const [notes, setNotes] = useState([{
  id: 1 ,
  title:  "My diary" , 
  content: "Welcome to my diary"
}]);

const [title, setTitle] = useState ("")
const [content, setContent] = useState("")
const [editMode, setEditMode] = useState(false)
const [edited, setEdited] = useState(null)

const addNote =() => {
  e.preventDefault();
  alert("Note added")
  if(!title || !content) return;
  setNotes([...notes,{
    id: notes.length + 1 ,
    title: title,
    content: content
  }
  ]);
  setTitle("");
  setContent("");
}
const handleDelete = (id) =>{
  const newNotes = notes.filter({note}= note.id !==id)
}
const handleEdit = (note) => {
  setEditMode(true)
  setEdited(note.null)
  setTitle(note.title)
  setContent(note.content)
}
const handleEditSubmit = (e) =>{
  alert("Edit")
  if(!title || !content) return;
const newNotes = notes.map((note) => {
  if (note.id === edited){
    return {
      id: note.id,
      title,
      content
    }
  }
  return note
})
setNotes(newNotes)
setEditMode(false)
setEdited(null)
setTitle("")
setContent("")
}
const handleSubmit = (e) => {
  e.preventDefault();
  if(!title || !content){
    alert ("please fill in the field")
    return;
  };
  if (editMode){
    handleEditSubmit()
  } else {addNote()
  }
}
  return(
   <>
<h1>Hayat's note app</h1>
<form onSubmit={handleSubmit}>
  <label htmlFor="title">Title</label> <br/>
  <input id="title" type="text" value={title} onChange={(e)=> setTitle (e.title.value)}/> <br/>
  <label htmlFor="note">"my note"</label> <br/>
  <textarea value= "content" onChange={(e)=> setContent (e.target.value)} rows={5} cols={100}/>
  <br/>
  <button type="submite">
    {editMode ? 'Edit Note' : 'Add Note'}
  </button>
</form>
{
  notes.map((note) => (
    <div key={note.id}> 
    <h2>{note.title}</h2>
    <p>{note.content}</p>
    <button className="btn" type = "button" onClick={()=>handleDelete(note.id)}>Delete</button>
    <button type = "button" onClick={()=>handleEdit(note)}>Edit</button>
    </div>
  )
  )
}
  </>
  );
}

export default App
