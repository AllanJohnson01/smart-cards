/**
 * Created by allanjohnson on 2/13/16.
 */
import { connect } from 'react-redux'
import { toggleDeck } from '../actions'
import DeckList from '../components/DeckList'
import { getVisibleDecks } from '../selectors'


const mapStateToProps = (state) => {
  return {
    decks: getVisibleDecks(state)
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
