import './css/index.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Skillsync</h1>
        <nav className="nav" aria-label="Main navigation">
          <ul className="nav-list">
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