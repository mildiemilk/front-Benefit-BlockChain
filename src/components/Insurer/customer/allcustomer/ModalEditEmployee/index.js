import React, { Component } from 'react';
import { Modal, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  ModalHeader,
} from '../../../../ModalConfirmPassword/styled';
import { DivContent, Input } from './styled';
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
    // groupBenefit: PropTypes.arrayOf(PropTypes.object).isRequired,
    // employeeDetail: PropTypes.arrayOf(PropTypes.object).isRequired,
    optionGroupBenefit: PropTypes.arrayOf(PropTypes.object).isRequired,
    optionTitles: PropTypes.arrayOf(PropTypes.object).isRequired,
    optionDepartment: PropTypes.arrayOf(PropTypes.object).isRequired,
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
    };
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
    // const { isExit } = this.state;
    // const { optionGroupBenefit, optionDepartment, optionTitles } = this.props;
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
            <div>แก้ไขเลขสมาชิก</div>
          </ModalHeaders>
          <DivContent padding="6px 15px">
            <div className="row">
              <div className="large-6 columns">
                <Input value="" placeholder="กรุณากรอกเลขสมาชิก" />
              </div>
              <div className="large-6 columns">
                <Input value="" placeholder="กรุณากรอกเลขกรมธรรม์" />
              </div>
            </div>
          </DivContent>
          <DivContent padding="0px 15px">
            <div className="row">
              <div className="large-12 columns">
                <div className="large-6 columns">
                  <Button cancle onClick={this.handleModal}>ยกเลิก</Button>
                </div>
                <div className="large-6 columns">
                  <Button>บันทึก</Button>
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
