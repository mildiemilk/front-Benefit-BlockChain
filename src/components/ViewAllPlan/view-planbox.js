import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Icon, Checkbox, Popup } from 'semantic-ui-react'
import ModalView from './modal-view'
import { copyPlan, deletePlan } from '../../api/set-plan'

class ViewPlanBox extends Component {
  static propTypes = {
    copyPlan: PropTypes.func.isRequired,
    deletePlan: PropTypes.func.isRequired,
    planList: PropTypes.arrayof(PropTypes.object).isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  handleCopy = planId => {
    this.props.copyPlan(planId)
  }

  handleDelete = planId => {
    this.props.deletePlan(planId)
  }

  renderList = list => {
    list.map(element => (
      <tr>
        <td>
          <Checkbox />
        </td>
        <td singleLine> {element.planName} </td>
        <td> {element.updateBy} </td>
        <td> {element.updatedAt} </td>
        <td>
          <Popup
            trigger={<Icon disabled name="edit" size="large" />}
            content="แก้ไขแผน"
            position="bottom left"
            size="mini"
            basic
          />

          <Popup
            trigger={
              <Icon
                disabled
                name="paste"
                size="large"
                onClick={() => this.handleCopy(element.planId)}
              />
            }
            content="คัดลอกแผน"
            position="bottom left"
            size="mini"
            basic
          />

          <ModalView
            planId={element.planId}
            list={list}
            handleDelete={this.handleDelete}
          />
        </td>
      </tr>
    ))
  }

  render() {
    return (
      <table>
        {this.renderList(this.props.planList)}
      </table>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  deletePlan: planId => dispatch(deletePlan(planId)),
  copyPlan: planId => dispatch(copyPlan(planId)),
})

const mapStateToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(ViewPlanBox)
