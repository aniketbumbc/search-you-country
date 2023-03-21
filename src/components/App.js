import { useState } from 'react';
import { useFetch } from '../hooks/useFetch';
import { Route, Routes, Navigate } from 'react-router-dom';
import { homePage } from '../constant';
import CountryContext from '../context/CountryContext';
import CountriesBoard from './Countries Board/CountriesBoard';
import CountryDetails from './Country Details/CountryDetails';
import './App.scss';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const { countries, loading, error } = useFetch();

  /**
   *  Method reverse mode to dark to light based on current mode.
   */

  const toggleMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      {
        <Routes>
          <Route
            exact
            path='/'
            element={
              <CountriesBoard
                toggleMode={toggleMode}
                darkMode={darkMode}
                homePage={homePage}
                countries={countries}
                loading={loading}
                error={error}
              />
            }
          />
          <Route
            path='/countryDetails/:countryName'
            element={
              <CountryContext.Provider value={{ countries }}>
                <CountryDetails
                  toggleMode={toggleMode}
                  darkMode={darkMode}
                  homePage={homePage}
                  loading={loading}
                />
              </CountryContext.Provider>
            }
          />
          <Route path='*' element={<Navigate to={homePage} />} />
        </Routes>
      }
    </>
  );
};

export default App;
