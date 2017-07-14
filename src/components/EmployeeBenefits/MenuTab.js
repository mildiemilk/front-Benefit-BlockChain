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
import '../../styles/EmployeeBenefits.scss'

class MenuTab extends Component {
  constructor() {
    super()
    this.state = {
      selected: '',
    }
  }

  renderList = list => {
    return list.map((element, index) => {
      const isActive = index === this.props.activeGroup ? '-active' : ''
      return (
        <div
          className={`employeeBenefits-Menu-Tab-box${isActive}`}
          onClick={() => this.props.handleActiveGroup(index)}
        >
          {element.name}
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <div className="employeeBenefits-Menu-Tab-head-box">
          กลุ่มของพนักงาน
        </div>
        {this.renderList(this.props.groupName)}
      </div>
    )
  }
}

MenuTab.propTypes = {}

const mapDispatchToProps = dispatch => ({})
const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(MenuTab)
