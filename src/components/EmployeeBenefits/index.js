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
      selectGroup: false,
      selected: '',
      value: '',
      valueFixed: '',
      plan: '',
      selectPlan: [],
      selectOption: '',
      columnsLenght: 'large-11 columns',
      defualtPlan: '',
      activeGroup: '',
    }
  }

  handleActiveGroup = index => {
    this.setState({ activeGroup: index })
    this.setState({ selectGroup: true })
    this.setState({ plan: '' })
  }

  handleActivePlan = (index, value) => {
    let indexOfSelectPlan = this.state.selectPlan.indexOf(value)
    if (indexOfSelectPlan > -1) {
      this.setState({ defualtPlan: index })
    }
  }

  handleChangePlan = (e, { name, value }) => {
    this.setState({ [name]: value })
    if (value === 'Fixed') {
      this.setState({ selectOption: 'Fixed' })
      this.setState({ columnsLenght: 'large-11 columns' })
    } else {
      this.setState({ selectOption: 'Flex' })
      this.setState({ columnsLenght: 'large-7 columns' })
    }
  }

  handleFixedChange = value => {
    if (this.state.selectPlan.length > 0) {
      this.state.selectPlan.pop()
      this.state.selectPlan.push(value)
    } else {
      this.state.selectPlan.push(value)
    }
  }

  handleFlexChange = (e, { value }) => {
    if (this.state.selectPlan.length > 0) {
      let index = this.state.selectPlan.indexOf(value)
      if (index > -1) {
        this.state.selectPlan.splice(index, 1)
        if (this.state.defualtPlan === index) {
          this.setState({ defualtPlan: '' })
        }
      } else {
        this.state.selectPlan.push(value)
      }
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
                    <MenuTab
                      groupName={this.state.groupName}
                      handleActiveGroup={this.handleActiveGroup}
                      activeGroup={this.state.activeGroup}
                    />
                  </div>
                  <div className="large-9 columns">
                    {this.state.selectGroup
                      ? <SelectBox
                          planName={this.state.planName}
                          plan={this.state.plan}
                          selectOption={this.state.selectOption}
                          columnsLenght={this.state.columnsLenght}
                          planName={this.state.planName}
                          handleChangePlan={this.handleChangePlan}
                          handleFixedChange={this.handleFixedChange}
                          handleFlexChange={this.handleFlexChange}
                          handleActivePlan={this.handleActivePlan}
                          defualtPlan={this.state.defualtPlan}
                          value={this.state.value}
                          valueFixed={this.state.valueFixed}
                        />
                      : <div className="employeeBenefits-Start-box">
                          <div className="employeeBenefits-center-in-box">
                            <img src={form} className="imageMenu" />
                            <p className="employeeBenefits-text-start-box">
                              ยังไม่มีการจัดแผนสิทธิประโยชน์
                            </p>
                          </div>
                        </div>}
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
