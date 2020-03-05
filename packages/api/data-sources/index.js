import { CountrySource } from './country'

export const dataSources = () => ({
  countries: new CountrySource(),
})
