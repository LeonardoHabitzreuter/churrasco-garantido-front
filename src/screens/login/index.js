import React, { PureComponent } from 'react'
import { withRouter } from 'react-router-dom'
import LoginForm from './loginForm'
import SignUpForm from './signupForm'
import { PageHeader } from 'react-bootstrap'
import styles from './login.styl'
import FormButtons from './formButtons'

class Login extends PureComponent {
  state = {
    userHasAnAccount: true
  }

  redirectToIndex () {
    const { history } = this.props

    history.push('/')
  }

  changeForm () {
    this.setState({ userHasAnAccount: !this.state.userHasAnAccount })
  }

  render () {
    return (
      <div>
        <PageHeader className={styles.header}>
          { this.state.userHasAnAccount ? 'Login' : 'Criar nova conta' }
        </PageHeader>
        {
          this.state.userHasAnAccount
            ? (<LoginForm onLogon={() => this.redirectToIndex()}>
              <FormButtons userHasAnAccount={this.state.userHasAnAccount} onChangeForm={() => this.changeForm()} />
            </LoginForm>)
            : (<SignUpForm onSignUp={() => this.redirectToIndex()}>
              <FormButtons userHasAnAccount={this.state.userHasAnAccount} onChangeForm={() => this.changeForm()} />
            </SignUpForm>)
        }
      </div>
    )
  }
}

export default withRouter(Login)
