import React, { PropTypes } from 'react'
import Deck from './Deck'

const DeckList = ({ decks, onDeckClick }) => (
  <ul>
    {decks.map(deck =>
      <Deck
        key={deck.id}
        {...deck}
        onClick={() => onDeckClick(deck.id)}
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
  onDeckClick: PropTypes.func.isRequired
};

export default DeckList
