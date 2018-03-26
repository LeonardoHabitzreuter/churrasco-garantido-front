import React from 'react'
import { shallow } from 'enzyme'
import Dashboard from '../../../src/screens/dashboard'
import api from '../../../src/utils/api'
api.getUser = jest.fn()

describe('Dashboard component', () => {
  test('should renders properly', () => {
    const wrapper = shallow(<Dashboard />)
    expect(wrapper).toMatchSnapshot()
  })
})
