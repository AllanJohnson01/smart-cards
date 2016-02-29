/**
 * Created by adjohnso on 2/24/2016.
 */
import React from 'react'
import { connect } from 'react-redux'
import { addCard } from '../actions'
import { getEditableCards, getActiveDeckForCurrentUser, getDeckOrCards } from '../selectors'
import EditCardDeck from '../components/cards/EditCardSection'
import PlaySection from '../components/cards/PlaySection'

let editing = false;

const MainSection = ({cards}) => {
  console.log(cards);
  if (editing) {
    return <EditCardDeck cards={cards} />
  } else {
    return <PlaySection cards={cards} />
  }
};

const mapStateToProps = (state) => {
  if (getDeckOrCards(state)) {
    editing = true;
    let didGetCards = getEditableCards(state);
    return didGetCards ? {cards: didGetCards} : {}
  } else {
    editing = false;
    let deck = getActiveDeckForCurrentUser(state);
    return { cards: deck }
  }
};


const EditCardsContainer = connect(
  mapStateToProps
)(MainSection);


export default EditCardsContainer;



/*const mapDispatchToProps = (dispatch) => {
 return {
 addCardClick: (cardFront, cardBack) => {
 dispatch(addCard(cardFront, cardBack))
 }
 }
 };*/