/**
 * Created by adjohnso on 3/8/2016.
 */
import React from 'react'
import MainSection from './PlayEditContainer'
import VisibleDeckList from './VisibleDeckList'
import UserSelector from './HeaderContainer'
import 'react-bootstrap'
import 'bootstrap-webpack'
import '../css/dashboard.css'



const App = () => (
  <div className="container">
    <div className="container-fluid">
      <div className="row">

        <UserSelector />
      </div>
    </div>
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-4 col-md-2 sidebar">
          <VisibleDeckList />
        </div>
        <div class="col-sm-8 col-sm-offset-3 col-md-10 col-md-offset-2 main">
          <h1 class="page-header">Dashboard</h1>
          <MainSection />
        </div>
      </div>
    </div>
  </div>
);

export default App