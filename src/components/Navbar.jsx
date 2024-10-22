import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link><br/>
      <Link to="/blog">Blog</Link><br/>
      <Link to="/projects">Projects</Link><br/>
      <Link to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
