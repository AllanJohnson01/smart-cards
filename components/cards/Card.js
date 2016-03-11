/**
 * Created by adjohnso on 2/24/2016.
 */
import React, {PropTypes} from 'react'
import {Panel} from 'react-bootstrap'

const Card = ({ id, cardFront, cardBack }) => {
  return (
    <Panel>
      <h4>Card {id} </h4>
      <div>
        <p>Front: {cardFront}</p>
      </div>
      <div>
        <p>Back: {cardBack}</p>
      </div>
    </Panel>
  );
};

Card.PropTypes = {
  id: PropTypes.number.isRequired,
  cardFront: PropTypes.string.isRequired,
  cardBack: PropTypes.string.isRequired
};

export default Card