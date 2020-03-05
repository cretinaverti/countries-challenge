// @flow
import { RESTDataSource } from 'apollo-datasource-rest'

export class CountrySource extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://restcountries.eu/rest/v2/'
  }

  async getAll() {
    return this.get('')
  }

  async byName(name: string) {
    return this.get(`name/${name}`)
  }

  async byCode(code: string) {
    return this.get(`alpha/${code}`)
  }
}
