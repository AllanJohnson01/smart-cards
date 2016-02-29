/**
 * Created by allanjohnson on 2/19/16.
 */
import React from 'react'
import { addCard } from '../../actions'
import { connect } from 'react-redux'
import Card from './Card'

let AddCard = ({ dispatch }) => {
  let frontInput;
  let backInput;

  return (
    <div>
      <textarea  ref={node => {
      frontInput = node
      }} />
      <br/>
      <textarea ref={node => {
      backInput = node
      }} />
      <br/>

      <button onClick={() => {
        dispatch(addCard(frontInput.value, backInput.value));
        frontInput.value = '';
        backInput.value = ''
      }}>
        Add New Card
      </button>
    </div>
  )
};
AddCard = connect()(AddCard);

const Cards = ({cards}) => (
  <div>
    <AddCard />
    {cards.map((card) =>
      <Card key={card.id} {...card} />
    )}
  </div>
);

const EditCardDeck = ({cards}) => {
  if (cards) {
    return(
      <fieldset>
        <legend>
          Edit Deck
        </legend>
        <Cards cards={cards} />
      </fieldset>
    );
  } else {
    return <section style={{ display: 'none' }}></section>
  }
};

export default EditCardDeck;
