import { REST_COUNTRIES_URL, COUNTRY_DETAILS_URL } from '../constant';
import { countries, countryDetails } from '../testdata';
import { rest } from 'msw';

export const handlers = [
  rest.get(REST_COUNTRIES_URL, (req, res, ctx) => {
    return res(ctx.json(countries));
  }),
  rest.get(`https://restcountries.com/v3.1/name/denmark`, (req, res, ctx) => {
    return res(ctx.json(countryDetails));
  }),
];
