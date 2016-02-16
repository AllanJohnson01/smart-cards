/**
 * Created by allanjohnson on 2/13/16.
 */
import { connect } from 'react-redux'
import { setUser } from '../actions'
import Users from '../components/User'

const mapStateToProps = (state) => {
  return {
    state.users
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (userId) => {
      dispatch(setUser(userId))
    }
  }
};

const UserLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(Users);

export default UserLink
