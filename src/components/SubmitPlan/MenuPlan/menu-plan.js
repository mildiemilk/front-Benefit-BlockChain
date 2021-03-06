import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Popup, Icon, List } from 'semantic-ui-react';
import '../../../styles/submit-plan.scss';
import FormModal from '../form-modal';
import { menuPlans } from '../../../api/set-plan';

class MenuPlan extends Component {
  static propTypes = {
    menuPlans: PropTypes.func.isRequired,
    handleCopy: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    activePlan: PropTypes.number.isRequired,
    employeeOfPlan: PropTypes.number.isRequired,
    planName: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleResetProfilePlan: PropTypes.func.isRequired,
    handleModalFinish: PropTypes.func.isRequired,
    handleCloseModal: PropTypes.func.isRequired,
    openModalForm: PropTypes.func.isRequired,
    handlePlan: PropTypes.func.isRequired,
    handleNewPlan: PropTypes.func.isRequired,
    planList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    handleUpdateData: PropTypes.func.isRequired,
    handleUpdateEditData: PropTypes.func.isRequired,
    comparePlan: PropTypes.arrayOf(PropTypes.object).isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      step: 6,
      isOpen: false,
      modalOpen: false,
      comparePlan: [],
      popup: -1,
    };
  }

  componentWillReceiveProps() {
    this.setState({ popup: -1 });
  }

  handleOpen = i => this.setState({ isOpen: true, popup: i });

  handleClose = () => {
    this.setState({ isOpen: false, popup: -1 });
  }

  handleOpenModal = () =>
    this.setState({
      modalOpen: true,
    })

  handleCloseModal = () =>
    this.setState({
      modalOpen: false,
    })

  handleChange = (e, list) => {
    if (e.target.checked) {
      this.setState({
        comparePlan: this.state.comparePlan.concat(list[e.target.id]),
      });
    } else {
      const index = this.state.comparePlan.indexOf(list[e.target.id]);
      const x = this.state.comparePlan;
      x.splice(index, 1);
      this.setState({ comparePlan: x });
    }
  }

  handleSelectPlan = e => {
    e.preventDefault();
    const { comparePlan } = this.state;
    this.props.menuPlans(comparePlan);
  }

  renderList = () => {
    const { planList } = this.props;
    const output = [];
    for (let i = 0; i < planList.length; i += 1) {
      const isActive = i === parseInt(this.props.activePlan, 10) ? '-active' : '';
      output.push(
        <div
          className={`menu-select-plan${isActive}`}
          onClick={() => this.props.handlePlan(i)}
          role="button"
          aria-hidden
          key={i.toString()}
        >
          <div className="submit-plan-menu-plan-box">
            <div className="large-2 mediam-2 small-2 columns">
              <input
                type="checkbox"
                id={i}
                onChange={e => this.handleChange(e, planList)}
              />
            </div>
            <div className="large-10 mediam-10 small-10 columns end">
              <span>{planList[i].planName}</span>
              <Popup
                key={i.toString()}
                trigger={
                  <Icon
                    style={{ float: 'right', cursor: 'pointer', lineHeight: 'unset' }}
                    name="ellipsis vertical"
                    size="large"
                    onClick={() => this.handleOpen(i)}
                  />
                }
                content={
                  <List divided relaxed style={{ cursor: 'pointer' }}>
                    <List.Item>
                      <List.Content>
                        <p
                          id={i}
                          onClick={this.props.handleCopy}
                          role="button"
                          aria-hidden
                        >
                          <Icon name="copy" />คัดลอกแผน
                        </p>
                      </List.Content>
                    </List.Item>
                    <List.Item>
                      <List.Content>
                        <p
                          id={i}
                          onClick={this.props.handleDelete}
                          role="button"
                          aria-hidden
                        >
                          <Icon name="trash outline" />ลบแผน
                        </p>
                      </List.Content>
                    </List.Item>
                  </List>
                }
                on="click"
                hideOnScroll
                position="bottom center"
                open={this.state.popup === i}
                onClose={this.handleClose}
              />
            </div>
            <div className="large-10 mediam-10 small-10 columns">
              <p>แก้ไขครั้งล่าสุดโดย {planList[i].company.hrDetail}</p>
            </div>
          </div>
        </div>,
      );
    }
    return output;
  }

  render() {
    if (this.props.comparePlan === this.state.comparePlan) {
      return <Redirect to="/compareplan" />;
    }
    return (
      <div className="menu-box">
        <div className="menu-bar">
          <span>รายการแผน</span>
          <Popup
            trigger={
              <div style={{ float: 'right' }}>
                <span>ชื่อ </span>
                <Icon
                  name="caret down"
                  size="small"
                  style={{ cursor: 'pointer' }}
                />
              </div>
            }
            content="Hide the popup on any scroll event"
            on="click"
            hideOnScroll
            position="bottom center"
          />
        </div>
        <FormModal
          handleUpdateEditData={this.props.handleUpdateEditData}
          planList={this.props.planList}
          handleUpdateData={this.props.handleUpdateData}
          activePlan={this.props.activePlan}
          handlePlan={this.props.handlePlan}
          openModalForm={this.props.openModalForm}
          handleCloseModal={this.props.handleCloseModal}
          handleModalFinish={this.props.handleModalFinish}
          handleResetProfilePlan={this.props.handleResetProfilePlan}
          handleChange={this.props.handleChange}
          planName={this.props.planName}
          employeeOfPlan={this.props.employeeOfPlan}
        />
        <div className="menu-add-plan">
          <p
            onClick={this.props.handleNewPlan}
            role="button"
            aria-hidden
            className="menu-add-plan-text"
            style={{ cursor: 'pointer' }}
          >
            <Icon name="add circle" size="big" className="submit-plan-icon-add-plan" />สร้างแผนใหม่
          </p>
        </div>
        {this.renderList()}
        <div
          className="menu-compare-plan"
          onClick={this.handleSelectPlan}
          role="button"
          aria-hidden
        >
          เปรียบเทียบแผน
        </div>
      </div>
    );
  }
}

MenuPlan.propTypes = {};

const mapDispatchToProps = dispatch => ({
  menuPlans: comparePlan => dispatch(menuPlans(comparePlan)),
});

const mapStateToProps = state => ({
  comparePlan: state.menuplanReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuPlan);
