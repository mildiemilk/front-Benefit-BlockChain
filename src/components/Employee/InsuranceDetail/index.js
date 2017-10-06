import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon, Modal } from 'semantic-ui-react';
import '../../../styles/employee-style/insurance-health-general.scss';
import Info from '../../../../assets/employee/info.png';
import Life from '../../../../assets/employee/insurance_life.png';
import OPD from '../../../../assets/employee/insurance_opd.png';
import Dental from '../../../../assets/employee/insurance_dental.png';
import IPD from '../../../../assets/employee/insurance_ipd.png';

const boxHide = 'insurance-box';
const boxShow = 'insurance-box show-description';

class InsuranceDetail extends Component {
  static propTypes = {
    handleClickBack: PropTypes.func.isRequired,
    plan: PropTypes.number.isRequired,
    data: PropTypes.shape({}).isRequired,
    timeUp: PropTypes.bool.isRequired,
  }
  constructor(props) {
    super(props);
    const { data, plan } = props;
    const check = data.allBenefit[plan].benefitPlan.plan.planId;
    let showIPD = false;
    let showOPD = false;
    let showLife = false;
    let showDental = false;
    let showDescriptionIPD = false;
    let showDescriptionOPD = false;
    if (check.ipdLumsumPerYear) {
      showIPD = true;
    } else if (check.ipdLumsumPerTime) {
      showIPD = true;
      showDescriptionIPD = true;
    } else if (check.rbLumsumNigthNotExceedPerYear) {
      showIPD = true;
      showDescriptionIPD = true;
    } else if (check.rbSchedulePatient) {
      showIPD = true;
      showDescriptionIPD = true;
    }
    if (check.opdPerYear) {
      showOPD = true;
    } else if (check.opdPerTime) {
      showOPD = true;
      showDescriptionOPD = true;
    }
    if (check.lifePerYear) {
      showLife = true;
    } else if (check.lifeTimeOfSalary) {
      showLife = true;
    }
    if (check.dentalPerYear) {
      showDental = true;
    }
    this.state = {
      modal: false,
      life: 'insurance-box',
      lifePlus: 'insurance-box-title-show small-2 columns',
      lifeRotatePlus: 'insurance-box-title-hide small-2 columns',
      opd: 'insurance-box',
      opdPlus: 'insurance-box-title-show small-2 columns',
      opdRotatePlus: 'insurance-box-title-hide small-2 columns',
      dental: 'insurance-box',
      dentalPlus: 'insurance-box-title-show small-2 columns',
      dentalRotatePlus: 'insurance-box-title-hide small-2 columns',
      ipd: 'insurance-box',
      ipdPlus: 'insurance-box-title-show small-2 columns',
      ipdRotatePlus: 'insurance-box-title-hide small-2 columns',
      showIPD,
      showOPD,
      showLife,
      showDental,
      showDescriptionIPD,
      showDescriptionOPD,
    };
  }

  handleClickLife = () => {
    const { life, lifePlus, lifeRotatePlus } = this.state;
    let box;
    if (life === boxShow) {
      box = boxHide;
    } else {
      box = boxShow;
    }
    this.setState({
      life: box,
      plus: lifeRotatePlus,
      rotatePlus: lifePlus,
    });
  }

  handleClickOPD = () => {
    const { opd, opdPlus, opdRotatePlus } = this.state;
    let box;
    if (opd === boxShow) {
      box = boxHide;
    } else {
      box = boxShow;
    }
    this.setState({
      opd: box,
      plus: opdRotatePlus,
      rotatePlus: opdPlus,
    });
  }

  handleClickDental = () => {
    const { dental, dentalPlus, dentalRotatePlus } = this.state;
    let box;
    if (dental === boxShow) {
      box = boxHide;
    } else {
      box = boxShow;
    }
    this.setState({
      dental: box,
      plus: dentalRotatePlus,
      rotatePlus: dentalPlus,
    });
  }

  handleClickIPD = () => {
    const { ipd, ipdPlus, ipdRotatePlus } = this.state;
    let box;
    if (ipd === boxShow) {
      box = boxHide;
    } else {
      box = boxShow;
    }
    this.setState({
      ipd: box,
      plus: ipdRotatePlus,
      rotatePlus: ipdPlus,
    });
  }

  handleOpenModal = () => {
    this.setState({ modal: true });
  }

  handleCloseModal = () => {
    this.setState({ modal: false });
  }

  handleShowSelectPlan = () => {
    const { data, timeUp, plan } = this.props;
    if (!timeUp) {
      if (data.group.type !== 'fixed') {
        return <span className="insurance-plan">( แผนที่ {plan + 1} )</span>;
      }
    }
    return <span />;
  }

