import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <div id="nav">
      <Link to="/resume">
        <button>Resume</button>
      </Link>
      <span className="spacer">|</span>
      <Link to="/">
        <button>Home</button>
      </Link>
      <span className="spacer">|</span>
      <Link to="/projects">
        <button>Projects</button>
      </Link>
    </div>
  );
}
