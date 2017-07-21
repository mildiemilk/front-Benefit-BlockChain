import React, { Component } from 'react'
import { Button, Header, Image, Modal, Checkbox, Icon } from 'semantic-ui-react'
import {
  ModalHeader,
  ModalContent,
  ModalTopic,
  BackButton,
  PostMainButton,
  LineModal,
  TableHeader,
  SpaceContent,
  PlanImg,
  LifeTopic,
  OPDTopic,
  IPDTopic,
  IPDDetail,
  HiddenBox,
  HiddenContent,
  Img,
  TextInBoxs,
  ImageIcon2,
} from './styled'
import IPDDropBox from './ipd-dropbox'
import PropTypes from 'prop-types'
import styled from 'react-sc'
import icon2 from '../image/icons-8-view-file.png'

const ModalContents = styled(Modal.Content)`
  &&&{
    max-width: 670px;
    margin: 0 auto;
  }
`

const Modals = styled(Modal)`
  &&&{
    background: transparent;
    box-shadow: none;
    margin-top: -120px;
  }
`

const Icons = styled(Icon)`
  &&&{
    position: absolute;
    margin-top: 2.5%;
  }
`

class ModalModalExample extends Component {
  constructor() {
    super()
    this.state = {
      modalOpen: false,
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

  handleClose = e => this.setState({ modalOpen: false })

  handleOpen = e => this.setState({ modalOpen: true })

  render() {
    return (
      <Modals
        trigger={
          <ImageIcon2 src={icon2} size="mini" onClick={this.handleOpen} />
        }
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <ModalContents>
          <div className="row">
            <ModalHeader>
              Management Plan 1
              <br />
            </ModalHeader>
            <LineModal />
            <div className="row">
              <div className="large-4 columns">
                <ModalTopic>
                  จำนวนพนักงานในแพลน :
                </ModalTopic>
                <ModalTopic>
                  ราคาต่อหัว :
                </ModalTopic>
              </div>
              <div className="large-8 columns">
                <ModalContent>
                  1,200 คน
                </ModalContent>
                <ModalContent>
                  12,000 บาท
                </ModalContent>
              </div>
            </div>

            <div className="ModalPlanTable">

              <div className="PlanHeader">
                <table>
                  <tr>
                    <th>
                      <TableHeader>
                        ผลประโยชน์ความคุ้มครอง (Benefits)
                      </TableHeader>
                    </th>

                    <th>
                      <TableHeader>
                        รายละเอียด
                      </TableHeader>
                    </th>
                  </tr>
                </table>
              </div>

              <div
                style={{
                  marginTop: '1%',
                }}
                className="PlanLife"
              >
                <table>
                  <tr>
                    <th>
                      <Img src="../../../compare/4.png" />
                      <LifeTopic>
                        ประกันชีวิต (Life)
                      </LifeTopic>
                      <Icons
                        onClick={this.handleToggleLife}
                        disabled
                        name="caret down"
                      />
                    </th>
                    <th>
                      1,000,000
                    </th>

                  </tr>
                </table>
                {this.state.lifeBox
                  ? <HiddenBox>
                      <HiddenContent>
                        ค่าแพทย์ ค่ายา ค่าบริการที่โรงพยาบาลเรียกเก็บ ค่าใช้จ่ายสำหรับ
                        <br /> {' '}
                        การตรวจทางห้องปฏิบัติการ (วันละ 1 ครั้ง ไม่เกิน 30 ต่อปี)
                      </HiddenContent>
                    </HiddenBox>
                  : null}
              </div>

              <div
                style={{
                  marginTop: '1%',
                }}
                className="PlanLife"
              >
                <table>
                  <tr>
                    <th>
                      <Img src="../../../compare/1.png" />
                      <LifeTopic>
                        ค่ารักษาทันตกรรม (Dental)
                      </LifeTopic>
                      <Icons
                        onClick={this.handleToggleDental}
                        disabled
                        name="caret down"
                      />
                    </th>
                    <th>
                      1,000,000
                    </th>

                  </tr>
                </table>
                {this.state.dentalBox
                  ? <HiddenBox>
                      <HiddenContent>
                        ค่าแพทย์ ค่ายา ค่าบริการที่โรงพยาบาลเรียกเก็บ ค่าใช้จ่ายสำหรับ
                        <br /> {' '}
                        การตรวจทางห้องปฏิบัติการ (วันละ 1 ครั้ง ไม่เกิน 30 ต่อปี)
                      </HiddenContent>
                    </HiddenBox>
                  : null}
              </div>

              <div
                style={{
                  marginTop: '1%',
                }}
                className="PlanLife"
              >
                <table>
                  <tr>
                    <th>
                      <Img src="../../../compare/3.png" />
                      <OPDTopic>
                        {' '}ค่ารักษาพยาบาลกรณีผู้ป่วยนอก
                        <br />
                        (Out Patient Department : OPD){' '}
                      </OPDTopic>
                      <Icons
                        onClick={this.handleToggleOPD}
                        disabled
                        name="caret down"
                      />
                    </th>
                    <th>
                      1,000,000
                    </th>

                  </tr>
                </table>
                {this.state.OPDBox
                  ? <HiddenBox>
                      <HiddenContent>
                        ค่าแพทย์ ค่ายา ค่าบริการที่โรงพยาบาลเรียกเก็บ ค่าใช้จ่ายสำหรับ
                        <br /> {' '}
                        การตรวจทางห้องปฏิบัติการ (วันละ 1 ครั้ง ไม่เกิน 30 ต่อปี)
                      </HiddenContent>
                    </HiddenBox>
                  : null}
              </div>

              <div
                style={{
                  marginTop: '1%',
                }}
                className="PlanLife"
              >
                <table>
                  <tr>
                    <th>
                      <Img src="../../../compare/2.png" />
                      <OPDTopic>
                        ค่ารักษาพยาบาลกรณีผู้ป่วยใน
                        <br />
                        (In-Patient Department : IPD){' '}
                      </OPDTopic>
                      <Icons
                        onClick={this.handleToggleIPD}
                        disabled
                        name="caret down"
                      />
                    </th>
                    <th>
                      1,000,000{' '}
                    </th>

                  </tr>
                </table>
              </div>
              {this.state.IPDBox ? <IPDDropBox /> : null}

            </div>

            <div className="row">
              <div className="large-4 large-offset-8 columns">
                <BackButton onClick={this.handleClose}>
                  กลับ
                </BackButton>
              </div>
            </div>
          </div>
        </ModalContents>
      </Modals>
    )
  }
}

ModalModalExample.propTypes = {
  data: PropTypes.object.isRequired,
  handlePost: PropTypes.func.isRequired,
}

export default ModalModalExample
