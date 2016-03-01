import users from './users'

const initialState = [
  {
    id: 0,
    text: "JavaScript Interview Questions",
    completed: false,
    active: true,
    editing: false,
    cardsById: [0,1]
  },
  {
    id: 1,
    text: "ES2015",
    completed: false,
    active: false,
    editing: false,
    cardsById: [1,2]
  },
  {
    id: 2,
    text: "1st grade sight words",
    completed: false,
    active: false,
    editing: false,
    cardsById: [2,0]
  }
];


//Todo: make the ADD_DECK case also edit the deck.
const deck = (state, action) => {
  switch (action.type) {
    case 'ADD_DECK':
      return {
        id: action.id,
        text: action.text,
        completed: false,
        editing: false,
        cardsById: [0]
        };
    case 'ACTIVATE_DECK':
      return (state.id === action.id) ?
        Object.assign({}, state, {active: true, editing: false}):
        Object.assign({}, state, {active: false, editing: false});

    case 'EDIT_DECK':
      return (state.id === action.id) ?
        Object.assign({}, state, {editing: true}):
        Object.assign({}, state, {editing: false});

    case 'TOGGLE_DECK':
      if (state.id !== action.id) {
        return state
      }
      return Object.assign({}, state, {
        completed: !state.completed
      });

    case 'ADD_CARD':
      return (state.active ? Object.assign({}, state, {cardsById: [...state.cardsById, action.id]}) : state);
    default:
      return state
  }
};

const decks = (state = initialState, action) => {
  console.log('decks reducer was called with state', state, 'and action', action);
  switch (action.type) {
    case 'ADD_DECK':
      return [
        ...state,
        deck(undefined, action)
      ];
    case 'ACTIVATE_DECK':
      return state.map(d => deck(d, action));
    case 'EDIT_DECK':
      return state.map(d => deck(d, action));
    case 'TOGGLE_DECK':
      return state.map(d => deck(d, action));
    case 'ADD_CARD':
      return state.map(c => deck(c, action));
    default:
      return state
  }
};

export default decks
