import React from 'react'
import { shallow } from 'enzyme'
import FormGroup from '../../../src/components/form/formGroup'

describe('form component', () => {
  test('should render properly', () => {
    const wrapper = shallow(<FormGroup />)
    expect(wrapper).toMatchSnapshot()
  })

  test('should has the className when is passed by the props', () => {
    const wrapper = shallow(<FormGroup className='Test' />)
    expect(wrapper.find('.Test').exists()).toBeTruthy()
  })
})
