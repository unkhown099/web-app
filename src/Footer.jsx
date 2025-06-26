import './css/index.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">
          &copy; {new Date().getFullYear()} Skillsync. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;