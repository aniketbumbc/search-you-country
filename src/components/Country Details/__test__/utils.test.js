import { countries, country, dummyCountry } from '../../../testdata/index';
import {
  getCapital,
  getCountryBorders,
  getCurrencies,
  getLanguages,
  getNativeName,
  getPopulation,
} from '../utils';

describe('utils', () => {
  test('Should give correct native name', () => {
    const nativeName = getNativeName(country);
    expect(nativeName).toEqual('Danmark');
  });

  test('Should show not found in case not have native name', () => {
    const nativeName = getNativeName(dummyCountry);
    expect(nativeName).toEqual('Not Found');
  });

  test('Should show correct population', () => {
    const population = getPopulation(country);
    expect(population).toEqual('5,831,404');
  });

  test('Should show correct capital', () => {
    const capital = getCapital(country);
    expect(capital).toEqual('Copenhagen');
  });

  test('Should show correct currency', () => {
    const currencies = getCurrencies(country);
    expect(currencies).toEqual('Danish krone');
  });

  test('Should show correct languages', () => {
    const languages = getLanguages(country);
    expect(languages).toEqual('Danish');
  });

  test('Should show correct borders', () => {
    const borders = getCountryBorders(countries, country);
    expect(borders.length).toBe(1);
    expect(borders[0].name.common).toEqual('Germany');
  });
});
