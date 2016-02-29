/**
 * Created by allanjohnson on 2/21/16.
 */
import { createSelector } from 'reselect'

const getDeckVisibilityFilter = (state) => state.deckVisibilityFilter;
const getDecks = (state) => state.decks;
const getActiveUser = (state) => state.users.find(u => u.active);
const getEditableDeck = (state) => state.decks.find(d => d.editing);
const getCards = (state) => state.cards;

const getDecksForCurrentUser = createSelector([getActiveUser, getDecks ],
  (activeUser, decks) => {
    return activeUser.decksById.map(id => {
      return decks.find(d => id === d.id);
    })
  }
);

export const getActiveDeckForCurrentUser = createSelector([getDecksForCurrentUser, getCards],
  (decks, cards) => {
    let deck = decks.find(d => d.active);
    let cardsInDeck = deck.cardsById.map(d => cards.find(c => d == c.id));
    return cardsInDeck;
  }
) ;

export const getVisibleDecks = createSelector(
  [ getDeckVisibilityFilter, getDecksForCurrentUser ],
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
    if (deck) {
      return deck.cardsById.map(id => {
        return cards.find(c => id === c.id);
      });
    }
  }
);
