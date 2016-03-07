import users from './users'
import * as types from '../constants/ActionTypes'

const initialState = [
  {
    id: 0,
    text: "JavaScript Interview Questions",
    completed: false,
    active: true,
    editing: false,
    cardsById: [0,1],
    cardsThisRound: []
  },
  {
    id: 1,
    text: "ES2015",
    completed: false,
    active: false,
    editing: false,
    cardsById: [1,2],
    cardsThisRound: []
  },
  {
    id: 2,
    text: "1st grade sight words",
    completed: false,
    active: false,
    editing: false,
    cardsById: [2,0],
    cardsThisRound: []
  }
];


//Todo: make the ADD_DECK case also edit the deck.
const deck = (state, action) => {
  switch (action.type) {
    case types.ADD_DECK:
      return {
        id: action.id,
        text: action.text,
        completed: false,
        editing: false,
        cardsById: [0]
        };
    case types.ACTIVATE_DECK:
      return (state.id === action.id) ?
        Object.assign({}, state, {active: true, editing: false}):
        Object.assign({}, state, {active: false, editing: false});

    case types.EDIT_DECK:
      return (state.id === action.id) ?
        Object.assign({}, state, {editing: true}):
        Object.assign({}, state, {editing: false});

    case types.TOGGLE_DECK:
      if (state.id !== action.id) {
        return state
      }
      return Object.assign({}, state, {
        completed: !state.completed
      });

    case types.ADD_CARD:
      return (state.active ?
        Object.assign({}, state, {cardsById: [...state.cardsById, action.id]}) :
        state);
    case types.START_SESSION:
      return (state.active ?
        Object.assign({}, state, {cardsThisRound: action.cardsThisRound}):
        state);
    case types.LEVEL_UP_CARD:
      return (state.active ?
        Object.assign({}, state, {cardsThisRound: state.cardsThisRound.filter(c => {c !== action.id})}):
        state);
    default:
      return state
  }
};

const decks = (state = initialState, action) => {
  console.log('decks reducer was called with state', state, 'and action', action);
  switch (action.type) {
    case types.ADD_DECK:
      return [
        ...state,
        deck(undefined, action)
      ];
    case types.ACTIVATE_DECK:
      return state.map(d => deck(d, action));
    case types.EDIT_DECK:
      return state.map(d => deck(d, action));
    case types.TOGGLE_DECK:
      return state.map(d => deck(d, action));
    case types.ADD_CARD:
      return state.map(c => deck(c, action));
    case types.START_SESSION:
      return state.map(d => deck(d, action));
    case types.LEVEL_UP_CARD:
      return state.map(d => deck(d, action));

    default:
      return state
  }
};

export default decks
