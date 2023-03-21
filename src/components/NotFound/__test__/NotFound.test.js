import { render, screen } from '@testing-library/react';
import NotFound from '../NotFound';

describe('NotFound', () => {
  test('Should show correct error in the page', () => {
    const error = 'Fetch to Fail';
    render(<NotFound error={error} darkMode={true} />);
    const showError = screen.getByText(
      '"Please try again in sometime" ' + error
    );
    expect(showError).toBeInTheDocument();
  });

  test('Should not show correct error in the page', () => {
    const error = '';
    render(<NotFound error={error} darkMode={true} />);
    const showError = screen.queryByText(
      '"Please try again in sometime" ' + error
    );
    expect(showError).not.toBeInTheDocument();
  });
});
