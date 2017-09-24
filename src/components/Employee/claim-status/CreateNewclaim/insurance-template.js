import React, { Component } from 'react';
// import moment from 'moment';
import { Dropdown, Form } from 'semantic-ui-react';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import {
  TinyText,
  NewLine,
} from './styled';
import '../../../../styles/employee-style/claim-insurance.scss';

const currencyOption = [
  { key: '1', text: 'บาท', value: 'bath' },
  { key: '2', text: 'USD', value: 'usd' },
];

const BankOption = [
  {
    key: 'KBank',
    text: 'กสิกรไทย',
    value: 'KBank',
  },
  {
    key: 'SCB',
    text: 'ไทยพานิชย์',
    value: 'SCB',
  },
  {
    key: 'KTB',
    text: 'กรุงไทย',
    value: 'KTB',
  },
  {
    key: 'TMB',
    text: 'ทหารไทย',
    value: 'TMB',
  },
];
class InsuranceTemplate extends Component {
  static propTypes = {
    EmNameoption: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    handleChange: PropTypes.func.isRequired,
    handleChangeDate: PropTypes.func.isRequired,
    claimdata: PropTypes.shape({}).isRequired,
    life: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    health: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    general: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      claimdata,
      life,
      handleChange,
      handleChangeDate,
      EmNameoption,
      general,
      health,
    } = this.props;
    let location;
    let typeOption;
    let type;
    let nameLocation;
    let nameType;
    if (claimdata.mainState === 'insurance') {
      location = claimdata.Hospital;
      typeOption = life;
      type = claimdata.InsuranceType;
      nameType = 'InsuranceType';
      nameLocation = 'Hospital';
    } else if (claimdata.mainState === 'general') {
      location = claimdata.HealthPlace;
      typeOption = general;
      type = claimdata.expenseType;
      nameType = 'expenseType';
      nameLocation = 'HealthPlace';
    } else {
      location = claimdata.HealthPlace;
      typeOption = health;
      type = claimdata.HealthType;
      nameType = 'HealthType';
      nameLocation = 'HealthPlace';
    }
    return (
      <div className="InsuranceTemplate">
        <Dropdown
          placeholder="เลือกชนิดของประกัน"
          fluid
          selection
          defaultValue={type}
          name={nameType}
          options={typeOption}
          onChange={handleChange}
        />
        <NewLine />
        <TinyText>วันที่ในใบเสร็จ</TinyText>
        <div className="Datebox">
          <DatePicker
            placeholderText="DD/MM/YY"
            selected={claimdata.date}
            onChange={handleChangeDate}
          />
        </div>
        <NewLine />
        <TinyText>โรงพยาบาล</TinyText>
        <Form>
          <Form.Field>
            <Form.Input
              placeholder="กรอกชื่อโรงพยาบาล"
              name={nameLocation}
              defaultValue={location}
              type="text"
              onChange={handleChange}
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
          defaultValue={claimdata.ChooseEmployeeName}
          options={EmNameoption}
          onChange={handleChange}
        />
        <NewLine />
        <TinyText>จำนวนเงิน</TinyText>
        <Form className="row">
          <Form.Field className="small-7 columns">
            <Form.Input
              placeholder="กรอกจำนวนเงิน"
              name="AmountMoney"
              type="number"
              defaultValue={claimdata.AmountMoney}
              onChange={handleChange}
              required
            />
          </Form.Field>
          <div className="small-5 columns" style={{ marginTop: '0px' }}>
            <Dropdown
              className="currency"
              placeholder="สกุล"
              fluid
              selection
              defaultValue={claimdata.currency}
              name="currency"
              options={currencyOption}
              onChange={handleChange}
            />
          </div>
        </Form>
        {
          type === 'insurance'
          ? <div>
            <TinyText>ธนาคาร</TinyText>
            <Dropdown
              className="moneyDropDown"
              placeholder="เลือกธนาคาร"
              fluid
              selection
              name="BankName"
              defaultValue={claimdata.BankName}
              options={BankOption}
              onChange={handleChange}
            />
            <NewLine />
            <TinyText>เลขที่บัญชีที่จะรับเงิน</TinyText>
            <Form>
              <Form.Field>
                <Form.Input
                  placeholder="กรอกเลขที่บัญชี"
                  name="AccountNumber"
                  type="number"
                  defaultValue={claimdata.AccountNumber}
                  onChange={handleChange}
                  required
                />
              </Form.Field>
            </Form>
          </div>
          : <div />
        }
        <NewLine />
      </div>
    );
  }
}

export default InsuranceTemplate;
