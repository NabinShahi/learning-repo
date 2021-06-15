import React, { useContext } from "react";
import { BookContext } from "../context/bookContext";

function Form() {
  const { addBook } = useContext(BookContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    addBook({
      name: event.target.name.value,
      genre: event.target.genre.value,
    });
    event.target.reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" />
      <input type="text" name="genre" placeholder="Genre" />
      <input type="submit" value="Submit" />
    </form>
  );
}

export default Form;
