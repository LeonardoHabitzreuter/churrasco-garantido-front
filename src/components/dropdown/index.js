import React from 'react'
import { DropdownButton, MenuItem } from 'react-bootstrap'
import PropTypes from 'prop-types'

const getSelectedItemFromIndex = (items, selectedIndex) => items.find((element, index) => index === selectedIndex)

const Dropdown = ({ id, selectedIndex, items, onChange }) => (
  <DropdownButton id={id} bsStyle='default' title={getSelectedItemFromIndex(items, selectedIndex) || ''}>{
    items.map((item, index) => (
      <MenuItem key={index} eventKey={index} active={index === selectedIndex} onSelect={() => onChange(index)}>{item}</MenuItem>
    ))
  }</DropdownButton>
)

Dropdown.propTypes = {
  id: PropTypes.string.isRequired,
  selectedIndex: PropTypes.number,
  items: PropTypes.array,
  onChange: PropTypes.func
}

Dropdown.defaultProps = {
  items: [],
  selectedIndex: null,
  onChange: () => {}
}

export default Dropdown
