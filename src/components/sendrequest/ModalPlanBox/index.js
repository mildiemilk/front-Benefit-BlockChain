import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import styled from 'react-sc'
import {
  Detail,
  Head,
  Head2,
  subInner,
  Submit,
  BoxIndiv1,
  BoxIndiv2,
  BoxIndiv3,
  BoxIndiv4,
  SideIn,
  PlanBox,
} from '../styled'
import PlanBoxModal from './planbox-modal'
import {
  Grid,
  Image,
  Container,
  Divider,
  Checkbox,
  Segment,
  Icon,
  Progress,
  Popup,
  List,
} from 'semantic-ui-react'
import { getAllPlan } from '../../../api/set-plan'
import PlanBoxs from './planbox'
import { ListBox } from './styled'
import NavInsure from '../../NavInsure'

let open = []
class ModalPlanBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 6,
      isOpen: false,
      modalOpen: false,
    }
    props.getAllPlan()
  }

  handleOpen = () => {
    this.setState({ isOpen: true })
  }

  handleClose = () => {
    this.setState({ isOpen: false })
  }

  handleModal = () => {
    this.setState({ isOpen: false })
    this.setState({ modalOpen: true })
    this.props.changePositionPage()
  }

  handleOpenModal = e => {
    this.setState({
      modalOpen: true,
    })
    this.props.changePositionPage()
  }

  handleCloseModal = e => {
    this.setState({
      modalOpen: false,
    })
    this.props.changePositionPage()
  }

  renderList = list => {
    return list.map((element, index) => (
      <ListBox className="large-4 columns">
        <PlanBoxs
          changePositionPage={this.props.changePositionPage}
          isOpen={this.state.isOpen}
          modalOpen={this.state.modalOpen}
          handleOpen={this.handleOpen}
          handleClose={this.handleClose}
          handleModal={this.handleModal}
          handleOpenModal={this.handleOpenModal}
          handleCloseModal={this.handleCloseModal}
          planList={element}
        />
      </ListBox>
    ))
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
})

const mapStateToProps = state => ({
  planList: state.plan,
})

export default connect(mapStateToProps, mapDispatchToProps)(ModalPlanBox)
