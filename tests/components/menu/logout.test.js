import React from 'react'
import { shallow } from 'enzyme'
import Logout from '../../../src/components/menu/logout'
import api from '../../../src/utils/api'
import { Redirect } from 'react-router-dom'

describe('logout component', () => {
  let wrapper

  beforeEach(() => {
    api.logout = jest.fn()
    wrapper = shallow(<Logout />)
  })

  test('should call the api logout method when rendered', () => {
    expect(api.logout).toBeCalled()
  })

  test('should redirect to login page when rendered', () => {
    expect(wrapper.find(Redirect).prop('to')).toMatchObject({ pathname: '/login' })
  })
})
