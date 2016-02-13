/**
 * Created by allanjohnson on 2/13/16.
 */

let nextDeckId = 0;
export const addDeck = (text) => {
    return {
        type: 'ADD_DECK',
        id: nextDeckId++,
        text
    }
};

export const setDeckVisibilityFilter = (filter) => {
    return {
        type: 'SET_DECK_VISIBILITY_FILTER',
        filter
    }
};

export const toggleDeck = (id) => {
    return {
        type: 'TOGGLE_DECK',
        id
    }
};