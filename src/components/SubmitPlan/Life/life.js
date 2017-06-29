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
import bed from '../../image/icons-8-single-bed1.jpg'
import stethoscope from '../../image/icons-8-stethoscope1.jpg'
import tooth from '../../image/icons-8-toot1.jpg'
import heart from '../../image/icons-8-like.jpg'

class Life extends Component {
  constructor() {
    super()
    this.state = {}
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
                <span className="text-menu">OPD</span>
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
                <span className="text-menu-active">Life</span>
              </Link>
            </div>
          </div>

          <div className="paragraph">
            <p className="head">ประกันชีวิต (Life)</p>
            <br />
            <p className="head">ระบุรูปแบบประกันที่ต้องการ</p>
            <Form>
              <Form.Group inline>
                <Form.Field>
                  <Radio
                    label="จำนวนเงิน"
                    name="lifeGroup"
                    value="firstLifeChoice"
                    checked={this.state.value === 'firstLifeChoice'}
                    onChange={this.handleRadio}
                  />
                </Form.Field>
                <Form.Input
                  placeholder="จำนวนบาท"
                  name=""
                  onChange={this.handleChange}
                />
                <p> บาท</p>
              </Form.Group>
              <Form.Group inline>
                <Form.Field>
                  <Radio
                    label="คูณอัตราเงินเดือน"
                    name="lifeGroup"
                    value="firstChoice"
                    checked={this.state.value === 'secondLifeChoice'}
                    onChange={this.handleRadio}
                  />
                </Form.Field>
                <Form.Select
                  placeholder="เท่า"
                  options={1}
                  onChange={this.handleChange}
                />
                <p> เท่า</p>
              </Form.Group>
              <Form.Group inline>
                <Form.Field
                  control={Radio}
                  label="คูณอัตราเงินเดือน"
                  onChange={this.handleChange}
                />
                <Form.Select
                  placeholder="เท่า"
                  options={1}
                  onChange={this.handleChange}
                />
                <Form.Input
                  label="เท่า แต่ไม่เกิน"
                  placeholder="จำนวนบาท"
                  name=""
                  onChange={this.handleChange}
                />
                <p> บาท</p>
              </Form.Group>
              <Button
                style={{
                  marginTop: '3%',
                  textAlign: 'center',
                  width: '164px',
                  height: '40px',
                  backgroundColor: '#3A7BD5',
                  color: 'white',
                  float: 'right',
                  borderRadius: '20px',
                  marginRight: '5%',
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
    )
  }
}

Life.propTypes = {}

const mapDispatchToProps = dispatch => ({})
const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Life)
