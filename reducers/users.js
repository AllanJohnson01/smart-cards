/**
 * Created by allanjohnson on 2/13/16.
 */

  const initialState = [
  {
    id: 0,
    userName: 'TeisMan',
    active: true,
    decksById: [0,1]
  },
  {
    userName: 'JosieGirl',
    id: 1,
    active: false,
    decksById: [0]
  }
];

const users =(state = initialState, action) => {
  console.log('users reducer was called with state', state, 'and action', action);
  switch (action.type) {
    case 'setUser':
        if (state.id === action.id) {
          return {active: true};
        } else {
          return {active: false}
        }
    case 'addDeck':

    default:
      return state;
  }
};

export default users