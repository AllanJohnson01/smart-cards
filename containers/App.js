import React from 'react'
import MainSection from './PlayEditContainer'
import VisibleDeckList from './VisibleDeckList'
import UserSelector from './HeaderContainer'
import {Grid, Row, Col} from 'react-bootstrap'
import 'bootstrap-webpack'
import '../css/dashboard.css'



const App = () => (
  <Grid>
    <Row>
      <UserSelector />
    </Row>
    <Row>
      <Col xs={4} md={4}>
        <VisibleDeckList />
      </Col>
      <Col xs={8} md={8}>
        <MainSection />
      </Col>
    </Row>
  </Grid>
);

export default App
