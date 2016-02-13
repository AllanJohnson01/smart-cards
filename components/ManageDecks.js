/**
 * Created by allanjohnson on 2/13/16.
 */
import React from 'react'
import { connect } from 'react-redux'
import { addDeck } from '../actions'

let ManageDecks = ({ dispatch }) => {
    let input;
    return (
        <div>
            <h2>Manage Decks</h2>
            <input ref={node => {
                input = node
            }} />
            <button onClick={() => {
                dispatch(addDeck(input.value));
                input.value = ''
            }}>Add Deck</button>
        </div>
    );
};
ManageDecks = connect() (ManageDecks);

export default ManageDecks
