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
import tooth from '../../image/icons-8-tooth.jpg'
import heart from '../../image/icons-8-like1.jpg'

class Dental extends Component {
  constructor() {
    super()
    this.state = {}
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

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  render() {
    return (
      <div>
        <div className="fillBox">
          <div className="headBox">
            <p className="headLogo">ขั้นตอนที่ 2 : กรอกรายละเอียดแพลน </p>
          </div>
          <div className="row">
            <div className="large-3 columns">
              <Link className="x-tab" to="/IPD">
                <img src={bed} />
                <span className="text-menu">IPD</span>
              </Link>
            </div>
            <div className="large-3 columns">
              <Link className="x-tab" to="/OPD">
                <img src={stethoscope} />
                <span className="text-menu">OPD</span>
              </Link>
            </div>
            <div className="large-3 columns">
              <Link className="x-tab" to="/dental">
                <img src={tooth} />
                <span className="text-menu-active">Dental</span>
              </Link>
            </div>
            <div className="large-3 columns">
              <Link className="x-tab" to="/life">
                <img src={heart} />
                <span className="text-menu">Life</span>
              </Link>
            </div>
          </div>
          <div className="paragraph">
            <p className="head">ค่ารักษาทันตกรรม (Dental)</p>
            <br />
            <p className="head">ระบุรูปแบบประกันที่ต้องการ</p>
            <Form>
              <Form.Group inline>
                <Form.Input
                  label="ใช้บริการได้ไม่เกิน"
                  placeholder="จำนวนเงิน"
                  options={1}
                  onChange={this.handleChange}
                />
                <p> บาท/ปี</p>
              </Form.Group>
              <div className="row">
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
              </div>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

Dental.propTypes = {}

const mapDispatchToProps = dispatch => ({})
const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Dental)
