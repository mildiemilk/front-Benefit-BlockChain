import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import { Divider, Search, Input, Table, Icon } from 'semantic-ui-react'
import {
  PostContent,
  BackHome,
  RecComparePlan,
  CompareHeader,
  ViewButton,
  CompareTable,
  SubCompareTables,
  TopicCompareTable,
  LifeBox,
  CompareImg,
  Box,
  Boxs,
  HiddenBox,
  IPDBox,
  IPDBoxs,
  LifeTopic,
  OPDTopic,
  IPDTopic,
  TextInBoxs,
  Sub,
  IPDDetail,
} from './Styled'
import styled from 'react-sc'
import NavInsure from '../NavInsure'

const Icons = styled(Icon)`
  &&&{
    position: absolute;
    right: 2%;
    top: 25%;
  }
`

export default class IPDDropBox extends Component {
  constructor() {
    super()
    this.state = {
      lifeBox: false,
      dentalBox: false,
      OPDBox: false,
      IPDBox: false,
      firstIPDBox: false,
      fourthIPDBox: false,
    }
  }

  handleToggleFirstIPD = () => {
    if (this.state.firstIPDBox) {
      this.setState({ firstIPDBox: false })
    } else {
      this.setState({ firstIPDBox: true })
    }
  }

  handleToggleFourthIPD = () => {
    if (this.state.fourthIPDBox) {
      this.setState({ fourthIPDBox: false })
    } else {
      this.setState({ fourthIPDBox: true })
    }
  }

  handleToggleOPD = () => {
    if (this.state.OPDBox) {
      this.setState({ OPDBox: false })
    } else {
      this.setState({ OPDBox: true })
    }
  }

  handleToggleIPD = () => {
    if (this.state.IPDBox) {
      this.setState({ IPDBox: false })
    } else {
      this.setState({ IPDBox: true })
    }
  }

