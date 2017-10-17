import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getGroupBenefit } from '../../../api/profile-company';
import { getBenefitPlan } from '../../../api/benefit-plan';
import MenuTab from '../../EmployeeBenefits/menu-tab';
import SelectBox from './SelectBox';
import { DivHeight } from './styled';

class EmployeeBenefits extends Component {
  static propTypes = {
    getGroupBenefit: PropTypes.func.isRequired,
    getBenefitPlan: PropTypes.func.isRequired,
    groupBenefit: PropTypes.arrayOf(PropTypes.object).isRequired,
    benefitPlan: PropTypes.arrayOf(PropTypes.object).isRequired,
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
  }
  componentDidMount() {
    this.props.getGroupBenefit();
    this.props.getBenefitPlan();
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
    return (
      <div className="row">
        <div className="large-3 columns">
          <DivHeight>
            {this.props.groupBenefit.length >= 1
            ? <MenuTab
              groupName={this.props.groupBenefit}
              handleActiveGroup={this.handleActiveGroup}
              activeGroup={this.state.activeGroup}
            />
            : <div>dgfdfg</div>
            }
          </DivHeight>
        </div>
        <div className="large-9 columns">
          {this.props.groupBenefit.length !== 0 && this.props.benefitPlan.length !== 0
          ? <SelectBox
            groupName={this.props.groupBenefit[this.state.activeGroup].groupName}
            plan={this.props.groupBenefit[this.state.activeGroup].benefitPlan}
            benefitPlan={this.props.benefitPlan}
            numberOfGroup={this.props.groupBenefit[this.state.activeGroup].amount}
            type={this.props.groupBenefit[this.state.activeGroup].type}
            default={this.props.groupBenefit[this.state.activeGroup].defaultPlan}
          />
          : <div />
          }
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getGroupBenefit: () => dispatch(getGroupBenefit()),
  getBenefitPlan: () => dispatch(getBenefitPlan()),
});

const mapStateToProps = state => ({
  groupBenefit: state.profile.groupBenefit,
  benefitPlan: state.benefitPlan.plan,
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeBenefits);
