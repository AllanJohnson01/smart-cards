/**
 * Created by allanjohnson on 2/13/16.
 */
import { SET_USER, ADD_DECK } from '../constants/ActionTypes'
  const initialState = [
  {
    id: 0,
    userName: 'TeisMan',
    active: true,
    decksById: [0,1,2],
    completedDecks: []
  },
  {
    id: 1,
    userName: 'JosieGirl',
    active: false,
    decksById: [0,2],
    completedDecks: []
  }
];
const user = (state, action) => {
  switch (action.type) {
    case SET_USER:
      return (state.id == action.id) ?
        Object.assign({}, state, {active: true}):
        Object.assign({}, state, {active: false});
    case ADD_DECK:
      return (state.active) ?
        Object.assign({}, state, {decksById: [...state.decksById, action.id]}) :
        state;
    default:
      return state;
  }
};

const users =(state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return state.map(u => user(u, action));
    case ADD_DECK:
      return state.map(u => user(u, action));
    default:
      return state;
  }
};

export default users