/**
 * Created by adjohnso on 2/29/2016.
 */
import React from 'react'
import Card from './Card'
import AddCard from './AddCard'

const Cards = ({cards}) => (
  <div>
    {cards.map((card) =>
      <Card key={card.id} {...card} />
    )}
  </div>
);

const EditCards = ({cards}) => (
  <fieldset>
    <legend>Edit Deck</legend>
    <AddCard />
    <Cards cards={cards} />
  </fieldset>
);

export default EditCards