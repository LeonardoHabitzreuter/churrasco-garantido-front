import React from 'react'
import { Table as ReactTable } from 'react-bootstrap'
import PropTypes from 'prop-types'

const commonStyle = {
  textAlign: 'center'
}

const Table = ({ columns, lines }) => (
  <ReactTable responsive striped bordered condensed hover>
    <thead>
      <tr>
        {Object.entries(columns).map(([key, value]) => <th style={commonStyle} key={key}>{value}</th>)}
      </tr>
    </thead>
    <tbody>
      {lines.map((line, index) => (
        <tr key={line.id || index}>
          {Object.keys(columns).map((column, columnIndex) => <td key={columnIndex} style={commonStyle}>{line[column]}</td>)}
        </tr>
      ))}
    </tbody>
  </ReactTable>
)

Table.propTypes = {
  columns: PropTypes.object,
  lines: PropTypes.arrayOf(PropTypes.object)
}

Table.defaultProps = {
  columns: {},
  lines: []
}

export default Table
