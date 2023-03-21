import { Link } from 'react-router-dom';
import Numeral from 'numeral';
import './Card.scss';

const Card = ({ capital, darkMode, flags, name, population, region }) => {
  return (
    <Link to={`countryDetails/${name.common}`}>
      <figure
        className={`countryCard ${
          darkMode ? `dark darkThemeElements` : `light lightThemeElements`
        }`}
      >
        <div
          data-testid='flag-image'
          className='cardBackground'
          style={{ backgroundImage: `url(${flags.png})` }}
        ></div>
        <figcaption className='textContainer'>
          <h2>{name.common}</h2>
          <div>
            Population:
            <span className={darkMode ? 'darkText' : 'lightText'}>
              {Numeral(population).format(0, 0) || 'Not Found'}
            </span>
          </div>
          <div>
            Region:
            <span className={darkMode ? 'darkText' : 'lightText'}>
              {region || 'Not Found'}
            </span>
          </div>
          <div>
            Capital :
            <span className={darkMode ? 'darkText' : 'lightText'}>
              {capital || 'Not Found'}
            </span>
          </div>
        </figcaption>
      </figure>
    </Link>
  );
};

export default Card;
