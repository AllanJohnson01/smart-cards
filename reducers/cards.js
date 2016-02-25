/**
 * Created by allanjohnson on 2/14/16.
 */

const initialState = [
  {
    id: 0,
    deckId: 0,
    cardFront: 'Card 1',
    cardBack: 'Super Cool',
    active: false,
    editing: false

  },
  {
    id: 1,
    deckId: 1,
    cardFront: 'Card 2',
    cardBack: 'Awesome',
    active: false,
    editing: false

  },
  {
    id: 2,
    deckId: 2,
    cardFront: 'Card 3',
    cardBack: 'Dope!',
    active: false,
    editing: false
  }
];


const card = (state, action) => {
  console.log('card reducer was called with state', state, 'and action', action);
  switch (action.type) {
    case 'ADD_CARD':
      return {
        id: action.id,
        cardFront: action.cardFront,
        cardBack: action.cardBack
      };
    default:
      return state
  }
};

const cards = (state = initialState, action) => {
  console.log('cards reducer was called with state', state, 'and action', action);
  switch (action.type) {
    case 'ADD_CARD':
      return [
        ...state,
        card(undefined, action)
      ];
    default:
      return state
  }
};

export default cards
