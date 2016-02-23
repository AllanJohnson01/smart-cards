/**
 * Created by allanjohnson on 2/21/16.
 */
import { createSelector } from 'reselect'

const getDeckVisibilityFilter = (state) => state.deckVisibilityFilter;
const getDecks = (state) => state.decks;
const getActiveUser = (state) => {
  console.log("getActiveUser: " + state.users.find(u => {
      console.log("u.active: " + u.active);
      if (u.active) return u}));
  return state.users.find(u => u.active);
};

const getActiveUserDecks = createSelector([getActiveUser, getDecks ],
  (activeUser, decks) => {
    console.log(activeUser);
    console.log("In getActiveUserDecks selector");
    return activeUser.decksById.map(id => {
      return decks.find(d => id === d.id);
    })
  }
);


export const getVisibleDecks = createSelector(
  [ getDeckVisibilityFilter, getActiveUserDecks ],
  (deckVisibilityFilter, decks)  => {
    console.log("In getVisibleDecks selector");
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


/*const getActiveUserDeckIds = (state) => {
 let user =  state.users.find(u => (u.active));
 return user.decksById;
 };

 const getUserDecks = createSelector([getDecks, getActiveUserDeckIds],
 (decks, decksById) => {
 return decksById.map(id => {
 return decks.find(d => id === d.id);
 })}
 );*/
