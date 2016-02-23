/**
 * Created by allanjohnson on 2/13/16.
 */
import { connect } from 'react-redux'
import { setUser } from '../actions'
import Users from '../components/Users'

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onUserChange: (id) => {
      dispatch(setUser(id))
    }
  }
};

const UserLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);

export default UserLink
