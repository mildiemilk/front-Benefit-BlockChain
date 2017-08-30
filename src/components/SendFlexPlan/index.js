import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react';
import NavBenefit from '../NavBenefit';
import { Detail, Head, Inner, BackButton, List, Line, Imgs, DivHealth, DivImage, DivBenefit, Edit } from './styled';
import Timeout from '../ChooseInsurer/timeout';
import { setTimeout } from '../../api/benefit-plan';
import { getOptionPlan, getBenefitPlan } from '../../api/benefit-plan';
import { setCompleteStep, getCompleteStep } from '../../api/profile-company';
import time from '../../../assets/sendflexplan/icons-8-timer.png';
import ToggleHealth from '../AddBenefit/toggle-health';
import ToggleExpense from '../AddBenefit/toggle-expense';
import AddBenefit from './add-benefit';
import InsurancePlan from './InsurancePlan';
import SettingBenefit from './SettingBenefit';
import ModalConfirmPassword from '../ModalConfirmPassword';
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
    data: PropTypes.shape.isRequired,
    setCompleteStep: PropTypes.func.isRequired,
    completeStep: PropTypes.bool.isRequired,
    getCompleteStep: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      step: 6,
      passwordToConfirm: '',
    };
  }
  componentDidMount = () => {
    this.props.getOptionPlan();
    this.props.getBenefitPlan();
    this.props.getCompleteStep();
  }
  boxInStyle = state => {
    if (state) return 'BoxLine';
    return '';
  }
  handlePost = e => {
    e.preventDefault();
    const { passwordToConfirm } = this.state;
    const step = 2;
    this.props.setCompleteStep(passwordToConfirm, step);
  }
  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  render() {
    const { completeStep } = this.props;
    if (completeStep) {
      return <Redirect to="/congratstep3" />;
    }
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
              <ModalConfirmPassword
                handlePost={this.handlePost}
                handleChange={this.handleChange}
                data={this.props.data}
                content="ส่งข้อมูล"
                head="การส่งข้อมูล"
              />
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
  setCompleteStep: (passwordToConfirm, step) =>
  dispatch(setCompleteStep(passwordToConfirm, step)),
  getCompleteStep: () => dispatch(getCompleteStep()),
});
const mapStateToProps = state => ({
  List: state.choosePlan,
  planList: state.choosePlan.choosePlan,
  benefitPlan: state.benefitPlan.plan,
  optionPlan: state.choosePlan,
  data: state.profile,
  completeStep: state.profile.completeStep[2],
});
export default connect(mapStateToProps, mapDispatchToProps)(SendFlexPlan);
