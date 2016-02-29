/**
 * Created by adjohnso on 2/24/2016.
 */

import { connect } from 'react-redux'
import { addCard } from '../actions'
import { getEditableCards } from '../selectors'
import EditCardDeck from '../components/cards/EditCardSection'
import PlaySection from '../components/cards/PlaySection'

const getEditableDeck = (state) => state.decks.find(d => d.editing);

const MainSection = () => {
  return <div>
    <EditCardDeck />
    <PlaySection />
  </div>
};


const mapStateToProps = (state) => {
  let didGetCards = getEditableCards(state);
  return didGetCards ? {cards: didGetCards} : {}
};

/*const mapDispatchToProps = (dispatch) => {
  return {
    addCardClick: (cardFront, cardBack) => {
      dispatch(addCard(cardFront, cardBack))
    }
  }
};*/

const EditCardsContainer = connect(
  mapStateToProps
)(EditCardDeck);


export default EditCardsContainer;