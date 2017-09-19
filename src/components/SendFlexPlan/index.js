import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react';
import NavBenefit from '../NavBenefit';
import { Detail, Head, Inner, BackButton, List, Line, Imgs, DivHealth, DivImage, DivBenefit, Edit, TextUpload, DetailUpload, DivDownload } from './styled';
import Timeout from '../ChooseInsurer/timeout';
import { setTimeout, getInsurancePlan, getBenefitPlan, getTemplatePlan } from '../../api/benefit-plan';
import { setCompleteStep, getCompleteStep, getFileEmployee } from '../../api/profile-company';
import time from '../../../assets/sendflexplan/icons-8-timer.png';
import ToggleHealth from '../AddBenefit/toggle-health';
import ToggleExpense from '../AddBenefit/toggle-expense';
import AddBenefit from './add-benefit';
import InsurancePlan from './InsurancePlan';
import SettingBenefit from './SettingBenefit';
import ModalConfirmPassword from '../ModalConfirmPassword';
import EmployeeBenefits from './EmployeeBenefits';
import excel from '../../../assets/Download/icons-8-ms-excel@2x.png';

class SendFlexPlan extends Component {
  static propTypes = {
    setTimeout: PropTypes.func.isRequired,
    getInsurancePlan: PropTypes.func.isRequired,
    getBenefitPlan: PropTypes.func.isRequired,
    getTemplatePlan: PropTypes.func.isRequired,
    master: PropTypes.arrayOf(PropTypes.object).isRequired,
    insurer: PropTypes.arrayOf(PropTypes.object).isRequired,
    // masterPlanList: PropTypes.arrayOf(PropTypes.object).isRequired,
    // List: PropTypes.arrayOf(PropTypes.object).isRequired,
    // planList: PropTypes.arrayOf(PropTypes.object).isRequired,
    benefitPlan: PropTypes.arrayOf(PropTypes.object).isRequired,
    optionPlan: PropTypes.arrayOf(PropTypes.object).isRequired,
    data: PropTypes.shape.isRequired,
    setCompleteStep: PropTypes.func.isRequired,
    completeStep: PropTypes.bool.isRequired,
    getCompleteStep: PropTypes.func.isRequired,
    getFileEmployee: PropTypes.func.isRequired,
    file: PropTypes.shape({}).isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      step: 6,
      passwordToConfirm: '',
      templatePlan: [],
    };
    props.getTemplatePlan();
    props.getBenefitPlan();
    props.getInsurancePlan();
    props.getCompleteStep();
    props.getFileEmployee();
  }
  // componentDidMount = () => {
  //   this.props.getBenefitPlan();
  //   this.props.getCompleteStep();
  // }
  componentWillReceiveProps = newProps => {
    console.log('>>>>>newProps', newProps);

    if (newProps.master !== this.props.master && newProps.insurer !== this.props.insurer) {
      const templatePlan = newProps.master.concat(newProps.insurer);
      this.setState({
        templatePlan,
      }, () => console.log('template-plan', this.state.templatePlan));
    }
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
  renderPlan = () => {
    const { benefitPlan } = this.props;
    const { templatePlan } = this.state;
    const planList = benefitPlan;
    if (planList !== undefined && planList.length >= 1) {
      console.log('---t', templatePlan);
      console.log('---p', planList);
      const newplan =
      templatePlan.filter(plan => planList.map(
        option => option.benefitPlan.plan.planId._id === plan.plan._id).indexOf(true) !== -1);
      console.log('newww', newplan);
      return newplan;
    }
    return '';
  }
  render() {
    console.log('props', this.props);
    console.log('state2 tem', this.state.templatePlan)
    const { completeStep } = this.props;
    if (completeStep) {
      return <Redirect to="/congratstep3" />;
    }
    const { file } = this.props;
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
              {this.state.templatePlan.length >= 1
              ? <InsurancePlan
                planList={this.renderPlan()}
              />
              : <div />
              }
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
                        boxInStyle={this.boxInStyle} isHealth={this.props.optionPlan.isHealth}
                      />
                    </DivHealth>
                  </div>
                  <AddBenefit List={this.props.optionPlan.health.healthList} />
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
                        boxInStyle={this.boxInStyle} isExpense={this.props.optionPlan.isExpense}
                      />
                    </DivHealth>
                  </div>
                  <AddBenefit List={this.props.optionPlan.expense.expenseList} />
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
              { this.state.templatePlan.length >= 1
              ? <SettingBenefit
                plan={this.props.benefitPlan}
                optionPlan={this.props.optionPlan}
                templatePlan={this.state.templatePlan}
              />
              : <div />
              }
            </Inner>

            <List>กรุณาตรวจการอัพโหลดไฟล์ของคุณ</List>
            <Inner>
              <img src={excel} alt="excel" width="43.5px" height="43.5px" />
              <DivDownload>
                <TextUpload>ไฟล์ที่คุณอัพโหลด : {file.filename}</TextUpload>
                <DetailUpload>กรุณาตรวจสอบข้อมูลพนักงานของคุณที่</DetailUpload>
                <DetailUpload link>&lsquo;อัพเดทจำนวนพนักงาน&lsquo;</DetailUpload>
              </DivDownload>
            </Inner>
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
  getBenefitPlan: () => dispatch(getBenefitPlan()),
  getInsurancePlan: () => dispatch(getInsurancePlan()),
  setCompleteStep: (passwordToConfirm, step) =>
  dispatch(setCompleteStep(passwordToConfirm, step)),
  getCompleteStep: () => dispatch(getCompleteStep()),
  getTemplatePlan: () => dispatch(getTemplatePlan()),
  getFileEmployee: () => dispatch(getFileEmployee()),
});
const mapStateToProps = state => ({
  master: state.choosePlan.insurancePlan.master,
  insurer: state.choosePlan.insurancePlan.insurer,
  List: state.choosePlan,
  planList: state.choosePlan.choosePlan,
  benefitPlan: state.benefitPlan.plan,
  optionPlan: state.choosePlan,
  data: state.profile,
  file: state.profile.fileEmployee,
  completeStep: state.profile.completeStep[2],
});
export default connect(mapStateToProps, mapDispatchToProps)(SendFlexPlan);
