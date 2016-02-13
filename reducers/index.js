/**
 * Created by allanjohnson on 2/13/16.
 */

import { combineReducers } from 'redux'

import cardDecks from './decks'
import deckVisibilityFilter from './deckVisibilityFilter'
//import userFilter from './userFilter'

const smartCardApp = combineReducers({
    cardDecks,
    deckVisibilityFilter//,
    //userFilter
});

export default smartCardApp
