import React from 'react'
import DeckFilter from '../components/decks/DeckFilter'
import AddDeck from './AddDeck'
import EditDeckSection from '../containers/EditDeckSection'
import VisibleDeckList from './VisibleDeckList'
import UserSelector from './UserSelector'

const App = () => (
  <div>
    <UserSelector />
    <AddDeck />
    <VisibleDeckList />
    <DeckFilter />
    <EditDeckSection />
  </div>
);

export default App
