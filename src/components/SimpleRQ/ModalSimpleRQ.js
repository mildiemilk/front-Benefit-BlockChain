import React from 'react'
import { Button, Header, Image, Modal, Checkbox } from 'semantic-ui-react'
import { ModalHeader, ModalContent, EditButton, PostButton } from './Styled'
import PropTypes from 'prop-types'

const ModalModalExample = ({ data }) => (
  <Modal
    style={{ width: '50%', height: '50%' }}
    trigger={
      <Button floated="right" id="postButton" onClick={this.handlePost}>
        {' '}โพสต์
      </Button>
    }
  >
    <Modal.Content>
      <ModalHeader> ยืนยันการโพสต์ <br /> </ModalHeader>
      <ModalContent>
        จำนวนพนักงาน: 1300 <br /><br />
        รูปแบบประกันที่ต้องการ: Fixed Plan <br /><br />
        อัพโหลดแผนประกันที่ใช้ในปัจจุบัน: Insurance_Plan_2016.pdf <br /><br />
        วันหมดอายุของกรมธรรม์: 21 สิงหาคม 2560 <br /><br />
        แผนประกันที่ต้องการ
        <Checkbox label="OPD" defaultChecked />
        <Checkbox label="IPD" defaultChecked />
        <Checkbox label="Dental" defaultChecked />
        <Checkbox label="Life" defaultChecked />
        <br />{' '}
      </ModalContent>
      <EditButton content="แก้ไข" />
      <PostButton content="โพสต์" />
    </Modal.Content>
  </Modal>
)

ModalModalExample.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ModalModalExample
