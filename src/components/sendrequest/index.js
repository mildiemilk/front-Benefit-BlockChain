import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
// import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import NavInsure from '../NavInsure';
import ModalInsurer from './ModalInsurer';
import ModalPlanBox from './ModalPlanBox';
import Insurer from './insurer';
import '../../styles/send-request.scss';
import { getSimpleRQ } from '../../api/simple-requirement';
import { getTimeout } from '../../api/choose-insurer';
import Postre from './postre';
import {
  Detail,
  Head,
  TopicHead,
  BoxIndiv,
  Time,
  InsurerDiv,
} from './styled';
import { setCompleteStep } from '../../api/profile-company';
import UploadFile from './upload-file';
import ModalConfirmPassword from '../ModalConfirmPassword';

class Sendrequest extends Component {
  static propTypes = {
    getSimpleReq: PropTypes.func.isRequired,
    getTimeout: PropTypes.func.isRequired,
    timeout: PropTypes.shape.isRequired,
    setCompleteStep: PropTypes.func.isRequired,
    data: PropTypes.shape.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      step: 6,
      position: 'relative-box',
      passwordToConfirm: '',
    };
  }
  componentDidMount() {
    this.props.getSimpleReq();
    this.props.getTimeout();
  }
  changePositionPage = () => {
    if (this.state.position === 'relative-box') {
      this.setState({ position: 'fixed-box' });
    } else {
      this.setState({ position: 'relative-box' });
    }
  }
  handlePost = e => {
    e.preventDefault();
    const { passwordToConfirm } = this.state;
    const step = 0;
    this.props.setCompleteStep(passwordToConfirm, step);
    // return <Redirect to="/submitplan" />;
  }
  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  render() {
    const { timeout } = this.props.timeout;
    return (
      <div className={this.state.position}>
        <NavInsure step={this.state.step} />
        <Detail >
          <div className="row">
            <div className="large-12 columns">
              <Head>ส่งคำขอและรอการเสนอราคา</Head>
              <TopicHead>กรุณาตรวจสอบข้อมูลของคุณ</TopicHead>
              <Postre data={this.props} />
              <TopicHead>กรุณาตรวจสอบแพลนของคุณ</TopicHead>
              <BoxIndiv>
                <ModalPlanBox changePositionPage={this.changePositionPage} />
              </BoxIndiv>
              <InsurerDiv>
                <TopicHead>
                  รายชื่อบริษัทประกันและระยะเวลาในการเสนอประกัน
                </TopicHead>
                {' '}
                <ModalInsurer />
              </InsurerDiv>
              <BoxIndiv>
                บริษัทประกันสามารถเสนอราคาได้ภายในวันที่
                {' '}
                <Time>
                  {moment(timeout)
                    .locale('th')
                    .format('DD MMMM YYYY')}
                </Time>
                &nbsp; ภายในเวลา
                {' '}
                <Time>{moment(timeout).format('LT')}</Time>
                <Insurer />
              </BoxIndiv>
              <TopicHead>อัพโหลดไฟล์</TopicHead>
              <BoxIndiv>
                <UploadFile />
              </BoxIndiv>
            </div>
          </div>
        </Detail>
        <div className="row">
          <div className="large-offset-10 large-2 columns">
            <ModalConfirmPassword
              handlePost={this.handlePost}
              handleChange={this.handleChange}
              data={this.props.data}
              content="ส่งคำขอ"
              head="การส่งคำขอ"
            />
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  getSimpleReq: () => dispatch(getSimpleRQ()),
  getTimeout: () => dispatch(getTimeout()),
  setCompleteStep: (passwordToConfirm, step) =>
  dispatch(setCompleteStep(passwordToConfirm, step)),
});
const mapStateToProps = state => ({
  timeout: state.setTimeOut,
  simpleReq: state.fillsimpleReducer,
  data: state.profile,
});

export default connect(mapStateToProps, mapDispatchToProps)(Sendrequest);
