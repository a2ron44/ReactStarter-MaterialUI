import { Component } from 'react'

class LogoutHandler extends Component {
  componentDidMount () {
    this.props.logout()
  }
  render () {
    return null
  }
}

export default LogoutHandler
