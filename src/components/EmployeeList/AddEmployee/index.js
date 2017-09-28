import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Head from '../../Head';
import { Detail, Text } from './styled';
import General from './General';
import Personal from './Personal';
import Claim from './Claim';
import { getGroupBenefit, employeeDetail, addEmployee } from '../../../api/profile-company';
import ModalAddEmployee from './ModalAddEmployee';

class AddEmployee extends Component {
  static propTypes = {
    employeeDetail: PropTypes.func.isRequired,
    groupBenefit: PropTypes.arrayOf(PropTypes.object).isRequired,
    getGroupBenefit: PropTypes.func.isRequired,
    // getBenefitPlan: PropTypes.func.isRequired,
    // data: PropTypes.arrayOf(PropTypes.object).isRequired,
  }
  constructor(props) {
    super(props);
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
      bankAccount: '',
      bankName: '',
      startDate: '',
      endDate: '',
      phoneNumber: '',
      address: '',
      marriageStatus: '',
      isSuccess: false,
    };
    props.employeeDetail();
    // props.getBenefitPlan();
    props.getGroupBenefit();
  }
  componentWillReceiveProps(newProps) {
    // if (this.state.data !== newProps.data) {
    //   this.setState({
    //     data: newProps.data,
    //   });
    // }
    this.renderGroup();
    this.renderDepartment(newProps.data);
    this.renderTitle(newProps.data);
  }
  // componentWillUpdate(nextProps, nextState) {
  //   if (nextState.isSuccess) {
  //     this.setState({
  //       isSuccess: false,
  //     });
  //     console.log('eiei');
  //     <Redirect to="/employeelist" />
  //   }
  //   return '';
  // }

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
    } = this.state
    return addEmployee({
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
    }, profilePic).then(() => this.setState({ isSuccess: true }));
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
          </div>
          {isGeneral
          ? <General
            data={this.state}
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
  data: state.profile.employeeDetail,
  groupBenefit: state.profile.groupBenefit,
  benefitPlan: state.benefitPlan.plan,
});

export default connect(mapStateToProps, mapDispatchToProps)(AddEmployee);
