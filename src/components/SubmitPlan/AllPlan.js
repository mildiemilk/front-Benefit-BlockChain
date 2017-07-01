import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
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
  Search,
} from 'semantic-ui-react'
import bedActive from '../image/icons-8-single-bed.jpg'
import bed from '../image/icons-8-single-bed1.jpg'
import stethoscope from '../image/icons-8-stethoscope1.jpg'
import stethoscopeActive from '../image/icons-8-stethoscope.jpg'
import toothActive from '../image/icons-8-tooth.jpg'
import tooth from '../image/icons-8-toot1.jpg'
import heart from '../image/icons-8-like1.jpg'
import heartActive from '../image/icons-8-like.jpg'
import erase from '../image/icons-8-erase.png'
import IPD from './IPD/IPD'
import Life from './Life/life'
import OPD from './OPD/OPD'
import Dental from './Dental/dental'

class AllPlan extends Component {
  constructor() {
    super()
    this.state = {
      showCoPlay: false,
      showForm: 1,
      value: '',
      box: 'fillBox1',
      results: '',
      plan: 'IPD',
      verifyState: true,
    }
    const value = ''
    const results = ''
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

  handleToggle = () => {
    if (this.state.showCoPlay) {
      this.setState({ showCoPlay: false })
    } else {
      this.setState({ showCoPlay: true })
    }
  }

  handleVerifyState = () => {
    this.setState({ verifyState: false })
  }

  handleRadio = (e, { value }) => {
    this.setState({ value })
  }

  handleClick = value => {
    this.setState({ plan: value })
  }
  render() {
    console.log(this.state.verifyState)
    return (
      <div>
        <div className="headBox">
          <span className="headLogo">ขั้นตอนที่ 2 : กรอกรายละเอียดแพลน</span>
          <div className="box-in-head-box">
            <img src={erase} className="image-erase" />
            <span className="headLogo">Reset</span>
          </div>
        </div>
        <div className="row">
          {this.state.plan === 'IPD'
            ? <div className="large-3 columns">
                <div
                  className="x-tab-active"
                  onClick={() => this.handleClick('IPD')}
                >
                  <img src={bedActive} className="imageMenu" />
                  <span className="text-menu-active">IPD</span>
                </div>
              </div>
            : <div className="large-3 columns">
                <div className="x-tab" onClick={() => this.handleClick('IPD')}>
                  <img src={bed} className="imageMenu" />
                  <span className="text-menu">IPD</span>
                </div>
              </div>}
          {this.state.plan === 'OPD'
            ? <div className="large-3 columns">
                <div
                  className="x-tab-active"
                  onClick={() => this.handleClick('OPD')}
                >
                  <img src={stethoscopeActive} className="imageMenu" />
                  <span className="text-menu-active">OPD</span>
                </div>
              </div>
            : <div className="large-3 columns">
                <div className="x-tab" onClick={() => this.handleClick('OPD')}>
                  <img src={stethoscope} className="imageMenu" />
                  <span className="text-menu">OPD</span>
                </div>
              </div>}
          {this.state.plan === 'Dental'
            ? <div className="large-3 columns">
                <div
                  className="x-tab-active"
                  onClick={() => this.handleClick('Dental')}
                >
                  <img src={toothActive} className="imageMenu" />
                  <span className="text-menu-active">Dental</span>
                </div>
              </div>
            : <div className="large-3 columns">
                <div
                  className="x-tab"
                  onClick={() => this.handleClick('Dental')}
                >
                  <img src={tooth} className="imageMenu" />
                  <span className="text-menu">Dental</span>
                </div>
              </div>}
          {this.state.plan === 'Life'
            ? <div className="large-3 columns">
                <div
                  className="x-tab-active"
                  onClick={() => this.handleClick('Life')}
                >
                  <img src={heartActive} className="imageMenu" />
                  <span className="text-menu-active">Life</span>
                </div>
              </div>
            : <div className="large-3 columns">
                <div className="x-tab" onClick={() => this.handleClick('Life')}>
                  <img src={heart} className="imageMenu" />
                  <span className="text-menu">Life</span>
                </div>
              </div>}
        </div>
        <div className="paragraph">
          {this.state.plan === 'IPD'
            ? <IPD handleVerifyState={this.handleVerifyState} />
            : null}
          {this.state.plan === 'OPD' ? <OPD /> : null}
          {this.state.plan === 'Dental' ? <Dental /> : null}
          {this.state.plan === 'Life' ? <Life /> : null}
        </div>
      </div>
    )
  }
}

AllPlan.propTypes = {}

const mapDispatchToProps = dispatch => ({})
const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(AllPlan)
