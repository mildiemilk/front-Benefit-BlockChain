import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import gift from '../../image/gigift-mobile.png';
import { getAllBenefit } from '../../../api/Employee/plan';

const m = [
  'มกราคม',
  'กุมภาพันธ์',
  'มีนาคม',
  'เมษายม',
  'พฤษภาคม',
  'มิถุนายน',
  'กรกฎาคม',
  'สิงหาคม',
  'กันยายน',
  'ตุลาคม',
  'พฤศจิกายน',
  'ธันวาคม'];

class DashboardStart extends Component {
  static propTypes = {
    getAllBenefit: PropTypes.func.isRequired,
    data: PropTypes.shape({}).isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      date: 0,
      month: 0,
      year: 0,
    };
    props.getAllBenefit();
  }

  componentWillReceiveProps(nextProps) {
    const { data } = nextProps;
    const timeout = data.allBenefit[0].effectiveDate;
    const getDate = new Date(timeout);
    const date = getDate.getDate();
    const month = getDate.getMonth();
    let year = getDate.getFullYear();
    year += 543;
    this.setState({ date, month, year });
  }

  render() {
    const { date, month, year } = this.state;
    return (
      <div className="dashboard-start">
        <div className="row">
          <div className="small-10 small-centered columns">
            <div className="dashboard-start-box">
              <img src={gift} alt="gift" />
              <ul className="text-dashboard-start">
                <li>สิทธิประโยชน์ของคุณจะเริ่มมีผล</li>
                <li>วันที่ {date} {m[month]} {year}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getAllBenefit: () => dispatch(getAllBenefit()),
});
const mapStateToProps = state => ({
  data: {
    ...state.getAllBenefitReducer,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardStart);
