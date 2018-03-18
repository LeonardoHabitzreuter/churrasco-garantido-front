import React from 'react'
import { Spin } from 'antd'

const Loader = ({ className, loading, size }) => (
  <Spin
    spinning={loading}
    className={className}
    size={size}
  />
)

Loader.defaultProps = {
  size: 'large',
  loading: false
}

export default Loader
