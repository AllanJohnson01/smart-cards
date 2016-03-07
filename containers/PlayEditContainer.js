/**
 * Created by adjohnso on 2/24/2016.
 */
import React from 'react'
import { connect } from 'react-redux'
import { addCard } from '../actions'
import { getDeckOrCards, getCardsForCurrentDeck } from '../selectors'
import EditCardSection from './EditCardSection'
import PlayCardsContainer from './PlayCardsContainer'

let editing = false;
const MainSection = ({cards, decks}) => {
  if (editing) {
    return <EditCardSection />
  } else {
    return <PlayCardsContainer cards={cards} />
  }
};

//todo
const mapStateToProps = (state) => {
  if (getDeckOrCards(state)) {
    editing = true;
    return state
  } else {
    editing = false;
    return {cards: getCardsForCurrentDeck(state)}
  }
};


const EditCardsContainer = connect(
  mapStateToProps
)(MainSection);


export default EditCardsContainer;
