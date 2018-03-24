import React from 'react'
import { Col, FormGroup as ReactFormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap'
import classNames from 'classnames'

const FormGroup = ({ className, labelName, labelSize, name, type, value, inputSize, onChange, validationState, validationMessage }) => {
  return (
    <ReactFormGroup
      className={classNames(className, 'col-sm-12')}
      controlId={name}
      validationState={validationState}
    >
      <Col componentClass={ControlLabel} sm={labelSize}>{labelName}</Col>
      <Col sm={inputSize}>
        <FormControl
          type={type}
          value={value}
          onChange={onChange}
        />
        <FormControl.Feedback />
        {validationMessage && <HelpBlock>{validationMessage}</HelpBlock>}
      </Col>
    </ReactFormGroup>
  )
}

FormGroup.defaultProps = {
  labelSize: 2,
  inputSize: 4
}

export default FormGroup
