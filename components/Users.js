/**
 * Created by allanjohnson on 2/13/16.
 */
import React from 'react'
import User from './User'

const Users = ({users, onUserSelect }) => (
  <select>
    {users.map(user =>
      <User
        key={user.userId}
        {...user}
        onChange={() => onUserSelect(user.userId)}
        />
    )}
  </select>
);

User.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    userId: PropTypes.number.isRequired,
    userName: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onUserSelect: PropTypes.func.isRequired
};

export default Users



