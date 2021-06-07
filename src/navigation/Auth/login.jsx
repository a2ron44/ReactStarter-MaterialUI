import React, { Component } from 'react'
import { AuthConsumer } from './authContext'
import LoginHandler from './loginHandler'

class Login extends Component {
  render () {
    return (
      <div>
        <AuthConsumer>
          {context => <LoginHandler login={context.login} />}
        </AuthConsumer>
      </div>
    )
  }
}

export default Login
