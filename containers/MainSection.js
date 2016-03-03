/**
 * Created by adjohnso on 2/24/2016.
 */
import React from 'react'
import { connect } from 'react-redux'
import { addCard } from '../actions'
import { getDeckOrCards } from '../selectors'
import EditCardDeck from '../components/cards/EditCardSection'
import PlaySection from './PlaySection'

let editing = false;
const MainSection = ({cards}) => {
  if (editing) {
    return <EditCardDeck cards={cards} />
  } else {
    return <PlaySection cards={cards} />
  }
};

const mapStateToProps = (state) => {
  if (getDeckOrCards(state)) {
    editing = true;
    return {state}
  } else {
    editing = false;
    return {state}
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