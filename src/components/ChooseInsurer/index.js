import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
// import { ToastContainer } from 'react-toastify';
import 'rc-time-picker/assets/index.css';
import 'react-datepicker/dist/react-datepicker.css';
import _ from 'lodash';
// import 'react-toastify/dist/ReactToastify.min.css';
import {
  setTimeOut,
  chooseInsurer,
  getAllInsurer,
  getSelectInsurer,
  getTimeout,
} from '../../api/choose-insurer';
import NavInsure from '../NavInsure';
import {
  Detail,
  SideIn,
  Card,
  Logo,
} from './styled';
import Timeout from './timeout';
import Toastify from '../Tostify';
import ToastifyContent from '../ToastifyContent';

class InsurerSelect extends Component {
  static propTypes = {
    nums: PropTypes.number.isRequired,
    getAllInsurer: PropTypes.func.isRequired,
    getSelectInsurer: PropTypes.func.isRequired,
    setTimeOut: PropTypes.func.isRequired,
    insurerList: PropTypes.arrayOf(PropTypes.object).isRequired,
    chooseInsurer: PropTypes.func.isRequired,
    timeout: PropTypes.string.isRequired,
    getTimeout: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    const { nums } = props;
    this.state = {
      step: 2,
      num: nums !== undefined ? nums : 0,
      insurers: [],
      isSave: false,
    };
    props.getTimeout();
  }

  componentDidMount() {
    this.props.getAllInsurer();
    this.props.getSelectInsurer();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.insurerChecked !== this.state.insurers && !this.state.isSave) {
      this.setState({
        insurers: newProps.insurerChecked,
        num: newProps.nums !== undefined ? newProps.nums : 0,
      });
    }
  }

  handleDefaultCheck = e => {
    const matchedInsurer = _.find(this.state.insurers, {
      companyName: e.companyName,
    });
    if (matchedInsurer !== undefined) {
      return true;
    }
    return false;
  }
  handleCheck = e => {
    if (e.target.checked) {
      this.setState({
        num: this.state.num + 1,
        insurers: this.state.insurers.concat(
          this.props.insurerList[e.target.id],
        ),
      });
    } else {
      const index = this.state.insurers.findIndex(
        element =>
          this.props.insurerList[e.target.id].companyName ===
          element.companyName,
      );
      let result = this.state.insurers;
      result = result.filter((insurer, i) => i !== index);

      this.setState({
        num: this.state.num - 1,
        insurers: result,
      });
    }
  }

  handleSubmit = () => {
    toast(<ToastifyContent />);
    this.setState({
      isSave: true,
    });
    this.props.chooseInsurer(this.state.insurers);
  }

  renderList = () => {
    const { insurerList } = this.props;
    const list = insurerList.map((insurer, index) => (
      <Card className="large-2 mediam-2 small-2 columns" key={index.toString()}>
        <div className="choose-in-box-select-in choose-in-box-grap-a">
          <div className="choose-in-in-name">
            {insurer.companyName}
          </div>
          <div className="choose-ip-box-ip">
            <input
              className="choose-in-ip-select-in"
              type="checkbox"
              id={index}
              align="middle"
              onChange={this.handleCheck}
              checked={this.handleDefaultCheck(insurer)}
            />
          </div>
        </div>
        <div className="choose-in-img-in-box">
          <Logo src={insurer.logo.link} alt="logo" />
        </div>
      </Card>
    ));
    return list;
  }

  render() {
    const { timeout } = this.props;
    let time = '';
    if (timeout !== '') {
      time = timeout;
    }
    return (
      <div className="ChooseInsurer">
        <NavInsure step={this.state.step} />
        <div className="row">
          <Detail className="large-12 mediam-12 small-12 columns">
            <div className="row">
              <div className="menu-header custom-menu-header-grap-top"> เปรียบเทียบแผนประกันภัย </div>
            </div>
            <div className="row">
              <SideIn>
                <div className="choose-in-box-select-in">
                  <span className="choose-in-count-comp">
                    จำนวนบริษัทประกันที่เลือก {this.state.num} บริษัท
                  </span>
                  {/* <SubmitInsure onClick={this.handleSubmit}>
                    บันทึก
                  </SubmitInsure> */}
                  <Toastify handleSubmit={this.handleSubmit} />
                </div>
                <div className="row">
                  {this.renderList()}
                </div>
              </SideIn>
              <SideIn>
                <span className="insure">
                  ตั้งระยะเวลาการเสนอราคาของประกัน
                </span>
                <p className="insure">
                  บริษัทประกันสามารถเสนอราคาได้ภายใน
                </p>
                <Timeout setTimeout={this.props.setTimeOut} timeout={time} />
              </SideIn>
            </div>
          </Detail>
        </div>
        <div className="choose-in-box-next-btn">
          <Link to="/uploadfile">
            <button className="submit-plan-btn-form-submit-plan btn-red">ต่อไป</button>
          </Link>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setTimeOut: timeout => dispatch(setTimeOut(timeout)),
  getTimeout: () => dispatch(getTimeout()),
  chooseInsurer: insurers => dispatch(chooseInsurer(insurers)),
  getAllInsurer: () => dispatch(getAllInsurer()),
  getSelectInsurer: () => dispatch(getSelectInsurer()),
});

const mapStateToProps = state => ({
  timeout: state.setTimeOut.timeout,
  insurerList: state.getAllInsurer,
  insurerChecked: state.getSelectInsurer.defaultInsurer,
  chooseInsurerStatus: state.chooseInsurerReducerStatus,
  nums: state.getSelectInsurer.defaultInsurer.length,
});

export default connect(mapStateToProps, mapDispatchToProps)(InsurerSelect);
