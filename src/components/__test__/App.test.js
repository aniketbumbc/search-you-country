import App from '../App';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import CountriesBoard from '../Countries Board/CountriesBoard';
import CountryDetails from '../Country Details/CountryDetails';

jest.mock('../Countries Board/CountriesBoard.js');
jest.mock('../Country Details/CountryDetails.js');

describe('App', () => {
  test('Should render page navBar and countryboard on default route', () => {
    // Arrange
    CountriesBoard.mockImplementation(() => (
      <div>
        Where in the world? <i>Light Mode</i>
      </div>
    ));

    // Act
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    // Assert
    expect(screen.getByText('Where in the world?')).toBeInTheDocument();
    expect(screen.getByText('Light Mode')).toBeInTheDocument();
  });

  test('Should render page header and CountryDetails for countryDetails name route', () => {
    // Arrange
    CountryDetails.mockImplementation(() => <div>CountryDetailsMock</div>);

    // Act
    render(
      <MemoryRouter initialEntries={['/countryDetails/:germany']}>
        <App />
      </MemoryRouter>
    );

    // Assert
    expect(screen.getByText('CountryDetailsMock')).toBeInTheDocument();
  });

  test('Should render page countriesBoard component in the case of incorrect url', () => {
    // Arrange
    CountriesBoard.mockImplementation(() => (
      <div>
        Where in the world? <i>Light Mode</i>
      </div>
    ));

    // Act
    render(
      <MemoryRouter initialEntries={['/134343']}>
        <App />
      </MemoryRouter>
    );

    // Assert
    expect(screen.getByText('Where in the world?')).toBeInTheDocument();
  });
});
