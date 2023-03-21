import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
  name,
  capital,
  flags,
  population,
  region,
} from '../../../../../testdata/';
import Card from '../Card';

describe('Card', () => {
  beforeEach(() => {
    render(
      <Router>
        <Card
          capital={capital}
          darkMode={true}
          flags={flags}
          name={name}
          population={population}
          region={region}
        />
      </Router>
    );
  });

  test('Should show correct flags on UI', () => {
    const flagImage = screen.getByTestId('flag-image');
    expect(flagImage).toHaveStyle(`background-image: url(${flags.png})`);
  });

  test('Should show correct country name on UI', () => {
    const countryHeading = screen.getByRole('heading', { level: 2 });
    const countryName = screen.getByText('Denmark');
    expect(countryHeading).toBeInTheDocument();
    expect(countryName).toBeTruthy();
  });

  test('Should show correct country population on UI', () => {
    const population = screen.getByText('5,831,404');
    expect(population).toBeInTheDocument();
  });

  test('Should show correct country Region on UI', () => {
    const region = screen.getByText('Europe');
    expect(region).toBeInTheDocument();
  });
});
