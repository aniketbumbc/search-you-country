import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from '../NavBar';

describe('NavBar', () => {
  test('Should render page navBar with correct darkMode default', () => {
    // Arrange
    const homePage = '/';
    const darkMode = true;
    const toggleMode = jest.fn();
    // Act
    render(
      <Router>
        <NavBar
          homePage={homePage}
          darkMode={darkMode}
          toggleMode={toggleMode}
        />
      </Router>
    );

    const navBarHeading = screen.getByText('Where in the world?');
    const lightModeElement = screen.getByText('Light Mode');

    // Assert
    expect(navBarHeading).toBeInTheDocument();
    expect(lightModeElement).toBeInTheDocument();
  });

  test('Should render page navBar with correct light default', () => {
    // Arrange
    const homePage = '/';
    const darkMode = false;
    const toggleMode = jest.fn();
    // Act
    render(
      <Router>
        <NavBar
          homePage={homePage}
          darkMode={darkMode}
          toggleMode={toggleMode}
        />
      </Router>
    );

    const navBarHeading = screen.getByText('Where in the world?');
    const darkModeElement = screen.getByText('Dark Mode');
    const lightModeElement = screen.queryByText('Light Mode');

    // Assert
    expect(navBarHeading).toBeInTheDocument();
    expect(darkModeElement).toBeInTheDocument();
    expect(lightModeElement).not.toBeInTheDocument();
  });
});
