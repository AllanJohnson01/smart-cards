import { combineReducers } from 'redux'
import cards from './cards'
import decks from './decks'
import deckVisibilityFilter from './deckVisibilityFilter'
import users from './users'

const smartCardApp = combineReducers({
  cards,
  decks,
  deckVisibilityFilter,
  users
});

export default smartCardApp
