import React from 'react'
import { shallow } from 'enzyme'
import RegisterCompany from '../../../src/screens/registerCompany'

describe('Register company component', () => {
  test('should renders properly', () => {
    const wrapper = shallow(<RegisterCompany />)
    expect(wrapper).toMatchSnapshot()
  })
})
