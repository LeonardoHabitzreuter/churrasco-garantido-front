import React from 'react'
import { DropdownButton, MenuItem } from 'react-bootstrap'
import PropTypes from 'prop-types'
import R from 'ramda'

const getSelectedItemFromIndex = (selectedIndex, items) => items.find((element, index) => index === selectedIndex)

const selectTitle = R.curry((selectedIndex, items) => R.pipe(
  R.partial(getSelectedItemFromIndex, [selectedIndex]),
  R.defaultTo('')
)(items))

const Dropdown = ({ id, selectedIndex, items, onChange }) => (
  <DropdownButton id={id} bsStyle='default' title={selectTitle(selectedIndex, items)}>{
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
