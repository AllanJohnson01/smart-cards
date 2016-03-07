/**
 * Created by allanjohnson on 2/19/16.
 */
import { connect } from 'react-redux'

import { addCard } from '../actions'
import { getEditableCards } from '../selectors'
import EditCards from './../components/cards/EditCards'


const mapStateToProps = (state) => {
  let didGetCards = getEditableCards(state);
  return didGetCards ? {cards: didGetCards} : {}
};

const EditCardSection = connect(mapStateToProps)(EditCards);
export default EditCardSection;
