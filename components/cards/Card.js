/**
 * Created by adjohnso on 2/24/2016.
 */
import React from 'react'

const Card = ({ id, cardFront, cardBack }) => (
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

export default Card