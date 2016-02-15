/**
 * Created by allanjohnson on 2/13/16.
 */
import React, { PropTypes } from 'react'

const User = ({ selected, children }) => {
  if (selected) {
    return <span>{children}</span>
  }

  return (
    <option
       selecte={selected}

    >
      {children}
    </option>
  )
};

User.propTypes = {
  selected: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

export default User
