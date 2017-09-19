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
  }

  static defaultProps = {
    handleChange: '',
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
      return option;
    });
    this.setState({ optionPlan: benefitPlan });
  }

  render() {
    console.log('sendflexplan', this.props.plan);
    return (
      <div>
        <FieldsetEdit disabled={this.props.handleChange === ''}>
          <Blogs>
            <form onSubmit={this.props.handleSubmit}>
              <PlanName>
                ชื่อแผนสิทธิประโยชน์
              </PlanName>
              <NameInput
                required
                type="text"
                name="planName"
                value={this.props.planName}
                placeholder="แผนสิทธิประโยชน์"
                onChange={this.props.handleChange}
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
                  disabled={this.props.handleChange === ''}
                  name="plan"
                  options={this.state.optionPlan}
                  value={this.props.plan}
                  placeholder="เลือกแพลนที่ต้องการ"
                  onChange={this.props.handleChange}
                />
              </PlanBox>

              {this.props.isHealth
                ? <PlanBox>
                  <PlanImg src="../../../setbenefit/5.png" />
                  <PlanTopic>
                    ค่าใช้จ่ายสุขภาพ (Health)
                  </PlanTopic>
                  <div className="toggle">
                    <ToggleBox>
                      <Checkbox
                        name="isHealth"
                        checked={this.props.isHealth}
                        toggle
                        onClick={this.props.handleToggle}
                      />
                    </ToggleBox>
                  </div>
                  {this.props.isHealth
                    ? <Inputs
                      required
                      type="number"
                      name="health"
                      value={this.props.health}
                      action="บาท/ปี"
                      placeholder="จำนวนเงิน"
                      onChange={this.props.handleChange}
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

              {this.props.isExpense
                ? <PlanBox>
                  <PlanImg src="../../../setbenefit/4.png" />
                  <PlanTopic>
                    ค่าใช้จ่ายทั่วไป (General Expense)
                    </PlanTopic>
                  <div className="toggle">
                    <ToggleBox>
                      <Checkbox
                        name="isExpense"
                        checked={this.props.isExpense}
                        toggle
                        onClick={this.props.handleToggle}
                      />
                    </ToggleBox>
                  </div>
                  {this.props.isExpense
                    ? <Inputs
                      required
                      type="text"
                      name="expense"
                      value={this.props.expense}
                      action="บาท/ปี"
                      placeholder="จำนวนเงิน"
                      onChange={this.props.handleChange}
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

              <SaveButton className={this.props.handleSave} type="submit">
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
