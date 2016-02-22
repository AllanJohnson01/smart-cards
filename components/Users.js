/**
 * Created by allanjohnson on 2/13/16.
 */
import React, {PropTypes} from 'react'

const User = ({ userName }) => (
    <option>
      {userName}
    </option>
  );

User.propTypes = {
  userName: PropTypes.string.isRequired,
};

const Users = ({users, onUserChange }) => (
  <select onChange={() => onUserChange(users)} >
    {users.map((user) =>
      <User key={user.id} {...user}/>
    )}
  </select>
);

Users.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired
  }).isRequired).isRequired,
  onUserChange: PropTypes.func.isRequired
};

export default Users



