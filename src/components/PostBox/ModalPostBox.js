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
import { connect } from 'react-redux'

const ModalPostbox = props => (
  <Modal
    style={{ width: '450px', height: '248px', marginLeft: '-250px' }}
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
            width: '280px',
            height: '40px',
            marginLeft: '10%',
          }}
          icon="lock"
          iconPosition="left"
          placeholder="พาสเวิร์ด"
          name="passwordToConfirm"
          type="password"
          onChange={props.handleChange}
        />

        {props.data.error
          ? <span style={{ color: 'red' }}> <br />{props.data.message}</span>
          : <span />}

        <p style={{ paddingTop: '4%' }}>
          หากเลือกโบรกเกอร์ไปแล้ว จะไม่สามารถเปลี่ยนแปลงโบรกเกอร์ได้
        </p>

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

const mapStateToProps = state => ({
  data: state.postBoxReducer,
})

export default connect(mapStateToProps, null)(ModalPostbox)
