import React, { Component } from 'react';
import { Modal, Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import { Input } from '../StyleComponent';

// const ModalContents = styled(Modal.Content) `
//   &&&{
//     position: absolute;
//     top: 10px;
//   }
// `;
// const Modals = styled(Modal) `
//   &&&{
//     background: transparent;
//     width: 550px !important;
//     height: 308px !important;
//     position: absolute;
//     left: 62%;
//     top: 40%;
//   }
// `;
const Inputs = styled(Input) `
  &&&{
    font-family: Kanit;
    border-radius: 3px;
    background-color: #ffffff;
    border: solid 1px #dddddd;
    margin-top: 1vw;
    margin-bottom: 1vw;
    @media screen and (min-width: 1440px) {
      margin-top: 14px;
      margin-bottom: 14px;
    }
  }
`;

// const Text = styled.div`
//   text-align: center;
//   margin-top: 25px;
// `;
const ModalContents = styled(Modal.Content)`
&&&{
  max-width: 550px;
  margin: 0 auto;
  text-align: center;
  width: 38.7vw;
}
`;

const Modals = styled(Modal)`
&&&{
  background: transparent !important;
  margin-top: -120px;
  box-shadow: none;
}
`;

class ModalConfirmPassword extends Component {
  static propTypes = {
    handlePost: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    data: PropTypes.shape({}).isRequired,
    content: PropTypes.string.isRequired,
    head: PropTypes.string.isRequired,
    value: PropTypes.string,
  }
  static defaultProps = {
    value: '',
  }
  constructor(props) {
    super(props);
    this.state = { modalOpen: false };
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
    const { content, head, data, value } = this.props;
    return (
      <Modals
        trigger={
          <button
            className="submit-plan-btn-form-submit-plan btn-green"
            onClick={this.handleOpen}
          >
            {content}
          </button>
        }
        className="send-req-modal-confirm-box"
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <ModalContents>
          <div className="send-req-detail-box">
            <span className="submit-plan-comfirm-modal-header">
              กรุณาใส่พาสเวิร์ดของคุณอีกครั้ง
            </span>
            <span className="submit-plan-comfirm-modal-header">
              เพื่อยืนยัน{head}
            </span>
            <Inputs
              icon="lock"
              iconPosition="left"
              placeholder="รหัสผ่าน"
              name="passwordToConfirm"
              type="password"
              onChange={this.props.handleChange}
            />
            {
               data.error
               ? <span style={{ color: 'red' }}>
                 <br />
                 <div style={{ marginLeft: '15%', marginTop: '2%' }}>
                   {data.message}
                 </div>
               </span>
               : <span />
             }
            <span className="submit-plan-comfirm-modal-header">
              หากยืนยัน{head}ไปแล้ว จะไม่สามารถเปลี่ยนแปลงได้
            </span>
          </div>
          <div className="send-req-btn-box-modal">
            <div className="send-req-btn-box-l">
              <button
                className="submit-plan-btn-form-submit-plan btn-red"
                onClick={this.handleClose}
              >
                ยกเลิก
              </button>
            </div>
            <div className="send-req-btn-box-r">
              <button
                className="submit-plan-btn-form-submit-plan btn-blue"
                onClick={() => this.props.handlePost(value)}
              >
                ยืนยัน
              </button>
            </div>
          </div>
        </ModalContents>
      </Modals>
    );
  }
}

export default ModalConfirmPassword;
