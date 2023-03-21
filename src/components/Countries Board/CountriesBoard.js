import { useState, useRef, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import FilterMenuBar from './Filter Menu Bar/FilterMenuBar';
import CountryCardList from './Countries Cards List/CountryCardList';
import './CountriesBoard.scss';

const CountriesBoard = ({
  countries,
  homePage,
  darkMode,
  toggleMode,
  loading,
  error,
}) => {
  const [searchCountryText, setSearchCountryText] = useState('');
  const [region, setRegion] = useState('');
  const [filteredCountries, setFilteredCountries] = useState(null);
  const scrollTo = useRef(null);

  useEffect(() => {
    /**
     *  Method updated countries based on seach input and region selection
     */
    const updatedFilterdCountries = () => {
      let tempFilteredCountries = countries.filter((country) => {
        return country.name.common
          .toLowerCase()
          .includes(searchCountryText.toLowerCase());
      });
      if (region) {
        tempFilteredCountries = tempFilteredCountries.filter((country) => {
          return country.region.toLowerCase() === region.toLowerCase();
        });
      }
      setFilteredCountries(tempFilteredCountries);
    };
    updatedFilterdCountries();
  }, [searchCountryText, region, countries]);

  const onSearchCountryChange = (country) => {
    setSearchCountryText(country);
  };

  const onRegionChange = (inputRegion) => {
    setRegion(inputRegion);
  };

  return (
    <>
      <header className='countriesBoard'>
        <NavBar
          homePage={homePage}
          darkMode={darkMode}
          toggleMode={toggleMode}
        />
        <FilterMenuBar
          searchCountry={searchCountryText}
          darkMode={darkMode}
          regionFilter={region}
          onSearchCountryChange={onSearchCountryChange}
          onRegionChange={onRegionChange}
          scrollTo={scrollTo}
        />
      </header>
      <main
        className={`container countriesBoard innerHeight ${
          darkMode ? `dark` : `light`
        }`}
      >
        <CountryCardList
          filteredCountries={filteredCountries ? filteredCountries : countries}
          darkMode={darkMode}
          countries={countries}
          loading={loading}
          scrollTo={scrollTo}
          error={error}
        />
      </main>
    </>
  );
};

export default CountriesBoard;
