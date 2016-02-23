import * as types from '../constants/ActionTypes'


let nextDeckId = 3;
export const addDeck = (text) => {
  return (dispatch) => {
    setTimeout(() => {
      console.log(new Date(), 'Dispatch action now:');
      dispatch({
        type: 'ADD_DECK',
        id: nextDeckId++,
        text
      })
    }, 2000)
  }
};

export const setDeckVisibilityFilter = (filter) => {
  return {
    type: 'SET_DECK_VISIBILITY_FILTER',
    filter
  }
};


//Todo: need to make the toggle reducer disable the deck, not complete it.
export const toggleDeck = (id) => {
  return {
    type: 'TOGGLE_DECK',
    id
  }
};


let nextUserId = 2;
//Todo: add a form to create a new user
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

//Todo: Add a new card
let nextCardId = 3;
export const addCard = (cardFront, cardBack) => {
  return {
    type: 'ADD_CARD',
    id: nextCardId++,
    cardFront,
    cardBack
  }
};

//Todo: Change mode from playing to edit
export const changeCardMode = (mode) => {
  return {
    type: 'CHANGE_MODE',
    mode
  }
};

//Todo:
export const editCard = (id, frontText, backText) => {
  return {
    type: 'EDIT_CARD',
    id,
    frontText,
    backText
  }
};

//Todo:
export const levelUpCard = (id) => {
  return {
    type: 'LEVEL_UP_CARD',
    id
  }
};

//Todo:
export const levelDownCard = (id) => {
  return {
    type: 'LEVEL_DOWN_CARD',
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

