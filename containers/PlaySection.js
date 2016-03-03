/**
 * Created by adjohnso on 2/25/2016.
 */
import { connect } from 'react-redux'
import { levelUpCard, levelDownCard } from '../actions'
import { getActiveDeckForCurrentUser } from '../selectors'
import PlayCard from './../components/cards/PlayCard'

const mapStateToProps = (state) => {
  return { cards: getActiveDeckForCurrentUser(state) }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCorrectClick: (id) => {
      dispatch(levelUpCard(id))
    },
    onIncorrectClick: (id) => {
      dispatch(levelDownCard(id))
    }
  }
};

const PlaySection = connect(mapStateToProps, mapDispatchToProps)(PlayCard);

export default PlaySection;