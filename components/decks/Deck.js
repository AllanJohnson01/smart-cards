import React, { PropTypes } from 'react'


// Todo: change complete to active,
// Todo: change name of onClick here and in the container.
const Deck = ({ onActive, onEdit, active, text }) => (
  <li>
    <span
    onClick={onActive}
    style={{
      color: active ? 'black' : 'grey'
    }}
    >
     {text}
    </span>
    <button onClick={onEdit}>
      edit
    </button>
  </li>
);

Deck.propTypes = {
  onActive: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Deck
