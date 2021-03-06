/* @flow */
import * as types from '../constants/ActionTypes'

type card = {
          id: number,
          cardFront: string,
          cardBack: string,
          active: boolean,
          editing: boolean,
          level: number,
          shownCount: number,
          rightCount: number,
          wrongCount: number,
          rightInARow: number,
          wrongInARow: number,
          seenThisSession: number,
          rightThisSession: number,
          wrongThisSession: number,
          }

const card = (state : card, action : string) => {
  switch (action.type) {
    case types.ADD_CARD:
      return {
        id: action.id,
        cardFront: action.cardFront,
        cardBack: action.cardBack,
        active:false,
        editing:false,
        level: 0,
        shownCount: 0,
        rightCount: 0,
        wrongCount: 0,
        rightInARow: 0,
        wrongInARow: 0,
        seenThisSession: 0,
        rightThisSession: 0,
        wrongThisSession: 0
      };
    case types.GOT_IT:
      return (state.id !== action.id) ?
        state:
        Object.assign({}, state, {
          shownCount: state.shownCount++,
          rightCount: state.rightCount++,
          rightInARow: state.rightInARow++,
          wrongInARow: 0,
          seenThisSession: state.seenThisSession++,
          rightThisSession: state.rightThisSession++
        });
    case types.LEVEL_UP_CARD:
      return (state.id !== action.id) ?
        state:
        Object.assign({}, state, {
          level: state.level++,
          shownCount: state.shownCount++,
          rightCount: state.rightCount++,
          rightInARow: state.rightInARow++,
          wrongInARow: 0,
          seenThisSession: state.seenThisSession++,
          rightThisSession: state.rightThisSession++
        });
    case types.LEVEL_DOWN_CARD:
      return (state.id !== action.id) ?
        state:
        (state.level > 0) ?
          Object.assign({}, state, {
            level: state.level--,
            shownCount: state.shownCount++,
            wrongCount: state.rightCount++,
            rightInARow: 0,
            wrongInARow: state.wrongInARow++,
            seenThisSession: state.seenThisSession++,
            wrongThisSession: state.wrongThisSession++
          }):
          state;

    default:
      return state
  }
};

const cards = (state = initialState, action) => {
  console.log('cards reducer was called with state', state, 'and action', action);
  switch (action.type) {
    case types.ADD_CARD:
      return [
        ...state,
        card(undefined, action)
      ];
    case types.GOT_IT:
      return state.map(c => card(c, action));
    case types.LEVEL_UP_CARD:
      return state.map(c => card(c, action));
    case types.LEVEL_DOWN_CARD:
      return state.map(c => card(c, action));
    default:
      return state
  }
};

export default cards


const initialState = [
  {
    id: 0,
    cardFront: 'Card 1',
    cardBack: 'Super Cool',
    active: false,
    editing: false,
    level: 0,
    shownCount: 0,
    rightCount: 0,
    wrongCount: 0,
    rightInARow: 0,
    wrongInARow: 0,
    seenThisSession: 0,
    rightThisSession: 0,
    wrongThisSession: 0

  },
  {
    id: 1,
    cardFront: 'Card 2',
    cardBack: 'Awesome',
    active: false,
    editing: false,
    level: 0,
    shownCount: 0,
    rightCount: 0,
    wrongCount: 0,
    rightInARow: 0,
    wrongInARow: 0,
    seenThisSession: 0,
    rightThisSession: 0,
    wrongThisSession: 0

  },
  {
    id: 2,
    cardFront: 'Card 3',
    cardBack: 'Dope!',
    active: false,
    editing: false,
    level: 0,
    shownCount: 0,
    rightCount: 0,
    wrongCount: 0,
    rightInARow: 0,
    wrongInARow: 0,
    seenThisSession: 0,
    rightThisSession: 0,
    wrongThisSession: 0
  }
];
