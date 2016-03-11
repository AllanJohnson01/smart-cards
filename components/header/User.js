/**
 * Created by allanjohnson on 3/10/16.
 */
import React, {PropTypes} from 'react'

const User = ({ userName, id }) => (
  <option value={id}>
    {userName}
  </option>
);

User.propTypes = {
  userName: PropTypes.string.isRequired
};

export default User