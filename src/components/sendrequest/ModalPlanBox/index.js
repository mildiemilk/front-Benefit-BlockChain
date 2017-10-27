import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getAllPlan, deletePlan } from '../../../api/set-plan';
import PlanBoxs from './planbox';
import { ListBox } from './styled';

class ModalPlanBox extends Component {
  static propTypes = {
    getAllPlan: PropTypes.func.isRequired,
    changePositionPage: PropTypes.func.isRequired,
    // deletePlan: PropTypes.func.isRequired,
    planList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      step: 6,
      isOpen: false,
      modalOpen: false,
      activePlan: -1,
      updateData: false,
    };
    props.getAllPlan();
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.updateData) {
      this.setState({
        updateData: false,
      });
      this.props.getAllPlan();
    }
  }

  handleOpen = () => {
    this.setState({ isOpen: true });
  }

  handleClose = () => {
    this.setState({ isOpen: false });
  }

  handleModal = e => {
    this.setState({
      isOpen: false,
      modalOpen: true,
      activePlan: e.target.id,
    });
    this.props.changePositionPage();
  }

  handleOpenModal = () => {
    this.setState({
      modalOpen: true,
    });
    this.props.changePositionPage();
  }

  handleCloseModal = () => {
    this.setState({
      modalOpen: false,
    });
    this.props.changePositionPage();
  }

  handleDelete = e => {
    const { planList } = this.props;
    deletePlan([planList[e.target.id].planId])
    .then(() => {
      this.setState({ updateData: true });
    });
  }

  renderList = () => {
    const { planList } = this.props;
    const lists = planList.map((element, index) => (
      <ListBox className="large-4 mediam-4 small-4 columns" key={index.toString()}>
        <PlanBoxs
          changePositionPage={this.props.changePositionPage}
          id={index}
          activePlan={this.state.activePlan}
          planList={planList}
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
    ));
    return lists;
  }

  render() {
    return (
      <div>
        <div className="row">
          {this.renderList()}
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getAllPlan: () => dispatch(getAllPlan()),
});

const mapStateToProps = state => ({
  planList: state.plan.planList,
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalPlanBox);
