import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthConsumer } from './authContext'

const ProtectedRoute = ({
  component: Component,
  render,
  authRole,
  ...rest
}) => {
  return (
    <AuthConsumer>
      {context => (
        <Route
          {...rest}
          render={props => {
            if (!context.isInRole(authRole)) {
              if (!context.isLoggedIn()) {
                return (
                  <Redirect
                    to={{
                      pathname: '/login',
                      state: { from: props.location }
                    }}
                  />
                )
              }

              return (
                <Redirect
                  to={{
                    pathname: '/unauthorized',
                    state: { from: props.location }
                  }}
                />
              )
            }
            return Component ? <Component {...props} /> : render(props)
          }}
        />
      )}
    </AuthConsumer>
  )
}

export default ProtectedRoute
