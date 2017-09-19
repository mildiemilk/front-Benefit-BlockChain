import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import {
  Rec,
  Header,
  AddPlan,
  AddContent,
  HeaderSpace,
  Blog,
  BlogImg,
  BlogContent,
  BackButton,
  NextButton,
} from './styled';
import NavBenefit from '../NavBenefit';
import SettingPlan from './setting-plan';
import AddPlanBar from './add-planbar';
import {
  getTemplatePlan,
  getBenefitPlan,
  setBenefitPlan,
  getInsurancePlan,
} from '../../api/benefit-plan';

class SettingBenefit extends Component {
  static propTypes = {
    getBenefitPlan: PropTypes.func.isRequired,
    getInsurancePlan: PropTypes.func.isRequired,
    getTemplatePlan: PropTypes.func.isRequired,
    benefitPlan: PropTypes.arrayOf(PropTypes.object).isRequired,
    setBenefitPlan: PropTypes.func.isRequired,
    masterPlanList: PropTypes.arrayOf(PropTypes.object).isRequired,
    master: PropTypes.arrayOf(PropTypes.object).isRequired,
    insurer: PropTypes.arrayOf(PropTypes.object).isRequired,
    optionPlan: PropTypes.arrayOf(PropTypes.object).isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      step: 3,
      activePlan: '',
      emptyPlan: true,
      planName: '',
      plan: '',
      isHealth: false,
      isExpense: false,
      health: '',
      expense: '',
      planList: [],
      optionPlan: [],
    };
    props.getTemplatePlan();
    props.getInsurancePlan();
    props.getBenefitPlan();
  }

  componentDidMount() {
    // this.props.getBenefitPlan();
  }

  componentWillReceiveProps(newProps) {
    console.log('getState', this.state)
    console.log('SettingBenefit', this.props, newProps);

    if (newProps.benefitPlan.length === 0) {
      this.setState({ emptyPlan: true });
    } else {
      if (this.state.activePlan === '') {
        console.log('NewProps', newProps);
        const planList = newProps.benefitPlan;
        console.log('planList', planList);
        const index = 0;
        this.setState({
          activePlan: index,
          planName: planList[index].benefitPlanName,
          plan: planList[index].benefitPlan.plan.planId._id,
          isHealth: planList[index].benefitPlan.isHealth,
          isExpense: planList[index].benefitPlan.isExpense,
          health: planList[index].benefitPlan.health,
          expense: planList[index].benefitPlan.expense,
          emptyPlan: false,
        }, () => console.log('state', this.state));
      }
    }

    if (newProps.benefitPlan !== this.props.benefitPlan) {
      this.setState({ planList: newProps.benefitPlan },
        () => console.log('planList', this.state.planList));
    }
    if (newProps.masterPlanList !== this.props.masterPlanList) {
      const optionPlan = newProps.masterPlanList.concat(newProps.insurerPlanList);
      this.setState({
        optionPlan,
      }, () => console.log('option-plan', this.state.optionPlan));
    }
    if (newProps.master !== this.props.master && newProps.insurer !== this.props.insurer) {
      const templatePlan = newProps.master.concat(newProps.insurer);
      this.setState({
        templatePlan,
      }, () => console.log('template-plan', this.state.templatePlan));
    }
  }
  getPlanName = planId => {
    const { templatePlan } = this.state;
    if (templatePlan !== undefined && templatePlan.length >= 1) {
      const result = templatePlan.filter(plan => plan.plan._id === planId);
      console.log('ttem', templatePlan, 'planID', planId);
      console.log('result', result);
      // return result[0].plan.planName;
    }
    return '';
  }

  getPlan = plan => {
    const { master } = this.props.optionPlan.choosePlan;
    const isMaster = master.some(element => element.planId === plan);
    if (isMaster) {
      return Object.assign({}, {
        planId: plan,
        type: 'MasterPlan',
      });
    }
    return Object.assign({}, {
      planId: plan,
      type: 'InsurerPlan',
    });
  }

  handleAddPlan = () => {
    this.setState({
      activePlan: '',
      emptyPlan: false,
      planName: '',
      plan: '',
      isHealth: false,
      isExpense: false,
      health: '',
      expense: '',
    });
  }

  handleDeletePlan = () => {
    const { activePlan, planList } = this.state;
    planList.splice(activePlan, 1);
    this.props.setBenefitPlan(this.state.planList);
    this.handleAddPlan();
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleToggle = (e, { name, checked }) => {
    this.setState({ [name]: !checked }, () => {
      if (!this.state.isHealth) this.setState({ health: '' });
      if (!this.state.isExpense) this.setState({ expense: '' });
    });
  }

  handleSubmit = e => {
    e.preventDefault();
    const {
      planName,
      isHealth,
      isExpense,
      health,
      expense,
      activePlan,
    } = this.state;
    const plan = this.getPlan(this.state.plan);
    const benefitPlan = { plan, isHealth, isExpense, health, expense };
    let benefitPlanId = null;
    if (activePlan !== '') {
      const { benefitPlan } = this.props;
      benefitPlanId = benefitPlan[activePlan]._id;
    }
    const setPlan = {
      benefitPlanId,
      planName,
      benefitPlan,
    }
    this.props.setBenefitPlan(setPlan);
    console.log('submit', setPlan);
  }

  handleActivePlan = index => {
    const { planList } = this.state;
    console.log('plnnnn', planList);
    this.setState({
      activePlan: index,
      planName: planList[index].benefitPlanName,
      plan: planList[index].benefitPlan.plan.planId._id,
      isHealth: planList[index].benefitPlan.isHealth,
      isExpense: planList[index].benefitPlan.isExpense,
      health: planList[index].benefitPlan.health,
      expense: planList[index].benefitPlan.expense,
    });
  }
  renderOption = (optionPlan, templatePlan) => {
    if (optionPlan !== undefined && optionPlan.length >= 1) {
      const newplan =
      templatePlan.filter(plan => optionPlan.map(
        option => option.planId === plan.plan._id).indexOf(true) !== -1);
      return newplan;
    }
    return '';
  }

  render() {
    console.log('state plan', this.props);
    return (
      <div className="SettingBenefit">
        <NavBenefit step={this.state.step} />
        <div className="row">
          <Rec>
            <HeaderSpace className="row">
              <div className="large-4 large-offset-1 columns">
                <Header>
                  จัดแผนสิทธิประโยชน์ที่ต้องการ
                </Header>
              </div>
            </HeaderSpace>

            <div className="row">
              <div className="large-2 large-offset-1 columns">
                {!this.state.emptyPlan
                  ? <AddPlanBar
                    plan={this.state.planList}
                    handleActivePlan={this.handleActivePlan}
                    handleDeletePlan={this.handleDeletePlan}
                    activePlan={this.state.activePlan}
                  />
                  : null}

                <AddPlan onClick={this.handleAddPlan}>
                  <AddContent>
                    <Icon disabled name="add circle" />
                    เพิ่มแผนสิทธิประโยชน์
                  </AddContent>
                </AddPlan>

              </div>

              <div className="large-8 columns">
                {!this.state.emptyPlan
                  ? <SettingPlan
                    option={this.renderOption(this.state.optionPlan, this.state.templatePlan)}
                    optionPlan={this.props.optionPlan}
                    handleChange={this.handleChange}
                    handleToggle={this.handleToggle}
                    handleSubmit={this.handleSubmit}
                    planName={this.state.planName}
                    plan={this.state.plan}
                    isHealth={this.state.isHealth}
                    isExpense={this.state.isExpense}
                    health={this.state.health}
                    expense={this.state.expense}
                  />
                  : <Blog>
                    <BlogImg src="../../../setbenefit/icons-8-form.png" />
                    <BlogContent>
                      {' '}ยังไม่มีการสร้างแผนสิทธิประโยชน์{' '}
                    </BlogContent>
                  </Blog>}

              </div>

              <div className="large-1 columns" />

            </div>
          </Rec>

          <div className="row">
            <div className="large-3 large-offset-1 columns">
              <Link to="/addbenefit">
                <BackButton>
                  กลับ
                </BackButton>
              </Link>
            </div>

            <div className="large-2 large-offset-5 columns">
              <Link to="/download">
                <NextButton>
                  ต่อไป
                </NextButton>
              </Link>
            </div>

            <div className="large-1 columns" />

          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getTemplatePlan: () => dispatch(getTemplatePlan()),
  getBenefitPlan: () => dispatch(getBenefitPlan()),
  getInsurancePlan: () => dispatch(getInsurancePlan()),
  setBenefitPlan: plan => dispatch(setBenefitPlan(plan)),
});

const mapStateToProps = state => ({
  optionPlan: state.choosePlan,
  masterPlanList: state.choosePlan.choosePlan.master,
  insurerPlanList: state.choosePlan.choosePlan.insurer,
  master: state.choosePlan.insurancePlan.master,
  insurer: state.choosePlan.insurancePlan.insurer,
  benefitPlan: state.benefitPlan.plan,
});

export default connect(mapStateToProps, mapDispatchToProps)(SettingBenefit);
