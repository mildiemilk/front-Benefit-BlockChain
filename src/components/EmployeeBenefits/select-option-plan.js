import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Checkbox, Form, Radio, List, button, Icon } from 'semantic-ui-react';
import { PopupView } from '../Bidding/styled';
import { Icons } from './styled';
import '../../styles/employee-benefits.scss';
import '../../styles/popup-color.scss';
import SettingBenefitModal from './setting-benefit-modal';

class SelectOptionPlan extends Component {
  static propTypes = {
    handleFixedChange: PropTypes.func.isRequired,
    defaultPlan: PropTypes.string.isRequired,
    selectOption: PropTypes.string.isRequired,
    selectPlan: PropTypes.arrayOf(PropTypes.string).isRequired,
    handleFlexChange: PropTypes.func.isRequired,
    columnsLenght: PropTypes.string.isRequired,
    plan: PropTypes.string.isRequired,
    handleActivePlan: PropTypes.func.isRequired,
    planName: PropTypes.arrayOf(PropTypes.object).isRequired,
    handleSubmit: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      selectedGroup: '',
      value: '',
      plan: '',
      openSettingBenefit: false,
    };
  }

  handleChange = (e, { value }) => {
    this.setState({ value });
    this.props.handleFixedChange(value);
  }

  handleModal = () => {
    this.setState({ openSettingBenefit: true });
  }

  closeModal = () => {
    this.setState({ openSettingBenefit: false });
  }

  isCheck = planId => {
    const { selectPlan } = this.props;
    return selectPlan.indexOf(planId) !== -1;
  }

  renderList = list => {
    const lists = list.map((element, index) => {
      const isActive = element._id === this.props.defaultPlan ? '-active' : '';
      return (
        <div className="row">
          <div className="large-1 columns">
            <div className="select-button">
              {this.props.selectOption === 'fixed'
                ? <Form.Field>
                  <Radio
                    name="planGroup"
                    value={element.benefitPlanName}
                    checked={this.isCheck(element._id)}
                    onChange={this.handleChange}
                  />
                </Form.Field>
                : <Form.Field>
                  <Checkbox
                    value={element._id}
                    checked={this.isCheck(element._id)}
                    onChange={this.props.handleFlexChange}
                  />
                </Form.Field>}
            </div>
          </div>
          <div className={this.props.columnsLenght}>
            <div className="plan-box">
              {element.benefitPlanName}
              <PopupView
                trigger={
                  <Icons
                    name="ellipsis vertical"
                    size="large"
                  />
                }
                content={
                  <List divided relaxed>
                    <List.Item>
                      <List.Content onClick={() => this.handleModal()}>
                        <p><Icon name="file text outline" />ดูแพลน</p>
                      </List.Content>
                    </List.Item>
                  </List>
                }
                on="click"
                hideOnScroll
                position="bottom center"
                style={{
                  backgroundColor: '#3a7bd5',
                  color: 'white',
                  zIndex: '1',
                }}
              />
            </div>
            <SettingBenefitModal
              openSettingBenefit={this.state.openSettingBenefit}
              closeModal={this.closeModal}
            />
          </div>
          {this.props.plan === 'flex'
            ? <div className="large-4 columns">
              <div
                className={`basic-status-box${isActive}`}
                onClick={() =>
                  this.props.handleActivePlan(index, element._id)}
                role="button"
                aria-hidden
              >
                <p>ตั้งแผนนี้เป็นค่าเริ่มต้น</p>
              </div>
            </div>
            : null}
        </div>
      );
    });
    return lists;
  }

  render() {
    return (
      <div className="PopUpColor">
        <Form>
          {this.renderList(this.props.planName)}
          <div className="row">
            <button
              className="record-select-plan"
              onClick={() => this.props.handleSubmit()}
            >
              บันทึก
            </button>
          </div>
        </Form>
      </div>
    );
  }
}

export default (SelectOptionPlan);
