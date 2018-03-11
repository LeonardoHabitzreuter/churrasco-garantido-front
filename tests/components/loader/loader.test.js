import React from 'react'
import { shallow } from 'enzyme'
import Loader from '../../../src/components/loader'
import { ClipLoader } from 'react-spinners'

describe('loader component', () => {
  test('should appear only if the loading prop equals true', () => {
    const wrapper = shallow(<Loader loading={false} />)
    expect(wrapper.find(ClipLoader).prop('loading')).toBe(false)
    wrapper.setProps({ loading: true })
    expect(wrapper.find(ClipLoader).prop('loading')).toBe(true)
  })

  test('should has color equals blue as default', () => {
    const wrapper = shallow(<Loader />)
    expect(wrapper.find(ClipLoader).hasClass('blue')).toBeTruthy()
  })

  test('should has color equals red when passed through the props', () => {
    const wrapper = shallow(<Loader color='red' />)
    expect(wrapper.find(ClipLoader).hasClass('red')).toBeTruthy()
  })
})
