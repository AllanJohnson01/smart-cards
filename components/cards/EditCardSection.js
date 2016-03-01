/**
 * Created by allanjohnson on 2/19/16.
 */
import { addCard } from '../../actions'
import { connect } from 'react-redux'
import { getEditableCards } from '../../selectors'
import EditCards from './EditCards'



const mapStateToProps = (state) => {
  let didGetCards = getEditableCards(state);
  return didGetCards ? {cards: didGetCards} : {}
};

const EditCardDeck = connect(mapStateToProps)(EditCards);
export default EditCardDeck;
