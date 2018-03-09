import React from 'react'
import { Alert as ReactAlert } from 'react-bootstrap'
import Button from 'components/button'

const Alert = ({ show, style, handleDismiss, messages }) => (
  <div>
    {
    show &&
    <ReactAlert bsStyle={style} onDismiss={handleDismiss}>
      {messages.map((message, index) => (
        <div key={index}>
          {message}
        </div>
      ))}
      <Button onClick={handleDismiss}>Fechar</Button>
    </ReactAlert>
    }
  </div>
)

Alert.defaultProps = {
  messages: []
}

export default Alert
