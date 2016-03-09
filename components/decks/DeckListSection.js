import React, { PropTypes } from 'react'
import Deck from './Deck'
import AddDeck from './AddDeck'
//Took DeckFilter out while it's not relevant
import DeckFilter from './DeckFilter'
import 'bootstrap-webpack'
import '../../css/dashboard.css'

const DeckListSection = ({ decks, onActivate, onEdit }) => (
  <fieldset>
    <legend>Card Decks</legend>
    <div className="row">
      <AddDeck />
    </div>
    <ul className="nav nav-sidebar">
    {decks.map(deck =>
        <Deck
          key={deck.id}
          {...deck}
          onActive={() => onActivate(deck.id)}
          onEdit={() => onEdit(deck.id)}
        />
      )}
    </ul>
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
