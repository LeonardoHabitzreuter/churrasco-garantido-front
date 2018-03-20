import api from '../../../src/utils/api'
import axios from 'axios'

describe.skip('api', () => {
  test('should has the authorization header in any get request', async () => {
    global.localStorage = { getItem: jest.fn() }
    axios.create = jest.fn()
    let axiosConfig = {headers: {common: {}}}

    global.localStorage.getItem.mockReturnValue('{"token":"FakeToken"}')
    axios.create.mockReturnValue({
      interceptors: {request: { use: fn => fn(axiosConfig) }},
      get: jest.fn()
    })

    await api.get()
    expect(axiosConfig.headers.common.authorization).toMatchObject({ token: 'FakeToken' })
  })
})
