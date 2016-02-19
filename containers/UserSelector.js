/**
 * Created by allanjohnson on 2/13/16.
 */
import { connect } from 'react-redux'
import { setUser } from '../actions'
import Users from '../components/User'

const mapStateToProps = (state) => {
  console.log("Map State To Props");
  return
};

const mapDispatchToProps = (dispatch) => {
  console.log("Map Dispatch To Props");

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
