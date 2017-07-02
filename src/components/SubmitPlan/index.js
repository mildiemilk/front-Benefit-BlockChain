import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Route, Redirect, withRouter, Switch } from 'react-router-dom'
import { Link } from 'react-router-dom'
import MenuPlan from './MenuPlan/MenuPlan'
import FormSubmitPlan from './FormSubmitPlan/FormSubmitPlan'
import AllPlan from './AllPlan'
import {
  Button,
  Checkbox,
  Form,
  Grid,
  Image,
  Input,
  Radio,
  Segment,
  Dropdown,
} from 'semantic-ui-react'
import '../../styles/SubmitPlan.scss'

class SubmitPlan extends Component {
  constructor() {
    super()
    this.state = {
      planName: '',
      employeeOfPlan: '',
    }
  }

  static propTypes = {}

  onInputChange(e) {
    this.setState({ nameInput: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { email, password } = this.state
    this.props.authenticate(email, password)
    console.log(this.state)
  }

  onClickhandler() {
    window.location.href = '/chooseinsurer'
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  render() {
    return (
      <div>
        <div className="big-box">
          <div className="row">
            <div className="large-3 columns">
              <MenuPlan />
            </div>
            <div className="large-9 columns">
              <FormSubmitPlan />
              <div className="fillBox">
                <AllPlan />
              </div>
              <Button
                style={{
                  marginLeft: '70%',
                  marginTop: '5%',
                  marginBottom: '5%',
                  width: '164px',
                  height: '40px',
                  borderRadius: '20px',
                  color: '#ffffff',
                  backgroundColor: '#f7555f',
                }}
                onClick={this.onClickhandler}
              >
                {' '}ต่อไป
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

SubmitPlan.propTypes = {}

const mapDispatchToProps = dispatch => ({})
const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(SubmitPlan)
