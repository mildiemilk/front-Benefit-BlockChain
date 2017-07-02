import React from 'react'
import { Button, Header, Image, Modal, Checkbox } from 'semantic-ui-react'
import {
  ModalHeader,
  ModalContent,
  EditButton,
  PostButton,
  PostMainButton,
} from './styled'
import PropTypes from 'prop-types'

const ModalModalExample = props => (
  <Modal
    style={{ width: '38%', height: '40%', marginLeft: '-280px' }}
    trigger={
      <PostMainButton id="postButton">
        {' '}โพสต์
      </PostMainButton>
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
        </div>
        แผนประกันที่ต้องการ:
        <Checkbox
          style={{ paddingLeft: '2%' }}
          label="OPD"
          checked={props.data.OPD}
        />
        <Checkbox
          style={{ paddingLeft: '2%' }}
          label="IPD"
          checked={props.data.IPD}
        />
        <Checkbox
          style={{ paddingLeft: '2%' }}
          label="Dental"
          checked={props.data.dental}
        />
        <Checkbox
          style={{ paddingLeft: '2%' }}
          label="Life"
          checked={props.data.life}
        />
        <Checkbox
          style={{ paddingLeft: '2%' }}
          label="อื่นๆ"
          checked={props.data.other}
        />
        : {props.data.otherDes}
        <br />{' '}
      </ModalContent>
      <div style={{ marginLeft: '10%' }}>
        <EditButton> แก้ไข </EditButton>
        <PostButton onClick={props.handlePost}> โพสต์ </PostButton>
      </div>
    </Modal.Content>
  </Modal>
)

ModalModalExample.propTypes = {
  data: PropTypes.object.isRequired,
  handlePost: PropTypes.func.isRequired,
}

export default ModalModalExample
