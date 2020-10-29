import { selector, selectorFamily } from "recoil";
import { Country } from "../../models/country";

const apiUrl = "https://restcountries.eu/rest/v2/all";

export const countriesValue = selector({
  key: "CountriesState",
  get: async () => {
    const response = await fetch(apiUrl).then<Country[]>(res => res.json());
    return response;
  },
});

export const countriesCountValue = selector({
  key: "CountriesCountState",
  get: ({ get }) => {
    const contries = get(countriesValue);

    return contries.length;
  },
});

export const getCountryByIndex = selectorFamily({
  key: "GetCountryByIndex",
  get: (index: number) => ({ get }) => {
    const countries = get(countriesValue);

    const country = countries.find((_, i) => i === index);
    if (!country) throw new Error("invalid argument.");

    return country;
  },
});
