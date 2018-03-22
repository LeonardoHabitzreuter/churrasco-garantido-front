import React, { PureComponent } from 'react'
import { Route, Redirect } from 'react-router-dom'
import api from 'utils/api'
import Layout from 'components/layout'

class PrivateRoute extends PureComponent {
  state = {
    currentUser: ''
  }

  componentWillMount () {
    this.setState({ currentUser: api.getUser() })
  }

  render () {
    const { component: Component, ...rest } = this.props
    const { currentUser } = this.state
    const isAuth = !!currentUser

    return (
      <Route {...rest} render={props => (
        isAuth ? (
          <Layout>
            <Component {...props} />
          </Layout>
        ) : (
          <Redirect to={{
            pathname: '/login',
            state: { from: props.location }
          }} />
        )
      )} />
    )
  }
}

export { PrivateRoute }
