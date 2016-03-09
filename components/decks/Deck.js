import React, { PropTypes } from 'react'
import 'bootstrap-webpack'
import 'font-awesome-webpack'

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
    <span
      onClick={onEdit}
    >
      <i className="fa fa-pencil"></i>
    </span>
  </li>
);

Deck.propTypes = {
  onActive: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
};

export default Deck
