import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import style from '../styles/Navbar.module.css';

const Navbar = () => (
  <ul className={style.navItems}>
    <li className={style.bookstore}>Bookstore CMS</li>
    <li className={style.booksText}><Link to="/">BOOKS</Link></li>
    <li className={style.categories}><Link to="/categories">CATEGORIES</Link></li>
    <li className={style.faUser}><FaUser /></li>
  </ul>
);

export default Navbar;
