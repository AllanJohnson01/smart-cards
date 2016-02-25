import { connect } from 'react-redux'
import { setDeckVisibilityFilter } from '../actions'
import FilterLink from '../components/decks/FilterLink'

const mapStateToProps = (state, ownProps) => {
  return {
    active: ownProps.filter === state.deckVisibilityFilter
  }
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setDeckVisibilityFilter(ownProps.filter))
    }
  }
};

const DeckFilterLink = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterLink);

export default DeckFilterLink
