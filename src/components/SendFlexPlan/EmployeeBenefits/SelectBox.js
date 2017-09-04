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
    planName: PropTypes.arrayOf(PropTypes.object).isRequired,
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
    this.state = {};
  }
  renderPlan = plans => {
    const Allplan = plans.map((plan, index) => (
      <div>
        <Plan>{plan}</Plan>
        {this.props.default === index
        ? <ButtonDefault>ค่าเริ่มต้น</ButtonDefault>
        : null
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
          {this.renderPlan(this.props.planName)}
        </Detail>
      </Box>
    );
  }
}

SelectBox.propTypes = {};

export default SelectBox;
