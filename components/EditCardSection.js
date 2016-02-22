/**
 * Created by allanjohnson on 2/19/16.
 */
import React from 'react'
import { connect } from 'react-redux'
import { addCard } from '../actions'


const Card = ({ id, cardFront, cardBack }) => (
  <div>
    <h4>Card {id} </h4>
    <div>
      <p>{cardFront}</p>
    </div>
    <div>
      <p>{cardBack}</p>
    </div>
  </div>
);

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

/*const AddCard = ({addCardClick}) => (
  <input/>
  <button onClick={addCardClick} >Add Card</button>
);*/

const Cards = ({cards}) => (
  <div>
    <AddCard />
    {cards.map((card) =>
      <Card key={card.id} {...card} />
    )}
  </div>
);

const EditCardDeck = ({cards}) => (
  <section>
      <Cards cards={cards} />
  </section>
);

const mapStateToProps = (state) => {
  return {
    cards: state.cards
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    addClick: () => {
      dispatch(addCard(frontText, backText))
    }
  }
};

const EditCardsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCardDeck);


export default EditCardsContainer;