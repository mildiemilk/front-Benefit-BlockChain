import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal, Dropdown } from 'semantic-ui-react';
// import styled from 'styled-components';
import { Redirect } from 'react-router-dom';
import {
  Backgroundiv,
  SubmitButton,
  SubmitButtonLast,
  TinyText,
  NewLine,
} from './styled';
import InsuranceTemplate from './insurance-template';
import HealthTemplate from './health-template';
import GeneralExpenseTemplate from './generalexpense-template';
import Footer from '../footer';
import '../../../styles/employee-style/claim-insurance.scss';
import { claimOption, claim } from '../../../api/Employee/claim';

const currencyOption = [
  { key: '1', text: 'บาท', value: 'bath' },
  { key: '2', text: 'USD', value: 'usd' },
];

class ClaimInsurance extends Component {
  static propTypes = {
    claimOption: PropTypes.func.isRequired,
    data: PropTypes.shape({}).isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      mainState: 'general',
      ChooseEmployeeName: '',
      ClaimFile: [],
      InsuranceType: '',
      date: moment(),
      Hospital: '',
      ICD10: '',
      AmountMoney: null,
      currency: '',
      BankName: '',
      AccountNumber: '',
      HealthType: '',
      HealthPlace: '',
      expenseType: '',
      openModal: false,
      EmNameoption: [],
      life: [],
      health: [],
      general: [],
      MainStateOption: [],
      modalMsg: '',
      renderClaimStatus: false,
    };
    props.claimOption();
  }

  componentWillReceiveProps(nextProps) {
    const { data } = nextProps;
    const EmNameoption = [];
    const life = [];
    const health = [];
    const general = [];
    const MainStateOption = [];
    data.claimUser.forEach((item, i) => {
      EmNameoption.push({
        key: i,
        text: item,
        value: item,
      });
    });
    data.insuranceList.forEach((item, i) => {
      life.push({
        key: i,
        text: item,
        value: item,
      });
    });
    data.healthList.forEach((item, i) => {
      health.push({
        key: i,
        text: item,
        value: item,
      });
    });
    data.expenseList.forEach((item, i) => {
      general.push({
        key: i,
        text: item,
        value: item,
      });
    });
    if (life.length > 0) {
      MainStateOption.push({ key: 'insurance', text: 'ประกันภัย', value: 'insurance' });
    }
    if (health.length > 0) {
      MainStateOption.push({ key: 'health', text: 'สุขภาพ', value: 'health' });
    }
    if (general.length > 0) {
      MainStateOption.push({ key: 'general', text: 'ใช้จ่ายทั่วไป', value: 'general' });
    }
    this.setState({
      EmNameoption,
      life,
      health,
      general,
      MainStateOption,
    });
  }

  handleUploadcliamFile = changeEvent => {
    const file = changeEvent.target.files[0];
    const { ClaimFile } = this.state;
    ClaimFile.push(file);
    this.setState({ ClaimFile });
    // console.log('Claimfile: ', ClaimFile);
  }

  handleClickRemoveFile = index => {
    const { ClaimFile } = this.state;
    ClaimFile.splice(index, 1);
    this.setState({ ClaimFile });
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  }

  handleChangeDate = date => {
    this.setState({ date });
  }
  handleTime = time => {
    time._d.setDate(this.state.date._d.getDate());
    this.state.date._d.setTime(time._d.getTime());
  }
  handleButtonSubmit = () => {
    const state = this.state;
    const detail = {};
    const files = this.state.ClaimFile;
    const type = this.state.mainState;
    this.setState({ modalMsg: '' });
    if (
      state.date !== ''
      && state.ChooseEmployeeName !== ''
      && state.AmountMoney !== ''
      && state.currency !== ''
      && type !== ''
    ) {
      detail.date = state.date;
      detail.name = state.ChooseEmployeeName;
      detail.amount = state.AmountMoney;
      detail.currency = state.currency;
      detail.bank = state.BankName;
      detail.bankAccountNumber = state.AccountNumber;
      detail.ICD10 = state.ICD10;
      detail.location = state.Hospital ? state.Hospital : state.HealthPlace;
      if (type === 'insurance') {
        if (state.InsuranceType !== '' && detail.location !== '' && state.BankName !== '' && state.AccountNumber !== '' && state.ICD10 !== '') {
          detail.title = state.InsuranceType;
          if (state.Hospital !== '') {
            detail.location = state.Hospital;
          }
          claim(detail, files, type)
          .then(() => {
            this.setState({
              renderClaimStatus: true,
              openModal: true,
            });
          });
        } else {
          this.setState({ modalMsg: 'กรุณากรอกข้อมูลให้ครบ' });
        }
      } else if (type === 'health') {
        if (state.HealthPlace !== '' && detail.location !== '') {
          detail.title = state.HealthType;
          if (state.HealthPlace !== '') {
            detail.location = state.HealthPlace;
          }
          claim(detail, files, type)
          .then(() => {
            this.setState({
              renderClaimStatus: true,
              openModal: true,
            });
          });
        } else {
          this.setState({ modalMsg: 'กรุณากรอกข้อมูลให้ครบ' });
        }
      } else {
        if (state.expenseType !== '' && detail.location !== '') {
          detail.title = state.expenseType;
          if (state.HealthPlace !== '') {
            detail.location = state.HealthPlace;
          }
          claim(detail, files, type)
          .then(() => {
            this.setState({
              renderClaimStatus: true,
              openModal: true,
            });
          });
        } else {
          this.setState({ modalMsg: 'กรุณากรอกข้อมูลให้ครบ' });
        }
      }
    } else {
      this.setState({
        modalMsg: 'กรุณากรอกข้อมูลให้ครบ',
        openModal: true,
      });
    }
  }

  handleOpenModal = () => this.setState({ openModal: true });

  handleCloseModal = () => this.setState({ openModal: false });

  handleMainStateOption = () => {
    const { life, health, general, MainStateOption } = this.state;
    if (life.length > 0) {
      MainStateOption.push({ key: 'insurance', text: 'ประกันภัย', value: 'insurance' });
    }
    if (health.length > 0) {
      MainStateOption.push({ key: 'health', text: 'สุขภาพ', value: 'health' });
    }
    if (general.length > 0) {
      MainStateOption.push({ key: 'general', text: 'ใช้จ่ายทั่วไป', value: 'general' });
    }
    this.setState({ MainStateOption });
  }

  rendermainState = () => {
    const { data } = this.props;
    const {
      date,
      life,
      health,
      general,
      ClaimFile,
      EmNameoption,
    } = this.state;
    const nameOption = [];
    nameOption.push({
      key: 0,
      text: data.claimUser[0],
      value: data.claimUser[0],
    });
    if (this.state.mainState === 'general') {
      return (
        <GeneralExpenseTemplate
          EmNameoption={nameOption}
          handleChange={this.handleChange}
          handleUploadcliamFile={this.handleUploadcliamFile}
          ClaimFile={ClaimFile}
          handleChangeDate={this.handleChangeDate}
          date={date}
          data={data}
          general={general}
          currencyOption={currencyOption}
          handleClickRemoveFile={this.handleClickRemoveFile}
        />
      );
    } else if (this.state.mainState === 'health') {
      return (
        <HealthTemplate
          EmNameoption={nameOption}
          handleChange={this.handleChange}
          handleUploadcliamFile={this.handleUploadcliamFile}
          ClaimFile={ClaimFile}
          handleChangeDate={this.handleChangeDate}
          date={date}
          data={data}
          health={health}
          currencyOption={currencyOption}
        />
      );
    }
    return (
      <InsuranceTemplate
        EmNameoption={EmNameoption}
        handleChange={this.handleChange}
        handleUploadcliamFile={this.handleUploadcliamFile}
        ClaimFile={ClaimFile}
        handleChangeDate={this.handleChangeDate}
        handleTime={this.handleTime}
        date={date}
        data={data}
        life={life}
        currencyOption={currencyOption}
      />
    );
  }

  render() {
    const {
      MainStateOption,
      openModal,
      modalMsg,
      renderClaimStatus,
    } = this.state;
    const { data } = this.props;
    if (renderClaimStatus) {
      return <Redirect to={{ pathname: '/claimstatus' }} />;
    }
    if (data.claimUser.length > 0) {
      return (
        <div className="InsuranceTemplate">
          <Backgroundiv>
            <p style={{ fontSize: '18px' }}>เคลม</p>
            <TinyText>ประเภทการเคลม</TinyText>
            <Dropdown
              placeholder="เลือกประเภทการเคลม"
              fluid
              selection
              defaultValue="general"
              name="mainState"
              options={MainStateOption}
              onChange={this.handleChange}
            />
            {
              this.rendermainState()
            }
            <NewLine />
            {/* <TinyText>แนบภาพใบเสร็จ (เฉพาะไฟล์ประเภท .pdf .jpg .png)</TinyText>
            <BrowsButton>
              <input
                style={{ display: 'none' }}
                type="file"
                accept=".pdf, .jpg, .png"
                onChange={this.handleUploadcliamFile}
              />
              อัพโหลดรูปใบเสร็จ
            </BrowsButton>
            <NewLine style={{ height: '3px' }} />
            <UploadText>
              {
                ClaimFile.map((ele, index) => (
                  <div className="claim-show-file-name-box" key={index.toString()}>
                    <span className="claim-show-file-name">{ele.name}</span>
                    <span
                      className="claim-icon-remove"
                      onClick={() => this.handleClickRemoveFile(index)}
                      role="button"
                      aria-hidden
                    >
                      <Icon name="remove" />
                    </span>
                  </div>
                ))
              }
            </UploadText> */}
            <NewLine style={{ height: '3px' }} />
            <SubmitButton onClick={() => this.handleButtonSubmit()}> เคลม </SubmitButton>
            <Modal
              trigger={<div />}
              open={openModal}
              onClose={this.handleCloseModal}
            >
              <div className="claim-modal-box">
                <span className="claim-modal-text">
                  {
                    modalMsg === ''
                    ? 'รายการของคุณถูกบันทึกแล้ว'
                    : modalMsg
                  }
                </span>
                {
                  modalMsg === ''
                  ? <span className="claim-modal-text">กรุณารอการพิจารณา</span>
                  : <div />
                }
                <SubmitButtonLast onClick={() => this.handleCloseModal()}>
                  ตกลง
                </SubmitButtonLast>
              </div>
            </Modal>
          </Backgroundiv>
          <Footer />
        </div>
      );
    }
    return (<div />);
  }
}

// export default ClaimInsurance;
const mapDispatchToProps = dispatch => ({
  claimOption: () => dispatch(claimOption()),
});
const mapStateToProps = state => ({
  data: state.claimOptionReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(ClaimInsurance);
