import './style.css';
import { Link } from 'react-router-dom';
import menu from './img/menu.png';
import cross from './img/cross.png';

const Header = () => {
  const mobileMenu = document.querySelector('.mobile-menu');

  const openMenu = () => {
    mobileMenu.classList.add('mobile-menu--show');
  };

  const closeMenu = () => {
    mobileMenu.classList.remove('mobile-menu--show');
  };

  return (
    <header className="header">
      <div className="title">
        <p> IT girl</p>
      </div>
      <div className="menu">
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="posts">Posts</Link>
          <Link to="login" className="menu-login">
            Login
          </Link>
        </nav>
        <img
          src={menu}
          alt="Open menu"
          className="open-menu"
          onClick={openMenu}
        />
      </div>
      <div className="mobile-menu">
        <img
          src={cross}
          alt="Close menu"
          className="close-menu"
          onClick={closeMenu}
        />
        <nav className="mobile-navbar">
          <Link to="/" onClick={closeMenu}>
            Home
          </Link>
          <Link to="posts" onClick={closeMenu}>
            Posts
          </Link>
          <Link to="login" onClick={closeMenu} className="menu-login">
            Login
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
