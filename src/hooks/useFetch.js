import { useEffect, useState } from 'react';
import { REST_COUNTRIES_URL } from '../constant';

export const useFetch = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(REST_COUNTRIES_URL, {
          method: 'GET',
        });

        if (response.ok) {
          setLoading(false);
          response.json().then((data) => {
            setCountries(data);
          });
        } else {
          throw new Error('Something went wrong' + response.status);
        }
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { countries, loading, error };
};
