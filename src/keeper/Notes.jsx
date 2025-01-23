import React from "react";

function Notes(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note added">
      <div className="area">
        <h1 className="title">{props.title}</h1>
        <p className="content">{props.content}</p>
        <button className="btn" onClick={handleClick}>
          DELETE
        </button>
      </div>
    </div>
  );
}

export default Notes;
