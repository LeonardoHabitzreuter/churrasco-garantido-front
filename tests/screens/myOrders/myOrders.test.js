import React from 'react'
import { shallow } from 'enzyme'
import MyOrders from '../../../src/screens/myOrders'
import api from '../../../src/utils/api'
api.getUser = jest.fn()

describe('My orders component', () => {
  test('should renders properly', () => {
    const wrapper = shallow(<MyOrders location={{}} />)
    expect(wrapper).toMatchSnapshot()
  })
})
