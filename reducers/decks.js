import users from './users'

const initialState = [
  {
    id: 0,
    text: "1st grade sight words",
    completed: false,
    active: true
  },
  {
    id: 1,
    text: "Superman words",
    completed: false,
    active: false
  },
  {
    id: 2,
    text: "Addition",
    completed: false,
    active: false
  }
];

const deck = (state, action) => {
  console.log('deck reducer was called with state', state, 'and action', action);
  switch (action.type) {
    case 'ADD_DECK':
      return {
        id: action.id,
        text: action.text,
        completed: false
        };
    case 'TOGGLE_DECK':
      if (state.id !== action.id) {
        return state
      }

      return Object.assign({}, state, {
        completed: !state.completed
      });
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
    case 'TOGGLE_DECK':
      return state.map(t =>
        deck(t, action)
      );
    default:
      return state
  }
};

export default decks
