import React from 'react'
import { Button as AntButton } from 'antd'
import styles from './button.styl'
import classnames from 'classnames'

const Button = ({ children, className, bsStyle, type, ...rest }) => (
  <AntButton className={classnames(styles.fontSans, className)} type={bsStyle} htmlType={type} {...rest}>{children}</AntButton>
)

Button.defaultProps = {
  bsStyle: 'primary',
  type: 'submit'
}

export default Button
