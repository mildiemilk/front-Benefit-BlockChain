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

const Description = () => (
  <ul className="insurance-box-description">
    <li>
      <div className="insurance-box-description-left">Lumsum</div>
      <div className="insurance-box-description-right">1,200 บาท/ปี</div>
    </li>
    <li>
      <div className="insurance-box-description-left">Co-Pay</div>
      <div className="insurance-box-description-right" />
    </li>
    <li className="sub-description">
      <div className="insurance-box-description-left">Quota Share</div>
      <div className="insurance-box-description-right">10%</div>
    </li>
    <li>
      <div className="insurance-box-description-left">Detail 1</div>
      <div className="insurance-box-description-right">400บาท</div>
    </li>
    <li>
      <div className="insurance-box-description-left">Detail 2</div>
      <div className="insurance-box-description-right" />
    </li>
    <li className="sub-description">
      <div className="insurance-box-description-left">Detail 2.1</div>
      <div className="insurance-box-description-right">200 บาท/ครั้ง</div>
    </li>
    <li className="sub-description">
      <div className="insurance-box-description-left">Detail 2.2</div>
      <div className="insurance-box-description-right">500 บาท</div>
    </li>
    <li>
      <div className="insurance-box-description-left">Detail 3</div>
      <div className="insurance-box-description-right">300 บาท</div>
    </li>
  </ul>
);

class InsuranceDetail extends Component {
  static propTypes = {
    handleClickBack: PropTypes.func.isRequired,
    plan: PropTypes.number.isRequired,
  }
  constructor() {
    super();
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
    };
    this.handleClickLife = this.handleClickLife.bind(this);
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

  render() {
    const {
      life,
      lifePlus,
      lifeRotatePlus,
      opd,
      opdPlus,
      opdRotatePlus,
      dental,
      dentalPlus,
      dentalRotatePlus,
      ipd,
      ipdPlus,
      ipdRotatePlus,
    } = this.state;
    const { plan } = this.props;
    const alt = plan + 1;
    return (
      <div>
        <span className="insurance-header">แผนประกันภัย</span>
        {
          (plan + 1) ?
            <span className="insurance-plan">( แผนที่ {plan + 1} )</span>
            : <span />
        }
        <div className={life}>
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
            <div onClick={this.handleClickLife} role="button" aria-hidden>
              <span className="insurance-box-title-text small-10 columns">
                วงเงินทั้งหมด 1,200 บาท/ปี
              </span>
              <span className={lifePlus}><Icon name="plus" /></span>
              <span className={lifeRotatePlus}>
                <Icon className="insurance-rotate-plus" name="plus" />
              </span>
            </div>
          </div>
          {life === boxShow ? Description() : <div />}
        </div>
        <div className={opd}>
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
            <div onClick={this.handleClickOPD} role="button" aria-hidden>
              <span className="insurance-box-title-text small-10 columns">
                ค่ารักษาครั้งละ 2,000 บาท
              </span>
              <span className={opdPlus}><Icon name="plus" /></span>
              <span className={opdRotatePlus}>
                <Icon className="insurance-rotate-plus" name="plus" />
              </span>
            </div>
          </div>
          {opd === boxShow ? Description() : <div />}
        </div>
        <div className={dental}>
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
            <div onClick={this.handleClickDental} role="button" aria-hidden>
              <span className="insurance-box-title-text small-10 columns">
                ค่ารักษา 4,000 บาท/ปี
              </span>
              <span className={dentalPlus}><Icon name="plus" /></span>
              <span className={dentalRotatePlus}>
                <Icon className="insurance-rotate-plus" name="plus" />
              </span>
            </div>
          </div>
          {dental === boxShow ? Description() : <div />}
        </div>
        <div className={ipd}>
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
            <div onClick={this.handleClickIPD} role="button" aria-hidden>
              <span className="insurance-box-title-text small-10 columns">
                คุ้มครองสูงสุด 20,000 บาท
              </span>
              <span className={ipdPlus}><Icon name="plus" /></span>
              <span className={ipdRotatePlus}>
                <Icon className="insurance-rotate-plus" name="plus" />
              </span>
            </div>
          </div>
          {ipd === boxShow ? Description() : <div />}
        </div>
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
