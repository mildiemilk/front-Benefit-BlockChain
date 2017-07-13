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

class SelectOptionPlan extends Component {
  constructor() {
    super()
    this.state = {
      selected: '',
      value: '',
      plan: '',
    }
  }
  handleChange = (e, { value }) => this.setState({ value })
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
              <Form.Field>
                <this.props.selectOption
                  name="planGroup"
                  value={element.name}
                  checked={this.state.value === element.name}
                  onChange={this.handleChange}
                />
              </Form.Field>
            </div>
          </div>
          <div className={this.props.columnsLenght}>
            <div className="fixed-plan-box">
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
    console.log(this.state.value)
    return (
      <div>
        <Form>
          {this.renderList(this.props.planName)}
        </Form>
      </div>
    )
  }
}

SelectOptionPlan.propTypes = {}

const mapDispatchToProps = dispatch => ({})
const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(SelectOptionPlan)
