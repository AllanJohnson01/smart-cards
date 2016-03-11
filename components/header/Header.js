/**
 * Created by allanjohnson on 2/13/16.
 */
import React, {PropTypes} from 'react'
import {Grid, Row, Col, Input,Panel, PageHeader} from 'react-bootstrap'
import User from './User'



const header = ({users, onUserChange}) => (
  <Panel>
      <Col
        md={8}>
        <h1>Smart Cards</h1>
      </Col>
      <Col md={4}>
            <Input
              type="select"
              defaultValue="Select User"
              onChange={(e) => onUserChange(e.target.value)}>
              <option disabled value="Select User">Select User</option>
              {
                users.map((user) =>
                  <User key={user.id} {...user}/>
                )
              }
            </Input>
      </Col>
  </Panel>
);


header.propTypes = {
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired
  }).isRequired).isRequired,
  onUserChange: PropTypes.func.isRequired
};

export default header



