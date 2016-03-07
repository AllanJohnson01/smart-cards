/**
 * Created by allanjohnson on 3/5/16.
 */
import {connect} from 'react-redux'

import PlayCard from '../components/cards/PlayCard'
import { getActiveDeckForCurrentUser } from '../selectors'
import EditCards from './../components/cards/EditCards'


const mapStateToProps = (state) => {
  let didGetDeck = getActiveDeckForCurrentUser(state);

  return didGetDeck ? {cards: didGetDeck.cardsThisRound} : {}
};

const PlayCardContainer = connect(mapStateToProps)(PlayCard);
export default PlayCardContainer;
