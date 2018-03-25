import React from 'react'
import { shallow } from 'enzyme'
import Dropdown from '../../../src/components/dropdown'
import { MenuItem } from 'react-bootstrap'

describe('alert component', () => {
  test('should renders properly', () => {
    const wrapper = shallow(<Dropdown id='dropdownTest' />)
    expect(wrapper).toMatchSnapshot()
  })

  test('should not break up when the items are an empty array', () => {
    shallow(<Dropdown id='dropdownTest' items={[]} />)
  })

  test('should renders the items', () => {
    const wrapper = shallow(<Dropdown id='dropdownTest' items={['Test1', 'Test2']} />)
    const items = wrapper.find(MenuItem)
    expect(items).toHaveLength(2)
    expect(items.map(item => item.children().text())).toEqual(expect.arrayContaining(['Test1', 'Test2']))
  })

  test('should call onChange passing the item index when the item is selected', () => {
    const callback = jest.fn()
    const wrapper = shallow(<Dropdown id='dropdownTest' items={['Test1', 'Test2']} onChange={callback} />)
    const test2 = wrapper.find(MenuItem).filterWhere(item => item.children().text() === 'Test2')
    test2.simulate('select')
    expect(callback).toHaveBeenCalledWith(1)
  })
})
