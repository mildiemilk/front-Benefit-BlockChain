import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Box, Head, HeadText, TextLine, Plan, Detail, List, ButtonDefault } from './styled';

class SelectBox extends Component {
  static propTypes = {
    // plan: PropTypes.string.isRequired,
    // handleChangePlan: PropTypes.func.isRequired,
    // selectOption: PropTypes.string.isRequired,
    // selectPlan: PropTypes.arrayOf(PropTypes.string).isRequired,
    // columnsLenght: PropTypes.string.isRequired,
    plan: PropTypes.arrayOf(PropTypes.object).isRequired,
    benefitPlan: PropTypes.arrayOf(PropTypes.object).isRequired,
    // handleFixedChange: PropTypes.func.isRequired,
    // handleFlexChange: PropTypes.func.isRequired,
    // handleActivePlan: PropTypes.func.isRequired,
    // defaultPlan: PropTypes.string.isRequired,
    // valueFixed: PropTypes.string.isRequired,
    // handleSubmit: PropTypes.func.isRequired,
    groupName: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    default: PropTypes.number.isRequired,
    numberOfGroup: PropTypes.number.isRequired,
  }
  constructor() {
    super();
    this.state = {
      plan: [],
    };
  }
  renderDetail = (allplan, templatePlan) => {
    if (allplan !== undefined && allplan.length >= 1) {
      const plan =
      allplan.filter(plan => templatePlan.map(
        option => option === plan._id).indexOf(true) !== -1);
      return plan;
    }
    return allplan;
  }
  renderPlan = plans => {
    const Allplan = plans.map(plan => (
      <div style={{ display: 'flex' }}>
        <Plan>{plan.benefitPlanName}</Plan>
        {this.props.default === plan._id
        ? <ButtonDefault>ค่าเริ่มต้น</ButtonDefault>
        : <div />
        }
      </div>
    ));
    return Allplan;
  }
  render() {
    return (
      <Box>
        <Head>
          <HeadText>{this.props.groupName}</HeadText>
        </Head>
        <Detail>

          <div className="row">
            <div className="large-5 columns">
              <TextLine>จำนวนพนักงานในกลุ่มนี้ </TextLine>
            </div>
            <div className="large-7 columns">
              <List>{this.props.numberOfGroup} คน</List>
            </div>
          </div>
          <div className="row">
            <div className="large-5 columns">
              <TextLine>รูปแบบของสิทธิประโยชน์ที่ต้องการ </TextLine>
            </div>
            <div className="large-7 columns">
              <List>{this.props.type}</List>
            </div>
          </div>
          <TextLine>แผนของสิทธิประโยชน์ที่เลือกใช้กับกลุ่มนี้</TextLine>
          {this.renderPlan(this.renderDetail(this.props.benefitPlan, this.props.plan))}
        </Detail>
      </Box>
    );
  }
}

SelectBox.propTypes = {};

export default SelectBox;
