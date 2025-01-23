import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({ title: "", content: "" });
    event.preventDefault();
  }

  return (
    <div className="note">
      <form className="area">
        <input
          onChange={handleChange}
          className="title"
          name="title"
          type="text"
          placeholder="Title"
          value={note.title}
        />
        <textarea
          onChange={handleChange}
          className="content"
          name="content"
          value={note.content}
          placeholder="Take a note..."
          rows={5}
        />
        <button className="btn" onClick={submitNote}>
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
