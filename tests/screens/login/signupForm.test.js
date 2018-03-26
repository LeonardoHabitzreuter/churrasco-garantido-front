import React from 'react'
import { shallow } from 'enzyme'
import SignupForm from '../../../src/screens/login/signupForm'

describe('Signup form component', () => {
  test('should renders properly', () => {
    const wrapper = shallow(<SignupForm />)
    expect(wrapper).toMatchSnapshot()
  })
})
