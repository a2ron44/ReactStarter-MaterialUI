import React, { Component } from 'react'
import { AuthConsumer } from './authContext'
import LogoutHandler from './logoutHandler'

class Logout extends Component {
  render () {
    return (
      <div>
        <AuthConsumer>
          {context => <LogoutHandler logout={context.logout} />}
        </AuthConsumer>
      </div>
    )
  }
}

export default Logout