  handleShowDescription = item => (
    <ul className="insurance-box-description">
      {item === 'opd' ? this.handleShowDescriptionOPD() : <div />}
      {item === 'ipd' ? this.handleShowDescriptionIPD() : <di />}
    </ul>
  );

  handleShowDescriptionOPD = () => {
    const { data, plan } = this.props;
    const opd = data.allBenefit[plan].benefitPlan.plan.planId;
    if (opd.opdPerTime) {
      return (
        <li className="insurance-box-description-text">
          ปีละไม่เกิน {opd.opdTimeNotExceedPerYear.toLocaleString()} บาท
        </li>
      );
    }
    return <div />;
  }

  handleShowDescriptionIPD = () => {
    const { data, plan } = this.props;
    const ipd = data.allBenefit[plan].benefitPlan.plan.planId;
    if (ipd.ipdLumsumPerTime) {
      return (
        <li className="insurance-box-description-text">
          ปีละไม่เกิน {ipd.ipdLumsumTimeNotExceedPerYear.toLocaleString()} ครั้ง
          </li>
      );
    } else if (ipd.rbLumsumNigthNotExceedPerYear) {
      return (
        <li className="insurance-box-description-text">
          ค่ารักษาพยาบาลสูงสุดไม่เกิน {ipd.rbLumsumPayNotExceedPerNight.toLocaleString()} บาท/ปี
        </li>
      );
    } else if (ipd.rbSchedulePatient) {
      let sum = 0;
      if (ipd.rbScheduleService) {
        sum += ipd.rbScheduleService;
      }
      if (ipd.rbScheduleSmallSurgery) {
        sum += ipd.rbScheduleSmallSurgery;
      }
      if (ipd.rbScheduleAdviser) {
        sum += ipd.rbScheduleAdviser;
      }
      if (ipd.rbScheduleAmbulance) {
        sum += ipd.rbScheduleAmbulance;
      }
      if (ipd.rbScheduleAccident) {
        sum += ipd.rbScheduleAccident;
      }
      if (ipd.rbScheduleTreatment) {
        sum += ipd.rbScheduleTreatment;
      }
      return (
        <div>
          <li className="insurance-box-description-text">
            ค่าแพทย์เยี่ยมไข้ {ipd.rbScheduleDoctor.toLocaleString()} บาท/คืน
          </li>
          <li className="insurance-box-description-text">
            ค่ารักษาพยาบาล {sum.toLocaleString()} บาท
          </li>
        </div>
      );
    }
    return <div />;
  }

  handleShowIPD = () => {
    const { data, plan } = this.props;
    const ipd = data.allBenefit[plan].benefitPlan.plan.planId;
    if (ipd.ipdLumsumPerYear) {
      return `สูงสุดไม่เกิน ${ipd.ipdLumsumPerYear.toLocaleString()} บาท/ปี`;
    } else if (ipd.ipdLumsumPerTime) {
      return `สูงสุดไม่เกิน ${ipd.ipdLumsumPerTime.toLocaleString()} บาท/ครั้ง`;
    } else if (ipd.rbLumsumRoomPerNight) {
      return `ค่าห้องและอาหารไม่เกิน ${ipd.rbLumsumRoomPerNight.toLocaleString()} บาท/คืน`;
    } else if (ipd.rbSchedulePatient) {
      return `สูงสุดไม่เกิน ${ipd.rbSchedulePatient.toLocaleString()} บาท/คืน`;
    }
    return <div />;
  }

  handleShowLife = () => {
    const { data, plan } = this.props;
    const life = data.allBenefit[plan].benefitPlan.plan.planId;
    if (life.lifePerYear) {
      return `จำนวนเงิน ${life.lifePerYear.toLocaleString()} บาท`;
    } else if (life.lifeTimeOfSalary) {
      return `คูณอัตราเงินเดือน ${life.lifeTimeOfSalary.toLocaleString()} เท่า`;
    }
    return <div />;
  }

  handleShowDental = () => {
    const { data, plan } = this.props;
    const dental = data.allBenefit[plan].benefitPlan.plan.planId;
    if (dental.dentalPerYear) {
      return `ใช้บริการได้ครั้งละ ${dental.dentalPerYear.toLocaleString()} บาท`;
    }
    return <div />;
  }

  handleShowOPD = () => {
    const { data, plan } = this.props;
    const opd = data.allBenefit[plan].benefitPlan.plan.planId;
    if (opd.opdPerYear) {
      return `สูงสุดไม่เกิน ${opd.opdPerYear.toLocaleString()} บาท/ปี`;
    } else if (opd.opdPerTime) {
      return `สูงสุดไม่เกิน ${opd.opdPerTime.toLocaleString()} บาท/ครั้ง`;
    }
    return <div />;
  }

