import React from 'react'
import { Col, FormGroup as ReactFormGroup, ControlLabel, FormControl, HelpBlock } from 'react-bootstrap'
import styles from './formGroup.styl'
import classNames from 'classnames'

const FormGroup = ({ labelName, name, type, value, onChange, validationState, validationMessage }) => {
  return (
    <ReactFormGroup
      className={classNames(styles.formGroup, 'col-sm-12')}
      controlId={name}
      validationState={validationState}
    >
      <Col componentClass={ControlLabel} sm={2}>{labelName}</Col>
      <Col sm={4}>
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

export default FormGroup
