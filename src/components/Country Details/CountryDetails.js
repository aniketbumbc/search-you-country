import { useContext } from 'react';
import CountryContext from '../../context/CountryContext';
import { Link, useParams } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';
import Loader from '../Loader/Loader';
import {
  getNativeName,
  getPopulation,
  getCapital,
  getTopDomain,
  getLanguages,
  getCurrencies,
} from './utils';
import { BorderCountries } from './Border Countries/BorderCountries';
import { useFetchByName } from '../../hooks/useFetchByName';
import './CountryDetails.scss';

const CountryDetails = ({ darkMode, toggleMode, homePage }) => {
  const { countryName } = useParams();
  const { countryDetails, loading, error } = useFetchByName(countryName);
  const [country] = countryDetails;
  const { countries } = useContext(CountryContext);

  return (
    <>
      <header className={`countryDetails ${darkMode ? `dark` : `light`}`}>
        <NavBar
          darkMode={darkMode}
          homePage={homePage}
          toggleMode={toggleMode}
        />
        <Link
          to={homePage}
          className={`backBtn ${
            darkMode ? 'dark darkThemeElements' : 'light lightThemeElements'
          }`}
        >
          <i className='fas fa-arrow-left'></i>
          Back
        </Link>
      </header>
      <main className={`mainContainer ${darkMode ? `dark` : `light`}`}>
        {!loading && !countryDetails.length && error && (
          <p className='error'>Sorry country not found</p>
        )}

        {countryDetails && !!countryDetails.length ? (
          <>
            <div className='countryFlag'>
              <img
                src={country.flags?.png}
                alt={`${country.name?.common} flag`}
              />
            </div>
            <div className='countryDetails'>
              <h1>{countryName}</h1>
              <div className='detailsContainer'>
                <div className='mainDetails'>
                  <p>
                    Native Name:{' '}
                    <span className={darkMode ? 'darkDetails' : 'lightDetails'}>
                      {getNativeName(country)}
                    </span>
                  </p>
                  <p>
                    Population:{' '}
                    <span className={darkMode ? 'darkDetails' : 'lightDetails'}>
                      {getPopulation(country)}
                    </span>
                  </p>
                  <p>
                    Region:{' '}
                    <span className={darkMode ? 'darkDetails' : 'lightDetails'}>
                      {' '}
                      {country.region}
                    </span>
                  </p>

                  <p>
                    Sub Region:{' '}
                    <span className={darkMode ? 'darkDetails' : 'lightDetails'}>
                      {' '}
                      {country.subregion}
                    </span>
                  </p>
                  <p>
                    Capital:{' '}
                    <span className={darkMode ? 'darkDetails' : 'lightDetails'}>
                      {' '}
                      {getCapital(country)}
                    </span>
                  </p>
                </div>
                <div className='additionalDetails'>
                  <p>
                    Top Level Domain:{' '}
                    <span className={darkMode ? 'darkDetails' : 'lightDetails'}>
                      {getTopDomain(country)}
                    </span>
                  </p>
                  <p>
                    Currencies:{' '}
                    <span className={darkMode ? 'darkDetails' : 'lightDetails'}>
                      {' '}
                      {getCurrencies(country)}
                    </span>
                  </p>
                  <p className='languages'>
                    Languages:{' '}
                    <span className={darkMode ? 'darkDetails' : 'lightDetails'}>
                      {getLanguages(country)}
                    </span>
                  </p>
                </div>
              </div>
              {country && (
                <BorderCountries
                  country={country}
                  darkMode={darkMode}
                  homePage={homePage}
                  countries={countries}
                />
              )}
            </div>
          </>
        ) : (
          <div className='mainLoader'>
            {loading && <Loader loading={loading} darkMode={darkMode} />}
          </div>
        )}
      </main>
    </>
  );
};

export default CountryDetails;
