import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
import _ from 'lodash';
import {
  Rec,
  Header,
  AddPlan,
  AddContent,
  HeaderSpace,
  Blog,
  BlogImg,
  BackButton,
  NextButton,
  DivContent,
} from './styled';
import ModalWarning from '../ModalWarning';
import NavBenefit from '../NavBenefit';
import SettingPlan from './setting-plan';
import AddPlanBar from './add-planbar';
// import noPlan from '../../../assets/setbenefit/icons-8-form.png';
import {
  getTemplatePlan,
  getBenefitPlan,
  getInsurancePlan,
  setBenefitPlan,
  deletePlan,
} from '../../api/benefit-plan';

class SettingBenefit extends Component {
  static propTypes = {
    getBenefitPlan: PropTypes.func.isRequired,
    getInsurancePlan: PropTypes.func.isRequired,
    getTemplatePlan: PropTypes.func.isRequired,
    benefitPlan: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    // setBenefitPlan: PropTypes.func.isRequired,
    masterPlanList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    master: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    insurer: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    optionPlan: PropTypes.shape({}).isRequired,
    // deletePlan: PropTypes.func.isRequired,
  }
  static defaultProps = {
    masterPlanList: [],
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
      selectPlan: [],
      templatePlan: [],
      updateResult: false,
      openWarning: '',
      warningMessage: '',
      redirect: false,
      newBenefitPlan: -1,
    };
    props.getTemplatePlan();
    props.getInsurancePlan();
    props.getBenefitPlan();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.benefitPlan.length === 0) {
      this.setState({ emptyPlan: true });
    } else {
      if (this.state.activePlan === '') {
        if (!_.isEqual(newProps.benefitPlan.sort(), this.props.benefitPlan.sort())) {
          const planList = newProps.benefitPlan;
          let index = 0;
          if (this.state.newBenefitPlan !== -1) {
            index = this.state.newBenefitPlan;
          }
          this.setState({
            activePlan: index,
            planName: planList[index].benefitPlanName,
            plan: planList[index].benefitPlan.plan.planId._id,
            isHealth: planList[index].benefitPlan.isHealth,
            isExpense: planList[index].benefitPlan.isExpense,
            health: planList[index].benefitPlan.health ? planList[index].benefitPlan.health : -1,
            expense: planList[index].benefitPlan.expense ? planList[index].benefitPlan.expense : -1,
            emptyPlan: false,
            planList,
          });
        }
      } else {
        const planList = newProps.benefitPlan;
        let index = 0;
        if (this.state.newBenefitPlan !== -1) {
          index = this.state.newBenefitPlan;
        } else if (this.state.activePlan !== '') {
          index = this.state.activePlan;
        }
        this.setState({
          activePlan: index,
          planName: planList[index].benefitPlanName,
          plan: planList[index].benefitPlan.plan.planId._id,
          isHealth: planList[index].benefitPlan.isHealth,
          isExpense: planList[index].benefitPlan.isExpense,
          health: planList[index].benefitPlan.health ? planList[index].benefitPlan.health : -1,
          expense: planList[index].benefitPlan.expense ? planList[index].benefitPlan.expense : -1,
          emptyPlan: false,
          planList,
          newBenefitPlan: -1,
        });
      }
    }
    if (newProps.masterPlanList !== this.props.masterPlanList) {
      const selectPlan = newProps.masterPlanList.concat(newProps.insurerPlanList);
      this.setState({
        selectPlan,
      });
    }
    if (newProps.master !== this.props.master && newProps.insurer !== this.props.insurer) {
      const templatePlan = newProps.master.concat(newProps.insurer);
      this.setState({
        templatePlan,
      });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.updateResult) {
      this.setState({ updateResult: false });
      this.props.getTemplatePlan();
      this.props.getInsurancePlan();
      this.props.getBenefitPlan();
    }
  }

  getPlanName = planId => {
    const { templatePlan } = this.state;
    if (templatePlan !== undefined && templatePlan.length >= 1) {
      templatePlan.filter(plan => plan.plan._id === planId);
      // const result = templatePlan.filter(plan => plan.plan._id === planId);
    }
    return '';
  }

  getPlan = plan => {
    const { optionPlan: { choosePlan: { master } } } = this.props;
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

  handleDeletePlan = id => {
    const { activePlan } = this.state;
    this.state.planList.splice(activePlan, 1);
    deletePlan(id)
    .then(() => {
      this.setState({ updateResult: true, newBenefitPlan: -1 });
    });
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
    const { optionPlan: { detailPlan } } = this.props;
    const benefitPlan = { plan, isHealth, isExpense, health, expense, detailPlan };
    let benefitPlanId = null;
    let newBenefitPlan = this.props.benefitPlan.length;
    if (activePlan !== '') {
      const { benefitPlan } = this.props;
      benefitPlanId = benefitPlan[activePlan]._id;
      newBenefitPlan = activePlan;
    }
    const setPlan = {
      benefitPlanId,
      planName,
      benefitPlan,
    };
    setBenefitPlan(setPlan)
    .then(() => {
      this.setState({ updateResult: true, newBenefitPlan });
    });
  }
  handleNext = () => {
    if (this.state.plan === '') {
      this.setState({
        openWarningModal: true,
        warningMessage: 'กรุณาสร้างแผนสิทธิประโยชน์',
      });
      return '';
    }
    this.setState({ redirect: true });
    return '';
  }
  handleActivePlan = index => {
    const { planList } = this.state;
    this.setState({
      activePlan: index,
      planName: planList[index].benefitPlanName,
      plan: planList[index].benefitPlan.plan.planId._id,
      isHealth: planList[index].benefitPlan.isHealth,
      isExpense: planList[index].benefitPlan.isExpense,
      health: planList[index].benefitPlan.health,
      expense: planList[index].benefitPlan.expense,
      newBenefitPlan: -1,
    });
  }
  closeWarningModal = () => {
    this.setState({ openWarningModal: false });
  }
  handleUpdateResult = () => this.setState({ updateResult: true });

  renderOption = (optionPlan, templatePlan) => {
    if (optionPlan !== undefined && optionPlan.length >= 1) {
      const newplan =
      templatePlan.filter(plan => optionPlan.map(
        option => option.planId === plan.plan._id).indexOf(true) !== -1);
      return newplan;
    }
    return [];
  }

  render() {
    const { redirect } = this.state;
    if (redirect) {
      this.setState({ redirect: false });
      return <Redirect to="/Download" />;
    }
    return (
      <div className="SettingBenefit">
        <NavBenefit step={this.state.step} />
        <Rec>
          <HeaderSpace>
            <Header>
              จัดแผนสิทธิประโยชน์ที่ต้องการ
            </Header>
          </HeaderSpace>
          <DivContent>
            {!this.state.emptyPlan
              ? <AddPlanBar
                plan={this.state.planList}
                handleActivePlan={this.handleActivePlan}
                handleDeletePlan={() =>
                this.handleDeletePlan(this.state.planList[this.state.activePlan]._id)}
                activePlan={this.state.activePlan}
              />
              : <div />}
            <AddPlan onClick={this.handleAddPlan}>
              <AddContent>
                <Icon disabled name="add circle" size="large" />
                เพิ่มแผนสิทธิประโยชน์
              </AddContent>
            </AddPlan>
          </DivContent>
          {!this.state.emptyPlan
            ? <SettingPlan
              option={this.renderOption(this.state.selectPlan, this.state.templatePlan)}
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
              handleSave={''}
            />
            : <Blog>
              <BlogImg onClick={this.handleAddPlan}>
                <Icon disabled name="add circle" size="huge" />
                <div>
                  {' '}สร้างแผนสิทธิประโยชน์{' '}
                </div>
              </BlogImg>
            </Blog>}
        </Rec>

        <div className="row">
          <div className="large-2 large-offset-1 columns">
            <Link to="/addbenefit">
              <BackButton>
                กลับ
              </BackButton>
            </Link>
          </div>
          <div className="large-2 large-offset-7 end columns">
            <NextButton onClick={this.handleNext} >
              ต่อไป
            </NextButton>
          </div>
        </div>
        <ModalWarning
          openWarningModal={this.state.openWarningModal}
          warningMessage={this.state.warningMessage}
          closeWarningModal={this.closeWarningModal}
        />
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  getTemplatePlan: () => dispatch(getTemplatePlan()),
  getBenefitPlan: () => dispatch(getBenefitPlan()),
  getInsurancePlan: () => dispatch(getInsurancePlan()),
  setBenefitPlan: plan => dispatch(setBenefitPlan(plan)),
  deletePlan: benefitPlanId => dispatch(deletePlan(benefitPlanId)),
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
