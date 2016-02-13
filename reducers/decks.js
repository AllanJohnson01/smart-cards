/**
 * Created by allanjohnson on 2/13/16.
 */

const deck = (state, action) => {
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

const decks = (state = [], action) => {
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
