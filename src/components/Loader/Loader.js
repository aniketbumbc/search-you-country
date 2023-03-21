import './Loader.scss';
import darkLoader from '../../assets/loader/loader-dark.svg';
import lightLoader from '../../assets/loader/loader-light.svg';

const Loader = ({ loading, darkMode }) => {
  return (
    <>
      {loading && (
        <img
          className='loader'
          src={darkMode ? darkLoader : lightLoader}
          alt='loading...'
        />
      )}
    </>
  );
};
export default Loader;
