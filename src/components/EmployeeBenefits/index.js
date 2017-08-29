import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import '../../styles/employee-benefits.scss';
import MenuTab from './menu-tab';
import form from '../image/icons-8-form.png';
import SelectBox from './select-box';
import ModalWarningRecord from './modal-warning-record';
import ModalWarning from './modal-warning';
import NavBenefit from '../NavBenefit/';
import { getGroupBenefit, setGroupBenefit } from '../../api/profile-company';
import { getBenefitPlan } from '../../api/benefit-plan';

class employeeBenefits extends Component {
  static propTypes = {
    getGroupBenefit: PropTypes.func.isRequired,
    setGroupBenefit: PropTypes.func.isRequired,
    getBenefitPlan: PropTypes.func.isRequired,
    groupBenefit: PropTypes.shape.isRequired,
    benefitPlan: PropTypes.arrayOf(PropTypes.object).isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      selectGroup: false,
      selected: '',
      value: '',
      valueFixed: '',
      plan: '',
      selectPlan: [],
      selectOption: '',
      columnsLenght: 'large-11 columns',
      defaultPlan: '',
      activeGroup: '',
      verifyState: true,
      openModal: false,
      verifyChoosePlan: false,
      openWarningModal: false,
      warningMessage: '',
      step: 5,
    };
    props.getGroupBenefit();
    props.getBenefitPlan();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.activeGroup !== this.state.activeGroup) {
      const { activeGroup } = this.state;
      if (activeGroup !== '') {
        this.handleUpdate(activeGroup);
      }
    }
  }

  handleUpdate = activeGroup => {
    const { groupBenefit } = this.props;
    this.setState({
      selectPlan: groupBenefit[activeGroup].plan,
      plan: groupBenefit[activeGroup].type,
      selectOption: groupBenefit[activeGroup].type,
      defaultPlan: groupBenefit[activeGroup].default,
    });
    if (groupBenefit[activeGroup].type === 'Fixed') {
      this.setState({ columnsLenght: 'large-11 columns' });
    } else {
      this.setState({ columnsLenght: 'large-7 columns' });
    }
  }

  handleActiveGroup = index => {
    if (this.state.verifyState === false) {
      this.setState({ openModal: true });
    } else {
      this.setState({
        activeGroup: index,
        selectGroup: true,
        plan: '',
      });
    }
  }

  handleActivePlan = (index, value) => {
    const indexOfSelectPlan = this.state.selectPlan.indexOf(value);
    if (indexOfSelectPlan > -1) {
      this.setState({ defaultPlan: index });
    }
  }

  handleChangePlan = (e, { name, value }) => {
    const { activeGroup } = this.state;
    const { groupBenefit } = this.props;
    this.setState({ [name]: value });

    if (value === groupBenefit[activeGroup].type) {
      this.setState({ selectPlan: groupBenefit[activeGroup].plan });
    } else this.setState({ selectPlan: [] });

    if (value === 'Fixed') {
      this.setState({
        selectOption: 'Fixed',
        columnsLenght: 'large-11 columns',
      });
    } else {
      this.setState({
        selectOption: 'Flex',
        columnsLenght: 'large-7 columns',
      });
    }
  }

  handleFixedChange = value => {
    this.setState({ verifyState: false });
    this.setState({ verifyChoosePlan: true });
    if (this.state.selectPlan.length > 0) {
      this.state.selectPlan.pop();
      this.state.selectPlan.push(value);
    } else {
      this.state.selectPlan.push(value);
    }
  }

  handleSubmit = () => {
    if (this.state.verifyChoosePlan === false) {
      this.setState({ openWarningModal: true });
      this.setState({ warningMessage: 'คุณยังไม่ได้เลือกแผนสิทธิสำหรับกลุ่ม' });
    } else if (
      this.state.selectOption === 'Flex' &&
      this.state.defaultPlan === ''
    ) {
      this.setState({ openWarningModal: true });
      this.setState({ warningMessage: 'คุณยังไม่ได้ตั้งค่าแผนเริ่มต้น' });
    } else if (
      this.state.selectOption === 'Flex' &&
      this.state.selectPlan.length < 2
    ) {
      this.setState({ openWarningModal: true });
      this.setState({ warningMessage: 'Flex ต้องมีแผนที่เลือกอย่างน้อย 2 แผน' });
    } else {
      this.setState({ verifyState: true });
      const { activeGroup, selectPlan, defaultPlan, plan } = this.state;
      const { groupBenefit } = this.props;
      const detail = {
        name: groupBenefit[activeGroup].name,
        type: plan,
        plan: selectPlan,
        default: defaultPlan,
      };
      this.props.setGroupBenefit(activeGroup, detail);
    }
  }

  handleCloseModal = () => {
    this.setState({ openModal: false });
  }

  closeWarningModal = () => {
    this.setState({ openWarningModal: false });
  }

  handleFlexChange = (e, { value }) => {
    this.setState({ verifyState: false });
    this.setState({ verifyChoosePlan: true });
    if (this.state.selectPlan.length > 0) {
      const index = this.state.selectPlan.indexOf(value);
      if (index > -1) {
        this.state.selectPlan.splice(index, 1);
        if (this.state.defaultPlan === index) {
          this.setState({ defaultPlan: '' });
        }
      } else {
        this.state.selectPlan.push(value);
      }
    } else {
      this.state.selectPlan.push(value);
    }
  }

  render() {
    return (
      <div>
        <NavBenefit step={this.state.step} />
        <div className="employeeBenefits-box">
          <Container>
            <div className="row">
              <div className="large-10 large-centered columns">
                <p className="employeeBenefits-head-text">
                  จัดแผนสิทธิประโยชน์ให้พนักงานแต่ละกลุ่ม
                </p>
                <p>กรุณากดที่ชื่อกลุ่มของพนักงานเพื่อทำการจัดแผนสิทธประโยชน์</p>
                <div className="row">
                  <div className="large-3 columns">
                    <MenuTab
                      groupName={this.props.groupBenefit}
                      handleActiveGroup={this.handleActiveGroup}
                      activeGroup={this.state.activeGroup}
                    />
                  </div>
                  <div className="large-9 columns">
                    {this.state.selectGroup
                      ? <SelectBox
                        planName={this.props.benefitPlan}
                        plan={this.state.plan}
                        selectPlan={this.state.selectPlan}
                        selectOption={this.state.selectOption}
                        columnsLenght={this.state.columnsLenght}
                        handleChangePlan={this.handleChangePlan}
                        handleFixedChange={this.handleFixedChange}
                        handleFlexChange={this.handleFlexChange}
                        handleActivePlan={this.handleActivePlan}
                        defaultPlan={this.state.defaultPlan}
                        value={this.state.value}
                        valueFixed={this.state.valueFixed}
                        handleSubmit={this.handleSubmit}
                      />
                      : <div className="employeeBenefits-Start-box">
                        <div className="employeeBenefits-center-in-box">
                          <img src={form} alt="form" className="imageMenu" />
                          <p className="employeeBenefits-text-start-box">
                            ยังไม่มีการจัดแผนสิทธิประโยชน์
                            </p>
                        </div>
                      </div>}
                  </div>
                </div>
              </div>
            </div>
            <ModalWarningRecord
              openModal={this.state.openModal}
              handleCloseModal={this.handleCloseModal}
              handleSubmit={this.handleSubmit}
            />
            <ModalWarning
              openWarningModal={this.state.openWarningModal}
              warningMessage={this.state.warningMessage}
              closeWarningModal={this.closeWarningModal}
            />
          </Container>
        </div>
        <div className="row">
          <div className="large-3 large-offset-1 columns">
            <Link to="/download">
              <button className="back-step-button">กลับ</button>
            </Link>
          </div>
          <div className="large-3 large-offset-4 columns">
            <button className="next-step-button">ต่อไป</button>
          </div>
          <div className="large-1 columns" />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getGroupBenefit: () => dispatch(getGroupBenefit()),
  getBenefitPlan: () => dispatch(getBenefitPlan()),
  setGroupBenefit: (num, detail) => dispatch(setGroupBenefit(num, detail)),
});

const mapStateToProps = state => ({
  groupBenefit: state.profile.groupBenefit,
  benefitPlan: state.benefitPlan.plan,
});

export default connect(mapStateToProps, mapDispatchToProps)(employeeBenefits);
