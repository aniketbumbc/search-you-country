import { render, screen } from '@testing-library/react';
import Loader from '../Loader';

describe('Loader', () => {
  test('Should show correct loader based on darkmode', () => {
    render(<Loader loading={true} darkMode={true} />);
    const loader = screen.getByRole('img');
    expect(loader).toHaveAttribute('src', 'loader-dark.svg');
    expect(loader).toHaveAttribute('alt', 'loading...');
  });

  test('Should show correct loader based on whitemode', () => {
    render(<Loader loading={true} darkMode={false} />);
    const loader = screen.getByRole('img');
    expect(loader).toHaveAttribute('src', 'loader-light.svg');
    expect(loader).toHaveAttribute('alt', 'loading...');
  });
});
