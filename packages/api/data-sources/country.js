import { RESTDataSource } from 'apollo-datasource-rest'

export class CountrySource extends RESTDataSource {
  constructor() {
    super()
    this.baseURL = 'https://restcountries.eu/rest/v2/'
  }

  async getAll() {
    return this.get('')
  }

  async byName(name) {
    return this.get(`name/${name}`)
  }

  async byCode(code) {
    return this.get(`alpha/${code}`)
  }
}
