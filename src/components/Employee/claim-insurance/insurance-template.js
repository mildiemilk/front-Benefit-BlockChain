import React, { Component } from 'react'
import { Dropdown, Form } from 'semantic-ui-react'
import DatePicker from 'react-datepicker'
import PropTypes from 'prop-types'
import {
  TinyText,
  BrowsButton,
  NewLine,
  SubmitButton,
  UploadText,
} from './styled'
import '../../../styles/employee-style/claim-insurance.scss'

const InsuranceTypeOption = [
  {
    key: '1',
    text: 'IPD',
    value: 'IPD',
  },
  {
    key: '2',
    text: 'OPD',
    value: 'OPD',
  },
  {
    key: '3',
    text: 'Dental',
    value: 'Dental',
  },
]

const currencyOption = [
  {
    key: '1',
    text: 'บาท',
    value: 'bath',
  },
  {
    key: '2',
    text: 'usd',
    value: 'usd',
  },
  {
    key: '3',
    text: 'กีบลาว',
    value: 'Lak',
  },
]

const BankOption = [
  {
    key: '1',
    text: 'กสิกรไทย',
    value: 'KBank',
  },
  {
    key: '2',
    text: 'ไทยพานิชย์',
    value: 'SCB',
  },
  {
    key: '3',
    text: 'กรุงไทย',
    value: 'KTB',
  },
  {
    key: '4',
    text: 'ทหารไทย',
    value: 'TMB',
  },
]
class InsuranceTemplate extends Component {
  static propTypes = {
    handleChange: PropTypes.func.isRequired,
    EmNameoption: PropTypes.shape.isRequired,
    date: PropTypes.shape.isRequired,
    handleUploadcliamFile: PropTypes.func.isRequired,
    ClaimFile: PropTypes.shape.isRequired,
    handleChangeDate: PropTypes.func.isRequired,
  }

  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div className="InsuranceTemplate">
        <Dropdown
          placeholder="เลือกชนิดของประกัน"
          fluid
          selection
          name="InsuranceType"
          options={InsuranceTypeOption}
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
        <TinyText>โรงพยาบาล</TinyText>
        <Form>
          <Form.Field>
            <Form.Input
              placeholder="กรอกชื่อโรงพยาบาล"
              name="Hospital"
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

        <TinyText>ธนาคาร</TinyText>
        <Dropdown
          className="moneyDropDown"
          placeholder="เลือกธนาคาร"
          fluid
          selection
          name="BankName"
          options={BankOption}
          onChange={this.props.handleChange}
        />
        <NewLine />
        <TinyText>เลขที่บัญชีที่จะรับเงิน</TinyText>
        <Form>
          <Form.Field>
            <Form.Input
              placeholder="กรอกเลขที่บัญชี"
              name="AccountNumber"
              type="number"
              onChange={this.props.handleChange}
              required
            />
          </Form.Field>
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
          {this.props.ClaimFile.name}
        </UploadText>
        <NewLine style={{ height: '3px' }} />
        <SubmitButton>
          เคลม
        </SubmitButton>
        <NewLine />

      </div>
    )
  }
}

export default InsuranceTemplate
