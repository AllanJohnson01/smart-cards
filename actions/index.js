import * as types from '../constants/ActionTypes'


let nextDeckId = 3;
export const addDeck = (text) => {
  return {
    type: types.ADD_DECK,
    id: nextDeckId++,
    text
  };

  //-------this was just to simulate async functionality
/*  return (dispatch) => {
    setTimeout(() => {
      console.log(new Date(), 'Dispatch action now:');
      dispatch({
        type: 'ADD_DECK',
        id: nextDeckId++,
        text
      })
    }, 2000)
  }*/
};

export const setDeckVisibilityFilter = (filter) => {
  return {
    type: types.SET_DECK_VISIBILITY_FILTER,
    filter
  }
};

export const activateDeck = (id) => {
  return {
    type: types.ACTIVATE_DECK,
    id
  }
};


//Optional Todo: add a check or 'x' button to the decks to complete / delete.
export const toggleDeck = (id) => {
  return {
    type: types.TOGGLE_DECK,
    id
  }
};


let nextUserId = 2;
//Optional Todo: add a form to create a new user
export const addUser = (userName) => {
  "use strict";
  return {
    type: types.ADD_USER,
    userId: nextUserId++,
    userName
  }
};


//Done
export const setUser = (id) => {
  return {
    type: types.SET_USER,
    id
  }
};

//Done: Add a new card
let nextCardId = 3;
export const addCard = (cardFront, cardBack) => {
  return {
    type: types.ADD_CARD,
    id: nextCardId++,
    cardFront,
    cardBack
  }
};

//Done: Change mode from playing to edit
export const editDeck = (id) => {
  return {
    type: types.EDIT_DECK,
    id
  }
};

//Todo:
export const editCard = (id, frontText, backText) => {
  return {
    type: types.EDIT_CARD,
    id,
    frontText,
    backText
  }
};

//Todo:
export const deleteCard = (id, frontText, backText) => {
  return {
    type: types.DELETE_CARD,
    id,
    frontText,
    backText
  }
};

//Todo:
export const levelUpCard = (card) => {
  if(card.rightInARow === 0) {
    return {
      type: types.GOT_IT,
      id: card.id
    }
  }else if (card.rightInARow > 0) {
    return {
      type: types.LEVEL_UP_CARD,
      id: card.id
    }
  }
};

//Todo:
export const levelDownCard = (card) => {
  return {
    type: types.LEVEL_DOWN_CARD,
    id: card.id
  }
};

export const startSession = (count, cards) => {
  const cardsThisRound = [];
    cards.forEach((c) => {
      if (cardsThisRound.length < (count / 5)) {
        if (c.level < 5 ) {
          cardsThisRound.push(c);
          return;
        }
      }
      if (cardsThisRound.length < (count / 5) * 2) {
        if (c.level < 4 ) {
          cardsThisRound.push(c);
          return
        }
      }
      if (cardsThisRound.length < (count / 5) * 3) {
        if (c.level < 3 ) {
          cardsThisRound.push(c);
          return;
        }
      }
      if (cardsThisRound.length < (count / 5) * 4) {
        if (c.level < 2 ) {
          cardsThisRound.push(c);
          return;
        }
      }
      if (cardsThisRound.length < (count / 5) * 5) {
        if (c.level < 1 ) {
          cardsThisRound.push(c);
        }
      }
  });
  return {
    type: types.START_SESSION,
    cardsThisRound
  }
};

