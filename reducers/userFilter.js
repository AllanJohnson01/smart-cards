/**
 * Created by allanjohnson on 2/13/16.
 */

const userFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'SET_USER':
            return action.filter;
        default:
            return state;
    }
};

export default userFilter