import React from 'react'
import { Button as AntButton } from 'antd'
import styles from './button.styl'
import classnames from 'classnames'

const Button = ({ children, customStyle, bsStyle, type, ...rest }) => (
  <AntButton className={classnames(styles.fontSans, customStyle)} type={bsStyle} htmlType={type} {...rest}>{children}</AntButton>
)

Button.defaultProps = {
  bsStyle: 'primary',
  type: 'submit'
}

export default Button
