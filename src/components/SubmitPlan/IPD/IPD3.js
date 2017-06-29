import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {
  Button,
  Checkbox,
  Form,
  Grid,
  Image,
  Input,
  Radio,
  Segment,
  Dropdown,
} from 'semantic-ui-react'
import CoPlay from './CoPlay'

class IPD3 extends Component {
  constructor() {
    super()
    this.state = {}
  }

  static propTypes = {}

  onInputChange(e) {
    this.setState({ nameInput: e.target.value })
  }

  signUpHandler() {
    window.location.href = '/signup'
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  render() {
    return (
      <div>
        <p>1. ค่าห้อง ค่าอาหาร และค่าบริการ</p>
        <div className="paragraph">
          <Form.Group inline>
            <Form.Input
              label="1.1 ค่าห้อง ค่าอาหาร และค่าบริการพยาบาลห้องผู้ป่วยธรรมดา (สูงสุดต่อวัน)"
              placeholder="จำนวนเงิน"
              name=""
              onChange={this.handleChange}
            />
            <p> บาท</p>
          </Form.Group>
          <Form.Group inline>
            <Form.Input
              label="1.2 ค่าห้อง ค่าอาหาร และค่าบริการพยาบาลห้องผู้ป่วยหนัก (สูงสุดต่อวัน)"
              placeholder="จำนวนเงิน"
              name=""
              onChange={this.handleChange}
            />
            <p className="selectText"> บาท</p>
          </Form.Group>
        </div>
        <Form.Group inline>
          <Form.Input
            label="2. ค่าแพทย์เยี่ยมไข้ สูงสุดไม่เกินวันละ 1 ครั้ง/วัน"
            placeholder="จำนวนเงิน"
            name=""
            onChange={this.handleChange}
          />
          <p className="selectText"> บาท</p>
        </Form.Group>
        <Form.Group inline>
          <Form.Input
            label="3. การรักษาพยาบาลโดยการผ่าตัด ค่าแพทย์ผ่าตัดและหัตถการ"
            placeholder="จำนวนเงิน"
            name=""
            onChange={this.handleChange}
          />
          <p className="selectText"> บาท</p>
        </Form.Group>
        <p className="selectText">4. ค่ารักษาพยาบาลและค่าบริการทั่วไป </p>
        <div className="paragraph">
          <p>
            4.1  ค่ายาและสารอาหารทางเส้นเลือด ค่าบริการโลหิตและส่วนประกอบของโลหิตค่าตรวจทางห้อง
          </p>
          <p className="paragraph1">
            ปฏิบัติการอุปกรณ์ทางการแพทย์ ค่าห้องผ่าตัดและอุปกรณ์ ค่ายากลับบ้าน ค่ากายภาพบำบัด
          </p>
          <Form.Group inline style={{ marginLeft: '3%' }}>
            <Form.Input
              label="กิจกรรมบำบัด ค่าแพทย์วิสัญญี/พยาบาลวิสัญญี คุ้มครองสูงสุด"
              placeholder="จำนวนเงิน"
              name=""
              onChange={this.handleChange}
            />
            <p className="selectText"> บาท/ครั้ง</p>
          </Form.Group>
          <Form.Group inline>
            <Form.Input
              label="4.2 ค่าใช้จ่ายสำหรับหัตถการหรือการผ่าตัดเล็ก"
              placeholder="จำนวนเงิน"
              name=""
              onChange={this.handleChange}
            />
            <p className="selectText"> บาท/ครั้ง</p>
          </Form.Group>
          <Form.Group inline>
            <Form.Input
              label="4.3 ค่าแพทย์ที่ปรึกษาทางการผ่าตัด กรณีไม่มีการผ่าตัด"
              placeholder="จำนวนเงิน"
              name=""
              onChange={this.handleChange}
            />
            <p className="selectText"> บาท/ครั้ง</p>
          </Form.Group>
          <Form.Group inline>
            <Form.Input
              label="4.4 ค่าบริการรถพยาบาล"
              placeholder="จำนวนเงิน"
              name=""
              onChange={this.handleChange}
            />
            <p className="selectText"> บาท/ครั้ง</p>
          </Form.Group>
          <Form.Group inline>
            <Form.Input
              label="4.5 ค่ารักษาพยาบาลอุบัติเหตุฉุกเฉิน ภายใน 24 ช.ม.หลังเกิดอุบัติเหตุ"
              placeholder="จำนวนเงิน"
              name=""
              onChange={this.handleChange}
            />
            <p className="selectText"> บาท/ครั้ง</p>
          </Form.Group>
          <p>
            4.6 ค่าใช้จ่ายที่เกิดจากการรักษาพยาบาลต่อเนื่องภายหลังจากการออกจากโรงพยาบาลรวมถึงค่า
          </p>
          <p className="paragraph1">
            {' '}
            รักษาพยาบาลแบบผู้ป่วยนอก และค่ากายภาพบำบัดที่ต่อเนื่องจากผู้ป่วยใน (สูงสุดไม่เกิน 30 วัน)
          </p>
          <Form.Group inline style={{ marginLeft: '3%' }}>
            <Form.Input
              label=" คุ้มครองสูงสุด"
              placeholder="จำนวนเงิน"
              name=""
              onChange={this.handleChange}
            />
            <p className="selectText"> บาท/ครั้ง</p>
          </Form.Group>
        </div>
        <p>
          5. ค่ารักษากรณี ปลูกถ่ายไขกระดูก, เปลี่ยนถ่ายอวัยวะ, การฟอกไต (ไม่รวมค่าใช้จ่ายของผู้บริจาคอวัยวะ)
        </p>
        <Form.Group inline style={{ marginLeft: '3%' }}>
          <Form.Input
            label="(ปีละไม่เกิน)**"
            placeholder="จำนวนเงิน"
            name=""
            onChange={this.handleChange}
          />
          <p className="selectText"> บาท/ครั้ง</p>
        </Form.Group>
      </div>
    )
  }
}

IPD3.propTypes = {}

const mapDispatchToProps = dispatch => ({})
const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(IPD3)
