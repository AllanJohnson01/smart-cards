/**
 * Created by adjohnso on 2/25/2016.
 */
import React from 'react'
import { connect } from 'react-redux'
import { getActiveDeckForCurrentUser } from '../../selectors'

const CurrentCard = () => (
  <div>
    Hello, I'm the current card
  </div>
);


const PlaySection = ( {cards} ) => {
  let r = Math.floor(Math.random() * cards.length);
  console.log("r: " +r)
  let card = cards[r];
  console.log("card number: " + card.id);
  return (
    <CurrentCard card={card} />
  )
};

const mapStateToProps = (state) => {
  let deck = getActiveDeckForCurrentUser(state);
  console.log(deck);
  if (deck) {
    return { cards: deck }
  } else {
    return { cards: state.cards }
  }
};

const PlayContainer = connect( mapStateToProps )(PlaySection);

export default PlayContainer;