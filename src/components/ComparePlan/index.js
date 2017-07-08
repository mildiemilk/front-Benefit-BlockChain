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
  TextInBoxs,
  Note,
} from './Styled'
import styled from 'react-sc'
import NavInsure from '../NavInsure'
import IPDDropBox from './IPDDropBox'

const Icons = styled(Icon)`
  &&&{
    position: absolute;
    margin-left: -1.5%;
    margin-top: 2.5%;
  }
`

export default class ComparePlan extends Component {
  constructor() {
    super()
    this.state = {
      step: 3,
      passwordToConfirm: '',
      lifeBox: false,
      dentalBox: false,
      OPDBox: false,
      IPDBox: false,
    }
  }

  handleToggleLife = () => {
    if (this.state.lifeBox) {
      this.setState({ lifeBox: false })
    } else {
      this.setState({ lifeBox: true })
    }
  }

  handleToggleDental = () => {
    if (this.state.dentalBox) {
      this.setState({ dentalBox: false })
    } else {
      this.setState({ dentalBox: true })
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
        <NavInsure step={this.state.step} />
        <div className="row">
          <RecComparePlan>
            <div className="row">
              <div className="large-5 large-offset-1 columns">
                <CompareHeader> เปรียบเทียบแผนประกันภัย </CompareHeader>
                <BackHome>&lt; กลับหน้าหลัก </BackHome>
              </div>
              <div className="large-3 large-offset-1 columns">
                <ViewButton>
                  <Icon disabled name="add to calendar" />
                  ดูแผนทั้งหมด
                </ViewButton>
              </div>
            </div>

            <div style={{ marginTop: '2%' }} className="row">
              <div className="large-10 large-offset-1 columns">
                <div className="CompareHead">
                  <table>
                    <tr>
                      <th>
                        <TopicCompareTable>
                          ผลประโยชน์ความคุ้มครอง (Benefits)
                        </TopicCompareTable>
                      </th>
                      <th>
                        <SubCompareTables>
                          Management <br /> Plan 1
                        </SubCompareTables>
                      </th>
                      <th>
                        <SubCompareTables>
                          Management <br /> Plan 2
                        </SubCompareTables>
                      </th>
                      <th>
                        <SubCompareTables>
                          Management <br /> Plan 3
                        </SubCompareTables>
                      </th>
                      <th>
                        <SubCompareTables>
                          Management <br /> Plan 4
                        </SubCompareTables>
                      </th>
                      <th>
                        <SubCompareTables>
                          Management <br /> Plan 5
                        </SubCompareTables>
                      </th>
                    </tr>
                  </table>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="large-10 large-offset-1 columns">
                <div style={{ marginTop: '2%' }} className="CompareLife">
                  <table>
                    <tr>
                      <th>
                        <CompareImg src="../../../compare/4.png" />
                        <LifeTopic> ประกันชีวิต (Life) </LifeTopic>
                        <Icons
                          onClick={this.handleToggleLife}
                          disabled
                          name="caret down"
                        />
                      </th>
                      <th>1,000,000</th>
                      <th>1,000,000</th>
                      <th>1,000,000</th>
                      <th>1,000,000</th>
                      <th>1,000,000</th>
                    </tr>
                    {this.state.lifeBox
                      ? <HiddenBox>
                          <br />
                          &nbsp;&nbsp;ค่าแพทย์ ค่ายา ค่าบริการที่โรงพยาบาลเรียกเก็บ ค่าใช้
                          {' '}
                          <br />
                          &nbsp;&nbsp;จ่ายสำหรับการตรวจทางห้องปฏิบัติการ
                          (วันละ 1 ครั้ง <br />&nbsp; ไม่เกิน 30 ต่อปี)
                        </HiddenBox>
                      : null}
                  </table>
                </div>

                <div style={{ marginTop: '2%' }} className="CompareLife">
                  <table>
                    <tr>
                      <th>
                        <CompareImg src="../../../compare/1.png" />
                        <LifeTopic> ค่ารักษาทันตกรรม (Dental) </LifeTopic>
                        <Icons
                          onClick={this.handleToggleDental}
                          disabled
                          name="caret down"
                        />
                      </th>
                      <th>1,000,000</th>
                      <th>1,000,000</th>
                      <th>1,000,000</th>
                      <th>1,000,000</th>
                      <th>1,000,000</th>
                    </tr>
                    {this.state.dentalBox
                      ? <HiddenBox>
                          <br />
                          &nbsp;&nbsp;ค่าแพทย์ ค่ายา ค่าบริการที่โรงพยาบาลเรียกเก็บ ค่าใช้
                          {' '}
                          <br />
                          &nbsp;&nbsp;จ่ายสำหรับการตรวจทางห้องปฏิบัติการ
                          (วันละ 1 ครั้ง <br />&nbsp; ไม่เกิน 30 ต่อปี)
                        </HiddenBox>
                      : null}
                  </table>
                </div>

                <div style={{ marginTop: '2%' }} className="CompareLife">
                  <table>
                    <tr>
                      <th>
                        <CompareImg src="../../../compare/3.png" />
                        <OPDTopic>
                          {' '}ค่ารักษาพยาบาลกรณีผู้ป่วยนอก <br />
                          (Out Patient Department : OPD){' '}
                        </OPDTopic>
                        <Icons
                          onClick={this.handleToggleOPD}
                          disabled
                          name="caret down"
                        />
                      </th>
                      <th>1,000,000</th>
                      <th>1,000,000</th>
                      <th>1,000,000</th>
                      <th>1,000,000</th>
                      <th>1,000,000</th>
                    </tr>
                    {this.state.OPDBox
                      ? <HiddenBox>
                          <br />
                          &nbsp;&nbsp;ค่าแพทย์ ค่ายา ค่าบริการที่โรงพยาบาลเรียกเก็บ ค่าใช้
                          {' '}
                          <br />
                          &nbsp;&nbsp;จ่ายสำหรับการตรวจทางห้องปฏิบัติการ
                          (วันละ 1 ครั้ง <br />&nbsp; ไม่เกิน 30 ต่อปี)
                        </HiddenBox>
                      : null}
                  </table>
                </div>

                <div style={{ marginTop: '2%' }} className="CompareLife">
                  <table>
                    <tr>
                      <th>
                        <CompareImg src="../../../compare/2.png" />
                        <OPDTopic>
                          {' '}ค่ารักษาพยาบาลกรณีผู้ป่วยใน <br />
                          (In-Patient Department : IPD){' '}
                        </OPDTopic>
                        <Icons
                          onClick={this.handleToggleIPD}
                          disabled
                          name="caret down"
                        />
                      </th>
                      <th>1,000,000</th>
                      <th>1,000,000</th>
                      <th>1,000,000</th>
                      <th>1,000,000</th>
                      <th>1,000,000</th>
                    </tr>
                  </table>
                </div>
                {this.state.IPDBox ? <IPDDropBox /> : null}

                <div style={{ marginTop: '5%' }}>
                  <Note>
                    * ค่าใช้จ่ายในข้อ 4.1-4.6 นับรวมจ่ายในผลประโยชน์ ค่ารักษาพยาบาลทั่วไป
                    <br />
                    {' '}
                    ** ค่าใช้จ่ายข้อ 5 คือ จำนวนเงินสูงสุดที่จ่าย ข้อ 1-4 รวมกัน สำหรับการรักษากรณี ปลูกถ่ายไขกระดูก, เปลี่ยนถ่ายอวัยวะ, การฟอกไต สูงสุดต่อปีกรมธรรม์
                    <br />
                    {' '}
                    - บริการช่วยเหลือฉุกเฉินทางการแพทย์ทั่วโลก เคลื่อนย้ายผู้ป่วยจากโรงพยาบาลเพื่อกลับไปพักฟื้นยังภูมิลำเนา บริการเคลื่อนย้ายศพ ในวงเงินสูงสุดถึง 1,000,000 บาท
                    <br />
                    {' '}
                    - อัตราเบี้ยประกันข้างต้นนี้ มีผลบังคับใช้ตั้งแต่วันที่ XXXXXXX - XXXXXXX
                    <br />
                    {' '}
                    - เอกสารชุดนี้ไม่ใช่สัญญาประกันภัย รายละเอียดเงื่อนไขความคุ้มครองและข้อยกเว้นที่สมบูรณ์จะระบุในกรมธรรม์ประกันภัย ผู้ซื้อควรทำความเข้าใจรายละเอียดเงื่อนไขก่อนตัดสินใจทำประกันภัยทุกครั้ง
                  </Note>
                </div>

              </div>
            </div>

          </RecComparePlan>
        </div>
      </div>
    )
  }
}
