import React from 'react'
import { shallow } from 'enzyme'
import { PrivateRoute } from '../../src/components'
import api from '../../src/utils/api'
api.getUser = jest.fn()

describe('Private route component', () => {
  test('should renders properly', () => {
    const wrapper = shallow(<PrivateRoute />)
    expect(wrapper).toMatchSnapshot()
  })
})
