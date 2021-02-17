import React from 'react'
import { useAllCountriesQuery } from '../../generated/graphql'
import { CountryCard } from '../country-card'

// eslint-disable-next-line import/prefer-default-export
export const CountriesList = () => {
  const { loading, error, data } = useAllCountriesQuery()

  if (error) {
    return <div>Error loading countries.</div>
  }
  if (loading) {
    return <div>Loading countries...</div>
  }

  const { countries } = data

  return countries.map(({ name, flag }) => (
    <CountryCard key={name} name={name}>
      <img src={flag} alt={name} className="object-cover h-8" />
    </CountryCard>
  ))
}
