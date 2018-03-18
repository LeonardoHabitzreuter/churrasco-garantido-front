import React from 'react'
import { Carousel as AntdCarousel } from 'antd'
import PropTypes from 'prop-types'

const Carousel = ({ children, autoplay, dots, effect }) => (
  <AntdCarousel autoplay={autoplay} dots={dots} effect={effect}>
    {children}
  </AntdCarousel>
)

Carousel.defaultProps = {
  effect: 'fade',
  autoplay: true,
  dots: false
}

Carousel.propTypes = {
  effect: PropTypes.string,
  autoplay: PropTypes.bool,
  dots: PropTypes.bool
}

export default Carousel
