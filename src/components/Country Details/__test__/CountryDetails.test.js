import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import { countries } from '../../../testdata/index';
import { Route, Routes } from 'react-router-dom';
import CountryContext from '../../../context/CountryContext';
import CountryDetails from '../CountryDetails';

describe('CountryDetails', () => {
  test('Should show back button on UI', () => {
    const homePage = '/';
    const darkMode = true;
    const toggleMode = jest.fn();
    render(
      <MemoryRouter initialEntries={['/countryDetails/denmark']}>
        <Routes>
          <Route
            path='/countryDetails/:countryName'
            element={
              <CountryContext.Provider value={countries}>
                <CountryDetails
                  homePage={homePage}
                  darkMode={darkMode}
                  toggleMode={toggleMode}
                />
              </CountryContext.Provider>
            }
          ></Route>
        </Routes>
      </MemoryRouter>
    );

    const backBtn = screen.getByText('Back');

    expect(backBtn).toBeInTheDocument();
  });
});
