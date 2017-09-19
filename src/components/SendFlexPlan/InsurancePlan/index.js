import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { getOptionPlan } from '../../../api/benefit-plan';
import PlanBoxs from './plan-box';
import { ListBox } from './styled';

class InsurancePlan extends Component {
  static propTypes = {
    // changePositionPage: PropTypes.func.isRequired,
    planList: PropTypes.arrayOf(PropTypes.object).isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      step: 6,
      isOpen: false,
      modalOpen: false,
      activePlan: -1,
    };
  }
  // componentDidmount() {
  //   this.props.getOptionPlan();
  // }
  // handleOpen = () => {
  //   this.setState({ isOpen: true });
  // }

  // handleClose = () => {
  //   this.setState({ isOpen: false });
  // }

  // handleModal = e => {
  //   this.setState({
  //     isOpen: false,
  //     modalOpen: true,
  //     activePlan: e.target.id,
  //   });
  //   this.props.changePositionPage();
  // }

  // handleOpenModal = () => {
  //   this.setState({
  //     modalOpen: true,
  //   });
  //   this.props.changePositionPage();
  // }

  // handleCloseModal = () => {
  //   this.setState({
  //     modalOpen: false,
  //   });
  //   this.props.changePositionPage();
  // }

  // handleDelete = e => {
  //   this.props.deletePlan(this.props.planList[e.target.id].planId);
  // }

  renderList = lists => {
    const allList = lists.map((element, index) => (
      <ListBox className="large-4 columns">
        {/* <PlanBoxs
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
        /> */}
        <PlanBoxs
          id={index}
          plan={element.plan}
        />

      </ListBox>
    ));
    return allList;
  }

  render() {
    console.log('planList', this.props.planList);
    if (this.props.planList) {
      return (
        <div className="row">
          {this.renderList(this.props.planList)}
        </div>
      );
    }
    return <div />;
  }
}

export default InsurancePlan;
