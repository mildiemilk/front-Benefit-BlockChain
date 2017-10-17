import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'semantic-ui-react';
import SelectOptionPlan from './select-option-plan';
import { Warning } from './styled';

const planOptions = [
  { text: 'Fixed', value: 'fixed' },
  { text: 'Flex', value: 'flex' },
];

class SelectBox extends Component {
  static propTypes = {
    plan: PropTypes.string.isRequired,
    handleChangePlan: PropTypes.func.isRequired,
    selectOption: PropTypes.string.isRequired,
    selectPlan: PropTypes.arrayOf(PropTypes.string).isRequired,
    columnsLenght: PropTypes.string.isRequired,
    planName: PropTypes.arrayOf(PropTypes.object).isRequired,
    handleFixedChange: PropTypes.func.isRequired,
    handleFlexChange: PropTypes.func.isRequired,
    handleActivePlan: PropTypes.func.isRequired,
    defaultPlan: PropTypes.string.isRequired,
    valueFixed: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    groupName: PropTypes.string.isRequired,
    optionPlan: PropTypes.shape({}).isRequired,
    benefitPlan: PropTypes.arrayOf(PropTypes.object).isRequired,
    templatePlan: PropTypes.arrayOf(PropTypes.object).isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="employeeBenefits-select-box">
        <div className="employeeBenefits-select-head-box">
          <p>{this.props.groupName}</p>
        </div>
        <div className="employeeBenefits-select-plan">
          <span>รูปแบบของแผนสิทธิประโยชน์ที่ต้องการ</span>
          <Dropdown
            placeholder="Fixed/Flex"
            selection
            options={planOptions}
            defaultValue="Flex"
            name="plan"
            value={this.props.plan}
            style={{ marginLeft: '5%' }}
            onChange={this.props.handleChangePlan}
          />
          <br />
          <br />
          <p>แผนสิทธิประโยชน์ที่เลือกใช้กับกลุ่มนี้</p>
          <br />
          {this.props.plan !== null
            ? <SelectOptionPlan
              plan={this.props.plan}
              selectPlan={this.props.selectPlan}
              selectOption={this.props.selectOption}
              columnsLenght={this.props.columnsLenght}
              planName={this.props.planName}
              handleFixedChange={this.props.handleFixedChange}
              handleFlexChange={this.props.handleFlexChange}
              handleActivePlan={this.props.handleActivePlan}
              defaultPlan={this.props.defaultPlan}
              valueFixed={this.props.valueFixed}
              handleSubmit={this.props.handleSubmit}
              optionPlan={this.props.optionPlan}
              benefitPlan={this.props.benefitPlan}
              templatePlan={this.props.templatePlan}
            />
            : <Warning>ยังไม่ได้เลือกรูปแบบของแผนสิทธิประโยชน์</Warning>}
        </div>
      </div>
    );
  }
}

SelectBox.propTypes = {};

export default SelectBox;
