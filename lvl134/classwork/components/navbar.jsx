import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style = {{display: "flex", alignItems: "center", gap:"1rem" }}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/gallery">Gallery</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <outlet></outlet>
    </nav>
  );
}

export default Navbar;