import React from 'react'
import { Button, Header, Image, Modal, Checkbox } from 'semantic-ui-react'
import { ModalHeader, ModalContent, EditButton, PostButton } from './styled'
import PropTypes from 'prop-types'

const ModalModalExample = props => (
  <Modal
    style={{ width: '50%', height: '50%' }}
    trigger={
      <Button floated="right" id="postButton">
        {' '}โพสต์
      </Button>
    }
  >
    <Modal.Content>
      <ModalHeader> ยืนยันการโพสต์ <br /> </ModalHeader>
      <ModalContent>
        <div>
          จำนวนพนักงาน: {props.data.numberOfEmployee} <br /><br />
          รูปแบบประกันที่ต้องการ: {props.data.typeOfInsurance} <br /><br />
          อัพโหลดแผนประกันที่ใช้ในปัจจุบัน: <br /><br />
          วันหมดอายุของกรมธรรม์:
          {' '}
          {props.data.day}
          /
          {props.data.month}
          /
          {props.data.year}
          {' '}
          <br />
          <br />
          แผนประกันที่ต้องการ:
        </div>
        <Checkbox label="OPD" checked={props.data.OPD} />
        <Checkbox label="IPD" checked={props.data.IPD} />
        <Checkbox label="Dental" checked={props.data.dental} />
        <Checkbox label="Life" checked={props.data.life} />
        <Checkbox label="อื่นๆ" checked={props.data.other} />
        : {props.data.otherDes}
        <br />{' '}
      </ModalContent>
      <EditButton content="แก้ไข" />
      <PostButton content="โพสต์" onClick={props.handlePost} />
    </Modal.Content>
  </Modal>
)

ModalModalExample.propTypes = {
  data: PropTypes.object.isRequired,
  handlePost: PropTypes.func.isRequired,
}

export default ModalModalExample
