import React from 'react'
import { shallow } from 'enzyme'
import Table from '../../../src/components/table'

describe('table component', () => {
  const wrapper = shallow(<Table columns={{ name: "User's name:", age: "User's age:" }} lines={[{ name: 'Jhon', age: 25, sex: 'male' }, { name: 'Hailie' }]} />)

  describe('snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })

  describe('thead', () => {
    test('should render just one tr', () => {
      expect(wrapper.find('thead').find('tr')).toHaveLength(1)
    })

    test('should render the same amount of th as the columns', () => {
      expect(wrapper.find('tr').find('th')).toHaveLength(2)
    })

    test('should render the ths with the columns values as text', () => {
      expect(wrapper.find('tr').find('th').map(th => th.text())).toEqual(["User's name:", "User's age:"])
    })
  })

  describe('tbody', () => {
    test('should render the same amount of tr as the lines', () => {
      expect(wrapper.find('tbody').find('tr')).toHaveLength(2)
    })

    test('should not render the props of the lines which is not specified in the columns', () => {
      expect(wrapper.find('td').map(td => td.text())).not.toContain('male')
    })

    test('should render the td with empty text when the line does not have a value for the column', () => {
      expect(wrapper.find('td').map(td => td.text())).toContain('')
    })
  })
})
