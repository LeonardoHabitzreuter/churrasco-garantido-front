import React from 'react'
import notificate from '../../../src/components/notification'
import { notification } from 'antd'

describe('notification component', () => {
  test('should render the component with the icon passed through the props', () => {
    notification.open = jest.fn()
    notificate({ icon: <i>Some Text</i> })
    expect(notification.open).toHaveBeenCalledWith({ icon: <i>Some Text</i> })
  })
})
