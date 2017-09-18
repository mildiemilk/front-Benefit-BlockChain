import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Modal, Dropdown } from 'semantic-ui-react';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { Backgroundiv, TinyText, SubmitButton, SubmitButtonLast } from './styled';
import InsuranceTemplate from './insurance-template';
import HealthTemplate from './health-template';
import GeneralExpenseTemplate from './generalexpense-template';
import Footer from '../footer';
import '../../../styles/employee-style/claim-insurance.scss';
import { claimOption } from '../../../api/Employee/plan';
import { claim } from '../../../api/Employee/claim';

const MainStateOption = [
  { key: 'insurance', text: 'ประกันภัย', value: 'insurance' },
  { key: 'health', text: 'สุขภาพ', value: 'health' },
  { key: 'general', text: 'ใช้จ่ายทั่วไป', value: 'general' },
];
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
    };
    props.claimOption();
  }

  componentWillReceiveProps(nextProps) {
    const { data } = nextProps;
    const EmNameoption = [];
    // const life = [];
    const health = [];
    const general = [];
    data.claimUser.forEach((item, i) => {
      EmNameoption.push({
        key: i,
        text: item,
        value: item,
      });
    });
    // data.healthList.forEach((item, i) => {
    //   life.push({
    //     key: i,
    //     text: item,
    //     value: item,
    //   });
    // });
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
    this.setState({
      EmNameoption,
      // life,
      health,
      general,
    });
  }

  handleUploadcliamFile = changeEvent => {
    const file = changeEvent.target.files[0];
    const { ClaimFile } = this.state;
    ClaimFile.push(file);
    this.setState({ ClaimFile });
    // console.log('Claimfile: ', ClaimFile);
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  }

  handleChangeDate = date => {
    this.setState({ date });
  }

  handleButtonSubmit = () => {
    const detail = this.state;
    const files = this.state.ClaimFile;
    const type = this.state.mainState;
    delete detail.ClaimFile;
    delete detail.mainState;
    claim(detail, files, type)();
  }

  handleOpenModal = () => this.setState({ openModal: true });

  handleCloseModal = () => this.setState({ openModal: false });

  rendermainState = () => {
    const { data } = this.props;
    const {
      date,
      life,
      health,
      general,
      ClaimFile,
    } = this.state;
    const { EmNameoption } = this.state;
    if (this.state.mainState === 'insurance') {
      return (
        <InsuranceTemplate
          EmNameoption={EmNameoption}
          handleChange={this.handleChange}
          handleUploadcliamFile={this.handleUploadcliamFile}
          ClaimFile={ClaimFile}
          handleChangeDate={this.handleChangeDate}
          date={date}
          data={data}
          life={life}
          currencyOption={currencyOption}
        />
      );
    } else if (this.state.mainState === 'health') {
      return (
        <HealthTemplate
          EmNameoption={EmNameoption}
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
      <GeneralExpenseTemplate
        EmNameoption={EmNameoption}
        handleChange={this.handleChange}
        handleUploadcliamFile={this.handleUploadcliamFile}
        ClaimFile={ClaimFile}
        handleChangeDate={this.handleChangeDate}
        date={date}
        data={data}
        general={general}
        currencyOption={currencyOption}
      />
    );
  }

  render() {
    // console.log('index state: ', this.state);
    const { data } = this.props;
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
            <SubmitButton onClick={this.handleOpenModal}> เคลม </SubmitButton>
            <Modal
              trigger={<div />}
              open={this.state.openModal}
              onClose={this.handleCloseModal}
            >
              <div className="claim-modal-box">
                <span className="claim-modal-text">รายการของคุณถูกบันทึกแล้ว</span>
                <span className="claim-modal-text">กรุณารอการพิจารณา</span>
                <SubmitButtonLast onClick={() => this.handleButtonSubmit()}>
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
  data: {
    ...state.claimOptionReducer,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ClaimInsurance);
