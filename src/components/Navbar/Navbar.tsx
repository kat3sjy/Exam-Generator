import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item"><a href="/">Home</a></li>
        <li className="nav-item"><a href="/examDirectory">Exam Directory</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;