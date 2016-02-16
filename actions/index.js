import * as types from '../constants/ActionTypes'


let nextDeckId = 0;
export const addDeck = (text) => {
  return (dispatch) => {
    setTimeout(() => {
      console.log(new Date(), 'Dispatch action now:')
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

//Todo:

export const setUser = (userId) => {
  return {
    type: types.SET_USER,
    userId
  }
};

//Todo:

let nextCardId = 0;
export const addCard = (frontText, backText) => {
  return {
    type: 'ADD_CARD',
    id: nextCardId++,
    frontText,
    backText
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

