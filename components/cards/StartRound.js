/**
 * Created by allanjohnson on 3/4/16.
 */
/**
 * Created by adjohnso on 2/29/2016.
 */
import React, {PropTypes} from 'react'
import { connect} from 'react-redux'
import Card from './Card'
import { startSession } from '../../actions'
import {Thumbnail} from 'react-bootstrap'

let StartSession = ({deck, dispatch} ) => {
  let input;
    return (
      <Thumbnail>
        <fieldset>
          <legend>Settings</legend>
          <span>Number of cards per round:
            <select ref={node => {input = node}}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="25">25</option>
            </select>
          </span>
          <button onClick={() => {
            dispatch(startSession(input.value, deck))
          }}>Start</button>
        </fieldset>
      </Thumbnail>
    )
};

StartSession = connect()(StartSession);

export default StartSession