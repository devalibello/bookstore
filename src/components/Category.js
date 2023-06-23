// import { createAsyncThunk } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { useSelector, useDispatch } from 'react-redux';
import 'react-circular-progressbar/dist/styles.css';
import style from '../styles/Category.module.css';
import { removeBook, fetchBooks } from '../redux/books/booksSlice';

const progressbarStyles = buildStyles({
  pathColor: '#0290ff',
  trailColor: '#d6d6d6',
});

const Category = () => {
  const books = useSelector((store) => store.book.books);

  const dispatch = useDispatch();

  const deleteBook = (id) => {
    dispatch(removeBook(id));
  };

  useEffect(() => {
    dispatch(fetchBooks());
  });

  const content = [];
  Object.keys(books).map((key) => {
    const bookDetails = { ...books[key][0], item_id: key };
    return (content.push(bookDetails));
  });

  return (
    <>
      {content.map((element) => (
        <div className={style.booksSection} key={element.item_id}>
          <section className={style.bookDetails}>
            <ul className={style.bookType}>
              <li className={style.bookGenre}>{element.category}</li>
              <li className={style.bookName}>{element.title}</li>
              <li className={style.bookAuthor}>{element.author}</li>
            </ul>
            <ul className={style.commentSection}>
              <li className={style.comment}>Comment</li>
              <li className={style.line}>&#124;</li>
              <button type="button" className={style.remove} onClick={() => deleteBook(element.item_id)}>Remove</button>
              <li className={style.line}>&#124;</li>
              <li className={style.edit}>Edit</li>
            </ul>
          </section>
          <section className={style.percentSection}>
            <span className={style.progressCircle}>
              <CircularProgressbar value={64} styles={progressbarStyles} />
            </span>
            <ul className={style.percentage}>
              <li className={style.value}>64%</li>
              <li className={style.completed}>completed</li>
            </ul>
          </section>
          <div className={style.percentSeperator}>&#124;</div>
          <section className={style.chapterSection}>
            <ul className={style.chapterDetails}>
              <li className={style.CurrentChapter}>CURRENT CHAPTER</li>
              <li className={style.chapterNumber}>Chapter 17</li>
              <li><button type="submit" className={style.updateProgress}>UPDATE PROGRESS</button></li>
            </ul>
          </section>
        </div>
      ))}
    </>
  );
};

export default Category;
