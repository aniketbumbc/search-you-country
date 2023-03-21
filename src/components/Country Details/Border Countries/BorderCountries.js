import { Link } from 'react-router-dom';
import { getCountryBorders } from '../utils';
import './BorderCountries.scss';

/**
 *  Method finds country borders based on cca3 code
 * @param {*} countries
 * @param {*} countryDetail
 * @param {*} darkMode
 * @param {*} homePage
 */

export const findBorders = (countries, countryDetail, darkMode, homePage) => {
  let borderCountries = getCountryBorders(countries, countryDetail);
  borderCountries = borderCountries.map((country) => (
    <Link
      to={`${homePage}countryDetails/${country.name.common}`}
      key={country.name.common}
      className={
        darkMode ? `dark darkThemeElements` : `light lightThemeElements`
      }
    >
      {country.name.common}
    </Link>
  ));
  return (
    !!borderCountries.length && (
      <>
        <span className='bordersDisplay'>
          Border Countries:
          <div> {borderCountries}</div>
        </span>
      </>
    )
  );
};

export const BorderCountries = ({ country, countries, darkMode, homePage }) => {
  return (
    <div className={`borderCountries ${darkMode ? 'dark' : 'light'}`}>
      {findBorders(countries, country, darkMode, homePage)}
    </div>
  );
};
