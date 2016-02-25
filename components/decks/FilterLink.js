/**
 * Created by allanjohnson on 2/22/16.
 */
import React, { PropTypes } from 'react'

const FilterLink = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>
  }
  return (
    <a href="#" onClick={e => {
            e.preventDefault();
            onClick()
          }}
    >
      {children}
    </a>
  )
};

FilterLink.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default FilterLink
