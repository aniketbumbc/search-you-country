import { Link } from 'react-router-dom';
import './NavBar.scss';
const NavBar = ({ darkMode, toggleMode, homePage }) => {
  return (
    <>
      <nav
        className={`container navBar ${
          darkMode ? `dark darkThemeElements` : `light lightThemeElements`
        }`}
      >
        <Link to={homePage} className='primaryBold'>
          Where in the world?
        </Link>

        <button
          className={`secondaryBold  ${
            darkMode ? `dark darkThemeElements` : `light lightThemeElements`
          }`}
          onClick={toggleMode}
        >
          {darkMode ? (
            <>
              <i className='fas fa-moon'></i> Light Mode
            </>
          ) : (
            <>
              <i className='far fa-moon'></i> Dark Mode
            </>
          )}
        </button>
      </nav>
    </>
  );
};

export default NavBar;
