import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Redirect, withRouter, Switch } from 'react-router-dom'
import Async from 'react-code-splitting'

import Header from './Header'
import Postbox from './PostBox/PostBox'

import 'semantic-ui-css/semantic.min.css'

const App = ({ user }) => (
  <div>
    <Header />
    <Route path="/postbox" component={Postbox} />
  </div>
)

App.propTypes = {
  user: PropTypes.shape({}).isRequired,
}

export default withRouter(connect(state => ({ user: state.user }))(App))
