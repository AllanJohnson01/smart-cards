import React from 'react'
import DeckFilter from '../components/decks/DeckFilter'
import AddDeck from './../components/decks/AddDeck'
import EditDeckSection from './MainSection'
import PlayContainer from '../components/cards/PlaySection'
import VisibleDeckList from './VisibleDeckList'
import UserSelector from './UserSelector'

const App = () => (
  <div>
    <UserSelector />
    <VisibleDeckList />
    <EditDeckSection />
    <PlayContainer />
  </div>
);

export default App
