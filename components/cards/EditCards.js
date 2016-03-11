/**
 * Created by adjohnso on 2/29/2016.
 */
import React from 'react'
import Card from './Card'
import AddCard from './AddCard'
import {Panel} from 'react-bootstrap'

const Cards = ({cards}) => (
  <Panel>
    {cards.map((card) =>
      <Card key={card.id} {...card} />
    )}
  </Panel>
);

const EditCards = ({cards}) => (
  <Panel>
    <fieldset>
      <legend>Edit Deck</legend>
      <AddCard />
      <Cards cards={cards} />
    </fieldset>
  </Panel>
);

export default EditCards