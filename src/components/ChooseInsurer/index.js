import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { createProfile } from '../../api/profileCompany'
import { Step, Divider } from 'semantic-ui-react'
import { Head, Step1 } from './styled'
import styled from 'react-sc'
import NavInsure from '../NavInsure'
import Sidebar from '../Sidebar'
import { Detail } from './styled'
class InsurerSelect extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 4,
    }
  }

  render() {
    return (
      <div className="ChooseInsurer">

        <NavInsure step={this.state.step} />
        <div className="row">
          <Detail className="large-12 column">
            <div className="row">
              <span>เลือกบริษัทประกันภัยที่ต้องการ</span>
            </div>
          </Detail>
        </div>
      </div>
    )
  }
}

export default InsurerSelect
