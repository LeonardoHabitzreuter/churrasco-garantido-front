import React from 'react'
import { shallow } from 'enzyme'
import Alert from '../../../src/components/alert'
import { Alert as ReactAlert } from 'react-bootstrap'

test('should appear only if the show prop equals true', () => {
  const wrapper = shallow(<Alert show={false} />)
  expect(wrapper.find(ReactAlert)).toHaveLength(0)
  wrapper.setProps({ show: true })
  expect(wrapper.find(ReactAlert)).toHaveLength(1)
})

test('should be able to render more than one message', () => {
  const wrapper = shallow(<Alert show messages={['test1', 'test2']} />)
  expect(wrapper.find(ReactAlert).find('div').map(div => div.text())).toEqual(expect.arrayContaining(['test1', 'test2']))
})
