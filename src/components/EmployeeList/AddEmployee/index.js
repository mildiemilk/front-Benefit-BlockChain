import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import Head from '../../Head';
import { Detail, Text } from './styled';
import General from './General';
import Personal from './Personal';
import Claim from './Claim';
import { getGroupBenefit, employeeDetail, addEmployee, editEmployee } from '../../../api/profile-company';
import ModalAddEmployee from './ModalAddEmployee';

class AddEmployee extends Component {
  static propTypes = {
    employeeDetail: PropTypes.func.isRequired,
    groupBenefit: PropTypes.arrayOf(PropTypes.object).isRequired,
    getGroupBenefit: PropTypes.func.isRequired,
    // getBenefitPlan: PropTypes.func.isRequired,
    dataDetail: PropTypes.arrayOf(PropTypes.object).isRequired,
    match: PropTypes.shape({ params: PropTypes.index }),
  }
  static defaultProps = {
    match: {
      params: 0,
    },
  }
  constructor(props) {
    super(props);
    const { dataDetail } = this.props;
    let data;
    let dataIndex = props.match.params.index;
    console.log('dataDEtailll->', dataDetail);
    if (dataIndex === 'new') {
      data = {
        prefix: '',
        name: '',
        lastname: '',
        gender: '',
        citizenId: '',
        nationality: '',
        dateOfBirth: '',
        employeeCode: '',
        policyNumber: '',
        memberNumber: '',
        benefitGroup: '',
        benefitPlan: '',
        title: '',
        department: '',
        typeOfEmployee: '',
        email: '',
        personalEmail: '',
        accountNumber: '',
        bankName: '',
        startDate: '',
        endDate: '',
        phoneNumber: '',
        address: '',
        marriageStatus: '',
        employeeId: '',
      }
    } else {
      dataIndex = parseInt(props.match.params.index, 10);
      data = {
        prefix: dataDetail[dataIndex].detail.prefix,
        name: dataDetail[dataIndex].detail.name,
        lastname: dataDetail[dataIndex].detail.lastname,
        gender: dataDetail[dataIndex].detail.gender,
        citizenId: dataDetail[dataIndex].detail.citizenId,
        nationality: dataDetail[dataIndex].detail.nationality,
        dateOfBirth: '',
        employeeCode: dataDetail[dataIndex].detail.employeeCode,
        policyNumber: dataDetail[dataIndex].detail.policyNumber,
        memberNumber: dataDetail[dataIndex].detail.memberNumber,
        benefitGroup: dataDetail[dataIndex].detail.benefitGroup,
        benefitPlan: dataDetail[dataIndex].detail.benefitPlan,
        title: dataDetail[dataIndex].detail.title,
        department: dataDetail[dataIndex].detail.department,
        typeOfEmployee: dataDetail[dataIndex].detail.typeOfEmployee,
        email: dataDetail[dataIndex].email,
        personalEmail: dataDetail[dataIndex].detail.personalEmail,
        accountNumber: dataDetail[dataIndex].detail.accountNumber,
        bankName: dataDetail[dataIndex].detail.bankName,
        startDate: '',
        endDate: '',
        phoneNumber: dataDetail[dataIndex].detail.phoneNumber,
        address: dataDetail[dataIndex].detail.address,
        marriageStatus: dataDetail[dataIndex].detail.marriageStatus,
        employeeId: dataDetail[dataIndex]._id,
      }
    }
    this.state = {
      isGeneral: true,
      isPersonal: false,
      isClaim: false,
      optionGroupBenefit: [],
      optionTypeOfEmployee: [
        { key: 1, text: 'full-time', value: 'full-time' },
        { key: 2, text: 'part-time', value: 'part-time' },
        { key: 3, text: 'out-source', value: 'out-source' },
      ],
      optionDepartment: [],
      optionTitles: [],
      profilePic: '',
      imagePreviewUrl: '',
      prefix: data.prefix,
      name: data.name,
      lastname: data.lastname,
      gender: data.gender,
      citizenId: data.citizenId,
      nationality: data.nationality,
      dateOfBirth: '',
      employeeCode: data.employeeCode,
      policyNumber: data.policyNumber,
      memberNumber: data.memberNumber,
      benefitGroup: data.benefitGroup,
      benefitPlan: data.benefitPlan,
      title: data.title,
      department: data.department,
      typeOfEmployee: data.typeOfEmployee,
      email: data.email,
      personalEmail: data.personalEmail,
      accountNumber: data.accountNumber,
      bankName: data.bankName,
      startDate: '',
      endDate: '',
      phoneNumber: data.phoneNumber,
      address: data.address,
      marriageStatus: data.marriageStatus,
      employeeId: data.employeeId,
      isSuccess: false,
      dataIndex,
    };
    props.employeeDetail();
    // props.getBenefitPlan();
    props.getGroupBenefit();
  }
  componentWillReceiveProps(newProps) {
    // if (newProps !== newProps.data) {
    //   this.setState({
    //     data: newProps.data,
    //   });
    // }
    this.renderGroup();
    this.renderDepartment(newProps.dataDetail);
    this.renderTitle(newProps.dataDetail);
  }
  _handleImageChange = e => {
    const reader = new FileReader();
    const profilePic = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        profilePic,
        imagePreviewUrl: reader.result,
      });
    };

    reader.readAsDataURL(profilePic);
  }
  handleGeneral = () => {
    const { isGeneral } = this.state;
    if (!isGeneral) {
      this.setState({
        isGeneral: true,
        isPersonal: false,
        isClaim: false,
      });
    }
  }
  handlePersonal = () => {
    const { isPersonal } = this.state;
    if (!isPersonal) {
      this.setState({
        isGeneral: false,
        isPersonal: true,
        isClaim: false,
      });
    }
  }
  handleClaim = () => {
    const { isClaim } = this.state;
    if (!isClaim) {
      this.setState({
        isGeneral: false,
        isPersonal: false,
        isClaim: true,
      });
    }
  }
  handleBirthDate = dateOfBirth => {
    this.setState({ dateOfBirth });
  }
  handleStartDate = startDate => {
    this.setState({ startDate });
  }
  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }
  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  }
  handleOptionGender = changeEvent => {
    this.setState({
      gender: changeEvent.target.value,
    });
  }
  handleSubmit = () => {
    console.log('ee');
    const {
      profilePic,
      prefix,
      name,
      lastname,
      gender,
      citizenId,
      nationality,
      dateOfBirth,
      employeeCode,
      policyNumber,
      memberNumber,
      benefitGroup,
      benefitPlan,
      title,
      department,
      typeOfEmployee,
      email,
      personalEmail,
      accountNumber,
      bankName,
      startDate,
      endDate,
      phoneNumber,
      address,
      marriageStatus,
      employeeId,
      dataIndex,
    } = this.state
    const detail = {
      prefix,
      name,
      lastname,
      gender,
      citizenId,
      nationality,
      dateOfBirth,
      employeeCode,
      policyNumber,
      memberNumber,
      benefitGroup,
      benefitPlan,
      title,
      department,
      typeOfEmployee,
      email,
      personalEmail,
      accountNumber,
      bankName,
      startDate,
      endDate,
      phoneNumber,
      address,
      marriageStatus,
      employeeId,
    }
    console.log('dataIndex---->>>>', dataIndex);
    if (dataIndex === 'new') {
      addEmployee(detail, profilePic).then(() => this.setState({ isSuccess: true }));
    } else {
      editEmployee(detail, profilePic).then(() => this.setState({ isSuccess: true }));
    }
  }
  styletabGeneral = () => {
    if (this.state.isGeneral) {
      return 'active';
    }
    return '';
  }
  styletabPersonal = () => {
    if (this.state.isPersonal) {
      return 'active';
    }
    return '';
  }
  styletabClaim = () => {
    if (this.state.isClaim) {
      return 'active';
    }
    return '';
  }
  renderGroup = () => {
    const options = this.props.groupBenefit;
    const optionGroupBenefit = [];
    if (options !== undefined && options.length >= 1) {
      options.map((option, index) => {
        optionGroupBenefit.push({
          key: index,
          text: option.groupName,
          value: option.groupName,
        });
        return option;
      });
    }
    this.setState({ optionGroupBenefit });
  }
  renderTitle = options => {
    // const options = this.props.data;
    const optionTitles = [];
    if (options !== undefined && options.length >= 1) {
      options.map((option, index) => {
        const exist = optionTitles.findIndex(d => d.text === option.detail.title) !== -1;
        if (!exist) {
          optionTitles.push({
            key: index,
            text: option.detail.title,
            value: option.detail.title,
          });
        }
        console.log('Title', options);
        return option;
      });
    }
    this.setState({ optionTitles });
  }
  renderDepartment = options => {
    // const options = this.props.data;
    const departments = [];
    if (options !== undefined && options.length >= 1) {
      options.map((option, index) => {
        const exist = departments.findIndex(d => d.text === option.detail.department) !== -1;
        if (!exist) {
          departments.push({
            key: index,
            text: option.detail.department,
            value: option.detail.department,
          });
        }
        console.log('Department', options);
        return option;
      });
    }
    this.setState({ optionDepartment: departments });
  }
  render() {
    if (this.state.isSuccess) {
      return <Redirect to="/employeelist" />;
    }
    const { isGeneral, isPersonal, isClaim } = this.state;
    console.log('allstate', this.state);
    console.log('props-->-->', this.props.dataDetail[this.state.dataIndex]);
    return (
      <div>
        <Head content="ข้อมูลพนักงาน" />
        <Detail>
          <div className="tab">
            <Text
              className={this.styletabGeneral()}
              onClick={this.handleGeneral}
            >ข้อมูลทั่วไป</Text>
            <Text
              className={this.styletabPersonal()}
              onClick={this.handlePersonal}
            >ข้อมูลส่วนตัว</Text>
            <Text
              className={this.styletabClaim()}
              onClick={this.handleClaim}
              last
            >ประวัติการเคลม</Text>
            <Icon name="write" />แก้ไข
          </div>
          {isGeneral
          ? <General
            data={this.state}
            dataIndex={this.state.dataIndex}
            _handleImageChange={this._handleImageChange}
            handleStartDate={this.handleStartDate}
            handleBirthDate={this.handleBirthDate}
            handleChange={this.handleChange}
            handleInputChange={this.handleInputChange}
            handleOptionGender={this.handleOptionGender}
          />
          : null
          }
          {isPersonal
          ? <Personal
            handleChange={this.handleChange}
            data={this.state}
            dataIndex={this.state.dataIndex}
            handleInputChange={this.handleInputChange}
          />
          : null
          }
          {isClaim
          ? <Claim />
          : null
          }
        </Detail>
        <div className="row">
          <div className="large-2 large-offset-10 columns">
            <ModalAddEmployee handleSubmit={this.handleSubmit} />
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  employeeDetail: () => dispatch(employeeDetail()),
  getGroupBenefit: () => dispatch(getGroupBenefit()),
  // getBenefitPlan: () => dispatch(getBenefitPlan()),
});

const mapStateToProps = state => ({
  dataDetail: state.profile.employeeDetail,
  groupBenefit: state.profile.groupBenefit,
  benefitPlan: state.benefitPlan.plan,
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEmployee);

