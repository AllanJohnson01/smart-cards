/**
 * Created by allanjohnson on 2/13/16.
 */

const userSelection =(state = 1, action) => {
  switch (action.type) {
    case 'setUser':
      return action.userName;
    default:
      return state;
  }
};

export default userSelection