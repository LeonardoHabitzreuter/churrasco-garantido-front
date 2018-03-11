import React from 'react'
import { Alert as ReactAlert } from 'react-bootstrap'
import Button from 'components/button'

const Alert = ({ show, style, handleDismiss, messages }) => (
  show &&
  <ReactAlert bsStyle={style} onDismiss={handleDismiss}>
    {messages.map((message, index) => <p key={index}>{message}</p>)}
    <Button onClick={handleDismiss}>Fechar</Button>
  </ReactAlert>
)

Alert.defaultProps = {
  messages: []
}

export default Alert
