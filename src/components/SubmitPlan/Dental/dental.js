import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { editPlan } from '../../../api/setPlan'
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
import erase from '../../image/icons-8-erase.png'

class Dental extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dentalPerYear: null,
    }
  }

  static propTypes = {}

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleClick = () =>
    this.props.editPlan(this.state, this.props.plan.planId, 'dental')

  handleResetdata = () => {
    document.getElementById('dentalPerYear').value = ''
    this.setState({ dentalPerYear: null })
    this.props.handleNewReset()
  }

  componentDidUpdate() {
    if (this.props.setPlan === 'Dental' && this.props.reset === true) {
      this.handleResetdata()
    }
  }

  render() {
    return (
      <div>
        <br />
        <p className="head">
          <u>
            ค่ารักษาทันตกรรม (Dental)
          </u>
        </p>
        <br />
        <p className="head">ระบุรูปแบบประกันที่ต้องการ</p>
        <Form>
          <Form.Group inline>
            <Form.Input
              type="number"
              label="ใช้บริการได้ไม่เกิน"
              placeholder="จำนวนเงิน"
              name="dentalPerYear"
              id="dentalPerYear"
              onChange={this.handleChange}
              required
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
              onClick={this.handleClick}
            >
              บันทึก
            </Button>
          </div>
        </Form>
      </div>
    )
  }
}

Dental.propTypes = {
  dentalPerYear: PropTypes.number,
  onFormChange: PropTypes.func,
}

const mapDispatchToProps = dispatch => ({
  editPlan: (editData, planId, editType) =>
    dispatch(editPlan(editData, planId, editType)),
})
const mapStateToProps = state => ({
  plan: state.plan,
})

export default connect(mapStateToProps, mapDispatchToProps)(Dental)
