import React, { Component } from 'react';
import { Modal, Dropdown, Icon } from 'semantic-ui-react';
import moment from 'moment';
import { connect } from 'react-redux';
// import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  BackgroundDiv,
  TinyText,
  SubmitButton,
  SubmitButtonLast,
  NewLine,
  BrowsButton,
  UploadText,
} from './styled';
import InsuranceTemplate from './insurance-template';
import '../../../../styles/employee-style/claim-insurance.scss';
import { claimOption, reClaim } from '../../../../api/Employee/claim';

class NewClaim extends Component {
  static propTypes = {
    claimdata: PropTypes.shape({}).isRequired,
    claimOption: PropTypes.func.isRequired,
    data: PropTypes.shape({}).isRequired,
    handleToggleViewDetail: PropTypes.func.isRequired,
    handleUpdateClaim: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    const { claimdata } = props;
    this.state = {
      mainState: claimdata.type,
      ChooseEmployeeName: claimdata.ChooseEmployeeName,
      ClaimFile: [],
      InsuranceType: claimdata.InsuranceType,
      date: moment(claimdata.date),
      Hospital: claimdata.Hospital,
      AmountMoney: claimdata.AmountMoney,
      currency: claimdata.currency,
      BankName: claimdata.BankName,
      AccountNumber: claimdata.AccountNumber,
      HealthType: claimdata.HealthType,
      HealthPlace: claimdata.HealthPlace,
      expenseType: claimdata.expenseType,
      openModal: false,
      EmNameoption: [],
      life: [],
      health: [],
      general: [],
      MainStateOption: [],
      modalMsg: '',
      _id: '',
      renderClaimStatus: false,
    };
    props.claimOption();
  }

  componentWillReceiveProps(nextProps) {
    const { data } = nextProps;
    const { claimdata } = this.props;
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
      mainState: claimdata.type,
      ChooseEmployeeName: claimdata.ChooseEmployeeName,
      ClaimFile: [],
      InsuranceType: claimdata.InsuranceType,
      date: moment(claimdata.date),
      Hospital: claimdata.Hospital,
      AmountMoney: claimdata.AmountMoney,
      currency: claimdata.currency,
      BankName: claimdata.BankName,
      AccountNumber: claimdata.AccountNumber,
      HealthType: claimdata.HealthType,
      HealthPlace: claimdata.HealthPlace,
      expenseType: claimdata.expenseType,
      openModal: false,
      modalMsg: '',
      _id: claimdata._id,
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

  handleButtonSubmit = () => {
    const state = this.state;
    const detail = {};
    const files = state.ClaimFile;
    const type = state.mainState;
    const _id = state._id;
    this.setState({ modalMsg: '' });
    if (
      state.date !== ''
      && state.ChooseEmployeeName !== ''
      && state.AmountMoney !== ''
      && state.currency !== ''
      && type !== ''
      && files.length !== 0
    ) {
      detail.date = state.date;
      detail.name = state.ChooseEmployeeName;
      detail.amount = state.AmountMoney;
      detail.currency = state.currency;
      detail.bank = state.BankName;
      detail.bankAccountNumber = state.AccountNumber;
      detail.location = state.Hospital ? state.Hospital : state.HealthPlace;
      if (type === 'insurance') {
        if (state.InsuranceType !== '' && detail.location !== '' && state.BankName !== '' && state.AccountNumber !== '') {
          detail.title = state.InsuranceType;
          if (state.Hospital !== '') {
            detail.location = state.Hospital;
          }
          reClaim(_id, detail, files, type)
          .then(() => {
            this.props.handleUpdateClaim();
            this.setState({
              renderClaimStatus: true,
              openModal: true,
            });
          });
        } else {
          this.setState({
            modalMsg: 'กรุณากรอกข้อมูลให้ครบ',
            openModal: true,
          });
        }
      } else if (type === 'health') {
        if (state.HealthPlace !== '' && detail.location !== '') {
          detail.title = state.HealthType;
          if (state.HealthPlace !== '') {
            detail.location = state.HealthPlace;
          }
          reClaim(_id, detail, files, type)
          .then(() => {
            this.props.handleUpdateClaim();
            this.setState({
              renderClaimStatus: true,
              openModal: true,
            });
          });
        } else {
          this.setState({
            modalMsg: 'กรุณากรอกข้อมูลให้ครบ',
            openModal: true,
          });
        }
      } else {
        if (state.expenseType !== '' && detail.location !== '') {
          detail.title = state.expenseType;
          if (state.HealthPlace !== '') {
            detail.location = state.HealthPlace;
          }
          reClaim(_id, detail, files, type)
          .then(() => {
            this.props.handleUpdateClaim();
            this.setState({
              renderClaimStatus: true,
              openModal: true,
            });
          });
        } else {
          this.setState({
            modalMsg: 'กรุณากรอกข้อมูลให้ครบ',
            openModal: true,
          });
        }
      }
    } else {
      this.setState({
        modalMsg: 'กรุณากรอกข้อมูลให้ครบ',
        openModal: true,
      });
    }
  }

  handleCloseModal = () => {
    this.setState({ openModal: false });
    if (this.state.renderClaimStatus) {
      this.props.handleToggleViewDetail();
    }
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  }

  handleChangeDate = date => {
    this.setState({ date });
  }

  render() {
    const {
      modalMsg,
      openModal,
      MainStateOption,
      EmNameoption,
      life,
      health,
      general,
      ClaimFile,
    } = this.state;
    const { claimdata } = this.props;
    return (
      <div className="InsuranceTemplate">
        <BackgroundDiv>
          <TinyText>ประเภทการเคลม</TinyText>
          <Dropdown
            placeholder="เลือกประเภทการเคลม"
            fluid
            selection
            defaultValue={claimdata.type}
            name="mainState"
            options={MainStateOption}
            onChange={this.handleChange}
          />
          <InsuranceTemplate
            EmNameoption={EmNameoption}
            handleChange={this.handleChange}
            handleChangeDate={this.handleChangeDate}
            claimdata={this.state}
            life={life}
            health={health}
            general={general}
          />
          <TinyText>แนบภาพใบเสร็จ (เฉพาะไฟล์ประเภท .pdf .jpg .png)</TinyText>
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
          </UploadText>
          <NewLine style={{ height: '3px' }} />
          <SubmitButton onClick={() => this.handleButtonSubmit()}> เคลมอีกครั้ง </SubmitButton>
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
        </BackgroundDiv>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  claimOption: () => dispatch(claimOption()),
});
const mapStateToProps = state => ({
  data: state.claimOptionReducer,
});

export default connect(mapStateToProps, mapDispatchToProps)(NewClaim);
