import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import { Dropdown, Form } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import {
  TinyText,
  BrowsButton,
  NewLine,
  UploadText,
} from './styled';
import '../../../styles/employee-style/claim-insurance.scss';

class GeneralExpenseTemplate extends Component {
  static propTypes = {
    handleChange: PropTypes.func.isRequired,
    EmNameoption: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    date: PropTypes.shape({}).isRequired,
    handleUploadcliamFile: PropTypes.func.isRequired,
    ClaimFile: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    handleChangeDate: PropTypes.func.isRequired,
    // data: PropTypes.shape({}).isRequired,
    general: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    currencyOption: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleShowFileName = () => {
    const { ClaimFile } = this.props;
    const showFile = ClaimFile.map((ele, index) => (
      <span {...this.props} keys={index + 1}>
        {ele.name}
      </span>
    ));
    // console.log('showfilename: ', showFile);
    return showFile;
  }

  render() {
    const {
      ClaimFile,
      general,
      currencyOption,
    } = this.props;
    return (
      <div className="InsuranceTemplate">
        <Dropdown
          placeholder="เลือกชนิดของค่าใช้จ่าย"
          fluid
          selection
          name="expenseType"
          options={general}
          onChange={this.props.handleChange}
        />
        <NewLine />
        <TinyText>วันที่ในใบเสร็จ</TinyText>
        <div className="Datebox">
          <DatePicker
            placeholderText="DD/MM/YY"
            selected={this.props.date}
            onChange={this.props.handleChangeDate}
          />
        </div>
        <NewLine />
        <TinyText>สถานที่</TinyText>
        <Form>
          <Form.Field>
            <Form.Input
              placeholder="กรอกชื่อสถานที่"
              name="HealthPlace"
              type="text"
              onChange={this.props.handleChange}
              required
            />
          </Form.Field>
        </Form>
        <NewLine />
        <TinyText>ผู้เคลม</TinyText>
        <Dropdown
          placeholder="เลือกผู้เคลม"
          fluid
          selection
          name="ChooseEmployeeName"
          options={this.props.EmNameoption}
          onChange={this.props.handleChange}
        />
        <NewLine />
        <TinyText>จำนวนเงิน</TinyText>
        <Form className="row">
          <Form.Field className="small-7 columns">
            <Form.Input
              placeholder="กรอกจำนวนเงิน"
              name="AmountMoney"
              type="number"
              onChange={this.props.handleChange}
              required
            />
          </Form.Field>
          <div className="small-5 columns" style={{ marginTop: '0px' }}>
            <Dropdown
              className="currency"
              placeholder="สกุล"
              fluid
              selection
              name="currency"
              options={currencyOption}
              onChange={this.props.handleChange}
            />
          </div>
        </Form>
        <NewLine />
        <TinyText>แนบภาพใบเสร็จ (เฉพาะไฟล์ประเภท .pdf .jpg .png)</TinyText>
        <BrowsButton>
          <input
            style={{ display: 'none' }}
            type="file"
            accept=".pdf, .jpg, .png"
            onChange={this.props.handleUploadcliamFile}
          />
          อัพโหลดรูปใบเสร็จ
        </BrowsButton>
        <NewLine style={{ height: '3px' }} />
        <UploadText>
          {
            ClaimFile.map((ele, index) => (
              <span className="claim-show-file-name" keys={index + 1}>
                {ele.name}
              </span>
            ))
          }
        </UploadText>
        <NewLine style={{ height: '3px' }} />
      </div>
    );
  }
}

export default GeneralExpenseTemplate;
