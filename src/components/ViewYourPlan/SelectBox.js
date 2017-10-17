import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Divider } from 'semantic-ui-react';
import { Box, Head, HeadText, TextLine, Detail, List } from '../SendFlexPlan/EmployeeBenefits/styled';
import { BoxPlan } from './styled';

class SelectBox extends Component {
  static propTypes = {
    // plan: PropTypes.string.isRequired,
    // handleChangePlan: PropTypes.func.isRequired,
    // selectOption: PropTypes.string.isRequired,
    // selectPlan: PropTypes.arrayOf(PropTypes.string).isRequired,
    // columnsLenght: PropTypes.string.isRequired,
    // planName: PropTypes.arrayOf(PropTypes.object).isRequired,
    // handleFixedChange: PropTypes.func.isRequired,
    // handleFlexChange: PropTypes.func.isRequired,
    // handleActivePlan: PropTypes.func.isRequired,
    // defaultPlan: PropTypes.string.isRequired,
    // valueFixed: PropTypes.string.isRequired,
    // handleSubmit: PropTypes.func.isRequired,
    groupName: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    // default: PropTypes.number.isRequired,
    benefitPlan: PropTypes.arrayOf(PropTypes.object).isRequired,
    numberOfGroup: PropTypes.number.isRequired,
    summaryEmployee: PropTypes.arrayOf(PropTypes.object).isRequired,
  }
  constructor() {
    super();
    this.state = {};
  }
  getDetailPlan = planName => {
    const { benefitPlan } = this.props;
    const detail = benefitPlan.plan.filter(plan => plan.plan.benefitPlanName === planName);
    return detail[0];
  }
  renderPlan = Allplans => {
    // const { plan } = Allplans;
    // console.log('plan', plan);
    // const plans = plan;
    const Allplan = Allplans.map((plan, index) => (
      // const { confirm } = this.props.summaryEmployee;
      // const detail = this.getDetailPlan(plan.plan[index]);
      <BoxPlan key={index.toString()}>
        {/* <div className="row">
          <div className="large-7 columns">
            {plan.benefitPlanName}
            {this.props.default === plan._id
            ? <ButtonDefault>ค่าเริ่มต้น</ButtonDefault>
            : null
            }
          </div>
          <div className="large-5 columns">
            <Text>จำนวนพนักงานที่เลือกแผนนี้ {confirm[index]} คน</Text>
          </div>
        </div>
        <Divider />
        <div className="row">
          <div className="large-6 columns">
            <DivList>
              <Img src="../../../setbenefit/3.png" />
              <ImgDetail>
                แผนประกันภัย (Insurance)
              </ImgDetail>
            </DivList>
          </div>
          <div className="large-6 columns">
            <TextBox>
              {detail.benefitPlan.plan.planId.planName}
            </TextBox>
          </div>
        </div>
        {detail.benefitPlan.isHealth
        ? <div className="row">
          <div className="large-6 columns">
            <DivList>
              <Img src="../../../setbenefit/5.png" />
              <ImgDetail>
                ค่าใช้จ่ายสุขภาพ (Health)
              </ImgDetail>
            </DivList>
          </div>
          <div className="large-6 columns">
            <TextBox>{plan.benefitPlan.health}
              <DivFlex><Unit>บาท/ปี</Unit></DivFlex>
            </TextBox>
          </div>
        </div>
        : null
        }
        {detail.benefitPlan.isExpense
        ? <div className="row">
          <div className="large-6 columns">
            <DivList>
              <Img src="../../../setbenefit/4.png" />
              <ImgDetail>
                ค่าใช้จ่ายทั่วไป (General Expense)
              </ImgDetail>
            </DivList>
          </div>
          <div className="large-6 columns">
            <TextBox>{detail.benefitPlan.expense}
              <DivFlex>
                <Unit>บาท/ปี</Unit>
              </DivFlex>
            </TextBox>
          </div>
        </div>
        : null
        } */}
        sdfdf
      </BoxPlan>
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
          <div className="row">
            <div className="large-5 columns">
              <TextLine>แผนของสิทธิประโยชน์ที่เลือกใช้กับกลุ่มนี้</TextLine>
            </div>
            <div className="large-7 columns">
              <List>{this.props.benefitPlan.plan.length}&nbsp; แผน</List>
            </div>
          </div>
          {this.renderPlan(this.props.summaryEmployee)}
        </Detail>
      </Box>
    );
  }
}

SelectBox.propTypes = {};

export default SelectBox;
