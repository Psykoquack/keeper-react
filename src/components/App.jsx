import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import Note from "./Note";
import notes from "../notes";

function NoteContent(note)
{
    return <Note title={note.title} content={note.content} />
}

function App()
{
    return (
        <div>
            <Header />
            {notes.map((note) => NoteContent(note))}
            <Footer />
        </div>);

}

export default App;