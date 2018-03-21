jest.dontMock('../../../src/utils/api')
const axios = require('axios')
jest.mock('axios')

global.localStorage = { getItem: jest.fn() }
global.localStorage.getItem.mockReturnValue('{"token":"FakeToken"}')

let axiosConfig = {headers: {common: {}}}
axios.create.mockImplementation(() => ({
  interceptors: {request: { use: fn => fn(axiosConfig) }},
  get: () => Promise.resolve({data: [{name: 'Bob'}]})
}))

const api = require('../../../src/utils/api').default

describe('api', () => {
  test('should has the authorization header in any get request', done => {
    api
      .get()
      .then(() => {
        expect(axiosConfig.headers.common.authorization).toMatchObject({ token: 'FakeToken' })
        done()
      })
  })
})
