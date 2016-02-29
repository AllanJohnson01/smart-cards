import React, { PropTypes } from 'react'
import Deck from './Deck'
import AddDeck from './AddDeck'
import DeckFilter from './DeckFilter'

const DeckListSection = ({ decks, onActivate, onEdit }) => (
  <fieldset>
    <legend>Card Decks</legend>
    <AddDeck />
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
    <DeckFilter />
  </fieldset>
);

DeckListSection.propTypes = {
  decks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onActivate: PropTypes.func.isRequired
};

export default DeckListSection
