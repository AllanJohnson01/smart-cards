/**
 * Created by allanjohnson on 2/13/16.
 */
import { connect } from 'react-redux'
import { activateDeck, editDeck } from '../actions'
import DeckListSection from '../components/decks/DeckListSection'
import { getVisibleDecks } from '../selectors'


const mapStateToProps = (state) => {
  return {
    decks: getVisibleDecks(state)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onActivate: (id) => {
      dispatch(activateDeck(id))
    },
      onEdit: (id) => {
      dispatch(editDeck(id))
    }
  }
};

const VisibleDeckList = connect(mapStateToProps, mapDispatchToProps)(DeckListSection);

export default VisibleDeckList
