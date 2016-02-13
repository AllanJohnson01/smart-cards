/**
 * Created by allanjohnson on 2/13/16.
 */
import React from 'react'
import DeckFilterLink from '../containers/DeckFilterLink'

const FilterDiv = () => (
    <p>
        Show:
        {" "}
        <DeckFilterLink filter="SHOW_ALL">
            All
        </DeckFilterLink>
        {" | "}
        <DeckFilterLink filter="SHOW_ACTIVE">
            Active
        </DeckFilterLink>
        {" | "}
        <DeckFilterLink filter="SHOW_COMPLETED">
            Completed
        </DeckFilterLink>
    </p>
);

export default FilterDiv