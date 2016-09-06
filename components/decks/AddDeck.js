import React from 'react'
import { connect } from 'react-redux'
import { addDeck, pingEpic } from '../../actions'

let AddDeck = ({ dispatch }) => {
  let input;

  return (
    <div>
      <input ref={node => {
        input = node
      }} />
      <button onClick={() => {
        dispatch(pingEpic());
        //dispatch(addDeck(input.value));
        input.value = ''
      }}>
        Add Deck
      </button>
    </div>
  )
};
AddDeck = connect()(AddDeck);

export default AddDeck
