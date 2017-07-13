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
  Dropdown,
  Radio,
  Icon,
} from 'semantic-ui-react'
import '../../styles/employeeBenefits.scss'

const a = []

class SelectOptionPlan extends Component {
  constructor() {
    super()
    this.state = {
      selected: '',
      value: '',
      plan: '',
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

  handleFlexChange = (e, { value }) => {
    if (this.state.selectPlan.length > 0) {
      let index = this.state.selectPlan.indexOf(value)
      if (index > -1) {
        this.state.selectPlan.splice(index, 1)
        if (this.state.selected === index) {
          this.setState({ selected: '' })
        }
      } else {
        this.state.selectPlan.push(value)
      }
    } else {
      this.state.selectPlan.push(value)
    }
  }

  handleActive = (index, value) => {
    let indexOfSelectPlan = this.state.selectPlan.indexOf(value)
    if (indexOfSelectPlan > -1) {
      this.setState({ selected: index })
    }
  }

  handleClick = () => {
    console.log(this.state.selectPlan)
  }

  renderList = list => {
    return list.map((element, index) => {
      const isActive = index === this.state.selected ? '-active' : ''
      return (
        <div className="row">
          <div className="large-1 columns">
            <div className="select-button">
              {this.props.selectOption === 'Fixed'
                ? <Form.Field>
                    <Radio
                      name="planGroup"
                      value={element.name}
                      checked={this.state.value === element.name}
                      onChange={this.handleFixedChange}
                    />
                  </Form.Field>
                : <Form.Field>
                    <Checkbox
                      value={element.name}
                      onChange={this.handleFlexChange}
                    />
                  </Form.Field>}
            </div>
          </div>
          <div className={this.props.columnsLenght}>
            <div className="plan-box">
              {element.name}
              <Icon
                style={{ float: 'right' }}
                name="ellipsis vertical"
                size="large"
              />
            </div>
          </div>
          {this.props.plan === 'Flex'
            ? <div className="large-4 columns">
                <div
                  className={`basic-status-box${isActive}`}
                  onClick={() => this.handleActive(index, element.name)}
                >
                  <p>ตั้งแผนนี้เป็นค่าเริ่มต้น</p>
                </div>
              </div>
            : null}
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <Form>
          {this.renderList(this.props.planName)}
          <div className="row">
            <button
              className="record-select-plan"
              onClick={() => this.handleClick()}
            >
              บันทึก
            </button>
          </div>
        </Form>
      </div>
    )
  }
}

SelectOptionPlan.propTypes = {}

const mapDispatchToProps = dispatch => ({})
const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(SelectOptionPlan)
