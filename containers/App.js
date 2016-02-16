import React from 'react'
import DeckFilter from '../components/DeckFilter'
import AddDeck from './AddDeck'
import VisibleDeckList from './VisibleDeckList'
import UserSelector from './UserSelector'

const App = () => (
  <div>
    <UserSelector />
    <AddDeck />
    <VisibleDeckList />
    <DeckFilter />
  </div>
);

export default App
