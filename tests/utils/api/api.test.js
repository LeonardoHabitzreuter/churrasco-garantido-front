jest.dontMock('../../../src/utils/api')
const axios = require('axios')
jest.mock('axios')

global.localStorage = {
  getItem: jest.fn(key => {
    if (key === 'TOKEN') return '{"token":"FakeToken"}'
    if (key === 'CURRENT_USER') return '{"name":"Jhon"}'
  }),
  clear: jest.fn()
}

let axiosConfig = {headers: {common: {}}}
axios.create.mockImplementation(() => ({
  interceptors: {request: { use: fn => fn(axiosConfig) }},
  get: jest.fn().mockResolvedValue({data: [{name: 'Bob'}]}),
  post: jest.fn().mockResolvedValue(null),
  put: jest.fn().mockResolvedValue(null),
  delete: jest.fn().mockResolvedValue(null)
}))

const api = require('../../../src/utils/api').default

describe('api', () => {
  describe('api requests', () => {
    const validateHeaders = async HTTPRequest => {
      await HTTPRequest()
      expect(axiosConfig.headers.common.authorization).toMatchObject({ token: 'FakeToken' })
    }

    test('should has the authorization header in any post request', () => {
      validateHeaders(api.post)
    })

    test('should has the authorization header in any get request', () => {
      validateHeaders(api.get)
    })

    test('should has the authorization header in any put request', () => {
      validateHeaders(api.put)
    })

    test('should has the authorization header in any delete request', () => {
      validateHeaders(api.delete)
    })
  })

  describe('browser storage', () => {
    test('should return the current user', () => {
      global.localStorage.getItem.mockReturnValue('{"name":"Jhon"}')
      expect(api.getUser()).toEqual({ name: 'Jhon' })
    })

    test('should clear storage when logout', () => {
      api.logout()
      expect(global.localStorage.clear).toBeCalled()
    })
  })
})
