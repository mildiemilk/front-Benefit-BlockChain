import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Redirect, withRouter, Switch } from 'react-router-dom'
import Async from 'react-code-splitting'

import Header from './Header'
import Postbox from './PostBox/PostBox'
import Login from './Auth/Login'

import 'semantic-ui-css/semantic.min.css'

const App = ({ isAuthenticated }) => (
  <div>
    <Header />
    {isAuthenticated
      ? <Switch>
          <Route path="/postbox" component={Postbox} />
          <Route path="/login" component={Login} />
        </Switch>
      : <Switch>
          <Route path="/login" component={Login} />
          <Redirect to={{ pathname: '/login' }} />
        </Switch>}
  </div>
)

App.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.token != null,
})

const Container = connect(mapStateToProps)(App)
export default withRouter(Container)
