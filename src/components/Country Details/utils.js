import Numeral from 'numeral';

export const getNativeName = (country) => {
  let nativeName = '';
  if (Object.keys(country.name.nativeName).length > 1) {
    let key = Object.keys(country.name.nativeName);
    nativeName = country.name.nativeName[key[0]].common;
  } else if (Object.keys(country.name.nativeName).length === 1) {
    let key = Object.keys(country.name.nativeName);
    nativeName = country.name.nativeName[key].common;
  } else {
    nativeName = 'Not Found';
  }
  return nativeName;
};

export const getPopulation = (country) => {
  return Numeral(country.population).format(0, 0);
};

export const getCapital = (country) => {
  let capitalName = '';
  if (country.capital) {
    capitalName = country.capital.length ? country.capital[0] : 'Not Found';
  } else {
    capitalName = 'Not Found';
  }
  return capitalName;
};

export const getTopDomain = (country) => {
  return country.tld?.length ? country.tld[0] : 'Not Found';
};

export const getCurrencies = (country) => {
  let currency = ' ';
  if (Object.keys(country.currencies).length) {
    let [key] = Object.keys(country.currencies);
    currency = `${country.currencies[key].name}`;
  } else {
    currency = 'Not Found';
  }
  return currency;
};

export const getLanguages = (country) => {
  let languages = [];
  for (let key in country.languages) {
    languages.push(country.languages[key]);
  }
  return languages.toString();
};

export const getCountryBorders = (countries, countryDetail) => {
  return countries.filter((country) => {
    return countryDetail.borders?.includes(country.cca3);
  });
};
