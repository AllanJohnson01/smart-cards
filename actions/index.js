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
export const levelUpCard = (id) => {
  return {
    type: types.LEVEL_UP_CARD,
    id
  }
};

//Todo:
export const levelDownCard = (id) => {
  return {
    type: types.LEVEL_DOWN_CARD,
    id
  }
};

//Todo:
export const changeShowCount = (number) => {
  return {
    type: types.CHANGE_SHOW_COUNT,
    number
  }
};

