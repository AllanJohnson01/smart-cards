import React from 'react'
import MainSection from './MainSection'
import VisibleDeckList from './VisibleDeckList'
import UserSelector from './UserSelector'

const App = () => (
  <div>
    <UserSelector />
    <VisibleDeckList />
    <MainSection />
  </div>
);

export default App
