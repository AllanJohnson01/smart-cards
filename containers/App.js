import React from 'react'
import DeckFilter from '../components/decks/DeckFilter'
import AddDeck from './AddDeck'
import EditDeckSection from '../containers/EditDeckSection'
import PlayContainer from '../components/cards/PlaySection'
import VisibleDeckList from './VisibleDeckList'
import UserSelector from './UserSelector'

const App = () => (
  <div>
    <UserSelector />
    <AddDeck />
    <VisibleDeckList />
    <DeckFilter />
    <EditDeckSection />
    <PlayContainer />
  </div>
);

export default App
