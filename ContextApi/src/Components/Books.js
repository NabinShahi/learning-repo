import React, { useContext } from 'react'
import { BookContext } from '../context/bookContext';
import Book from './Book';

function Books() {
    
    const { author, books } = useContext(BookContext);
    // console.log(books, author)

    return (
        <div>
            <h1>Author: {author}</h1>
            <table>
                <thead>
                    <tr>
                      <td>I.D</td>
                      <td>Name</td>
                      <td>Genre</td>
                    </tr>
                </thead>

                <tbody>
                    {
                        books.map((book) => (
                            <Book key={book.id} {...book}/>
                        ))
                    }
                </tbody>

            </table>
        </div>
    )
}

export default Books;
