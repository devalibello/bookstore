import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { addBooks } from '../redux/books/booksSlice';
import style from '../styles/Addbook.module.css';

const Addbook = () => {
  const [bookTitle, setBookTitle] = useState('');
  const [authorName, setAuthorName] = useState('');
  const dispatch = useDispatch();

  const addBookHandler = (event) => {
    event.preventDefault();
    const id = uuidv4();
    const newBook = {
      item_id: id,
      title: bookTitle,
      author: authorName,
      category: 'Nonfiction',
    };
    dispatch(addBooks(newBook));
    setBookTitle('');
    setAuthorName('');
  };

  return (
    <div className={style.addBook}>
      <p className={style.addBookText}>ADD NEW BOOK</p>
      <form className={style.addBookSection} onSubmit={addBookHandler}>
        <input
          type="text"
          className={style.bookInput}
          placeholder="Book title"
          onChange={(event) => setBookTitle(event.target.value)}
          value={bookTitle}
        />
        <input
          className={style.optionField}
          type="text"
          placeholder="Author Name"
          onChange={(event) => setAuthorName(event.target.value)}
          value={authorName}
        />
        <button type="submit" className={style.addBookButton}>ADD BOOK</button>
      </form>
    </div>
  );
};

export default Addbook;
