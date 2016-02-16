/**
 * Created by allanjohnson on 2/14/16.
 */
const card = (state, action) => {
  console.log('userReducer was called with state', state, 'and action', action);
  switch (action.type) {
    case 'ADD_CARD':
      return {
        id: action.id,
        frontText: action.frontText,
        backText: action.backText,
        completed: false
      };
    default:
      return state
  }
};

const cards = (state = [], action) => {
  console.log('userReducer was called with state', state, 'and action', action);
  switch (action.type) {
    case 'ADD_DECK':
      return [
        ...state,
        card(undefined, action)
      ];
    default:
      return state
  }
};

export default cards
