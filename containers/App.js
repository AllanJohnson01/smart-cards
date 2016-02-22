import React from 'react'
import DeckFilter from '../components/DeckFilter'
import AddDeck from './AddDeck'
import EditCardSection from '../components/EditCardSection'
import VisibleDeckList from './VisibleDeckList'
import UserSelector from './UserSelector'

const App = () => (
  <div>
    <UserSelector />
    <AddDeck />
    <VisibleDeckList />
    <DeckFilter />
    <EditCardSection />
  </div>
);

export default App
