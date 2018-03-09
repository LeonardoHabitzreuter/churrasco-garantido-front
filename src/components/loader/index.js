import React from 'react'
import { ClipLoader } from 'react-spinners'
import styles from './loader.styl'
import classnames from 'classnames'

const Loader = ({ className, color, ...rest }) => (
  <div className='sweet-loading'>
    <ClipLoader
      className={
        classnames(
          className,
          styles[color]
        )
      }
      {...rest}
    />
  </div>
)

Loader.defaultProps = {
  color: 'blue',
  loading: true
}

export default Loader
