import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav style = {{display: "flex", alignItems: "center", gap:"1rem" }}>
      <ul>
        <li><Link to="/">shua-qalaqi</Link></li>
        <li><Link to="/qerchi">qerchi</Link></li>
        <li><Link to="/ChemiColisDaqalebi">ChemiColisDaqalebi</Link></li>
        <li><Link to="/contact">Kintauri</Link></li>
      </ul>
      <outlet></outlet>
    </nav>
  );
}

export default Navbar;