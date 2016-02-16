/**
 * Created by allanjohnson on 2/13/16.
 */
import React, { PropTypes } from 'react'

const User = ({ userName, onSelect }) => {
  return (
    <option onselect={onSelect}
    >
      {userName}
    </option>
  )
};

User.propTypes = {
  userName: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default User
