/**
 * Created by adjohnso on 2/29/2016.
 */
import React from 'react'
import { addCard } from '../../actions'
import {connect} from 'react-redux'
import {Panel} from 'react-bootstrap'

let CreateCard = ({ dispatch }) => {
  let frontInput;
  let backInput;

  return (
    <Panel>
      <textarea  ref={node => {
      frontInput = node
      }} />
      <br/>
      <textarea ref={node => {
      backInput = node
      }} />
      <br/>

      <button onClick={() => {
        dispatch(addCard(frontInput.value, backInput.value));
        frontInput.value = '';
        backInput.value = ''
      }}>
        Add New Card
      </button>
    </Panel>
  )
};
const AddCard = connect()(CreateCard);

export default AddCard;