import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import LoginForm from './loginForm'
import SignUpForm from './signupForm'
import { PageHeader } from 'react-bootstrap'
import styles from './login.styl'
import FormButtons from './formButtons'
import Loader from 'components/loader'

class Login extends PureComponent {
  state = {
    userHasAnAccount: true,
    showLoader: false
  }

  redirectToIndex () {
    const { history } = this.props

    history.push('/')
  }

  changeForm () {
    this.setState({ userHasAnAccount: !this.state.userHasAnAccount })
  }

  showLoader (show) {
    this.setState({ showLoader: show })
  }

  render () {
    return (
      <div>
        <PageHeader className={styles.header}>
          { this.state.userHasAnAccount ? 'Login' : 'Criar nova conta' }
        </PageHeader>
        <Loader loading={this.state.showLoader} className={styles.spin} />
        {
          this.state.userHasAnAccount
            ? (<LoginForm onLogon={() => this.redirectToIndex()} showLoader={show => this.showLoader(show)} >
              <FormButtons userHasAnAccount={this.state.userHasAnAccount} onChangeForm={() => this.changeForm()} />
            </LoginForm>)
            : (<SignUpForm onSignUp={() => this.redirectToIndex()} showLoader={show => this.showLoader(show)} >
              <FormButtons userHasAnAccount={this.state.userHasAnAccount} onChangeForm={() => this.changeForm()} />
            </SignUpForm>)
        }
      </div>
    )
  }
}

export default withRouter(Login)
