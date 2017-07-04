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
import styled from 'react-sc'

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
    margin-top: -120px;
  }
`

const ModalModalExample = props => (
  <Modals
    trigger={
      <PostMainButton id="postButton">
        {' '}โพสต์
      </PostMainButton>
    }
  >
    <ModalContents>
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
          label="ค่ารักษาพยาบาลกรณีผู้ป่วยนอก (OPD)"
          checked={props.data.OPD}
        />
        {' '}
        <br />
        {' '}
        <br />
        <Checkbox
          style={{ paddingLeft: '30%' }}
          label="ค่ารักษาพยาบาลกรณีผู้ป่วยใน (IPD)"
          checked={props.data.IPD}
        />
        {' '}
        <br />
        {' '}
        <br />
        <Checkbox
          style={{ paddingLeft: '30%' }}
          label="ค่ารักษาทันตกรรม (Dental)"
          checked={props.data.dental}
        />
        {' '}
        <br />
        {' '}
        <br />
        <Checkbox
          style={{ paddingLeft: '30%' }}
          label="ประกันชีวิต (Life)"
          checked={props.data.life}
        />
        {' '}
        <br />
        {' '}
        <br />
        <Checkbox
          style={{ paddingLeft: '30%' }}
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
    </ModalContents>
  </Modals>
)

ModalModalExample.propTypes = {
  data: PropTypes.object.isRequired,
  handlePost: PropTypes.func.isRequired,
}

export default ModalModalExample
