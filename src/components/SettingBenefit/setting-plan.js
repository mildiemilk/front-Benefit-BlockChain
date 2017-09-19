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

const Selects = styled(Select) `
    &&&{
      margin-left: 51%;
      margin-top: 3.5%;
      width: 47.5%;
    }
`;

const Inputs = styled(Input) `
    &&&{
      position: absolute;
      top: 25%;
      margin-left: 62.5%;
      color: transparent;
    }
`;

const NameInput = styled(Input) `
    &&&{
      margin-left: 10px;
      height: 40px;
      background-color: #ffffff;
      padding: 1%;
      width: 451px !important;
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
    health: PropTypes.string.isRequired,
    isExpense: PropTypes.bool.isRequired,
    expense: PropTypes.string.isRequired,
    handleSave: PropTypes.func.isRequired,
    isReadOnly: PropTypes.bool,
  }

  static defaultProps = {
    handleChange: '',
    isReadOnly: false,
  }

  constructor() {
    super();
    this.state = {
      optionPlan: [],
    };
  }
  componentDidMount() {
    this.renderOption(this.props.option);
  }
  componentDidUpdate() {
    if (this.props.option.length === 0) {
      this.renderOption(this.props.option);
    }
  }

  renderOption = option => {
    console.log('opre', option);
    const benefitPlan = [];
    option.map((option, index) => {
      benefitPlan.push({
        key: index,
        text: option.plan.planName,
        value: option.plan._id,
      });
      console.log('options', option);
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
      <div>
        <FieldsetEdit disabled={handleChange === ''}>
          <Blogs>
            <form onSubmit={handleSubmit}>
              <PlanName>
                ชื่อแผนสิทธิประโยชน์
              </PlanName>
              <NameInput
                required
                type="text"
                name="planName"
                value={planName}
                placeholder="แผนสิทธิประโยชน์"
                onChange={handleChange}
              />
              <Line />
              <PlanContent>
                กรุณาระบุสิทธิประโยชน์ที่ต้องการ
              </PlanContent>
              <PlanBox>
                <PlanImg src="../../../setbenefit/3.png" />
                <PlanTopic>
                  แผนประกันภัย (Insurance)
                </PlanTopic>
                <Selects
                  required
                  disabled={handleChange === ''}
                  name="plan"
                  options={this.state.optionPlan}
                  value={plan}
                  placeholder="เลือกแพลนที่ต้องการ"
                  onChange={handleChange}
                />
              </PlanBox>

              { showHealth
                ? <PlanBox>
                  <PlanImg src="../../../setbenefit/5.png" />
                  <PlanTopic>
                    ค่าใช้จ่ายสุขภาพ (Health)
                  </PlanTopic>
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
                      required
                      type="number"
                      name="health"
                      value={health}
                      action="บาท/ปี"
                      placeholder="จำนวนเงิน"
                      onChange={handleChange}
                    />
                    : <Inputs
                      type="number"
                      name="health"
                      value=""
                      action="บาท/ปี"
                      placeholder="จำนวนเงิน"
                      readOnly
                    />}
                </PlanBox>
                : null}

              { showExpense
                ? <PlanBox>
                  <PlanImg src="../../../setbenefit/4.png" />
                  <PlanTopic>
                    ค่าใช้จ่ายทั่วไป (General Expense)
                    </PlanTopic>
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
                      required
                      type="text"
                      name="expense"
                      value={expense}
                      action="บาท/ปี"
                      placeholder="จำนวนเงิน"
                      onChange={handleChange}
                    />
                    : <Inputs
                      type="number"
                      name="expense"
                      value=""
                      action="บาท/ปี"
                      placeholder="จำนวนเงิน"
                      readOnly
                    />}
                </PlanBox>
                : null}

              <SaveButton className={handleSave} type="submit">
                บันทึก
              </SaveButton>
            </form>
          </Blogs>
        </FieldsetEdit>
      </div>
    );
  }
}

export default SettingPlan;
