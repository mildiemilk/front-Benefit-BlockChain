import React, { Component } from 'react';
import { Modal, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  ModalHeader,
} from '../../../../ModalConfirmPassword/styled';
import { DivContent, TextCenter } from './styled';
// import InputDate from '../../InputDate';
import { Button } from '../../../../StyleComponent';

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
    top: 40%;
  }
`;

const ModalHeaders = styled(ModalHeader)`
  &&&{
    margin-top: 24px;
  }
`;

class ModalEditEmployee extends Component {
  static propTypes = {
    handleSubmitPolicy: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    employeeId: PropTypes.string.isRequired,
    memberNumber: PropTypes.string.isRequired,
    policyNumber: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    modalOpen: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    value: '',
  }

  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      isPromotion: true,
      isExit: false,
      effective: '',
      policyNumber: this.props.policyNumber,
      memberNumber: this.props.memberNumber,
    };
  }
  handleDataChange = e => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    // const id = e.target.id;
    // const employees = this.state.customerEmployee.employees;
    // const summary = this.state.summary;
    // const addEmployee = oldEmp.employees[id].detail[name];
    if (value !== '') {
      this.setState({ [name]: value });
    }
    this.props.handleChange(e, { name, value });
  }
  // componentDidMount() {
  //   this.renderGroup();
  //   this.renderDepartment();
  //   this.renderTitle();
  // }
  // componentDidUpdate() {
  //   if (this.state.groupBenefit.length === 0) {
  //     this.renderGroup();
  //   }
  //   if (this.state.department.length === 0) {
  //     this.renderDepartment();
  //   }
  // }
  handleModal = () =>
    this.setState({
      modalOpen: !this.state.modalOpen,
    })
  handleModalSave = () =>
    this.setState({
      modalOpen: this.props.modalOpen,
    })
  handlePromotion = () => {
    if (!this.state.isPromotion) {
      this.setState({
        isExit: !this.state.isExit,
        isPromotion: !this.state.isPromotion,
      });
    }
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
    const { memberNumber, policyNumber } = this.state;
    // const { optionGroupBenefit, optionDepartment, optionTitles } = this.props;
    return (
      <Modals
        trigger={
          <Icon name="edit" onClick={this.handleModal} />
        }
        open={this.state.modalOpen}
      >

        <ModalContents className="editEmployee">
          <ModalHeaders>
            <div>แก้ไขเลขสมาชิก</div>
          </ModalHeaders>
          <DivContent padding="6px 0px">
            <div className="row">
              <div className="large-6 columns">
                <TextCenter>กรุณากรอกเลขสมาชิก</TextCenter>
              </div>
              <div className="large-6 columns">
                <TextCenter>กรุณากรอกเลขกรมธรรม์</TextCenter>
              </div>
            </div>
            <form name={this.props.index} id="policyNumber" onSubmit={e => this.props.handleSubmitPolicy(e, this.props.employeeId)}><div className="quotation-input-div">
              <div className="row">
                <div className="large-6 columns">
                  <input className="input-data" value={memberNumber} name="memberNumber" id={this.props.index} onChange={e => this.handleDataChange(e)} placeholder="กรุณากรอกเลขสมาชิก" />
                </div>
                <div className="large-6 columns">
                  <input className="input-data" value={policyNumber} name="policyNumber" id={this.props.index} onChange={e => this.handleDataChange(e)} placeholder="กรุณากรอกเลขกรมธรรม์" />
                </div>
              </div>
            </div>
            </form>
          </DivContent>
          <div className="row">
            <div className="large-12 columns">
              <div className="large-6 columns">
                <Button cancle onClick={this.handleModal}>ยกเลิก</Button>
              </div>
              <div className="large-6 columns">
                <Button type="submit" form="policyNumber">บันทึก</Button>
              </div>
            </div>
          </div>
        </ModalContents>
      </Modals>
    );
  }
}

export default ModalEditEmployee;
