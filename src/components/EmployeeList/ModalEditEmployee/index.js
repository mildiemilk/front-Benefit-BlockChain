import React, { Component } from 'react';
import { Modal, Divider, Dropdown, Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  ModalHeader,
} from '../../ModalConfirmPassword/styled';
import { DivContent, Text, ButtonPopup, TextDetail, Input } from './styled';
import InputDate from '../../InputDate';
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

const Inputs = styled(InputDate) `
  &&&{
    height: 40px;
    padding-left: 10px;
  }
`;
const Dropdowns = styled(Dropdown)`
  &&&{
    height: 40px;
    width: 100%;
    margin-bottom: 10px;
  }
`;
const options = [
  { key: 1, text: 'Choice 1', value: 1 },
  { key: 2, text: 'Choice 2', value: 2 },
  { key: 3, text: 'Choice 3', value: 3 },
];

class ModalEditEmployee extends Component {
  static propTypes = {
    groupBenefit: PropTypes.arrayOf(PropTypes.object).isRequired,
    employeeDetail: PropTypes.arrayOf(PropTypes.object).isRequired,
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
      groupBenefit: [],
      typeEmployee: [],
      // department: [],
    };
  }
  componentDidMount() {
    this.renderGroup();
    this.renderDepartment();
  }
  componentDidUpdate() {
    if (this.state.groupBenefit.length === 0) {
      this.renderGroup();
    }
    if (this.state.department.length === 0) {
      this.renderDepartment();
    }
  }
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
  renderGroup = () => {
    const options = this.props.groupBenefit;
    const groupBenefit = [];
    options.map((option, index) => {
      groupBenefit.push({
        key: index,
        text: option.name,
        value: option.name,
      });
      return option;
    });
    this.setState({ groupBenefit });
  }
  // renderType = () => {
  //   const options = this.props.groupBenefit;
  //   const groupBenefit = [];
  //   options.map((option, index) => {
  //     groupBenefit.push({
  //       key: index,
  //       text: option.name,
  //       value: option.name,
  //     });
  //     return option;
  //   });
  //   this.setState({ groupBenefit });
  // }
  renderDepartment = () => {
    const options = this.props.employeeDetail;
    const departments = [];
    options.map((option, index) => {
      departments.push({
        key: index,
        text: option.detail.department,
        value: option.detail.department,
      });
      return option;
    });
    console.log('de', departments);
    // const department = [];
    // const it = [...new Set(departments.map((item, index) => item.text
    //   if (index <= -1) {
    //     department.push({ key: item.key, text: item.text, value: item.value });
    //   }
    // )];

    // TODO: should use let instead
    // const department = [];
    // departments.filter = item => {
    //   const i = department.findIndex(x => x.text === item.text);
    //   console.log('-->', i)
    //   if (i <= -1) {
    //     department.push(item);
    //   }
    // };

    // const uniqueItems = Array.from(new Set(departments.text));
    // console.log('it', uniqueItems);
    this.setState({ department: departments });
    // console.log()
    // this.setState({ department });
  }
  render() {
    const { isExit, groupBenefit } = this.state;
    return (
      <Modals
        trigger={
          <Icon name="edit" onClick={this.handleModal} />
        }
        open={this.state.modalOpen}
        onClose={this.handleModal}
      >

        <ModalContents>
          <ModalHeader>
            {' '}
            <div>แก้ไขสถานะของพนักงาน</div>
            {' '}
          </ModalHeader>
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
                    <Inputs />
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
                      <Dropdowns placeholder="Choose" options={options} compact selection />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="large-6 columns">
                    <TextDetail>ตำแหน่ง :</TextDetail>
                    <Dropdowns placeholder="Choose" options={options} compact selection />
                  </div>
                  <div className="large-6 columns">
                    <TextDetail>วันที่มีผล :</TextDetail>
                    <div className="input-date">
                      <Inputs />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="large-6 columns">
                    <TextDetail>กลุ่มสิทธิประโยชน์ :</TextDetail>
                    <Dropdowns placeholder="Choose" options={groupBenefit} compact selection />
                  </div>
                  <div className="large-6 columns">
                    <TextDetail>ตั้งเวลาในการเลือกแผนสิทธิประโยชน์ :</TextDetail>
                    <div className="input-date">
                      <Inputs />
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
