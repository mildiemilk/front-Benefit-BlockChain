import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Select, Checkbox, Input } from 'semantic-ui-react';
import {
  Blogs,
  SaveButton,
  PlanName,
  Line,
  PlanContent,
  PlanBox,
  PlanImg,
  PlanTopic,
  ToggleBox,
} from './styled';
import insurance from '../../../assets/setbenefit/3.png';
import general from '../../../assets/setbenefit/4.png';
import imgHealth from '../../../assets/setbenefit/5.png';

const Selects = styled(Select) `
    &&&{
      margin: 22px 10px 0px 0px;
      width: 94%;  
    }
`;

const Inputs = styled(Input) `
    &&&{
      height: 46px;
      margin-top: 14px;
      margin-left: 12px;
      width: ${props => props.width};
      color: transparent;
      color: transparent;
    }
`;

const NameInput = styled(Input) `
    &&&{
      height: 40px;
      background-color: #ffffff;
      padding: 1%;
      width: 100% !important;
    }
`;
const FieldsetEdit = styled.fieldset`
    border: none;
    padding: 0px;
`;
class SettingPlan extends Component {
  static propTypes = {
    option: PropTypes.arrayOf(PropTypes.object).isRequired,
    optionPlan: PropTypes.shape({}).isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func,
    handleToggle: PropTypes.func.isRequired,
    planName: PropTypes.string.isRequired,
    plan: PropTypes.string.isRequired,
    isHealth: PropTypes.bool.isRequired,
    health: PropTypes.number.isRequired,
    isExpense: PropTypes.bool.isRequired,
    expense: PropTypes.number.isRequired,
    handleSave: PropTypes.string.isRequired,
    isReadOnly: PropTypes.bool,
    width: PropTypes.number,
  }
  static defaultProps = {
    handleChange: '',
    isReadOnly: false,
    width: '',
  }
  constructor(props) {
    super(props);
    this.state = {
      optionPlan: [],
    };
  }
  componentDidMount() {
    if (this.props.option.length >= 1) {
      this.renderOption(this.props.option);
    }
  }
  componentDidUpdate() {
    if (this.state.optionPlan.length === 0) {
      this.renderOption(this.props.option);
    }
  }

  renderOption = option => {
    const benefitPlan = [];
    option.map((option, index) => {
      benefitPlan.push({
        key: index,
        text: option.plan.planName,
        value: option.plan._id,
      });
      return option;
    });
    this.setState({ optionPlan: benefitPlan });
  }

  render() {
    const { handleChange, handleSubmit, planName, plan, optionPlan,
      isHealth, handleToggle, health, isExpense, expense, handleSave, isReadOnly } = this.props;
    let showExpense = optionPlan.isExpense;
    let showHealth = optionPlan.isHealth;
    if (isReadOnly) {
      showExpense = isExpense;
      showHealth = isHealth;
    }
    return (
      <FieldsetEdit disabled={handleChange === ''}>
        <Blogs>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="large-2 columns">
                <PlanName>
                  ชื่อแผนสิทธิประโยชน์
                </PlanName>
              </div>
              <div className="large-10 columns">
                <NameInput
                  required
                  type="text"
                  name="planName"
                  value={planName}
                  placeholder="แผนสิทธิประโยชน์"
                  onChange={handleChange}
                />
              </div>
            </div>
            <Line />
            <PlanContent>
              กรุณาระบุสิทธิประโยชน์ที่ต้องการ
            </PlanContent>
            <PlanBox>
              <div className="row">
                <div className="large-6 columns">
                  <PlanImg src={insurance} />
                  <PlanTopic>
                    แผนประกันภัย (Insurance)
                  </PlanTopic>
                </div>
                <div className="large-6 columns">
                  <Selects
                    required
                    disabled={handleChange === ''}
                    name="plan"
                    options={this.state.optionPlan}
                    value={plan}
                    placeholder="เลือกแผนที่ต้องการ"
                    onChange={handleChange}
                  />
                </div>
              </div>
            </PlanBox>
            { showHealth
              ? <PlanBox>
                <div className="row">
                  <div>
                    <div className="large-6 columns">
                      <PlanImg src={imgHealth} />
                      <PlanTopic>
                        ค่าใช้จ่ายสุขภาพ (Health)
                      </PlanTopic>
                    </div>
                    <div className="large-6 columns">
                      <div className="toggle">
                        <ToggleBox>
                          <Checkbox
                            name="isHealth"
                            checked={isHealth}
                            toggle
                            onClick={handleToggle}
                          />
                        </ToggleBox>
                      </div>
                      { isHealth
                      ? <Inputs
                        width={this.props.width}
                        required
                        type="number"
                        name="health"
                        value={health !== -1 ? health : ''}
                        action="บาท/ปี"
                        placeholder="จำนวนเงิน"
                        onChange={handleChange}
                      />
                      : <Inputs
                        width={this.props.width}
                        type="number"
                        name="health"
                        value=""
                        action="บาท/ปี"
                        placeholder="จำนวนเงิน"
                        readOnly
                      />
                      }
                    </div>
                  </div>
                </div>
              </PlanBox>
              : null
              }
            { showExpense
              ? <PlanBox>
                <div className="row">
                  <div>
                    <div className="large-6 columns">
                      <PlanImg src={general} />
                      <PlanTopic>
                        ค่าใช้จ่ายทั่วไป (General Expense)
                      </PlanTopic>
                    </div>
                    <div className="large-6 columns">
                      <div className="toggle">
                        <ToggleBox>
                          <Checkbox
                            name="isExpense"
                            checked={isExpense}
                            toggle
                            onClick={handleToggle}
                          />
                        </ToggleBox>
                      </div>
                      { isExpense
                      ? <Inputs
                        width={this.props.width}
                        required
                        type="number"
                        name="expense"
                        value={expense !== -1 ? expense : ''}
                        action="บาท/ปี"
                        placeholder="จำนวนเงิน"
                        onChange={handleChange}
                      />
                      : <Inputs
                        width={this.props.width}
                        type="number"
                        name="expense"
                        value=""
                        action="บาท/ปี"
                        placeholder="จำนวนเงิน"
                        readOnly
                      />
                      }
                    </div>
                  </div>
                </div>
              </PlanBox>
              : null
              }
            <div className="row">
              <div className="large-2 large-offset-9 end columns">
                <SaveButton className={handleSave} type="submit">
                  บันทึก
                </SaveButton>
              </div>
            </div>
          </form>
        </Blogs>
      </FieldsetEdit>
    );
  }
}

export default SettingPlan;
