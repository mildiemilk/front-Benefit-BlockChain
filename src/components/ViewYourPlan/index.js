import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Head from '../Head';
import { Detail } from '../StyleComponent';
import { getGroupBenefit, getSummaryEmployee } from '../../api/profile-company';
import { getBenefitPlan } from '../../api/benefit-plan';
import MenuTab from '../EmployeeBenefits/menu-tab';
import SelectBox from './SelectBox';
import { DivHeight } from '../SendFlexPlan/EmployeeBenefits/styled';

class EmployeeBenefits extends Component {
  static propTypes = {
    getGroupBenefit: PropTypes.func.isRequired,
    getBenefitPlan: PropTypes.func.isRequired,
    groupBenefit: PropTypes.arrayOf(PropTypes.object).isRequired,
    benefitPlan: PropTypes.shape({}).isRequired,
    summaryEmployee: PropTypes.arrayOf(PropTypes.object).isRequired,
    getSummaryEmployee: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      selected: '',
      value: '',
      valueFixed: '',
      plan: '',
      selectPlan: [],
      selectOption: '',
      columnsLenght: 'large-11 columns',
      defaultPlan: '',
      activeGroup: 0,
    };
    props.getGroupBenefit();
    props.getBenefitPlan();
  }
  componentDidMount() {
    this.props.getSummaryEmployee();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.activeGroup !== this.state.activeGroup) {
      const { activeGroup } = this.state;
      if (activeGroup !== '') {
        this.handleUpdate(activeGroup);
      }
    }
  }
  handleActiveGroup = index => {
    this.setState({
      activeGroup: index,
      plan: '',
    });
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
  handleActivePlan = (index, value) => {
    const indexOfSelectPlan = this.state.selectPlan.indexOf(value);
    if (indexOfSelectPlan > -1) {
      this.setState({ defaultPlan: index });
    }
  }
  render() {
    console.log('group', this.props.groupBenefit);
    console.log('benefit', this.props.benefitPlan);
    console.log('active', this.state.activeGroup);
    console.log('summary employee', this.props.summaryEmployee.length);
    if (this.props.summaryEmployee[this.state.activeGroup]) {
      console.log('ee', this.props.summaryEmployee[this.state.activeGroup]);
    }
    if (this.props.benefitPlan) {
      console.log('pp', this.props.benefitPlan);
    }
    return (
      <div>
        <Head content="แผนสิทธิประโยชน์ของคุณ" />
        <Detail>
          <div className="row">
            <div className="large-3 columns">
              <DivHeight>
                <MenuTab
                  groupName={this.props.groupBenefit}
                  handleActiveGroup={this.handleActiveGroup}
                  activeGroup={this.state.activeGroup}
                />
              </DivHeight>
            </div>
            <div className="large-9 columns">
              {this.props.summaryEmployee.length > 0 && this.props.benefitPlan
              ? <SelectBox
                groupName={this.props.summaryEmployee[this.state.activeGroup].groupName}
                numberOfGroup={this.props.summaryEmployee[this.state.activeGroup].amountOfPlan}
                benefitPlan={this.props.benefitPlan}
                type={this.props.summaryEmployee[this.state.activeGroup].type}
                default={this.props.summaryEmployee[this.state.activeGroup].defaultPlan}
                planDetail={this.props.summaryEmployee}
                summaryEmployee={this.props.summaryEmployee}
              />
              : <div>ertt</div>
              }
            </div>
          </div>
        </Detail>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getGroupBenefit: () => dispatch(getGroupBenefit()),
  getBenefitPlan: () => dispatch(getBenefitPlan()),
  getSummaryEmployee: () => dispatch(getSummaryEmployee()),
});

const mapStateToProps = state => ({
  groupBenefit: state.profile.groupBenefit,
  benefitPlan: state.benefitPlan,
  summaryEmployee: state.profile.summaryEmployee,
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeBenefits);
