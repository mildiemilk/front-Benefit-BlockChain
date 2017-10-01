import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ChangePlanModal from './confirm-change-plan-modal';
import DeadlineBox from '../flexy-plan/deadline-box';
import selectPlanImage from '../../../../assets/employee/congrat_select_plan.png';
import { getAllBenefit, confirmPlan } from '../../../api/Employee/plan';

const m = [
  'ม.ค.',
  'ก.พ.',
  'มี.ค.',
  'เม.ย.',
  'พ.ค.',
  'มิ.ย.',
  'ก.ค.',
  'ส.ค.',
  'ก.ย.',
  'ต.ค.',
  'พ.ย.',
  'ธ.ค.',
];

class CongrateSelectPlan extends Component {
  static propTypes = {
    getAllBenefit: PropTypes.func.isRequired,
    data: PropTypes.shape({}).isRequired,
    confirmPlan: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    props.getAllBenefit();
    props.confirmPlan();
    this.state = {
      openModal: false,
      currentSelect: null,
      date: 0,
      month: 0,
      year: 0,
    };
  }

  componentWillReceiveProps(nextProps) {
    const { data } = nextProps;
    const timeout = data.allBenefit[0].timeout;
    const getDate = new Date(timeout);
    const date = getDate.getDate();
    const month = getDate.getMonth();
    let year = getDate.getFullYear();
    year += 543;
    year = year.toString().slice(2);
    this.setState({ date, month, year });
    data.allBenefit.forEach((item, i) => {
      if (item._id === data.currentSelect) {
        this.setState({ currentSelect: i + 1 });
      }
    });
  }

  handleCloseModal = () => {
    this.setState({ openModal: false });
  }

  handleOpenModal = () => {
    this.setState({ openModal: true });
  }

  render() {
    const { currentSelect, date, month, year } = this.state;
    const { data } = this.props;
    if (data !== undefined && data.allBenefit.length > 0 && data.currentSelect !== undefined) {
      const timeout = data.allBenefit[0].timeout;
      return (
        <div>
          <div className="row">
            <div className="small-10 small-centered columns">
              <div className="select-plan-box">
                <span className="select-plan-header-text">คุณกำลังเลือกแผนที่ {currentSelect}</span>
                <img
                  className="select-plan-image"
                  alt="select-plan"
                  src={selectPlanImage}
                />
                <ul className="select-plan-header-description">
                  <li>คุณเลือกแผนเรียบร้อยแล้ว</li>
                  <li>รอดำเนินการในขั้นตอนต่อไป</li>
                </ul>
              </div>
              <div className="show-deadline-box">
                <p>สามารถเปลี่ยนแผนได้ก่อนวันที่ {date} {m[month]} {year}</p>
                <DeadlineBox timeout={timeout} />
              </div>
              <button className="select-plan-change" onClick={() => this.handleOpenModal()}>
                ต้องการเปลี่ยนแผน?
              </button>
              <a className="select-plan-view-plan" href="/plan/1">ดูแผนที่เลือก</a>
            </div>
          </div>
          <ChangePlanModal
            openModal={this.state.openModal}
            handleCloseModal={this.handleCloseModal}
          />
        </div>
      );
    }
    return (<div />);
  }
}

// export default CongrateSelectPlan;
const mapDispatchToProps = dispatch => ({
  getAllBenefit: () => dispatch(getAllBenefit()),
  confirmPlan: () => dispatch(confirmPlan()),
});
const mapStateToProps = state => ({
  data: {
    ...state.getAllBenefitReducer,
    ...state.confirmPlanReducer,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(CongrateSelectPlan);
