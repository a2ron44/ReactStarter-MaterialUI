import { Component } from 'react'

class LoginHandler extends Component {
  componentDidMount () {
    this.props.login()
  }
  render () {
    return null
  }
}

export default LoginHandler
