import './NotFound.scss';

const NotFound = ({ error, darkMode }) => (
  <main className={`notFoundPage ${darkMode ? `dark` : `light`}`}>
    {' '}
    "Please try again in sometime" {error}
  </main>
);

export default NotFound;
