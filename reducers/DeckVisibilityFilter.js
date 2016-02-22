const deckVisibilityFilter = (state = 'SHOW_ALL', action) => {
  console.log('deckVisibilityFilter reducer was called with state', state, 'and action', action);
  switch (action.type) {
    case 'SET_DECK_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state
  }
};

export default deckVisibilityFilter
