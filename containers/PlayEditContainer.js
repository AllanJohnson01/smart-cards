/**
 * Created by adjohnso on 2/24/2016.
 */
import React from 'react'
import { connect } from 'react-redux'
import { addCard } from '../actions'
import { getDeckOrCards, getActiveDeckForCurrentUser } from '../selectors'
import EditCardSection from './EditCardSection'
import PlayCardsContainer from './PlayCardsContainer'
import StartRound from '../components/cards/StartRound'

let editing = false;
let playing = false;
const MainSection = ({cards, decks}) => {
  console.log(cards);
  if (editing) {
    return <EditCardSection />
  } else if (playing) {
    return  <PlayCardsContainer />
  } else {
    return <StartRound cards={cards} />
  }
};

//todo
const mapStateToProps = (state) => {
  if (getDeckOrCards(state)) {
    editing = true;
    return state
  } else {
    editing = false;
    return {cards: getActiveDeckForCurrentUser(state)}
  }
};


const EditCardsContainer = connect(
  mapStateToProps
)(MainSection);


export default EditCardsContainer;
