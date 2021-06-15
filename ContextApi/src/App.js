import React, { useState } from "react";
import "./App.css";
import { BookProvider } from "./context/bookContext";
import Form from "./Components/Form";
import Books from "./Components/Books";

function App() {
  const [bookDetails, setBookDetails] = useState({
    author: "Nabin Shahi",
    books: [
      {
        id: 1,
        name: "The Good Old Days",
        genre: "Drama",
      },
      {
        id: 2,
        name: "A Dog's Way Home",
        genre: "Comedy",
      },
      {
        id: 3,
        name: "The Star Outside My Window",
        genre: "Thriller",
      },
      {
        id: 4,
        name: "Nowhere Wild",
        genre: "Adventure",
      },
      {
        id: 5,
        name: "Time Travelling with a Hamster",
        genre: "Sci-Fi",
      },
    ],
  });

  const addBook = (book) => {
    const getId = () => Date.now();
    setBookDetails({
      books: [
        ...bookDetails.books,
        {
          id: getId(),
          ...book
          //do not pass single value
        },
      ],
    });
  };

  // console.log(bookDetails.books);

  return (
    <div className="app">
      <BookProvider value={{
        ...bookDetails,
        addBook
      }}>
        <Form />
        <Books />
      </BookProvider>
    </div>
  );
}

export default App;
