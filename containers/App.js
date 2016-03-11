import React from 'react'
import MainSection from './PlayEditContainer'
import VisibleDeckList from './VisibleDeckList'
import HeaderContainer from './HeaderContainer'
import {Grid, Row, Col} from 'react-bootstrap'




const App = () => (
  <Grid>
    <Row>
      <Col md={2} sm={0}/>
      <Col md={8}>
        <Row>
          <Col md={12}>
            <HeaderContainer />
          </Col>
        </Row>
        <Row>
          <Col sm={4}>
            <VisibleDeckList />
          </Col>
          <Col sm={8}>
           <MainSection />
          </Col>
        </Row>
      </Col>
      <Col md={2} sm={0}/>
    </Row>
  </Grid>
);

export default App
