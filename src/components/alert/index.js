import React from 'react'
import { Alert as AntAlert } from 'antd'

const Alert = ({ className, show, style, handleDismiss, messages }) => (
  show &&
  <AntAlert
    className={className}
    message={titles[style]}
    description={messages.map((message, index) => <p key={index}>{message}</p>)}
    type={types[style]}
    showIcon
    closable
    onClose={handleDismiss}
  />
)

const types = {
  success: 'success',
  info: 'info',
  warning: 'warning',
  danger: 'error'
}

const titles = {
  success: 'Sucesso',
  info: 'Informação',
  warning: 'Cuidado',
  danger: 'Erro'
}

Alert.defaultProps = {
  messages: []
}

export default Alert
