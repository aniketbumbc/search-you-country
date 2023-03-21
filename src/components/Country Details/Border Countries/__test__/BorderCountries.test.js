import { render, screen } from '@testing-library/react';
import { BorderCountries, findBorders } from '../BorderCountries';
import { country, countries } from '../../../../testdata/index';
import { BrowserRouter as Router } from 'react-router-dom';

describe('BorderCountries', () => {
  test('Should show correct border countries on UI', () => {
    const homePage = '/';

    render(
      <Router>
        <BorderCountries
          country={country}
          countries={countries}
          darkMode={true}
          homePage={homePage}
        />
      </Router>
    );
    findBorders(countries, country, true, homePage);
    const spanElement = screen.getByText('Border Countries:');
    const borderCountry = screen.getByText('Germany');
    expect(spanElement).toBeInTheDocument();
    expect(borderCountry).toBeInTheDocument();
  });

  test('Should not show border countries on UI in case of no border country found', () => {
    const demmyCountry = countries[0];
    const homePage = '/';
    render(
      <Router>
        <BorderCountries
          country={demmyCountry}
          countries={countries}
          darkMode={true}
          homePage={homePage}
        />
      </Router>
    );
    findBorders(countries, country, true, homePage);
    const spanElement = screen.queryByText('Border Countries:');
    const borderCountry = screen.queryByText('Germany');
    expect(spanElement).not.toBeInTheDocument();
    expect(borderCountry).not.toBeInTheDocument();
  });
});
