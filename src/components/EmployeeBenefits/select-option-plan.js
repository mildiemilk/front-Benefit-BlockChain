import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Checkbox, Form, Radio, List, button, Icon } from 'semantic-ui-react';
import { PopupView } from '../Bidding/styled';
import { Icons } from './styled';
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
    optionPlan: PropTypes.shape({}).isRequired,
    templatePlan: PropTypes.arrayOf(PropTypes.object).isRequired,
    benefitPlan: PropTypes.arrayOf(PropTypes.object).isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      selectedGroup: '',
      value: '',
      plan: '',
      openSettingBenefit: false,
      indexPlan: '',
    };
  }

  handleChange = (e, { value }) => {
    this.setState({ value });
    this.props.handleFixedChange(value);
  }

  handleModal = indexPlan => {
    this.setState({
      openSettingBenefit: true,
      indexPlan,
    });
  }

  closeModal = () => {
    this.setState({ openSettingBenefit: false });
  }

  isCheck = planId => {
    const { selectPlan } = this.props;
    if (selectPlan !== null) {
      return selectPlan.indexOf(planId) !== -1;
    }
    return false;
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
            <div className="plan-box clearfix">
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
                      <List.Content onClick={() => this.handleModal(index)}>
                        <p><Icon name="file text outline" />ดูแผน</p>
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
              optionPlan={this.props.optionPlan}
              benefitPlan={this.props.benefitPlan}
              templatePlan={this.props.templatePlan}
              index={this.state.indexPlan}
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
