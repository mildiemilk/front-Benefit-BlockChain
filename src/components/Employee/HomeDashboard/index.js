import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Plan from '../../../../assets/employee/plan.png';
import Claim from '../../../../assets/employee/claim.png';
import StatusClaim from '../../../../assets/employee/status_claim.png';
import FindHospital from '../../../../assets/employee/hospital.png';
import Profile from '../../../../assets/employee/profile.png';
import Setting from '../../../../assets/employee/setting.png';
import IconView from '../../../../assets/employee/icon_view.png';
import { getAllBenefit, confirmPlan, currentPlan } from '../../../api/Employee/plan';

const month = [
  'ม.ค.',
  'ก.พ.',
  'มี.ค.',
  'เม.ย.',
  'พ.ค.',
  'มิ.ย.',
  'ก.ค.',
  'ส.ค.',
  'ก.ย.',
  'ต.ค.',
  'พ.ย.',
  'ธ.ค.'];

class HomeDashboard extends Component {
  static propTypes = {
    data: PropTypes.shape({}).isRequired,
    getAllBenefit: PropTypes.func.isRequired,
    confirmPlan: PropTypes.func.isRequired,
    currentPlan: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      alertFlexyNextPlan: false,
      alertFlexyNextPlanSelected: false,
      alertFixNextPlan: false,
      dateTimeout: '',
      d: 0,
      m: '',
      y: 0,
      currentSelect: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
    };
    props.getAllBenefit();
    props.confirmPlan();
    props.currentPlan();
  }

  componentWillReceiveProps(nextProps) {
    const { data } = nextProps;
    const currentDate = new Date();
    if (data.currentPlan.effectiveDate < data.allBenefit[0].effectiveDate) { // new plan
      if (currentDate.toISOString() < data.allBenefit[0].timeout) { // in time
        if (data.group.type === 'fixed') { // fix
          this.setState({ alertFixNextPlan: true });
        } else { // flex
          const getDate = new Date(data.allBenefit[0].timeout);
          const d = getDate.getDate();
          const m = getDate.getMonth();
          let y = getDate.getFullYear();
          y += 543;
          y = y.toString().slice(2);
          this.setState({ d, m, y });
          if (data.confirm) { // confirm
            data.allBenefit.forEach((item, i) => {
              if (item._id === data.currentSelect) {
                this.setState({ currentSelect: i + 1 });
              }
            });
            this.setState({ alertFlexyNextPlanSelected: true });
            this.interval = setInterval(() => {
              const date = this.calculateCountdown(data.allBenefit[0].timeout);
              if (date) this.setState(date);
              else {
                this.stop();
              }
            }, 1000);
          } else {
            this.setState({ alertFlexyNextPlan: true });
          }
        }
      } else {
        this.setState({ alertFixNextPlan: true });
      }
    }
    // else {
    //   console.log('>>>not new plan');
    // }
  }

  componentWillUnmount() {
    this.stop();
  }

  calculateCountdown = endDate => {
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;

    // clear CountDowns when date is reached
    if (diff <= 0) return false;

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      millisec: 0,
    };

    // calculate time difference between now and expected date
    if (diff >= 365.25 * 86400) {
      // 365.25 * 24 * 60 * 60
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) {
      // 24 * 60 * 60
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) {
      // 60 * 60
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;

    return timeLeft;
  }

  stop() {
    clearInterval(this.interval);
  }

  addLeadingZeros = value => {
    let values = String(value);
    while (values.length < 2) {
      values = `0${values}`;
    }
    return values;
  }

  handleShowAlert = () => {
    const {
      alertFlexyNextPlan,
      alertFlexyNextPlanSelected,
      alertFixNextPlan,
      d,
      m,
      y,
      currentSelect,
    } = this.state;
    if (alertFlexyNextPlan) {
      return (
        <div className="hb-alert-flexy-plan">
          <div className="hb-alert-flexy-box-text">
            <Icon name="warning sign" />
            <span className="hb-alert-flexy-text">
              กรุณาเลือกแผนปีถัดไปภายในวันที่ {d} {month[m]} {y}
            </span>
          </div>
          <Link to="/plan">
            <button className="hb-alert-flexy-btn">
              เลือกแผนสิทธิประโยชน์สำหรับปีถัดไป
            </button>
          </Link>
        </div>
      );
    } else if (alertFixNextPlan) {
      return (
        <div className="hb-alert-fix-plan">
          <div className="hb-alert-fix-box-header">
            <Icon className="hb-alert-fix-icon" name="gift" />
            <div className="hb-alert-fix-box-text">
              <p className="hb-alert-fix-text">สิทธิประโยชน์ของคุณจะเริ่มมีผล</p>
              <p className="hb-alert-fix-text">วันที่ {d} {month[m]} {y}</p>
            </div>
          </div>
          <Link to="/plan">
            <button className="hb-alert-fix-btn">
              <img className="hb-alert-fix-icon-view" alt="IconView" src={IconView} />
              ดูแผนของคุณ
            </button>
          </Link>
        </div>
      );
    } else if (alertFlexyNextPlanSelected) {
      const countDown = this.state;
      const $isDay = this.addLeadingZeros(countDown.days);
      const $isHours = this.addLeadingZeros(countDown.hours);
      const $isMin = this.addLeadingZeros(countDown.min);
      return (
        <div>
          <div className="hb-alert-flexy-s-box">
            <div className="hb-alert-flexy-s-text-box">
              <Icon className="hb-alert-flexy-s-icon" name="file text" />
              <span>คุณกำลังเลือกแผนที่ {currentSelect}</span>
            </div>
            <div className="hb-alert-flexy-s-btn-box">
              <Link to="/plan/1">
                <button className="hb-alert-flexy-s-btn-change">เปลี่ยนแผน</button>
              </Link>
              <Link to="/plan/1">
                <button className="hb-alert-flexy-s-btn-view">
                  <img className="hb-alert-flexy-s-icon-view" alt="IconView" src={IconView} />
                  ดูแผนที่เลือก
                </button>
              </Link>
            </div>
          </div>
          <div className="hb-alert-flexy-s-detail-box">
            <span className="hb-alert-flexy-s-text">สามารถเปลี่ยนแผนได้ภายในวันที่ {d} {month[m]} {y}</span>
            <span className="hb-alert-flexy-s-text">นับถอยหลัง {$isDay} วัน : {$isHours} ชั่วโมง : {$isMin} นาที</span>
          </div>
        </div>
      );
    }
    return <div />;
  }

  render() {
    return (
      <div>
        { this.handleShowAlert() }
        <span className="hb-header">ยินดีต้อนรับเข้าสู่ BenefiTable</span>
        <div className="hb-box">
          <div className="hb-box-row row">
            <Link to="/yourbenefit">
              <div className="hb-box-item">
                <img className="hb-box-item-img" alt="plan" src={Plan} />
                <span className="hb-box-item-text">แผนสิทธิประโยชน์</span>
              </div>
            </Link>
            <Link to="/claim">
              <div className="hb-box-item">
                <img className="hb-box-item-img" alt="plan" src={Claim} />
                <span className="hb-box-item-text">เคลม</span>
              </div>
            </Link>
          </div>
          <div className="hb-box-row row">
            <Link to="/claimstatus">
              <div className="hb-box-item">
                <img className="hb-box-item-img" alt="plan" src={StatusClaim} />
                <span className="hb-box-item-text">สถานะการเคลม</span>
              </div>
            </Link>
            <Link to="/findhospital">
              <div className="hb-box-item">
                <img className="hb-box-item-img" alt="plan" src={FindHospital} />
                <span className="hb-box-item-text">ค้นหาโรงพบาบาล</span>
              </div>
            </Link>
          </div>
          <div className="hb-box-row row">
            <Link to="/profile">
              <div className="hb-box-item">
                <img className="hb-box-item-img" alt="plan" src={Profile} />
                <span className="hb-box-item-text">โปรไฟล์</span>
              </div>
            </Link>
            <Link to="/setting">
              <div className="hb-box-item">
                <img className="hb-box-item-img" alt="plan" src={Setting} />
                <span className="hb-box-item-text">ตั้งค่า</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getAllBenefit: () => dispatch(getAllBenefit()),
  confirmPlan: () => dispatch(confirmPlan()),
  currentPlan: () => dispatch(currentPlan()),
});
const mapStateToProps = state => ({
  data: {
    ...state.getAllBenefitReducer,
    ...state.confirmPlanReducer,
    ...state.currentPlanReducer,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeDashboard);

// export default HomeDashboard;
