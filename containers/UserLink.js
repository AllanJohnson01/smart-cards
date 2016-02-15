/**
 * Created by allanjohnson on 2/13/16.
 */
import { connect } from 'react-redux'
import { setUser } from '../actions'
import User from '../components/User'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.userId === state.userSelection
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setUser(ownProps.userName))
    }
  }
};

const UserLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(User);

export default UserLink
