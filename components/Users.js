/**
 * Created by allanjohnson on 2/13/16.
 */
import React from 'react'
import UserLink from '../containers/UserLink'


const Users = () => (
  <div>
    <select>
      <UserLink
        value="teis"
      >
        Teis
      </UserLink>
      <UserLink
        value="josie"
      >
        Josie
      </UserLink>
    </select>
  </div>

);

export default Users