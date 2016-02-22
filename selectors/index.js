/**
 * Created by allanjohnson on 2/21/16.
 */
import { createSelector } from 'reselect'

const getDeckVisibilityFilter = (state) => state.deckVisibilityFilter;
const getDecks = (state) => state.decks;

const getActiveUserDeckIds = (state) => {
  let user =  state.users.find(u => (u.active));
  return user.decksById;
};


const getUserDecks = createSelector([getDecks, getActiveUserDeckIds],
  (decks, decksById) => {
    console.log(decksById);
    decksById.map(id => {
    decks.find(d => id === d.id)
  })}
);


export const getVisibleDecks = createSelector(
  [ getDeckVisibilityFilter, getUserDecks ],
  (deckVisibilityFilter, decks)  => {
    switch (deckVisibilityFilter) {
      case 'SHOW_ALL':
        return decks;
      case 'SHOW_COMPLETED':
        return decks.filter(d => d.completed);
      case 'SHOW_ACTIVE':
        return decks.filter(d => !d.completed)
    }
  }
);

