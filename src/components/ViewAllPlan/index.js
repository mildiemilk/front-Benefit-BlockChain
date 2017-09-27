import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Icon, Popup } from 'semantic-ui-react';
import ViewPlanBox from './view-planbox';
import { BackHome, RecViewAllPlan, ViewHeader } from './styled';
import SearchBox from './search-box';
import NavInsure from '../NavInsure';
import ModalView from './modal-view';
import { getAllPlan, copyPlan, deletePlan } from '../../api/set-plan';

class ViewAllPlan extends Component {
  static propTypes = {
    getAllPlan: PropTypes.func.isRequired,
    planList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      step: 3,
      passwordToConfirm: '',
      SearchTerm: '',
      checkUpdate: false,
      selectPlan: [],
      modalOpen: false,
    };
    props.getAllPlan();
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.checkUpdate) {
      this.setState({ checkUpdate: false });
      this.props.getAllPlan();
    }
  }

  handleCopy = planId => {
    const { selectPlan } = this.state;
    if (selectPlan.length === 0) {
      selectPlan.push(planId);
    } else {
      const check = selectPlan.indexOf(planId);
      if (check === -1) {
        selectPlan.push(planId);
      }
    }
    copyPlan(selectPlan)
    .then(() => {
      this.handleCheckUpdate();
    });
  }

  handleDelete = () => {
    const { selectPlan } = this.state;
    this.handleClose();
    deletePlan(selectPlan)
    .then(() => {
      this.handleCheckUpdate();
    });
  }

  handleChange = ({ target: { value, checked } }) => {
    const { selectPlan } = this.state;
    const check = selectPlan.indexOf(parseInt(value, 10));
    if (checked) {
      if (check === -1) {
        selectPlan.push(parseInt(value, 10));
      }
    } else {
      if (check > -1) {
        selectPlan.splice(check, 1);
      }
    }
    this.setState({ selectPlan });
  }

  handleCheckUpdate = () => this.setState({ checkUpdate: true });

  handleSearchBoxChange(keyword) {
    this.setState({ SearchTerm: keyword });
  }

  filterPlan(list) {
    return list.filter(
      plan =>
        plan.planName
        .toLowerCase()
        .indexOf(this.state.SearchTerm.toLowerCase()) >= 0,
    );
  }

  handleOpen = planId => {
    const { selectPlan } = this.state;
    if (planId !== -1) {
      if (selectPlan.length === 0) {
        selectPlan.push(planId);
      } else {
        const check = selectPlan.indexOf(planId);
        if (check === -1) {
          selectPlan.push(planId);
        }
      }
    }
    this.setState({ modalOpen: true });
  }

  handleClose = () => this.setState({ modalOpen: false });

  render() {
    const { modalOpen, step } = this.state;
    return (
      <div className="ViewAllPlan">
        <NavInsure step={step} />
        <div className="row">
          <RecViewAllPlan>
            <div className="row">
              <div className="large-3 large-offset-1 columns">
                <ViewHeader> แพลนทั้งหมด </ViewHeader>
                <Link to="/submitplan/0">
                  <BackHome>&lt; กลับหน้าหลัก </BackHome>
                </Link>
              </div>

              <div className="large-2 large-offset-4 columns">
                <SearchBox
                  callback={keyword => this.handleSearchBoxChange(keyword)}
                />
              </div>
              <div className="large-2 columns" />
            </div>

            <div style={{ marginTop: '4%' }} className="row">
              <div className="large-10 large-offset-1 columns">
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <Popup
                          trigger={
                            <Icon
                              disabled
                              name="trash"
                              size="large"
                              onClick={() => this.handleOpen(-1)}
                            />
                          }
                          content="ลบแผน"
                          position="bottom left"
                          size="mini"
                          basic
                        />
                      </td>
                      <td> ชื่อแพลน </td>
                      <td> แก้ไขครั้งล่าสุดโดย </td>
                      <td> วันที่ </td>
                      <td> Action </td>
                    </tr>
                  </tbody>
                </table>
                <ViewPlanBox
                  planList={this.filterPlan(this.props.planList)}
                  handleCopy={this.handleCopy}
                  handleChange={this.handleChange}
                  handleOpen={this.handleOpen}
                />
              </div>
            </div>
          </RecViewAllPlan>
        </div>
        <ModalView
          modalOpen={modalOpen}
          handleDelete={this.handleDelete}
          handleClose={this.handleClose}
        />
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

export default connect(mapStateToProps, mapDispatchToProps)(ViewAllPlan);
