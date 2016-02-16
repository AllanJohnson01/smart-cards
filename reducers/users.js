/**
 * Created by allanjohnson on 2/13/16.
 */
  const initialState = [
  {
    userName: 'TeisMan',
    userId: 0
  },
  {
    userName: 'JosieGirl',
    userId: 1
  }
];

const users =(state = initialState, action) => {
  console.log('users reducer was called with state', state, 'and action', action);
  switch (action.type) {
    case 'setUser':
      return {
        activeUser: action.userId
      };
    default:
      return state;
  }
};

export default users