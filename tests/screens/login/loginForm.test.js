import React from 'react'
import { shallow } from 'enzyme'
import LoginForm from '../../../src/screens/login/loginForm'

describe('Login form component', () => {
  test('should renders properly', () => {
    const wrapper = shallow(<LoginForm />)
    expect(wrapper).toMatchSnapshot()
  })
})
