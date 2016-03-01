/**
 * Created by adjohnso on 2/24/2016.
 */
import React, {PropTypes} from 'react'

const Card = ({ id, cardFront, cardBack }) => {
  return (
    <div>
      <h4>Card {id} </h4>
      <div>
        <p>{cardFront}</p>
      </div>
      <div>
        <p>{cardBack}</p>
      </div>
    </div>
  );
};

Card.PropTypes = {
  id: PropTypes.number.isRequired,
  cardFront: PropTypes.string.isRequired,
  cardBack: PropTypes.string.isRequired
};

export default Card