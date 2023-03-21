import { useState, useEffect } from 'react';
import Card from './Card/Card';
import Loader from '../../Loader/Loader';
import Pagination from './Pagination/Pagination';
import './CountryCardList.scss';
import NotFound from '../../NotFound/NotFound';

const setCountryCards = (filteredCountries, currentPage, darkMode) => {
  return filteredCountries
    .slice(currentPage * 8, currentPage * 8 + 8)
    .map((country) => (
      <Card key={country.name.common} {...country} darkMode={darkMode} />
    ));
};

const CountryCardList = ({
  filteredCountries,
  darkMode,
  countries,
  scrollTo,
  loading,
  error,
}) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    let tempTotalpages =
      filteredCountries.length > 8
        ? Math.ceil(filteredCountries.length / 8)
        : 1;
    setTotalPages(tempTotalpages);
  }, [filteredCountries]);

  useEffect(() => {
    setCurrentPage(0);
  }, [filteredCountries]);

  return (
    <>
      {error && <NotFound error={error} darkMode={darkMode} />}

      <section className='countryList'>
        {!!countries.length ? (
          filteredCountries.length !== 0 ? (
            <>
              <div>
                {setCountryCards(filteredCountries, currentPage, darkMode)}
              </div>
              <Pagination
                currentPage={currentPage}
                darkMode={darkMode}
                scrollTo={scrollTo}
                setCurrentPage={setCurrentPage}
                totalPages={totalPages}
              />
            </>
          ) : (
            <p className='showError'>
              Ooops!!! You Enter Wrong Text
              <br />
              Try Something New
            </p>
          )
        ) : (
          loading && <Loader loading={loading} darkMode={darkMode} />
        )}
      </section>
    </>
  );
};

export default CountryCardList;
