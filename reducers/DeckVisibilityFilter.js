/**
 * Created by allanjohnson on 2/13/16.
 */

const deckVisibilityFilter = (state = 'SHOW_ALL', action) => {
    switch (action.type) {
        case 'SET_DECK_VISIBILITY_FILTER':
            return action.filter;
        default:
            return state;
    }
};

export default deckVisibilityFilter
