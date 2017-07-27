import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../../styles/employee-benefits.scss'

class MenuTab extends Component {
  static propTypes = {
    activeGroup: PropTypes.string.isRequired,
    handleActiveGroup: PropTypes.func.isRequired,
    groupName: PropTypes.arrayOf(PropTypes.object).isRequired,
  }
  constructor() {
    super()
    this.state = {
      selected: '',
    }
  }
  renderList = list => {
    const showList = list.map((element, index) => {
      const isActive = index === this.props.activeGroup ? '-active' : ''
      return (
        <div
          className={`employeeBenefits-Menu-Tab-box${isActive}`}
          onClick={() => this.props.handleActiveGroup(index)}
          role="button"
          aria-hidden
        >
          {element.name}
        </div>
      )
    })
    return showList
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

export default MenuTab
