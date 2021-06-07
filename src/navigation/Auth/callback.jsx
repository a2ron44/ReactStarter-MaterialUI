import React from 'react'
import { AuthConsumer } from './authContext'
import { Redirect } from 'react-router-dom'

const Callback = props => (
  <AuthConsumer>
    {({ handleAuthentication }) => {
      if (/access_token|id_token|error/.test(props.location.hash)) {
        handleAuthentication()
      }
      return <Redirect to='/' />
    }}
  </AuthConsumer>
)

export default Callback
