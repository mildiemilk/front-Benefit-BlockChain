import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react';
import NavBenefit from '../NavBenefit';
import { Detail, Head, Inner, BackButton, SendButton, List, Line, Imgs, DivHealth, DivImage, DivBenefit, Edit } from './styled';
import Timeout from '../ChooseInsurer/timeout';
import { setTimeout } from '../../api/benefit-plan';
import { getOptionPlan, getBenefitPlan } from '../../api/benefit-plan';
import time from '../../../assets/sendflexplan/icons-8-timer.png';
import ToggleHealth from '../AddBenefit/toggle-health';
import ToggleExpense from '../AddBenefit/toggle-expense';
import AddBenefit from './add-benefit';
import InsurancePlan from './InsurancePlan';
import SettingBenefit from './SettingBenefit';
import EmployeeBenefits from './EmployeeBenefits';

class SendFlexPlan extends Component {
  static propTypes = {
    setTimeout: PropTypes.func.isRequired,
    getOptionPlan: PropTypes.func.isRequired,
    getBenefitPlan: PropTypes.func.isRequired,
    List: PropTypes.arrayOf(PropTypes.object).isRequired,
    planList: PropTypes.arrayOf(PropTypes.object).isRequired,
    benefitPlan: PropTypes.arrayOf(PropTypes.object).isRequired,
    optionPlan: PropTypes.arrayOf(PropTypes.object).isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      step: 6,
    };
  }
  componentDidMount = () => {
    this.props.getOptionPlan();
    this.props.getBenefitPlan();
  }
  boxInStyle = state => {
    if (state) return 'BoxLine';
    return '';
  }
  render() {
    return (
      <div>
        <NavBenefit step={this.state.step} />
        <div className="row">
          <Detail className="large-12 ">
            <Head>ส่งข้อมูล</Head>
            <List>กรุณาตรวจสอบแผนประกันภัยที่เลือก</List>
            <Link to="/chooseinsuranceplan">
              <Edit onClick={this.handleOpen}>
                <Icon name="write" />แก้ไข
              </Edit>
            </Link>
            <Inner>
              <InsurancePlan planList={this.props.planList} />
            </Inner>
            <List>กรุณาตรวจสอบสิทธิประโยชน์ที่ต้องการ</List>
            <Link to="/addbenefit">
              <Edit onClick={this.handleOpen}>
                <Icon name="write" />แก้ไข
              </Edit>
            </Link>
            <Inner>
              <DivBenefit>
                <div className="row">
                  <div className="large-6 columns">
                    <DivHealth>
                      <DivImage>
                        <div className="imagehealth" />
                      </DivImage>
                      <ToggleHealth
                        boxInStyle={this.boxInStyle} isHealth={this.props.List.isHealth}
                      />
                    </DivHealth>
                  </div>
                  <AddBenefit List={this.props.List.health.HealthList} />
                </div>
              </DivBenefit>
              <br />
              <DivBenefit>
                <div className="row">
                  <div className="large-6 columns">
                    <DivHealth>
                      <DivImage>
                        <div className="imageExpense" />
                      </DivImage>
                      <ToggleExpense
                        boxInStyle={this.boxInStyle} isExpense={this.props.List.isExpense}
                      />
                    </DivHealth>
                  </div>
                  <AddBenefit List={this.props.List.expense.ExpenseList} />
                </div>
              </DivBenefit>
            </Inner>

            <List>กรุณาตรวจสอบแผนสิทธิประโยชน์ของคุณ</List>
            <Link to="/settingbenefit">
              <Edit onClick={this.handleOpen}>
                <Icon name="write" />แก้ไข
              </Edit>
            </Link>
            <Inner>
              <SettingBenefit
                plan={this.props.benefitPlan}
                optionPlan={this.props.optionPlan}
              />
            </Inner>

            <List>กรุณาตรวจการอัพโหลดไฟล์ของคุณ</List>
            <Inner
              style={{
                height: '80px',
              }}
              className="large-12 "
            />

            <List>กรุณาตรวจสอบแผนสิทธิประโยชน์ของคุณ</List>
            <Inner>
              <EmployeeBenefits />
            </Inner>
            <List>กรุณาตั้งระยะเวลาการเลือกแผนสิทธิประโยชน์ของพนักงาน</List>
            <Inner>
              <Imgs src={time} alt="time" />
              <Line> พนักงานสามารถเลือกสิทธิประโยชน์ได้ถึง วันที่ </Line>
              <Timeout setTimeout={this.props.setTimeout} />
            </Inner>
          </Detail>
          <div style={{ marginTop: '25px' }} className="row">
            <div className="large-9 columns">
              <BackButton>กลับ</BackButton>
            </div>
            <div className="large-3 columns">
              <Link to="/congratstep3">
                <SendButton>ส่งข้อมูล</SendButton>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setTimeout: timeout => dispatch(setTimeout(timeout)),
  getOptionPlan: () => dispatch(getOptionPlan()),
  getBenefitPlan: () => dispatch(getBenefitPlan()),
});
const mapStateToProps = state => ({
  List: state.choosePlan,
  planList: state.choosePlan.choosePlan,
  benefitPlan: state.benefitPlan.plan,
  optionPlan: state.choosePlan,
});
export default connect(mapStateToProps, mapDispatchToProps)(SendFlexPlan);
