/**
 * Created by allanjohnson on 2/14/16.
 */
const card = (state, action) => {
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

const cards = (state = [], action) => {
  switch (action.type) {
    case 'ADD_DECK':
      return [
        ...state,
        card(undefined, action)
      ];
    case 'TOGGLE_DECK':
      return state.map(t =>
        card(t, action)
      );
    default:
      return state
  }
};

export default cards
