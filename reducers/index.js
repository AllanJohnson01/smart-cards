import { combineReducers } from 'redux'
import decks from './decks'
import deckVisibilityFilter from './deckVisibilityFilter'
import userSelection from './userSelection'

const smartCardApp = combineReducers({
  decks,
  deckVisibilityFilter,
  userSelection
});

export default smartCardApp
