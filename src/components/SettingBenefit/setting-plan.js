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
    health: PropTypes.number.isRequired,
    isExpense: PropTypes.bool.isRequired,
    expense: PropTypes.number.isRequired,
    handleSave: PropTypes.string.isRequired,
    isReadOnly: PropTypes.bool,
  }
  static defaultProps = {
    handleChange: '',
    isReadOnly: false,
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
                <PlanImg src={insurance} />
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
                  <PlanImg src={imgHealth} />
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
                      value={health !== -1 ? health : ''}
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
                  <PlanImg src={general} />
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
                      value={expense !== -1 ? expense : ''}
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
                : <div />}
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
