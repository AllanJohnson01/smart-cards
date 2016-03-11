/**
 * Created by adjohnso on 2/29/2016.
 */
import React, {PropTypes} from 'react'
import Card from './Card'
import { levelUpCard, levelDownCard } from '../../actions'
import { connect } from 'react-redux'
import {Panel} from 'react-bootstrap'


let PlayCard = ({cards, dispatch}) => {
  let r = Math.floor(Math.random() * cards.length);
  let card = cards[r];
  return (
    <Panel>
      <fieldset>
        <legend>Play Section</legend>
        <Panel>
          <Card {...card} />
          <span><button onClick={() => dispatch(levelUpCard(card))}>Got it!</button></span>
          <span><button onClick={() => dispatch(levelDownCard(card))}>Needs work</button></span>
        </Panel>
      </fieldset>
    </Panel>

  )
};

PlayCard.PropTypes = {
  cards: PropTypes.array.isRequired,
  onCorrectClick: PropTypes.func.isRequired,
  onIncorrectClick: PropTypes.func.isRequired
};


PlayCard = connect()(PlayCard);

export default PlayCard