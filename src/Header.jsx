import { useState } from 'react';
import './css/index.css';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Skillsync</h1>

        {/* Burger Icon */}
        <button className="burger" onClick={toggleMenu} aria-label="Toggle menu">
          &#9776;
        </button>

        {/* Navigation */}
        <nav className="nav" aria-label="Main navigation">
          <ul className={`nav-list ${menuOpen ? 'show' : ''}`}>
            <li><a href="#" className="nav-link" aria-current="page">People</a></li>
            <li><a href="#" className="nav-link" aria-current="page">Jobs</a></li>
            <div className="vl"></div>
            <li><a href="#" className='nav-link'>Get the app</a></li>
            <div className="vl"></div>
            <li><button className='button'>Join now</button></li>
            <li><button className='button'>Sign In</button></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
