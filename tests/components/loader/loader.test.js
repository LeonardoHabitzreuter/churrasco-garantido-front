import React from 'react'
import { shallow } from 'enzyme'
import Loader from '../../../src/components/loader'
import { Spin } from 'antd'

describe('loader component', () => {
  test('should appear only if the loading prop equals true', () => {
    const wrapper = shallow(<Loader loading={false} />)
    expect(wrapper.find(Spin).prop('spinning')).toBe(false)
    wrapper.setProps({ loading: true })
    expect(wrapper.find(Spin).prop('spinning')).toBe(true)
  })

  test('should has the class name passed through the props', () => {
    const wrapper = shallow(<Loader className='Test' />)
    expect(wrapper.find(Spin).hasClass('Test')).toBeTruthy()
  })
})
