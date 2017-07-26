import React, { Component } from 'react'
import { Modal, Checkbox } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import styled from 'react-sc'
import {
  ModalHeader,
  ModalContent,
  EditButton,
  PostButton,
  PostMainButton,
} from './styled'

const ModalContents = styled(Modal.Content)`
  &&&{
    max-width: 500px;
    margin: 0 auto;
    padding-left: 4%;
  }
`

const Modals = styled(Modal)`
  &&&{
    background: transparent;
    box-shadow: none;
    margin-top: -120px;
  }
`

class ModalModalExample extends Component {
  constructor() {
    super()
    this.state = { modalOpen: false }
  }

  handleClose = () =>
    this.setState({
      modalOpen: false,
    })

  handleOpen = () =>
    this.setState({
      modalOpen: true,
    })

  render() {
    return (
      <Modals
        trigger={
          <PostMainButton id="postButton" onClick={this.handleOpen}>
            {' '}โพสต์
          </PostMainButton>
        }
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <ModalContents>
          <ModalHeader> ยืนยันการโพสต์ <br /> </ModalHeader>
          <ModalContent>
            <div>
              จำนวนพนักงาน: {this.props.data.numberOfEmployee} <br /><br />
              รูปแบบประกันที่ต้องการ:
              {' '}
              {this.props.data.typeOfInsurance}
              {' '}
              <br />
              <br />
              อัพโหลดแผนประกันที่ใช้ในปัจจุบัน: <br /><br />
              วันหมดอายุของกรมธรรม์:
              {' '}
              {this.props.data.day}
              /
              {this.props.data.month}
              /
              {this.props.data.year}
              {' '}
              <br />
              <br />
            </div>
            แผนประกันที่ต้องการ:
            <Checkbox
              style={{ paddingLeft: '2%' }}
              label="ค่ารักษาพยาบาลกรณีผู้ป่วยนอก (OPD)"
              checked={this.props.data.OPD}
            />
            {' '}
            <br />
            {' '}
            <br />
            <Checkbox
              style={{ paddingLeft: '30%' }}
              label="ค่ารักษาพยาบาลกรณีผู้ป่วยใน (IPD)"
              checked={this.props.data.IPD}
            />
            {' '}
            <br />
            {' '}
            <br />
            <Checkbox
              style={{ paddingLeft: '30%' }}
              label="ค่ารักษาทันตกรรม (Dental)"
              checked={this.props.data.dental}
            />
            {' '}
            <br />
            {' '}
            <br />
            <Checkbox
              style={{ paddingLeft: '30%' }}
              label="ประกันชีวิต (Life)"
              checked={this.props.data.life}
            />
            {' '}
            <br />
            {' '}
            <br />
            <Checkbox
              style={{ paddingLeft: '30%' }}
              label="อื่นๆ"
              checked={this.props.data.other}
            />
            : {this.props.data.otherDes}
            <br />{' '}
          </ModalContent>
          <div style={{ marginLeft: '10%' }}>
            <EditButton onClick={this.handleClose}> แก้ไข </EditButton>
            <PostButton onClick={this.props.handlePost}> โพสต์ </PostButton>
          </div>
        </ModalContents>
      </Modals>
    )
  }
}

ModalModalExample.propTypes = {
  data: PropTypes.shape.isRequired,
  handlePost: PropTypes.func.isRequired,
}

export default ModalModalExample
