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
} from 'semantic-ui-react'
import '../../styles/employeeBenefits.scss'

class SelectOptionPlan extends Component {
  constructor() {
    super()
    this.state = {
      selected: '',
    }
  }

  handleActive = index => {
    this.setState({ selected: index })
  }

  renderList = list => {
    return list.map((element, index) => {
      const isActive = index === this.state.selected ? '-active' : ''
      return (
        <div className="row">
          <div className="large-1 columns">
            <div className="select-button">
              <this.props.selectOption />
            </div>
          </div>
          <div className={this.props.columnsLenght}>
            <div className="fixed-plan-box">
              {element.name}
            </div>
          </div>
          {this.props.plan === 'Flex'
            ? <div className="large-4 columns">
                <div
                  className={`basic-status-box${isActive}`}
                  onClick={() => this.handleActive(index)}
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
        {/*<div className="large-1 columns">
              <div className="select-button">
                <this.props.selectOption />
              </div>
            </div>
            <div className={this.props.columnsLenght}>
              <div className="fixed-plan-box">
                แผนสิทธิประโยชน์ 1
              </div>
            </div>
            {this.props.plan === 'Flex'
              ? <div className="large-4 columns">
                  <div className="basic-status-box">
                    <p>ตั้งแผนนี้เป็นค่าเริ่มต้น</p>
                  </div>
                </div>
              : null
            }*/}
        {this.renderList(this.props.planName)}
      </div>
    )
  }
}

SelectOptionPlan.propTypes = {}

const mapDispatchToProps = dispatch => ({})
const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(SelectOptionPlan)
