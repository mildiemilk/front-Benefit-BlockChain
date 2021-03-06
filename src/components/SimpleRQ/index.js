import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Card, Input, Select, Form, Checkbox } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { fillSimpleRQ } from '../../api/simple-requirement';
import { UploadButton, BottomSpace, Inputs } from './styled';
import ModalSimpleRQ from './modal-simple-requirement';
import NavInsure from '../NavInsure';

const CardHeader = styled(Card)`
    &&&{
      margin: 0 0 0 0;
      padding-top: 0.2%;
      font-size: 20px;
      box-shadow: 0 0 0 0;
    }
`;

const DatePickers = styled(DatePicker)`
  border-radius: 3px;
  background-color: #ffffff;
  border: solid 1px #dddddd;
  height: 30px;
`;
const employeeOption = [
  { key: '1', text: '1-500', value: '1-500' },
  { key: '2', text: '500-1000', value: '500-1000' },
];
class simpleRQ extends Component {
  constructor() {
    super();
    this.state = {
      step: 1,
      numberOfEmployee: '',
      typeOfInsurance: '',
      IPD: false,
      OPD: false,
      dental: false,
      life: false,
      other: false,
      otherDes: '',
      file: '',
      filePreviewUrl: '',
      date: null,
    };
  }
  _handleImageChange(e) {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file,
        filePreviewUrl: reader.result,
      });
    };

    reader.readAsDataURL(file);
  }
  handleDate = date => {
    this.setState({ date });
  }
  handlePost = e => {
    e.preventDefault();
    const {
      numberOfEmployee,
      typeOfInsurance,
      OPD,
      IPD,
      dental,
      life,
      other,
      otherDes,
      date,
    } = this.state;
    this.props.fillSimpleRQ(
      numberOfEmployee,
      typeOfInsurance,
      IPD,
      OPD,
      dental,
      life,
      other,
      otherDes,
      date,
    );
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  handleCheck = (e, { name, checked }) => this.setState({ [name]: checked })

  render() {
    const { filePreviewUrl } = this.state;
    let $filePreview = null;
    if (filePreviewUrl) {
      $filePreview = <span>{this.state.file.name}&nbsp;</span>;
    }

    return (
      <div className="simpleRQ">
        <NavInsure step={this.state.step} />
        <div className="row">
          <Card fluid id="cardSimpleRQ">
            <CardHeader>
              <p id="headCardRQ"> แผนประกันที่ต้องการ </p>
            </CardHeader>

            <BottomSpace className="row">
              <div className="large-3 columns">
                <p> จำนวนพนักงาน </p>
              </div>
              <div className="large-9 columns">
                <Select
                  fluid
                  name="numberOfEmployee"
                  defaultValue={this.state.numberOfEmployee}
                  placeholder="จำนวนพนักงาน"
                  options={employeeOption}
                  onChange={this.handleChange}
                />
              </div>
            </BottomSpace>

            <BottomSpace className="row">
              <div className="large-3 columns">
                <p> รูปแบบประกันที่ต้องการ </p>
              </div>
              <div className="large-9 columns">
                <Input
                  fluid
                  name="typeOfInsurance"
                  defaultValue={this.state.typeOfInsurance}
                  placeholder="รูปแบบประกันที่ต้องการ"
                  onChange={this.handleChange}
                />
              </div>
            </BottomSpace>

            <BottomSpace className="row">
              <div className="large-3 columns">
                <p> อัพโหลดแผนประกันที่ใช้ในปัจจุบัน </p>
              </div>
              <div className="large-9 columns">
                <div>
                  {$filePreview}
                  <UploadButton for="uploadFile">
                    <Inputs
                      id="uploadFile"
                      type="file"
                      onChange={e => this._handleImageChange(e)}
                    />
                    อัพโหลดไฟล์
                  </UploadButton>
                </div>
              </div>
            </BottomSpace>

            <BottomSpace className="row">
              <div className="large-3 columns">
                <p> วันหมดอายุของกรมธรรม์ </p>
              </div>
              <div className="large-9 columns">
                <DatePickers
                  selected={this.state.date}
                  onChange={this.handleDate}
                  minDate={moment()}
                />
              </div>
            </BottomSpace>

            <BottomSpace className="row">
              <div className="large-3 columns">
                <p> สิทธิประโยชน์ที่ต้องการ </p>
              </div>
              <div className="large-9 columns">
                <Form>
                  <Form.Group inline>
                    <Form.Field
                      width={8}
                      control={Checkbox}
                      defaultChecked={this.state.IPD}
                      label="ค่ารักษาพยาบาลกรณีผู้ป่วยใน (IPD)"
                      name="IPD"
                      onChange={this.handleCheck}
                    />
                    <Form.Field
                      control={Checkbox}
                      defaultChecked={this.state.OPD}
                      label="ค่ารักษาพยาบาลกรณีผู้ป่วยนอก (OPD)"
                      name="OPD"
                      onChange={this.handleCheck}
                    />
                  </Form.Group>
                  <Form.Group inline>
                    <Form.Field
                      width={8}
                      control={Checkbox}
                      defaultChecked={this.state.dental}
                      label="ค่ารักษาทันตกรรม (Dental)"
                      name="dental"
                      onChange={this.handleCheck}
                    />
                    <Form.Field
                      control={Checkbox}
                      defaultChecked={this.state.life}
                      label="ประกันชีวิต (Life)"
                      name="life"
                      onChange={this.handleCheck}
                    />
                  </Form.Group>
                  <Form.Group inline>
                    <Form.Field
                      width={2}
                      control={Checkbox}
                      defaultChecked={this.state.other}
                      label="อื่นๆ"
                      name="other"
                      onChange={this.handleCheck}
                    />
                    <Form.Field
                      width={14}
                      name="otherDes"
                      control={Input}
                      placeholder="โปรดระบุ"
                      defaultValue={this.state.otherDes}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                </Form>
              </div>
            </BottomSpace>
          </Card>
          <ModalSimpleRQ data={this.state} handlePost={this.handlePost} />
        </div>
      </div>
    );
  }
}

simpleRQ.propTypes = {
  fillSimpleRQ: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  fillSimpleRQ: (
    numberOfEmployee,
    typeOfInsurance,
    IPD,
    OPD,
    dental,
    life,
    other,
    otherDes,
    date,
  ) =>
    dispatch(
      fillSimpleRQ(
        numberOfEmployee,
        typeOfInsurance,
        IPD,
        OPD,
        dental,
        life,
        other,
        otherDes,
        date,
      ),
    ),
});

export default connect(null, mapDispatchToProps)(simpleRQ);
