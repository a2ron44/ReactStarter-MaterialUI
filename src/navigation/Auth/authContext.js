import { createContext } from 'react'

const authContext = createContext({
  profile: {},
  login: () => {}, // to start the login process
  logout: () => {}, // logout the user
  isLoggedIn: () => {}, // see if user is loggedIn,
  getProfile: () => {}, // gets user profile,
  getIdToken: () => {},
  isInRole: role => {},
  handleAuthentication: () => {} // handle Auth0 login process,
})

export const AuthProvider = authContext.Provider
export const AuthConsumer = authContext.Consumer
