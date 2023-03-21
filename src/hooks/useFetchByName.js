import { useEffect, useState, useRef } from 'react';
import { COUNTRY_DETAILS_URL, BRITISH_TERRITORY } from '../constant';

export const useFetchByName = (name) => {
  const [countryDetails, setCountryDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const countryDetailsUrl = `${COUNTRY_DETAILS_URL}/${name}`;
  const isMounted = useRef(false);

  useEffect(() => {
    const fetchData = async () => {
      isMounted.current = true;
      setLoading(true);
      try {
        const response = await fetch(countryDetailsUrl, {
          method: 'GET',
        });

        if (isMounted.current) {
          if (response.ok) {
            setLoading(false);
            response.json().then((data) => {
              if (name === BRITISH_TERRITORY) {
                setCountryDetails(
                  data.filter((country) => country.cca3 === 'IOT')
                );
              } else {
                setCountryDetails(data);
              }
            });
          } else {
            throw new Error('Something went wrong' + response.status);
          }
        }
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
    return () => (isMounted.current = false);
  }, [countryDetailsUrl, name]);

  return { countryDetails, loading, error };
};
