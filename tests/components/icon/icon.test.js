import React from 'react'
import { shallow } from 'enzyme'
import Icon from '../../../src/components/icon'

describe('Icon component', () => {
  test('should has the same type and class passed through the props', () => {
    const wrapper = shallow(<Icon type='ant-design' className='iconTest' />)
    expect(wrapper.find('Icon').props()).toMatchObject({
      type: 'ant-design',
      className: 'iconTest'
    })
  })
})
