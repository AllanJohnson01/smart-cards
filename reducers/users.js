/**
 * Created by allanjohnson on 2/13/16.
 */
import { SET_USER } from '../constants/ActionTypes'
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
      console.log("State.id: " + state.id + " Action.id: " + action.id);
      let newState =  (state.id === action.id) ?
        Object.assign({}, state, {active: true}):
        Object.assign({}, state, {active: false});
      console.log("state.active: " + state.active);
      return newState;
    default:
      return state;
  }
};

const users =(state = initialState, action) => {
  console.log('users reducer was called with state', state, 'and action', action);
  switch (action.type) {
    case SET_USER:
      console.log(state);
      return state.map(u => user(u, action));

    default:
      return state;
  }
};

export default users