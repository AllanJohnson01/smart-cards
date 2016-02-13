/**
 * Created by allanjohnson on 2/13/16.
 */
import React from 'react'
import Header from './Header'
import FilterDiv from './FilterDiv'
import ManageDecks from './ManageDecks'
import VisibleDeckList from '../containers/VisibleDeckList'
import ActiveDeck from './ActiveDeck'

const App = () => (
    <div>
        <Header />
        <ManageDecks />
        <FilterDiv />
        <VisibleDeckList />
        <ActiveDeck />
    </div>
);

export default App