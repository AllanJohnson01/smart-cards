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
    <fieldset>
      <legend>
        Play Section
      </legend>
      <div>
        <Card {...card} />
        <span><button>Got it!</button></span>
        <span><button>Needs work</button></span>
      </div>
    </fieldset>
  )
};


export default PlaySection;