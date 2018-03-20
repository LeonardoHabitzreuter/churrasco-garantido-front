import React from 'react'
import { shallow } from 'enzyme'
import Alert from '../../../src/components/alert'
import { Alert as AntAlert } from 'antd'

describe('alert component', () => {
  test('should render correctly', () => {
    const wrapper = shallow(<Alert show={false} />)
    expect(wrapper).toMatchSnapshot()
  })

  test('should appear only if the show prop equals true', () => {
    const wrapper = shallow(<Alert show={false} />)
    expect(wrapper.find(AntAlert)).toHaveLength(0)
    wrapper.setProps({ show: true })
    expect(wrapper.find(AntAlert)).toHaveLength(1)
  })

  test('should be able to render more than one message', () => {
    const wrapper = shallow(<Alert show messages={['test1', 'test2']} />)
    expect(wrapper.find(AntAlert).prop('description').map(pTag => pTag.props.children)).toEqual(expect.arrayContaining(['test1', 'test2']))
  })
})
