import { Link, NavLink } from "react-router-dom";

const Header:React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4 text-center sticky top-0 w-full flex justify-between items-center">
      <h1 className="flex items-center gap-4">
        <Link to="/">Sulaimon Ekundayo</Link>
      </h1>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/resume">Resume</NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;