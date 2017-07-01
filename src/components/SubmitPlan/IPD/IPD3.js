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
    this.state = {
      permit: false,
    }
  }

  static propTypes = {}

  onInputChange(e) {
    this.setState({ nameInput: e.target.value })
  }

  handleToggle = () => {
    if (this.state.permit) {
      document.getElementById('fillChoice3').value = ''
      this.setState({ permit: false })
    } else {
      this.setState({ permit: true })
    }
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  render() {
    return (
      <div>
        <div className="row">
          <div className="large-9 columns">
            <p>ระบุรูปแบบที่ต้องการ</p>
            <p>1. ค่าห้อง ค่าอาหาร และค่าบริการ</p>
            <div className="paragraph">
              <p>
                1.1 ค่าห้อง ค่าอาหาร และค่าบริการพยาบาลห้องผู้ป่วยธรรมดา (สูงสุดต่อวัน)
              </p>
              <p>
                1.2 ค่าห้อง ค่าอาหาร และค่าบริการพยาบาลห้องผู้ป่วยหนัก (สูงสุดต่อวัน)
              </p>
            </div>
            <br />
            <p>2. ค่าแพทย์เยี่ยมไข้ สูงสุดไม่เกินวันละ 1 ครั้ง/วัน</p>
            <span>3. การรักษาพยาบาลโดยการผ่าตัด ค่าแพทย์ผ่าตัดและหัตถการ</span>
            {' '}
            <Checkbox toggle onClick={this.handleToggle} />
            <br />
            <br />
            <p>4. ค่ารักษาพยาบาลและค่าบริการทั่วไป </p>
            <div className="paragraph">
              <p>
                4.1 ค่ายาและสารอาหารทางเส้นเลือด ค่าบริการโลหิตและส่วนประกอบ
              </p>
              <div className="paragraph1">
                <p>
                  ของโลหิตค่าตรวจทางห้องปฎิบัติการอุปกรณ์ทางการแพทย์ ค่าห้อง
                </p>
                <p>
                  ผ่าตัดและอุปกรณ์ ค่ายากลับบ้าน ค่ากายภาพบำบัด/กิจกรรมบำบัด
                </p>
                <p>ค่าแพทย์วิสัญญี/พยาบาลวัสัญญี คุ้มครองสูงสุดต่อครั้ง </p>
              </div>
              <br />
              <p>4.2 ค่าใช้จ่ายสำหรับหัตถการหรือการผ่าตัดเล็กต่อครั้ง</p>
              <p>
                4.3 ค่าแพทย์ที่ปรึกษาทางการผ่าตัด กรณีไม่มีการผ่าตัดต่อครั้ง
              </p>
              <p>4.4 ค่าบริการรถพยาบาลต่อครั้ง</p>
              <p>
                4.5 ค่ารักษาพยาบาลอุบัติเหตุฉุกเฉิน ภายใน 24 ช.ม.หลังเกิดอุบัติเหตุต่อครั้ง
              </p>
              <p>
                4.6 ค่าใช้จ่ายที่เกิดจากการรักษาพยาบาลต่อเนื่องภายหลังจากการออก
              </p>
              <div className="paragraph1">
                <p>จากโรงพยาบาลต่อเนื่องภายหลังจากการออก</p>
                <p>
                  กายภาพบำบัดที่ต่อเนื่องจากผู้ป่วย(สูงสุดไม่เกิน 30 วัน)คุ้มครอง
                </p>
                <p>สูงสุดต่อครั้ง</p>
              </div>
              <br />
              <p>
                5. ค่ารักษากรณี ปลูกถ่ายไขกระดูก,เปลี่ยนถ่ายอวัยวะ, การฟอกไต(ไม่รวมค่า
              </p>
              <div className="paragraph1">
                <p>ใช้จ่ายของผู้บริจาคอวัยวะ) (ปีล่ะไม่เกิน)</p>
              </div>
            </div>
          </div>
          <div className="large-3 columns">
            <Form>
              <Form.Group
                inline
                style={{ marginTop: '35%', marginBottom: '5%' }}
              >
                <Form.Input
                  style={{ height: '30px', width: '100px' }}
                  placeholder="จำนวนเงิน"
                  name=""
                  onChange={this.handleChange}
                />
                <p> บาท</p>
              </Form.Group>
              <Form.Group inline style={{ marginBottom: '5%' }}>
                <Form.Input
                  style={{ height: '30px', width: '100px' }}
                  placeholder="จำนวนเงิน"
                  name=""
                  onChange={this.handleChange}
                />
                <p> บาท</p>
              </Form.Group>
              <Form.Group inline style={{ marginBottom: '5%' }}>
                <Form.Input
                  style={{ height: '30px', width: '100px' }}
                  placeholder="จำนวนเงิน"
                  name=""
                  onChange={this.handleChange}
                />
                <p> บาท</p>
              </Form.Group>
              <Form.Group inline style={{ marginBottom: '5%' }}>
                {this.state.permit
                  ? <Form.Input
                      style={{ height: '30px', width: '100px' }}
                      placeholder="จำนวนเงิน"
                      name=""
                      onChange={this.handleChange}
                      id="fillChoice3"
                    />
                  : <Form.Input
                      style={{ height: '30px', width: '100px' }}
                      placeholder="จำนวนเงิน"
                      name=""
                      onChange={this.handleChange}
                      readOnly
                      id="fillChoice3"
                    />}
                <p> บาท</p>
              </Form.Group>
              <Form.Group inline style={{ marginTop: '25%' }}>
                <Form.Input
                  style={{ height: '30px', width: '100px' }}
                  placeholder="จำนวนเงิน"
                  name=""
                  onChange={this.handleChange}
                />
                <p> บาท</p>
              </Form.Group>
              <Form.Group
                inline
                style={{ marginTop: '59%', marginBottom: '5%' }}
              >
                <Form.Input
                  style={{ height: '30px', width: '100px' }}
                  placeholder="จำนวนเงิน"
                  name=""
                  onChange={this.handleChange}
                />
                <p> บาท</p>
              </Form.Group>
              <Form.Group inline style={{ marginBottom: '5%' }}>
                <Form.Input
                  style={{ height: '30px', width: '100px' }}
                  placeholder="จำนวนเงิน"
                  name=""
                  onChange={this.handleChange}
                />
                <p> บาท</p>
              </Form.Group>
              <Form.Group inline style={{ marginBottom: '5%' }}>
                <Form.Input
                  style={{ height: '30px', width: '100px' }}
                  placeholder="จำนวนเงิน"
                  name=""
                  onChange={this.handleChange}
                />
                <p> บาท</p>
              </Form.Group>
              <Form.Group inline style={{ marginBottom: '5%' }}>
                <Form.Input
                  style={{ height: '30px', width: '100px' }}
                  placeholder="จำนวนเงิน"
                  name=""
                  onChange={this.handleChange}
                />
                <p> บาท</p>
              </Form.Group>
              <Form.Group inline style={{ marginBottom: '5%' }}>
                <Form.Input
                  style={{ height: '30px', width: '100px' }}
                  placeholder="จำนวนเงิน"
                  name=""
                  onChange={this.handleChange}
                />
                <p> บาท</p>
              </Form.Group>
              <Form.Group
                inline
                style={{ marginTop: '55%', marginBottom: '5%' }}
              >
                <Form.Input
                  style={{ height: '30px', width: '100px' }}
                  placeholder="จำนวนเงิน"
                  name=""
                  onChange={this.handleChange}
                />
                <p> บาท</p>
              </Form.Group>
            </Form>
          </div>
        </div>
      </div>
    )
  }
}

IPD3.propTypes = {}

const mapDispatchToProps = dispatch => ({})
const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(IPD3)
