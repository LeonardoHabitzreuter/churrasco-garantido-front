import React from 'react'
import { shallow } from 'enzyme'
import Login from '../../../src/screens/login'

describe('Login component', () => {
  test('should renders properly', () => {
    const wrapper = shallow(<Login />)
    expect(wrapper).toMatchSnapshot()
  })
})
