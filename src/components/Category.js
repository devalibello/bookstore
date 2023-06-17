import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import style from '../styles/Category.module.css';

const progressbarStyles = buildStyles({
  pathColor: '#0290ff',
  trailColor: '#d6d6d6',
});

const bookState = {
  bookTitleInfo: 'The Hunger Games',
  bookAuthorInfo: 'Suzanne Collins',
};

const Category = () => (
  <>
    <div className={style.booksSection}>
      <section className={style.bookDetails}>
        <ul className={style.bookType}>
          <li className={style.bookGenre}>Action</li>
          <li className={style.bookName}>{bookState.bookTitleInfo}</li>
          <li className={style.bookAuthor}>{bookState.bookAuthorInfo}</li>
        </ul>
        <ul className={style.commentSection}>
          <li className={style.comment}>Comment</li>
          <li className={style.line}>&#124;</li>
          <li className={style.remove}>Remove</li>
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
  </>
);

export default Category;
