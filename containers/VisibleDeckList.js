import { connect } from 'react-redux'
import { toggleDeck } from '../actions'
import DeckList from '../components/DeckList'


const getVisibleDecks = (decks, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return decks;
    case 'SHOW_COMPLETED':
      return decks.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return decks.filter(t => !t.completed)
  }
};

const mapStateToProps = (state) => {
  return {
    decks: getVisibleDecks(state.decks, state.deckVisibilityFilter)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDeckClick: (id) => {
      dispatch(toggleDeck(id))
    }
  }
};

const VisibleDeckList = connect(
  mapStateToProps,
  mapDispatchToProps
)(DeckList);

export default VisibleDeckList
