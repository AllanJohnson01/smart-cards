import React from 'react'
import Footer from './DeckFilter'
import AddDeck from '../containers/AddDeck'
import VisibleDeckList from '../containers/VisibleDeckList'
import Users from './Users'

const App = () => (
  <div>
    <Users />
    <AddDeck />
    <VisibleDeckList />
    <Footer />
  </div>
);

export default App
