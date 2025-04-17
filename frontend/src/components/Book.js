import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3002/books').then(res => setBooks(res.data));
  }, []);

  return (
    <div>
      <h2>Books</h2>
      <ul>
        {books.map(book => (<li key={book.id}>{book.title}</li>))}
      </ul>
    </div>
  );
};

export default Books;
