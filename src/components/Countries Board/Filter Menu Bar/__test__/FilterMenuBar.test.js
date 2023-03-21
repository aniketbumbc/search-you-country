import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import FilterMenuBar from '../FilterMenuBar';

describe('FilterMenuBar', () => {
  beforeEach(() => {
    render(
      <Router>
        <FilterMenuBar
          searchCountry={'poland'}
          darkMode={true}
          regionFilter={'africa'}
          onSearchCountryChange={jest.fn()}
          onRegionChange={jest.fn()}
          scrollTo={null}
        />
      </Router>
    );
  });

  test('Should render search input correctly', () => {
    const inputSearch = screen.getByTestId('search-input');
    expect(inputSearch).toBeInTheDocument();
    expect(inputSearch).toHaveAttribute('type', 'text');
  });

  test('Should render search input correctly with value', () => {
    const inputSearch = screen.getByTestId('search-input');
    expect(inputSearch).toHaveValue('poland');
  });
});
