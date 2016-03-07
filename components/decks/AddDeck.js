import React from 'react'
import { connect } from 'react-redux'
import { addDeck } from '../../actions'

let AddDeck = ({ dispatch }) => {
  let input;

  return (
    <div>
      <input ref={node => {
        input = node
      }} />
      <button onClick={() => {
        dispatch(addDeck(input.value));
        input.value = ''
      }}>
        Add Deck
      </button>
    </div>
  )
};
AddDeck = connect()(AddDeck);

export default AddDeck