  render() {
    const {
      life,
      opd,
      opdPlus,
      opdRotatePlus,
      dental,
      ipd,
      ipdPlus,
      ipdRotatePlus,
      showIPD,
      showOPD,
      showLife,
      showDental,
      showDescriptionOPD,
      showDescriptionIPD,
    } = this.state;
    const { plan } = this.props;
    const alt = plan + 1;
    return (
      <div>
        <span className="insurance-header">แผนประกันภัย</span>
        { this.handleShowSelectPlan() }
        {
          showLife
          ? <div className={life}>
            <div className="insurance-box-header">
              <img
                className="insurance-info"
                src={Info}
                alt={alt}
                onClick={this.handleOpenModal}
                role="button"
                aria-hidden
              />
              <img className="insurance-box-header-img" src={Life} alt={alt} />
              <span className="insurance-box-header-text">LIFE</span>
            </div>
            <div className="insurance-box-title">
              <div>
                <span className="insurance-box-title-text small-10 columns">
                  {this.handleShowLife()}
                </span>
              </div>
            </div>
            {life === boxShow ? this.handleShowDescription() : <div />}
          </div>
          : <div />
        }
        {
          showOPD
          ? <div className={opd}>
            <div className="insurance-box-header">
              <img
                className="insurance-info"
                src={Info}
                alt={alt}
                onClick={this.handleOpenModal}
                role="button"
                aria-hidden
              />
              <img className="insurance-box-header-img" src={OPD} alt={alt} />
              <span className="insurance-box-header-text">OPD</span>
            </div>
            <div className="insurance-box-title">
              <div onClick={showDescriptionOPD ? this.handleClickOPD : ''} role="button" aria-hidden>
                <span className="insurance-box-title-text small-10 columns">
                  {this.handleShowOPD()}
                </span>
                {
                  showDescriptionOPD
                  ? <span className={opdPlus}><Icon name="plus" /></span>
                  : <span />
                }
                {
                  showDescriptionOPD
                  ? <span className={opdRotatePlus}>
                    <Icon className="insurance-rotate-plus" name="plus" />
                  </span>
                  : <span />
                }
              </div>
            </div>
            {opd === boxShow ? this.handleShowDescription('opd') : <div />}
          </div>
          : <div />
        }
        {
          showDental
          ? <div className={dental}>
            <div className="insurance-box-header">
              <img
                className="insurance-info"
                src={Info}
                alt={alt}
                onClick={this.handleOpenModal}
                role="button"
                aria-hidden
              />
              <img className="insurance-box-header-img" src={Dental} alt={alt} />
              <span className="insurance-box-header-text">Dental</span>
            </div>
            <div className="insurance-box-title">
              <div>
                <span className="insurance-box-title-text small-10 columns">
                  {this.handleShowDental()}
                </span>
              </div>
            </div>
          </div>
          : <div />
        }
        {
          showIPD
          ? <div className={ipd}>
            <div className="insurance-box-header">
              <img
                className="insurance-info"
                src={Info}
                alt={alt}
                onClick={this.handleOpenModal}
                role="button"
                aria-hidden
              />
              <img className="insurance-box-header-img" src={IPD} alt={alt} />
              <span className="insurance-box-header-text">IPD</span>
            </div>
            <div className="insurance-box-title">
              <div onClick={showDescriptionIPD ? this.handleClickIPD : ''} role="button" aria-hidden>
                <span className="insurance-box-title-text small-10 columns">
                  {this.handleShowIPD()}
                </span>
                {
                  showDescriptionIPD
                  ? <span className={ipdPlus}><Icon name="plus" /></span>
                  : <span />
                }
                {
                  showDescriptionIPD
                  ? <span className={ipdRotatePlus}>
                    <Icon className="insurance-rotate-plus" name="plus" />
                  </span>
                  : <span />
                }
              </div>
            </div>
            {ipd === boxShow ? this.handleShowDescription('ipd') : <div />}
          </div>
          : <div />
        }
        <span
          className="xten-back-btn"
          onClick={this.props.handleClickBack}
          aria-hidden
        >
          &lt; ย้อนกลับ
        </span>

        <Modal
          className="plan-modal-info"
          trigger={<div />}
          open={this.state.modal}
          onClose={this.handleCloseModal}
        >
          <div className="insurance-box-modal">
            <span
              className="insurance-modal-cancel-box"
              onClick={this.handleCloseModal}
              role="button"
              aria-hidden
            >
              <Icon className="insurance-modal-cancel" name="plus" />
            </span>
            <span className="insurance-modal-text-header">
              User Tips!
            </span>
            <p className="insurance-modal-text">
              สิทธิประโยชน์ด้านค่าใช้จ่ายทั่วไปที่คุณจะได้รับในแต่ละปี
               โดยขอบเขตและเงื่อนไขในการเคลมนั้นเป็นไปตามที่ HR ระบุไว้
            </p>
          </div>
        </Modal>
      </div>
    );
  }
}


export default InsuranceDetail;
