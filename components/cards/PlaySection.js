/**
 * Created by adjohnso on 2/25/2016.
 */
import React from 'react'
import { connect } from 'react-redux'
import { getActiveDeckForCurrentUser } from '../../selectors'
import Card from './Card'

const CurrentCard = () => (
  <div>
    Hello, I'm the current card
  </div>
);


const PlaySection = ( {cards} ) => {
  let r = Math.floor(Math.random() * cards.length);
  let card = cards[r];
  return (
    <div>
      <Card {...card} />
      <span><button>Got it!</button></span>
      <span><button>Needs work</button></span>
    </div>
  )
};

//This can be simplified, but i'm waiting to refactor for a few other changes
const mapStateToProps = (state) => {
  let deck = getActiveDeckForCurrentUser(state);
  console.log(deck);
  if (deck) {
    return { cards: deck }
  } else {
    return { }
  }
};

const PlayContainer = connect( mapStateToProps )(PlaySection);

export default PlayContainer;