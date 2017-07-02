import React from 'react'
import {
  Button,
  Header,
  Image,
  Modal,
  Checkbox,
  Form,
  Input,
} from 'semantic-ui-react'
import {
  ModalHeader,
  ModalContent,
  EditButton,
  PostButton,
  ButtonNew,
  CancleButton,
  ConfirmButton,
} from './Styled'
import PropTypes from 'prop-types'
import styled from 'react-sc'
import passwordIcon from '../image/icons8-password.png'

const ModalPostbox = props => (
  <Modal
    style={{ width: '450px', height: '208px' }}
    trigger={
      <ButtonNew>
        {' '}เลือก Broker
      </ButtonNew>
    }
  >
    <Modal.Content>
      <ModalHeader>
        {' '}
        กรุณาใส่พาสเวิร์ดของคุณอีกครั้งเพื่อ
        {' '}
        <br />
        {' '}
        ยืนยันการเลือกโบรกเกอร์
        {' '}
        <br />
        {' '}
      </ModalHeader>
      <ModalContent>
        <Input
          style={{
            width: '324px',
            height: '40px',
            backgroundImage: `url(${passwordIcon})`,
            backgroundSize: '32px,32px',
            backgroundRepeat: 'no-repeat',
            paddingLeft: '9%',
          }}
          placeholder="พาสเวิร์ด"
          name="passwordToConfirm"
          type="password"
          onChange={props.handleChange}
        />
        <br /> หากเลือกโบรกเกอร์ไปแล้ว จะไม่สามารถเปลี่ยนแปลงโบรกเกอร์ได้ <br />
      </ModalContent>
      <CancleButton> ยกเลิก </CancleButton>
      <ConfirmButton onClick={props.handlePost}> ยืนยัน </ConfirmButton>
    </Modal.Content>
  </Modal>
)

ModalPostbox.propTypes = {
  handlePost: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
}

export default ModalPostbox