  render() {
    return (
      <div className="ComparePlan">

        <div className="CompareIPD">
          <table>
            <tr>
              <th>
                <IPDTopic> 1. ค่าห้อง ค่าอาหาร และค่าบริการ </IPDTopic>
                <Icons
                  onClick={this.handleToggleFirstIPD}
                  disabled
                  name="caret down"
                />
              </th>
              <th> </th>
              <th> </th>
              <th> </th>
              <th> </th>
              <th> </th>
            </tr>
          </table>
        </div>

        {this.state.firstIPDBox
          ? <div className="SubCompareIPD">
              <table>
                <tr>
                  <th>
                    <IPDDetail>
                      {' '}
                      1.1 ค่าห้อง ค่าอาหาร และค่าบริการพยาบาลห้องผู้ป่วยธรรมดา
                      {' '}
                      <br />
                      (สูงสุดต่อวัน)
                    </IPDDetail>
                  </th>
                  <th>
                    2,000
                    <Sub><br /> ไม่จำกัดจำนวนวัน </Sub>
                  </th>
                  <th>
                    2,000
                    <Sub><br /> ไม่จำกัดจำนวนวัน </Sub>
                  </th>
                  <th>
                    2,000
                    <Sub><br /> ไม่จำกัดจำนวนวัน </Sub>
                  </th>
                  <th>
                    2,000
                    <Sub><br /> ไม่จำกัดจำนวนวัน </Sub>
                  </th>
                  <th>
                    2,000
                    <Sub><br /> ไม่จำกัดจำนวนวัน </Sub>
                  </th>
                </tr>

                <tr style={{ borderBottom: '1px solid #9b9b9b' }}>
                  <th>
                    <IPDDetail>
                      {' '}
                      1.2 ค่าห้อง ค่าอาหาร และค่าบริการพยาบาลห้องผู้ป่วยหนัก
                      {' '}
                      <br />
                      (สูงสุดต่อวัน)
                    </IPDDetail>
                  </th>
                  <th>
                    4,000
                    <Sub><br /> ไม่จำกัดจำนวนวัน </Sub>
                  </th>
                  <th>
                    4,000
                    <Sub><br /> ไม่จำกัดจำนวนวัน </Sub>
                  </th>
                  <th>
                    4,000
                    <Sub><br /> ไม่จำกัดจำนวนวัน </Sub>
                  </th>
                  <th>
                    4,000
                    <Sub><br /> ไม่จำกัดจำนวนวัน </Sub>
                  </th>
                  <th>
                    4,000
                    <Sub><br /> ไม่จำกัดจำนวนวัน </Sub>
                  </th>
                </tr>
              </table>
            </div>
          : null}

        <div className="CompareIPD">
          <table>
            <tr>
              <th>
                <IPDTopic>
                  {' '}2. ค่าแพทย์เยี่ยมไข้ สูงสุดไม่เกินวันละ 1 ครั้ง/วัน{' '}
                </IPDTopic>
              </th>
              <th>
                800
                <Sub><br /> ไม่จำกัดจำนวนวัน </Sub>
              </th>
              <th>
                800
                <Sub><br /> ไม่จำกัดจำนวนวัน </Sub>
              </th>
              <th>
                800
                <Sub><br /> ไม่จำกัดจำนวนวัน </Sub>
              </th>
              <th>
                800
                <Sub><br /> ไม่จำกัดจำนวนวัน </Sub>
              </th>
              <th>
                800
                <Sub><br /> ไม่จำกัดจำนวนวัน </Sub>
              </th>
            </tr>
          </table>
        </div>

        <div className="CompareIPD">
          <table>
            <tr>
              <th>
                <IPDTopic>
                  {' '}3. การรักษาพยาบาลโดยการผ่าตัด ค่าแพทย์ผ่าตัด <br />
                  และหัตถการ ตามตารางผ่าตัด{' '}
                </IPDTopic>
              </th>
              <th>
                40,000
              </th>
              <th>
                40,000
              </th>
              <th>
                40,000
              </th>
              <th>
                40,000
              </th>
              <th>
                40,000
              </th>
            </tr>
          </table>
        </div>

        <div className="CompareIPD">
          <table>
            <tr>
              <th>
                <IPDTopic> 4. ค่ารักษาพยาบาลและค่าบริการทั่วไป* </IPDTopic>
                <Icons
                  onClick={this.handleToggleFourthIPD}
                  disabled
                  name="caret down"
                />
              </th>
              <th>
                40,000
              </th>
              <th>
                40,000
              </th>
              <th>
                40,000
              </th>
              <th>
                40,000
              </th>
              <th>
                40,000
              </th>
            </tr>
          </table>
        </div>

        {this.state.fourthIPDBox
          ? <div className="SubCompareIPD">
              <table>
                <tr>
                  <th>
                    <IPDDetail>
                      {' '}
                      4.1 ค่ายาและสารอาหารทางเส้นเลือด ค่าบริการโลหิต
                      {' '}
                      <br />
                      และส่วนประกอบของโลหิตค่าตรวจทางห้องปฏิบัติ <br />
                      การอุปกรณ์ทางการแพทย์ ค่าห้องผ่าตัดและ <br />
                      อุปกรณ์ ค่ายากลับบ้าน ค่ากายภาพบำบัด/ <br />
                      กิจกรรมบำบัด ค่าแพทย์วิสัญญี/พยาบาลวิสัญญี <br />
                      คุ้มครองสูงสุดต่อครั้ง
                    </IPDDetail>
                  </th>
                  <th>
                    <Sub>
                      คุ้มครองค่าใช้จ่ายตามจริง ไม่เกินความคุ้มครองสูงสุด
                    </Sub>
                  </th>
                  <th>
                    <Sub>
                      คุ้มครองค่าใช้จ่ายตามจริง ไม่เกินความคุ้มครองสูงสุด
                    </Sub>
                  </th>
                  <th>
                    <Sub>
                      คุ้มครองค่าใช้จ่ายตามจริง ไม่เกินความคุ้มครองสูงสุด
                    </Sub>
                  </th>
                  <th>
                    <Sub>
                      คุ้มครองค่าใช้จ่ายตามจริง ไม่เกินความคุ้มครองสูงสุด
                    </Sub>
                  </th>
                  <th>
                    <Sub>
                      คุ้มครองค่าใช้จ่ายตามจริง ไม่เกินความคุ้มครองสูงสุด
                    </Sub>
                  </th>
                </tr>

                <tr>
                  <th>
                    <IPDDetail>
                      {' '}
                      4.2 ค่าใช้จ่ายสำหรับหัตถการหรือการผ่าตัดเล็กต่อครั้ง
                      {' '}
                    </IPDDetail>
                  </th>
                  <th>
                    <Sub>
                      คุ้มครองค่าใช้จ่ายตามจริง ไม่เกินความคุ้มครองสูงสุด
                    </Sub>
                  </th>
                  <th>
                    <Sub>
                      คุ้มครองค่าใช้จ่ายตามจริง ไม่เกินความคุ้มครองสูงสุด
                    </Sub>
                  </th>
                  <th>
                    <Sub>
                      คุ้มครองค่าใช้จ่ายตามจริง ไม่เกินความคุ้มครองสูงสุด
                    </Sub>
                  </th>
                  <th>
                    <Sub>
                      คุ้มครองค่าใช้จ่ายตามจริง ไม่เกินความคุ้มครองสูงสุด
                    </Sub>
                  </th>
                  <th>
                    <Sub>
                      คุ้มครองค่าใช้จ่ายตามจริง ไม่เกินความคุ้มครองสูงสุด
                    </Sub>
                  </th>
                </tr>

                <tr>
                  <th>
                    <IPDDetail>
                      {' '}4.3 ค่าแพทย์ที่ปรึกษาทางการผ่าตัด กรณีไม่มีการ
                      ผ่าตัดต่อครั้ง
                    </IPDDetail>
                  </th>
                  <th>
                    4,000
                  </th>
                  <th>
                    4,000
                  </th>
                  <th>
                    4,000
                  </th>
                  <th>
                    4,000
                  </th>
                  <th>
                    4,000
                  </th>
                </tr>

                <tr>
                  <th>
                    <IPDDetail> 4.4 ค่าบริการรถพยาบาลต่อครั้ง </IPDDetail>
                  </th>
                  <th>
                    1,000
                  </th>
                  <th>
                    1,000
                  </th>
                  <th>
                    1,000
                  </th>
                  <th>
                    1,000
                  </th>
                  <th>
                    1,000
                  </th>
                </tr>

                <tr>
                  <th>
                    <IPDDetail>
                      {' '}4.5 ค่ารักษาพยาบาลอุบัติเหตุฉุกเฉิน ภายใน 24
                      ช.ม. หลังเกิดอุบัติเหตุต่อครั้ง
                    </IPDDetail>
                  </th>
                  <th>
                    4,000
                  </th>
                  <th>
                    4,000
                  </th>
                  <th>
                    4,000
                  </th>
                  <th>
                    4,000
                  </th>
                  <th>
                    4,000
                  </th>
                </tr>

                <tr style={{ borderBottom: '1px solid #9b9b9b' }}>
                  <th>
                    <IPDDetail>
                      {' '}
                      4.6 ค่าใช้จ่ายที่เกิดจากการรักษาพยาบาลต่อเนื่องภาย
                      {' '}
                      <br />
                      หลังจากการออกจากโรงพยาบาลรวมถึงค่ารักษา <br />
                      พยาบาลแบบผู้ป่วยนอก และค่ากายภาพบำบัดที่ต่อ <br />
                      เนื่องจากผู้ป่วยใน (สูงสุดไม่เกิน 30 วัน) คุ้มครอง <br />
                      สูงสุดต่อครั้ง
                    </IPDDetail>
                  </th>
                  <th>
                    <Sub>
                      คุ้มครองค่าใช้จ่ายตามจริง ไม่เกินความคุ้มครองสูงสุด
                    </Sub>
                  </th>
                  <th>
                    <Sub>
                      คุ้มครองค่าใช้จ่ายตามจริง ไม่เกินความคุ้มครองสูงสุด
                    </Sub>
                  </th>
                  <th>
                    <Sub>
                      คุ้มครองค่าใช้จ่ายตามจริง ไม่เกินความคุ้มครองสูงสุด
                    </Sub>
                  </th>
                  <th>
                    <Sub>
                      คุ้มครองค่าใช้จ่ายตามจริง ไม่เกินความคุ้มครองสูงสุด
                    </Sub>
                  </th>
                  <th>
                    <Sub>
                      คุ้มครองค่าใช้จ่ายตามจริง ไม่เกินความคุ้มครองสูงสุด
                    </Sub>
                  </th>
                </tr>
              </table>
            </div>
          : null}

        <div className="CompareIPD">
          <table>
            <tr>
              <th>
                <IPDTopic>
                  {' '}
                  5. ค่ารักษากรณี ปลูกถ่ายไขกระดูก, เปลี่ยนถ่ายอวัยวะ,
                  {' '}
                  <br />
                  การฟอกไต (ไม่รวมค่าใช้จ่ายของผู้บริจาคอวัยวะ) <br />
                  (ปีละไม่เกิน)**{' '}
                </IPDTopic>
              </th>
              <th>
                40,000
              </th>
              <th>
                40,000
              </th>
              <th>
                40,000
              </th>
              <th>
                40,000
              </th>
              <th>
                40,000
              </th>
            </tr>
          </table>
        </div>

      </div>
    )
  }
}
