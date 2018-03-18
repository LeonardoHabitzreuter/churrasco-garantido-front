import React from 'react'
import { shallow } from 'enzyme'
import Carousel from '../../../src/components/carousel'

describe('alert component', () => {
  test('should render the children components', () => {
    const wrapper = shallow(<Carousel><p>Paragraph</p></Carousel>)
    expect(wrapper.find('p')).toHaveLength(1)
  })
})
