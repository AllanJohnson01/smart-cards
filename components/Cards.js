/**
 * Created by allanjohnson on 2/19/16.
 */
import React from 'react'
import { connect } from 'react-redux'
import { addCard } from '../action'


const CardFront = () => (
  <div>
    <p>I'm the front of a card></p>
  </div>
);

const CardBack = () => (
  <div>
    <p>I'm the back of a card></p>
  </div>
);

const Card = () => (
  <div>
    <h4>I'm a Card</h4>
    <CardFront />
    <CardBack />
  </div>
);

const Cards = (cards) => (
  <div>
    cards.map(card => {
    <Card key={card.id} {...card} />
  })
  </div>
);





const ModeSetter = (mode) => (
  <div>
    <span>Play</span>
    <span>Edit</span>
  </div>
);

const CardSection = (cards) => (
  <section>
    <ModeSetter />
    <AddCard />
    cards.map((card) => {
    <Card key={card.id} {...card} />
  }
  </section>
);

const mapStateToProps = (state)  => {
  return {
      cards: state.cards,
      mode: state.mode
    };
};


const mapDispatchToProps = (dispatch) => {
  return
};

const CardSectionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CardSection);


export default CardSectionContainer;















