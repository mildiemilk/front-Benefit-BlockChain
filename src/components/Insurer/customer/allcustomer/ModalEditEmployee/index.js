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
    top: 40%;
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
const options = [
  { key: 1, text: 'full-time', value: 'full-time' },
  { key: 2, text: 'part-time', value: 'part-time' },
  { key: 3, text: 'out-source', value: 'out-source' },
];

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
    const { isExit } = this.state;
    const { optionGroupBenefit, optionDepartment, optionTitles } = this.props;
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
                  <Input />
                </div>
                <div className="large-6 columns">
                  <TextDetail>วันที่มีผล :</TextDetail>
                  <div className="input-date">
                    <Inputs
                      selected={this.state.effective}
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
                  </div>
                </div>
              </div>
              : <div>
                <div className="row">
                  <div className="large-6 columns">
                    <TextDetail>ประเภทของพนักงาน :</TextDetail>
                    <Dropdowns placeholder="Choose" options={options} compact selection />
                  </div>
                  <div className="large-6 columns">
                    <TextDetail>แผนก :</TextDetail>
                    <div className="input-date">
                      <Dropdowns placeholder="department" options={optionDepartment} compact selection />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="large-6 columns">
                    <TextDetail>ตำแหน่ง :</TextDetail>
                    <Dropdowns placeholder="title" options={optionTitles} compact selection />
                  </div>
                  <div className="large-6 columns">
                    <TextDetail>กลุ่มสิทธิประโยชน์ :</TextDetail>
                    <Dropdowns placeholder="groupbenefits" options={optionGroupBenefit} compact selection />
                  </div>
                </div>
                <div className="row">
                  <div className="large-6 columns">
                    <TextDetail>วันที่มีผล :</TextDetail>
                    <div className="input-date">
                      <Inputs
                        selected={this.state.effective}
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
                    </div>
                  </div>
                  <div className="large-6 columns">
                    <TextDetail>ตั้งเวลาในการเลือกแผนสิทธิประโยชน์ :</TextDetail>
                    <div className="input-date">
                      <Inputs
                        selected={this.state.effective}
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
