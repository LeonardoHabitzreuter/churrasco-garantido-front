import React from 'react'
import { shallow } from 'enzyme'
import NewOrder from '../../../src/screens/newOrder'
import api from '../../../src/utils/api'
api.getUser = jest.fn()

describe('New order component', () => {
  test('should renders properly', () => {
    const wrapper = shallow(<NewOrder />)
    expect(wrapper).toMatchSnapshot()
  })
})
