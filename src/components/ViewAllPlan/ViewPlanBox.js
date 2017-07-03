import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Icon, Table, Rating, Header, Checkbox } from 'semantic-ui-react'
import styled from 'react-sc'
import { getAllPlan } from '../../api/setPlan'

class ViewPlanBox extends Component {
  constructor() {
    super()
  }

  renderList = list => {
    const output = []
    for (var i = 0; i < list.length; i++) {
      output.push(
        <tr>
          <td>
            <Checkbox />
          </td>
          <td singleLine> {list[i].name} </td>
          <td> {list[i].updataBy} </td>
          <td> {list[i].date} </td>
          <td>
            <Icon disabled name="edit" size="large" />
            <Icon disabled name="paste" size="large" />
            <Icon disabled name="trash" size="large" />
          </td>
        </tr>,
      )
    }
    return output
  }

  render() {
    {
      this.props.getAllPlan()
    }
    return (
      <table>
        {this.renderList(this.props.planList)}
      </table>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getAllPlan: () => dispatch(getAllPlan()),
})

const mapStateToProps = state => ({
  planList: state.plan,
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewPlanBox)
