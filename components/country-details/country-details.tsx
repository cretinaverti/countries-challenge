import React from 'react'
import { useCountryDetailsQuery } from '../../generated/graphql'

export interface CountryDetailsProps {
  name: string
}

/**
 * Display country data.
 */
export const CountryDetails = ({ name }: CountryDetailsProps) => {
  const { loading, error, data } = useCountryDetailsQuery({
    variables: {
      name,
    },
  })

  if (error) {
    return <div>Error loading country.</div>
  }
  if (loading) {
    return <div>Loading country...</div>
  }

  const { country } = data

  return (
    <table className="table-auto">
      <tbody>
        <tr className="border-b">
          <th className="text-left p-2">Native name</th>
          <td className="p-2">{country.nativeName}</td>
        </tr>
        <tr className="border-b">
          <th className="text-left p-2">Population</th>
          <td className="p-2">
            {Number(country.population).toLocaleString()}
          </td>
        </tr>
        <tr className="border-b">
          <th className="text-left p-2">Capital</th>
          <td className="p-2">{country.capital}</td>
        </tr>
        <tr className="border-b">
          <th className="text-left p-2">Region</th>
          <td className="p-2">{country.region}</td>
        </tr>
        <tr className="border-b">
          <th className="text-left p-2">Sub region</th>
          <td className="p-2">{country.subRegion}</td>
        </tr>
        <tr className="border-b">
          <th className="text-left align-text-top p-2">Languages</th>
          <td className="p-2">
            <ul>
              {
                country.languages.map(({ name: language }) => (
                  <li key={language}>{language}</li>
                ))
              }
            </ul>
          </td>
        </tr>
        <tr className="border-b">
          <th className="text-left align-text-top p-2">Currencies</th>
          <td className="p-2">
            <ul>
              {
                country.currencies.map(({ name: currency }) => (
                  <li key={currency}>{currency}</li>
                ))
              }
            </ul>
          </td>
        </tr>
        <tr className="border-b">
          <th className="text-left align-text-top p-2">Top level domain</th>
          <td className="p-2">
            <ul>
              {
                country.topLevelDomain.map((domain) => (
                  <li key={domain}>{domain}</li>
                ))
              }
            </ul>
          </td>
        </tr>
        <tr className="border-b">
          <th className="text-left align-text-top p-2">Border countries</th>
          <td className="p-2">
            <ul>
              {
                country.borders.map((borderCountry) => (
                  <li key={borderCountry}>{borderCountry}</li>
                ))
              }
            </ul>
          </td>
        </tr>
      </tbody>
    </table>
  )
}
