import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((presValue) => {
      return [...presValue, newNote];
    });
  }

  function deleteNote(id) {
    setNotes((presValue) => {
      return presValue.filter((noteItem, i) => {
        return i !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, i) => {
        return (
          <Note
            key={noteItem.title + noteItem.content}
            id={i}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
