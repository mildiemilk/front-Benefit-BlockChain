import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Redirect, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Icon } from 'semantic-ui-react';
import NavInsure from '../NavInsure';
// import ModalInsurer from './ModalInsurer';
import ModalPlanBox from './ModalPlanBox';
import Insurer from './insurer';
import '../../styles/send-request.scss';
// import { getSimpleRQ } from '../../api/simple-requirement';
import { getTimeout } from '../../api/choose-insurer';
// import Postre from './postre';
import {
  Detail,
  TopicHead,
  BoxIndiv,
  Time,
  InsurerDiv,
  Edit,
  Inner,
} from './styled';
import { setCompleteStep, getCompleteStep, getClaimData } from '../../api/profile-company';
import UploadFile from './upload-file';
import ModalConfirmPassword from '../ModalConfirmPassword';

class Sendrequest extends Component {
  static propTypes = {
    // getSimpleReq: PropTypes.func.isRequired,
    getTimeout: PropTypes.func.isRequired,
    timeout: PropTypes.shape.isRequired,
    setCompleteStep: PropTypes.func.isRequired,
    data: PropTypes.shape.isRequired,
    completeStep: PropTypes.bool.isRequired,
    getCompleteStep: PropTypes.func.isRequired,
    getClaimData: PropTypes.func.isRequired,
    files: PropTypes.arrayOf(PropTypes.object).isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      step: 4,
      position: 'relative-box',
      passwordToConfirm: '',
    };
  }
  componentDidMount() {
    // this.props.getSimpleReq();
    this.props.getTimeout();
    this.props.getCompleteStep();
    this.props.getClaimData();
  }
  changePositionPage = () => {
    if (this.state.position === 'relative-box') {
      this.setState({ position: 'fixed-box' });
    } else {
      this.setState({ position: 'relative-box' });
    }
  }
  handlePost = () => {
    const { passwordToConfirm } = this.state;
    const step = 0;
    this.props.setCompleteStep(passwordToConfirm, step);
  }
  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  render() {
    const { timeout, completeStep } = this.props;
    if (completeStep) {
      return <Redirect to="/bidding" />;
    }
    return (
      <div className={this.state.position}>
        <div className="ChooseInsurer">
          <NavInsure step={this.state.step} />
        </div>
        <div className="row">
          <Detail className="large-12 mediam-12 small-12 columns">
            <div className="menu-header custom-menu-header-grap-top">ส่งคำขอและรอการเสนอราคา</div>
            <div className="menu-add-plan-text custom-menu-add-plan-text-grap">
              กรุณาตรวจสอบแผนของคุณ
            </div>
            <Inner>
              <BoxIndiv>
                <ModalPlanBox changePositionPage={this.changePositionPage} />
              </BoxIndiv>
              <InsurerDiv>
                <div className="send-req-box-flex send-req-grap-top">
                  <TopicHead className="send-req-box-50">
                    รายชื่อบริษัทประกันและระยะเวลาในการเสนอประกัน
                  </TopicHead>
                  <Link to="chooseinsurer" className="send-req-box-50 send-req-r">
                    <Edit>
                      <Icon name="write" />แก้ไข
                    </Edit>
                  </Link >
                </div>
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
              <TopicHead className="send-req-grap-top">อัพโหลดไฟล์</TopicHead>
              <BoxIndiv>
                <UploadFile files={this.props.files} />
              </BoxIndiv>
            </Inner>
          </Detail>
        </div>
        <div className="choose-in-box-next-btn">
          <ModalConfirmPassword
            handlePost={this.handlePost}
            handleChange={this.handleChange}
            data={this.props.data}
            content="ส่งคำขอ"
            head="การส่งคำขอ"
          />
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  // getSimpleReq: () => dispatch(getSimpleRQ()),
  getTimeout: () => dispatch(getTimeout()),
  setCompleteStep: (passwordToConfirm, step) =>
  dispatch(setCompleteStep(passwordToConfirm, step)),
  getCompleteStep: () => dispatch(getCompleteStep()),
  getClaimData: () => dispatch(getClaimData()),
});
const mapStateToProps = state => ({
  timeout: state.setTimeOut.timeout,
  // simpleReq: state.fillsimpleReducer,
  files: state.profile.claimData,
  data: state.profile,
  completeStep: state.profile.completeStep[0],
});

export default connect(mapStateToProps, mapDispatchToProps)(Sendrequest);
