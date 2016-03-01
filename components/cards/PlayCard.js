/**
 * Created by adjohnso on 2/29/2016.
 */
import React, {PropTypes} from 'react'
import Card from './Card'


const PlayCard = ({cards, onCorrectClick, onIncorrectClick }) => {
  let r = Math.floor(Math.random() * cards.length);
  let card = cards[r];
  console.log('card.id: ' + card.id);
  return (
    <fieldset>
      <legend>Play Section</legend>
      <div>
        <Card {...card} />
        <span><button onClick={() => onCorrectClick(card.id)}>Got it!</button></span>
        <span><button onClick={() => onIncorrectClick(card.id)}>Needs work</button></span>
      </div>
    </fieldset>
  )
};

PlayCard.PropTypes = {
  cards: PropTypes.array.isRequired,
  onCorrectClick: PropTypes.func.isRequired,
  onIncorrectClick: PropTypes.func.isRequired
};

export default PlayCard