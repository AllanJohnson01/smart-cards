/**
 * Created by allanjohnson on 2/21/16.
 */
import { createSelector } from 'reselect'

const getDeckVisibilityFilter = (state) => state.deckVisibilityFilter;
const getDecks = (state) => state.decks;
const getActiveUser = (state) => state.users.find(u => u.active);
const getEditableDeck = (state) => state.decks.find(d => d.editing);
const getCards = (state) => state.cards;

const getActiveUserDecks = createSelector([getActiveUser, getDecks ],
  (activeUser, decks) => {
    return activeUser.decksById.map(id => {
      return decks.find(d => id === d.id);
    })
  }
);


export const getVisibleDecks = createSelector(
  [ getDeckVisibilityFilter, getActiveUserDecks ],
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

export const getEditableCards = createSelector([getEditableDeck, getCards],
  (deck, cards) => {
    console.log(deck);
    if (deck) {
      return deck.cardsById.map(id => {
        return cards.find(c => id === c.id);
      });
    }
  }
);
