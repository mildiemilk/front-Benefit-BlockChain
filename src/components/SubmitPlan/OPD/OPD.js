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
} from 'semantic-ui-react'
import '../../../styles/SubmitPlan.scss'
import CoPlay from './CoPlay'
import bed from '../../image/icons-8-single-bed1.jpg'
import stethoscope from '../../image/icons-8-stethoscope.jpg'
import tooth from '../../image/icons-8-toot1.jpg'
import heart from '../../image/icons-8-like1.jpg'

class OPD extends Component {
  constructor() {
    super()
    this.state = {
      showCoPlay: false,
      value: '',
    }
  }

  static propTypes = {}

  onInputChange(e) {
    this.setState({ nameInput: e.target.value })
  }

  signUpHandler() {
    window.location.href = '/signup'
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

  handleRadio = (e, { value }) => {
    this.setState({ value })
    if (this.state.value === 'secondChoice') {
      document.getElementById('secondChoiceMoney').value = ''
      document.getElementById('secondChoiceMoneyLimit').value = ''
    } else {
      document.getElementById('firstChoiceMoney').value = ''
    }
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  render() {
    return (
      <div>
        <div className="fillBox">
          <div className="headBox">
            <p className="headLogo">ขั้นตอนที่ 2 : กรอกรายละเอียดแพลน</p>
          </div>
          <div className="row">
            <div className="large-3 columns">
              <Link className="x-tab" to="/IPD">
                <img src={bed} className="imageMenu" />
                <span className="text-menu">IPD</span>
              </Link>
            </div>
            <div className="large-3 columns">
              <Link className="x-tab" to="/OPD">
                <img src={stethoscope} className="imageMenu" />
                <span className="text-menu-active">OPD</span>
              </Link>
            </div>
            <div className="large-3 columns">
              <Link className="x-tab" to="/dental">
                <img src={tooth} className="imageMenu" />
                <span className="text-menu">Dental</span>
              </Link>
            </div>
            <div className="large-3 columns">
              <Link className="x-tab" to="/life">
                <img src={heart} className="imageMenu" />
                <span className="text-menu">Life</span>
              </Link>
            </div>
          </div>

          <div className="paragraph">
            <br />
            <p className="head">
              ค่ารักษาพยาบาลกรณีผู้ป่วยนอก (Out Patient Department : OPD)
            </p>
            <br />
            <p className="head">ระบุรูปแบบประกันที่ต้องการ </p>
            <div className="row">
              <Form>
                <Form.Group inline>
                  <Form.Field>
                    <Radio
                      label="จำนวนเงิน"
                      name="OPDGroup"
                      value="firstChoice"
                      checked={this.state.value === 'firstChoice'}
                      onChange={this.handleRadio}
                    />
                  </Form.Field>
                  <Form.Input
                    placeholder="จำนวนเงิน"
                    name="firstChoiceMoney"
                    id="firstChoiceMoney"
                    onChange={this.handleChange}
                  />
                  <p className="selectText"> บาท/ปี</p>
                </Form.Group>
                <Form.Group inline>
                  <Form.Field>
                    <Radio
                      label="จำนวนเงิน"
                      name="OPDGroup"
                      value="secondChoice"
                      checked={this.state.value === 'secondChoice'}
                      onChange={this.handleRadio}
                    />
                  </Form.Field>
                  <Form.Input
                    placeholder="จำนวนเงิน"
                    name="secondChoiceMoney"
                    id="secondChoiceMoney"
                    onChange={this.handleChange}
                  />
                  <Form.Input
                    label="บาท/ครั้ง  ครั้งละไม่เกิน"
                    placeholder="จำนวนเงิน"
                    name="secondChoiceMoneyLimit"
                    id="secondChoiceMoneyLimit"
                    onChange={this.handleChange}
                  />
                  <p className="selectText"> บาท/ปี</p>
                </Form.Group>
                <br />
                <Checkbox toggle label="Co-Play" onClick={this.handleToggle} />
                {this.state.showCoPlay ? <CoPlay /> : null}
                <br />
                <Button
                  style={{
                    marginTop: '20px',
                    textAlign: 'center',
                    width: '164px',
                    height: '40px',
                    backgroundColor: '#3A7BD5',
                    color: 'white',
                    float: 'right',
                    borderRadius: '20px',
                    marginRight: '32px',
                    marginBottom: '3%',
                  }}
                  type="submit"
                >
                  บันทึก
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

OPD.propTypes = {}

const mapDispatchToProps = dispatch => ({})
const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(OPD)
