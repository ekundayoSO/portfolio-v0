import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Icons for hamburger and close

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage mobile menu visibility

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle menu state
  };

  return (
    <header className="bg-gray-800 text-white p-4 sticky top-0 w-full z-10">
      <div className="flex justify-between items-center">
        {/* Logo/Title Section */}
        <h1>
          <Link to="/home" className="text-lg md:text-xl font-semibold hover:text-gray-300 transition-colors lobster-font">
            Sulaimon Ekundayo
          </Link>
        </h1>

        {/* Hamburger Menu Icon (Visible on Mobile) */}
        <button className="md:hidden" onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>

        {/* Navigation Section (Visible on Desktop) */}
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  `hover:text-gray-300 transition-colors ${isActive ? 'text-gray-300 underline' : 'text-white'}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `hover:text-gray-300 transition-colors ${isActive ? 'text-gray-300 underline' : 'text-white'}`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resume"
                className={({ isActive }) =>
                  `hover:text-gray-300 transition-colors ${isActive ? 'text-gray-300 underline' : 'text-white'}`
                }
              >
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  `hover:text-gray-300 transition-colors ${isActive ? 'text-gray-300 underline' : 'text-white'}`
                }
              >
                Projects
              </NavLink>
            </li>{' '}
            <li>
              <NavLink
                to="/blogs"
                className={({ isActive }) =>
                  `hover:text-gray-300 transition-colors ${isActive ? 'text-gray-300 underline' : 'text-white'}`
                }
              >
                Blogs
              </NavLink>
            </li>
            
          </ul>
        </nav>
      </div>

      {/* Mobile Menu (Visible when Hamburger is clicked) */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4">
          <ul className="flex flex-col space-y-4">
            <li>
              <NavLink
                to="/home"
                onClick={toggleMenu} // Close menu when a link is clicked
                className={({ isActive }) =>
                  `hover:text-gray-300 transition-colors ${isActive ? 'text-gray-300 underline' : 'text-white'}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `hover:text-gray-300 transition-colors ${isActive ? 'text-gray-300 underline' : 'text-white'}`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resume"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `hover:text-gray-300 transition-colors ${isActive ? 'text-gray-300 underline' : 'text-white'}`
                }
              >
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `hover:text-gray-300 transition-colors ${isActive ? 'text-gray-300 underline' : 'text-white'}`
                }
              >
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blogs"
                onClick={toggleMenu}
                className={({ isActive }) =>
                  `hover:text-gray-300 transition-colors ${isActive ? 'text-gray-300 underline' : 'text-white'}`
                }
              >
                Blogs
              </NavLink>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
