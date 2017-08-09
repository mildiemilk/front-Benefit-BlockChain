import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getAllPlan, deletePlan } from '../../../api/set-plan'
import PlanBoxs from './planbox'
import { ListBox } from './styled'

class ModalPlanBox extends Component {
  static propTypes = {
    getAllPlan: PropTypes.func.isRequired,
    changePositionPage: PropTypes.func.isRequired,
    deletePlan: PropTypes.func.isRequired,
    planList: PropTypes.arrayOf(PropTypes.object).isRequired,
  }
  constructor(props) {
    super(props)
    this.state = {
      step: 6,
      isOpen: false,
      modalOpen: false,
      activePlan: 0,
    }
    const { getAllPlan } = props
    setInterval(getAllPlan, 2000)
  }

  handleOpen = () => {
    this.setState({ isOpen: true })
  }

  handleClose = () => {
    this.setState({ isOpen: false })
  }

  handleModal = e => {
    this.setState({
      isOpen: false,
      modalOpen: true,
      activePlan: e.target.id,
    })
    this.props.changePositionPage()
  }

  handleOpenModal = () => {
    this.setState({
      modalOpen: true,
    })
    this.props.changePositionPage()
  }

  handleCloseModal = () => {
    this.setState({
      modalOpen: false,
    })
    this.props.changePositionPage()
  }

  handleDelete = e => {
    this.props.deletePlan(this.props.planList[e.target.id].planId)
  }

  renderList = list => {
    const lists = list.map((element, index) => (
      <ListBox className="large-4 columns">
        <PlanBoxs
          changePositionPage={this.props.changePositionPage}
          id={index}
          activePlan={this.state.activePlan}
          planList={this.props.planList}
          isOpen={this.state.isOpen}
          modalOpen={this.state.modalOpen}
          handleOpen={this.handleOpen}
          handleClose={this.handleClose}
          handleModal={this.handleModal}
          handleOpenModal={this.handleOpenModal}
          handleCloseModal={this.handleCloseModal}
          plan={element}
          handleDelete={this.handleDelete}
        />
      </ListBox>
    ))
    return lists
  }

  render() {
    return (
      <div>
        <div className="row">
          {this.renderList(this.props.planList)}
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getAllPlan: () => dispatch(getAllPlan()),
  deletePlan: planId => dispatch(deletePlan(planId)),
})

const mapStateToProps = state => ({
  planList: state.plan.planList,
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalPlanBox)
