import React from 'react'
import { shallow } from 'enzyme'
import MyAccount from '../../../src/screens/myAccount'
import api from '../../../src/utils/api'
api.getUser = jest.fn()

describe('MyAccount component', () => {
  test('should renders properly', () => {
    const wrapper = shallow(<MyAccount />)
    expect(wrapper).toMatchSnapshot()
  })
})
