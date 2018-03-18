import React from 'react'
import { notification } from 'antd'
import Icon from 'components/icon'

export default ({ message, description, icon = <Icon type='info-circle-o' /> }) => {
  notification.open({
    message,
    description,
    icon
  })
}
