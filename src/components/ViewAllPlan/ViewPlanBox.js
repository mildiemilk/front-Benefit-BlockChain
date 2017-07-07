import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Icon, Table, Rating, Header, Checkbox, Popup } from 'semantic-ui-react'
import styled from 'react-sc'
import { getAllPlan } from '../../api/setPlan'
import SearchBox from './SearchBox'
import ModalView from './ModalView'

class ViewPlanBox extends Component {
  constructor() {
    super()
  }

  renderList = list => {
    console.log(list)
    const output = []
    for (var i = 0; i < list.length; i++) {
      output.push(
        <tr>
          <td>
            <Checkbox />
          </td>
          <td singleLine> {list[i].planName} </td>
          <td> {list[i].updateBy} </td>
          <td> {list[i].updatedAt} </td>
          <td>
            <Popup
              trigger={<Icon disabled name="edit" size="large" />}
              content="แก้ไขแผน"
              position="bottom left"
              size="mini"
              basic
            />

            <Popup
              trigger={<Icon disabled name="paste" size="large" />}
              content="คัดลอกแผน"
              position="bottom left"
              size="mini"
              basic
            />

            <ModalView />
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
        {this.renderList(this.props.items)}
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
