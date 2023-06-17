import style from '../styles/Addbook.module.css';

const Addbook = () => (
  <div className={style.addBook}>
    <p className={style.addBookText}>ADD NEW BOOK</p>
    <form className={style.addBookSection}>
      <input type="text" className={style.bookInput} placeholder="Book title" />
      <input className={style.optionField} type="text" placeholder="Author Name" />
      <button type="submit" className={style.addBookButton}>ADD BOOK</button>
    </form>
  </div>
);

export default Addbook;
