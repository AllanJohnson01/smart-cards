/* @flow */
import React, {PropTypes} from 'react'
import Card from './Card'
import { levelUpCard, levelDownCard } from '../../actions'
import { connect } from 'react-redux'


let PlayCard = ({cards, dispatch}) => {
  let r = Math.floor(Math.random() * cards.length);
  let card = cards[r];
  return (
    <div>
      <fieldset>
        <legend>Play Section</legend>
        <div>
          <Card {...card} />
          <span><button onClick={() => dispatch(levelUpCard(card))}>Got it!</button></span>
          <span><button onClick={() => dispatch(levelDownCard(card))}>Needs work</button></span>
        </div>
      </fieldset>
    </div>

  )
};

PlayCard.PropTypes = {
  cards: PropTypes.array.isRequired,
  onCorrectClick: PropTypes.func.isRequired,
  onIncorrectClick: PropTypes.func.isRequired
};


PlayCard = connect()(PlayCard);

export default PlayCard
