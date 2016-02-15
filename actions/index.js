import * as types from '../constants/ActionTypes'


let nextDeckId = 0;
export const addDeck = (text) => {
  return {
    type: 'ADD_DECK',
    id: nextDeckId++,
    text
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

let nextUserId = 0;
export const setUser = (userName) => {
  return {
    type: 'SET_USER',
    id: nextUserId++,
    userName
  }
};

let nextCardId = 0;
export const addCard = (frontText, backText) => {
  return {
    type: 'ADD_CARD',
    id: nextCardId++,
    frontText,
    backText
  }
};

export const editCard = (id, frontText, backText) => {
  return {
    type: 'EDIT_CARD',
    id,
    frontText,
    backText
  }
};

export const levelUpCard = (id) => {
  return {
    type: 'LEVEL_UP_CARD',
    id
  }
};

export const levelDownCard = (id) => {
  return {
    type: 'LEVEL_DOWN_CARD',
    id
  }
};

export const changeShowCount = (number) => {
  return {
    type: types.CHANGE_SHOW_COUNT,
    number
  }
};

