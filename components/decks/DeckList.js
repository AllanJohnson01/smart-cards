import React, { PropTypes } from 'react'
import Deck from './Deck'

const DeckList = ({ decks, onActivate, onEdit }) => (
  <ul>
    {decks.map(deck =>
      <Deck
        key={deck.id}
        {...deck}
        onActivate={() => onActivate(deck.id)}
        onEdit={() => onEdit(deck.id)}
      />
    )}
  </ul>
);

DeckList.propTypes = {
  decks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onActivate: PropTypes.func.isRequired
};

export default DeckList
