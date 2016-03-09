/**
 * Created by allanjohnson on 2/13/16.
 */
import React, {PropTypes} from 'react'
import 'bootstrap-webpack'
import '../../css/dashboard.css'

const User = ({ userName, id }) => (
    <option value={id}>
      {userName}
    </option>
  );

User.propTypes = {
  userName: PropTypes.string.isRequired
};

const header = ({users, onUserChange}) => (
  <nav className="navbar navbar-inverse navbar-fixed-top">
    <div className="container-fluid">
      <div className="navbar-header">
        <h1 className="navbar-brand">Smart Cards</h1>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <form className="navbar-form navbar-right">
          <select
            className="form-control"
            onChange={(e) => onUserChange(e.target.value)}>
            <option className="placeholder" selected disabled value="Select User">Select User</option>
            {
              users.map((user) =>
                <User key={user.id} {...user}/>
              )
            }
          </select>
        </form>
      </div>
    </div>
  </nav>
);


header.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired
  }).isRequired).isRequired,
  onUserChange: PropTypes.func.isRequired
};

export default header



