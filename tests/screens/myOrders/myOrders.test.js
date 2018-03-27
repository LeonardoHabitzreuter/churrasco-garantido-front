import React from 'react'
import { mount, shallow } from 'enzyme'
import MyOrders from '../../../src/screens/myOrders'
import Table from '../../../src/components/table'
import api from '../../../src/utils/api'
api.getUser = jest.fn()
api.getUser.mockReturnValue('Bob')

describe('My orders component', () => {
  test.skip('should renders properly', () => {
    const wrapper = shallow(<MyOrders location={{}} />)
    expect(wrapper).toMatchSnapshot()
  })

  describe('when mounted', () => {
    api.get = jest.fn()
    api.get.mockResolvedValue({
      data: [{
        _id: '1',
        code: 154,
        products: [],
        status: 'FINISHED'
      }, {
        _id: '2',
        code: 456,
        products: [],
        status: 'PENDING'
      }]
    })

    test('should renders in the table the two companies receveid from the api get request', async () => {
      const wrapper = mount(<MyOrders location={{}} />)
      await wrapper.instance().componentDidMount()
      wrapper.update()
      expect(wrapper.find(Table).prop('lines')).toMatchObject([{ id: '1', code: 154 }, { id: '2', code: 456 }])
    })
  })
})
