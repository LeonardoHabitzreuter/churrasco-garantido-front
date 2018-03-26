import React from 'react'
import { shallow } from 'enzyme'
import Layout from '../../../src/components/layout'

describe.skip('Layout component', () => {
  test('d renders properly', () => {
    const wrapper = shallow(<Layout />)
    expect(wrapper).toMatchSnapshot()
  })
})
