import { Link } from 'react-router-dom';
function Nav() {
    return (
      <nav className="nav">
        <ul>
          <li><Link to="/" className="nav-button">Home</Link></li>
          <li><Link to="/education" className="nav-button">Education</Link></li>
          <li><Link to="/employment" className="nav-button">Employment</Link></li>
          <li><Link to="/achievements" className="nav-button">Achievements</Link></li>
          <li><Link to="/projects" className="nav-button">Projects</Link></li>
          <li><Link to="/contact" className="nav-button">Contact Me</Link></li>
        </ul>
      </nav>
    );
  }
  
  export default Nav;
  
  