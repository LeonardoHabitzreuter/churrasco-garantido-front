import * as storage from '../../../src/utils/storage'

global.localStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn()
}

describe('storage', () => {
  test('should stringfy the object before save the content in storage', () => {
    storage.saveLocalStorage('testKey', { name: 'test', value: 5 })
    expect(global.localStorage.setItem).toBeCalledWith('testKey', '{"name":"test","value":5}')
  })

  test('should transform the data to json before return the result', () => {
    global.localStorage.getItem.mockReturnValue('{"name":"test","value":5}')
    expect(storage.getLocalStorage()).toEqual({ name: 'test', value: 5 })
  })

  test('should remove the specified item', () => {
    storage.removeLocalStorage('testKey')
    expect(global.localStorage.removeItem).toBeCalledWith('testKey')
  })

  test('should clear storage', () => {
    storage.clearLocalStorage()
    expect(global.localStorage.clear).toBeCalled()
  })
})
