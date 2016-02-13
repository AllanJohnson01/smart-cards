/**
 * Created by allanjohnson on 2/13/16.
 */
import { connect } from 'react-redux'
import { setDeckVisibilityFilter } from '../actions'
import DeckLink from '../components/DeckLink'

const mapStateToProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.deckVisibilityFilter
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setDeckVisibilityFilter(ownProps.filter))
        }
    }
};

const DeckFilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(DeckLink);

export default DeckFilterLink