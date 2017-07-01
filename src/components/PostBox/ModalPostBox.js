import React from 'react'
import { Button, Header, Image, Modal, Checkbox, Form } from 'semantic-ui-react'
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

const ModalModalExample = ({ data }) => (
  <Modal
    style={{ width: '450px', height: '208px' }}
    trigger={
      <ButtonNew onClick={this.handlePost}>
        {' '}เลือก Broker
      </ButtonNew>
    }
  >
    <Modal.Content>
      <ModalHeader>
        {' '}
        กรุณาใส่พาสเวิร์ดของคุณอีกครั้ง เพื่อ
        {' '}
        <br />
        {' '}
        ยืนยันการเลือกโบรกเกอร์
        {' '}
        <br />
        {' '}
      </ModalHeader>
      <ModalContent>
        <Form>
          <Form.Field>
            <Form.Input
              style={{
                width: '324px',
                height: '40px',
                backgroundImage: `url(${passwordIcon})`,
                backgroundSize: '32px,32px',
                backgroundRepeat: 'no-repeat',
                paddingLeft: '9%',
              }}
              placeholder="พาสเวิร์ด"
              name="password"
              type="password"
              onChange={this.handleChange}
            />
          </Form.Field>
        </Form>
        <br /> หากเลือกโบรกเกอร์ไปแล้ว จะไม่สามารถเปลี่ยนแปลงโบรกเกอร์ได้ <br />
      </ModalContent>
      <CancleButton> ยกเลิก </CancleButton>
      <ConfirmButton> ยืนยัน </ConfirmButton>
    </Modal.Content>
  </Modal>
)

ModalModalExample.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ModalModalExample
