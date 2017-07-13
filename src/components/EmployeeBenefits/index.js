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
  Container,
} from 'semantic-ui-react'
import '../../styles/employeeBenefits.scss'
import MenuTab from './MenuTab'
import form from '../image/icons-8-form.png'
import SelectBox from './SelectBox'

class employeeBenefits extends Component {
  constructor() {
    super()
    this.state = {
      groupName: [{ name: 'GroupA' }, { name: 'GroupB' }, { name: 'GroupC' }],
      planName: [{ name: 'planA' }, { name: 'planB' }, { name: 'planC' }],
      selectPlan: [],
    }
  }

  handleFixedChange = (e, { value }) => {
    this.setState({ value })
    if (this.state.selectPlan.length > 0) {
      this.state.selectPlan.pop()
      this.state.selectPlan.push(value)
    } else {
      this.state.selectPlan.push(value)
    }
  }

  render() {
    return (
      <div>
        <div className="employeeBenefits-box">
          <Container>
            <div className="row">
              <div className="large-10 large-centered columns">
                <p className="employeeBenefits-head-text">
                  จัดแผนสิทธิประโยชน์ให้พนักงานแต่ละกลุ่ม
                </p>
                <p>กรุณากดที่ชื่อกลุ่มของพนักงานเพื่อทำการจัดแผนสิทธประโยชน์</p>
                <div className="row">
                  <div className="large-3 columns">
                    <MenuTab groupName={this.state.groupName} />
                  </div>
                  <div className="large-9 columns">
                    {/*<div className="employeeBenefits-Start-box">
                      <div className="employeeBenefits-center-in-box">
                        <img
                          src={form}
                          className="imageMenu"
                        />
                        <p className="employeeBenefits-text-start-box">ยังไม่มีการจัดแผนสิทธิประโยชน์</p>
                      </div>
                    </div>*/}
                    <SelectBox planName={this.state.planName} />
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    )
  }
}

employeeBenefits.propTypes = {}

const mapDispatchToProps = dispatch => ({})
const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(employeeBenefits)
