import React, { Component } from 'react'
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
  ButtonNew,
  CancleButton,
  ConfirmButton,
  ButtonStatusAppove,
} from '../styled'
import PropTypes from 'prop-types'
import styled from 'react-sc'
import passwordIcon from '../../image/icons8-password.png'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
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

const Inputs = styled(Input)`
  &&&{
    font-family: Kanit;
  }
`

class ModalSelectInsurer extends Component {
  constructor() {
    super()
    this.state = { modalOpen: false }
  }

  handleClose = e =>
    this.setState({
      modalOpen: false,
    })

  handleOpen = e =>
    this.setState({
      modalOpen: true,
    })
  render() {
    return (
      <Modals
        trigger={
          <ButtonStatusAppove onClick={this.handleOpen}>
            {' '}เลือก
          </ButtonStatusAppove>
        }
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >

        <ModalContents>
          <ModalHeader>
            {' '}
            กรุณาใส่พาสเวิร์ดของคุณอีกครั้งเพื่อ
            {' '}
            <br />
            {' '}
            ยืนยันการเลือกบริษัทประกัน
            {' '}
            <br />
            {' '}
          </ModalHeader>
          <ModalContent>
            <Inputs
              style={{
                width: '280px',
                height: '40px',
                marginLeft: '12%',
              }}
              icon="lock"
              iconPosition="left"
              placeholder="รหัสผ่าน"
              name="passwordToConfirm"
              type="password"
              onChange={this.props.handleChange}
            />

            {this.props.data.error
              ? <span style={{ color: 'red' }}>
                  <br />
                  <div style={{ marginLeft: '15%', marginTop: '2%' }}>
                    {this.props.data.message}
                  </div>
                </span>
              : <span />}

            <p style={{ paddingTop: '4%' }}>
              หากยืนยันการส่งคำขอไปแล้ว จะไม่สามารถเปลี่ยนแปลงได้
            </p>

          </ModalContent>
          <div style={{ marginLeft: '2%' }}>
            <CancleButton onClick={this.handleClose}> ยกเลิก </CancleButton>
            <ConfirmButton onClick={this.props.handlePost}>
              <Link to="/congrat">{' '}ยืนยัน{' '}</Link>
            </ConfirmButton>
          </div>
        </ModalContents>

      </Modals>
    )
  }
}

ModalSelectInsurer.propTypes = {
  handlePost: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  data: state.postBoxReducer,
})

export default connect(mapStateToProps, null)(ModalSelectInsurer)
