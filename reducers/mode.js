/**
 * Created by adjohnso on 3/7/2016.
 */
import * as types from '../actions'

const mode = (state, action) => {
  switch (action) {
    case types.PLAY:
      return state;
    case types.EDIT:
      return state;
    case types.SETTINGS:
      return state;
    default:
      return state;
  }
};