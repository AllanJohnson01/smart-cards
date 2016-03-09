/**
 * Created by allanjohnson on 2/13/16.
 */
import { connect } from 'react-redux'
import { setUser } from '../actions'
import Header from '../components/header/Header'

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
)(Header);

export default UserLink
