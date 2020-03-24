import { createError } from 'apollo-errors'
import { baseResolver } from './base'

const CountryNotFound = createError('CountryNotFound', {
  message: 'Country has not been found',
})

const CountriesNotFound = createError('CountriesNotFound', {
  message: 'Countries has not been found',
})

export const countryResolver = baseResolver.createResolver(
  (_, { name }, { dataSources }) =>
    dataSources.countries
      .byName(name)
      .then(([response]) => response)
      .catch(() => new CountryNotFound())
)

export const countriesResolver = baseResolver.createResolver(
  (_, __, { dataSources }) =>
    dataSources.countries.getAll().catch(() => new CountriesNotFound())
)
