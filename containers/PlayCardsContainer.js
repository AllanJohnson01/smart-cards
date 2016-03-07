/**
 * Created by allanjohnson on 3/5/16.
 */
import React from 'react'
import {connect} from 'react-redux'
import PlayCard from '../components/cards/PlayCard'
import { getActiveDeckForCurrentUser } from '../selectors'
import StartRound from './../components/cards/StartRound'

let playing = false;

const PlayCardsArea = ({cards}) => {
  if (!playing) {
    return (
      <div>
        <StartRound deck={cards}/>
      </div>
    )
  }else {
    return (
      <PlayCard cards={cards} />
    )
  }
};


const mapStateToProps = (state) => {
  let deck = getActiveDeckForCurrentUser(state);
  if (deck.cardsThisRound.length > 0) {
    playing = true;
    return {cards: deck.cardsThisRound}
  } else {
    playing = false;
  return {deck: deck};
  }
};

const PlayCardContainer = connect(mapStateToProps)(PlayCardsArea);
export default PlayCardContainer;
