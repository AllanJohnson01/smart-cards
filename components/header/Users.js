/**
 * Created by allanjohnson on 2/13/16.
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

const Users = ({users, onUserChange}) => (
  <fieldset>
    <legend>Select User</legend>
    <select onChange={(e) => onUserChange(e.target.value)}>
      {
        users.map((user) =>
          <User key={user.id} {...user}/>
        )
      }
    </select>
  </fieldset>
);


Users.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired
  }).isRequired).isRequired,
  onUserChange: PropTypes.func.isRequired
};

export default Users



