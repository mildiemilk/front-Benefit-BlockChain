import React, { Component } from 'react';
import { Modal, Divider, Dropdown, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import {
  ModalHeader,
} from '../../ModalConfirmPassword/styled';
import { DivContent, Text, ButtonPopup, TextDetail, Input } from './styled';
// import InputDate from '../../InputDate';
import { Button } from '../../StyleComponent';

const ModalContents = styled(Modal.Content) `
  &&&{
    position: absolute;
    top: 29px;
    padding: 0px;
  }
`;

const Modals = styled(Modal) `
  &&&{
    background: transparent;
    width: 550px !important;
    position: absolute;
    left: 62%;
    top: 20%;
  }
`;

const Inputs = styled(DatePicker) `
  &&&{
    height: 40px;
    padding-left: 10px;
    border-radius: 4px;
    width: 100%;
    border: solid 1px #dddddd;
  }
`;
const Dropdowns = styled(Dropdown)`
  &&&{
    height: 40px;
    width: 100%;
    margin-bottom: 10px;
  }
`;
const ModalHeaders = styled(ModalHeader)`
  &&&{
    margin-top: 24px;
  }
`;


class ModalEditEmployee extends Component {
  static propTypes = {
    optionGroupBenefit: PropTypes.arrayOf(PropTypes.object).isRequired,
    optionTitles: PropTypes.arrayOf(PropTypes.object).isRequired,
    optionDepartment: PropTypes.arrayOf(PropTypes.object).isRequired,
    optionTypeEmployee: PropTypes.arrayOf(PropTypes.object).isRequired,
    optionBenefitPlan: PropTypes.arrayOf(PropTypes.object).isRequired,
    manageEmployee: PropTypes.func.isRequired,
    checkStateManage: PropTypes.func.isRequired,
    employeeId: PropTypes.string.isRequired,
    log: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  static defaultProps = {
    value: '',
  }

  constructor(props) {
    super(props);
    // const { log } = this.props;
    this.state = {
      modalOpen: false,
      isPromotion: true,
      isExit: false,
      effective: '',
      typeEmployee: '',
      department: '',
      title: '',
      groupBenefit: '',
      plan: '',
      reason: '',
    };
  }
  // componentWillReceiveProps(NewProps) {
  //   if (NewProps.effectiveDate !== this.state.effective) {
  //     this.setState({ effective: NewProps.effectiveDate });
  //   }
  // }
  handleModal = () =>
    this.setState({
      modalOpen: !this.state.modalOpen,
    })
  handlePromotion = () => {
    if (!this.state.isPromotion) {
      this.setState({
        isExit: !this.state.isExit,
        isPromotion: !this.state.isPromotion,
      });
    }
  }
  handleSubmit = () => {
    const {
      isPromotion, typeEmployee, department, title, groupBenefit, plan, reason, effective,
    } = this.state;
    const {
      employeeId,
    } = this.props;
    let status;
    let detail;
    if (isPromotion) {
      status = 'promote';
      detail = {
        typeOfEmployee: typeEmployee,
        department,
        title,
        benefitGroup: groupBenefit,
        benefitPlan: plan,
        employeeId,
        effectiveDate: effective };
    } else {
      status = 'resign';
      detail = { reason, effectiveDate: effective, employeeId };
    }
    this.props.manageEmployee(detail, status)
    .then(() => {
      this.props.checkStateManage();
    });
    this.setState({
      modalOpen: !this.state.modalOpen,
    });
  }
  handleExit = () => {
    if (!this.state.isExit) {
      this.setState({
        isExit: !this.state.isExit,
        isPromotion: !this.state.isPromotion,
      });
    }
  }
  handleEffective = effective => {
    this.setState({ effective }, () => console.log('set date', this.state.effective));
  }
  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  handleInputChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  }
  stylePopupExit = () => {
    if (this.state.isExit) {
      return 'active';
    }
    return '';
  }
  stylePopupPromotion = () => {
    if (this.state.isPromotion) {
      return 'active';
    }
    return '';
  }
  render() {
    // console.log('effective', this.state.effective);
    const {
      typeEmployee, department, title, groupBenefit, plan, reason, effective, isExit,
    } = this.state;
    const { optionGroupBenefit, optionDepartment,
      optionTitles, optionTypeEmployee, optionBenefitPlan, log } = this.props;
    // console.log('effective2', log.effectiveDate);
    // let value;
    // if (log.status === 'resign' || log.status === 'promote') {
    //   value = log;
    // } else {
    //   value = this.state;
    // }
    return (
      <Modals
        trigger={
          <Icon name="edit" onClick={this.handleModal} />
        }
        open={this.state.modalOpen}
        onClose={this.handleModal}
      >

        <ModalContents className="editEmployee">
          <ModalHeaders>
            <div>แก้ไขสถานะของพนักงาน</div>
          </ModalHeaders>
          <DivContent padding="6px 15px">
            <div className="row">
              <div className="large-4 columns">
                <Text>สถานะที่เปลี่ยนแปลง :</Text>
              </div>
              <div className="large-8 columns">
                <div className="large-6 columns">
                  <ButtonPopup
                    className={this.stylePopupPromotion()}
                    onClick={this.handlePromotion}
                  >
                  ปรับตำแหน่ง</ButtonPopup>
                </div>
                <div className="large-6 columns">
                  <ButtonPopup
                    className={this.stylePopupExit()}
                    onClick={this.handleExit}
                  >
                  ลาออก</ButtonPopup>
                </div>
              </div>
            </div>
          </DivContent>
          <Divider />
          <DivContent padding="0px 15px">
            {isExit
              ? <div className="row">
                <div className="large-6 columns">
                  <TextDetail>สาเหตุที่ลาออก :</TextDetail>
                  {log !== null && log.status === 'resign'
                  ? <Input
                    value={log.reason}
                    onChange={this.handleInputChange}
                    name="reason"
                  />
                  : <Input
                    value={reason}
                    onChange={this.handleInputChange}
                    name="reason"
                  />
                  }
                </div>
                <div className="large-6 columns">
                  <TextDetail>วันที่มีผล :</TextDetail>
                  <div className="input-date">
                    {log !== null && log.status === reason
                    ? <Inputs
                      selected={effective}
                      onChange={this.handleEffective}
                      minDate={moment()}
                      fixedHeight
                      dateFormat="DD/MM/YYYY"
                      locale="th"
                      showYearDropdown
                      dateFormatCalendar="MMMM"
                      scrollableYearDropdown
                      yearDropdownItemNumber={8}
                    />
                    : <Inputs
                      selected={effective}
                      onChange={this.handleEffective}
                      minDate={moment()}
                      fixedHeight
                      dateFormat="DD/MM/YYYY"
                      locale="th"
                      showYearDropdown
                      dateFormatCalendar="MMMM"
                      scrollableYearDropdown
                      yearDropdownItemNumber={8}
                    />
                    }
                  </div>
                </div>
              </div>
              : <div>
                <div className="row">
                  <div className="large-6 columns">
                    <TextDetail>ประเภทของพนักงาน :</TextDetail>
                    {log !== null && log.status === 'promote'
                    ? <Dropdowns
                      placeholder="TypeEmployee" options={optionTypeEmployee} compact selection
                      onChange={this.handleChange} name="typeEmployee" value={log.typeOfEmployee}
                    />
                    : <Dropdowns
                      placeholder="TypeEmployee" options={optionTypeEmployee} compact selection
                      onChange={this.handleChange} name="typeEmployee" value={typeEmployee}
                    />
                    }
                  </div>
                  <div className="large-6 columns">
                    <TextDetail>แผนก :</TextDetail>
                    <div className="input-date">
                      {log !== null && log.status === 'promote'
                      ? <Dropdowns
                        placeholder="department" options={optionDepartment} compact selection
                        onChange={this.handleChange} name="department" value={log.department}
                      />
                      : <Dropdowns
                        placeholder="department" options={optionDepartment} compact selection
                        onChange={this.handleChange} name="department" value={department}
                      />
                      }
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="large-6 columns">
                    <TextDetail>ตำแหน่ง :</TextDetail>
                    {log !== null && log.status === 'promote'
                    ? <Dropdowns
                      placeholder="title" options={optionTitles} compact selection
                      onChange={this.handleChange} name="title" value={log.title}
                    />
                    : <Dropdowns
                      placeholder="title" options={optionTitles} compact selection
                      onChange={this.handleChange} name="title" value={title}
                    />
                    }
                  </div>
                  <div className="large-6 columns">
                    <TextDetail>กลุ่มสิทธิประโยชน์ :</TextDetail>
                    {log !== null && log.status === 'promote'
                    ? <Dropdowns
                      placeholder="groupbenefits" options={optionGroupBenefit} compact selection
                      name="groupBenefit" onChange={this.handleChange} value={log.benefitGroup}
                    />
                    : <Dropdowns
                      placeholder="groupbenefits" options={optionGroupBenefit} compact selection
                      name="groupBenefit" onChange={this.handleChange} value={groupBenefit}
                    />
                    }
                  </div>
                </div>
                <div className="row">
                  <div className="large-6 columns">
                    <TextDetail>วันที่มีผล :</TextDetail>
                    <div className="input-date">
                      {log !== null && log.status === 'promote'
                      ? <Inputs
                        selected={effective}
                        onChange={this.handleEffective}
                        minDate={moment()}
                        fixedHeight
                        locale="th"
                        showYearDropdown
                        dateFormatCalendar="MMMM"
                        scrollableYearDropdown
                        yearDropdownItemNumber={8}
                      />
                      : <Inputs
                        selected={effective}
                        onChange={this.handleEffective}
                        minDate={moment()}
                        fixedHeight
                        locale="th"
                        showYearDropdown
                        dateFormatCalendar="MMMM"
                        scrollableYearDropdown
                        yearDropdownItemNumber={8}
                      />
                      }
                    </div>
                  </div>
                  <div className="large-6 columns">
                    <TextDetail>แผนสิทธิประโยชน์ :</TextDetail>
                    <div className="input-date">
                      {log !== null && log.status === 'promote'
                      ? <Dropdowns
                        placeholder="benefitPlan" options={optionBenefitPlan} compact selection
                        name="plan" onChange={this.handleChange} value={log.benefitPlan}
                      />
                      : <Dropdowns
                        placeholder="benefitPlan" options={optionBenefitPlan} compact selection
                        name="plan" onChange={this.handleChange} value={plan}
                      />
                      }
                    </div>
                  </div>
                </div>
              </div>
            }
            <div className="row">
              <div className="large-6 large-offset-6 columns">
                <div className="large-6 columns">
                  <Button cancle onClick={this.handleModal}>ยกเลิก</Button>
                </div>
                <div className="large-6 columns">
                  <Button onClick={this.handleSubmit}>บันทึก</Button>
                </div>
              </div>
            </div>
          </DivContent>
        </ModalContents>

      </Modals>
    );
  }
}

export default ModalEditEmployee;
