import React from 'react'
import DeckFilterLink from '../../containers/DeckFilterLink'

const DeckFilter = () => (
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

export default DeckFilter
