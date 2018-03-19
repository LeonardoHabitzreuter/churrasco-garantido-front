import React from 'react'
import { shallow } from 'enzyme'
import Form from '../../../src/components/form'

describe('form component', () => {
  test('should render the children components', () => {
    const field = {
      labelName: 'Test label',
      name: 'Test name',
      type: 'text',
      value: 'Test value'
    }
    const wrapper = shallow(<Form fields={[field]} />)
    expect(wrapper.state().fields).toEqual([field])
  })
})
