import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { Message } from 'semantic-ui-react';
import {
  Detail,
  Head,
  Inner,
  InnerRight,
  Submit,
  Inboxtext,
  TextInbox,
  InnerHead,
  InnerHead2,
  AccordionStyle,
  AccordionStyle2,
  EmptyPlan,
  EmptyPlanText,
} from './styled';
import NavBenefit from '../NavBenefit';
import PlanTemplate from './plantemplate';
// import { getAllPlan } from '../../api/set-plan';
import { choosePlan, getInsurancePlan, getTemplatePlan } from '../../api/benefit-plan';

class ChooseInsurancePlan extends Component {
  static propTypes = {
    getInsurancePlan: PropTypes.func.isRequired,
    getTemplatePlan: PropTypes.func.isRequired,
    choosePlan: PropTypes.func.isRequired,
    choosePlans: PropTypes.arrayOf(PropTypes.object).isRequired,
    planList: PropTypes.arrayOf(PropTypes.object).isRequired,
    insurerPlanList: PropTypes.arrayOf(PropTypes.object).isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      step: 1,
      ChooseColor: [],
      PlanTemplateState: 1,
      ChooseInsurance: [],
      OurPlan: [],
      SpecialPlan: [],
      closetap: true,
      planList: [],
    };
    props.getInsurancePlan();
    props.getTemplatePlan();
  }
  // componentDidMount() {
  //   this.props.getInsurancePlan();
  //   // this.props.getOptionPlan();
  // }

  componentWillReceiveProps(newProps) {
    console.log('newProps', newProps);
    if (newProps.choosePlans !== this.props.choosePlans ||
      newProps.planList !== this.props.planList) {
      if (newProps.choosePlans !== undefined) {
        const choosePlans = newProps.choosePlans.master.concat(newProps.choosePlans.insurer);
        const Allplan = newProps.planList.concat(newProps.insurerPlanList);
        // const AllYourPlan = newProps.choosePlans.master.concat(newProps.choosePlans.insurer);
        this.setState({
          ChooseInsurance: this.tranformPlan(choosePlans, Allplan),
          planList: newProps.planList,
          // OurPlan: this.filterPlan(newProps.planList, AllYourPlan),
          // SpecialPlan: this.filterPlan(newProps.insurerPlanList, AllYourPlan),
        });
      }
    }
    if (newProps.planList !== this.props.planList) {
      const Allplan = newProps.planList.concat(newProps.insurerPlanList);
      const choosePlans = newProps.choosePlans.master.concat(newProps.choosePlans.insurer);
      const ChooseInsurance = this.tranformPlan(choosePlans, Allplan);
      this.setState({
        OurPlan: this.filterPlan(newProps.planList, ChooseInsurance),
        SpecialPlan: this.filterPlan(newProps.insurerPlanList, ChooseInsurance),
      });
    }
  }

  tranformPlan = (choosePlans, Allplan) => {
    if (choosePlans !== undefined && choosePlans.length >= 1) {
      const newplan =
      Allplan.filter(plan => choosePlans.map(
        choose => choose.planId === plan.plan._id).indexOf(true) !== -1);
      return newplan;
    }
    return [];
  }

  filterPlan = (plans, choosePlan) => {
    if (choosePlan !== undefined && choosePlan.length >= 1) {
      const newPlans = plans.filter(plan =>
        choosePlan.map(choose => choose.plan._id !== plan.plan._id).indexOf(false) === -1);
      return newPlans;
    }
    return plans;
  }

  handleDeleteOurplan = index => {
    const file = this.state.OurPlan[index];
    let OurPlans = this.state.OurPlan;
    OurPlans = OurPlans.filter((plan, i) => i !== index);
    this.setState({
      ChooseInsurance: this.state.ChooseInsurance.concat(file),
      OurPlan: OurPlans,
      ChooseColor: this.state.ChooseColor.concat(1),
    });
  }

  handleDeleteSpecialPlan = index => {
    const file = this.state.SpecialPlan[index];
    let SpecialPlans = this.state.SpecialPlan;
    SpecialPlans = SpecialPlans.filter((plan, i) => i !== index);
    SpecialPlans.splice(index, 1);
    this.setState({
      ChooseInsurance: this.state.ChooseInsurance.concat(file),
      SpecialPlan: SpecialPlans,
      ChooseColor: this.state.ChooseColor.concat(2),
    });
  }

  handleDeleteChooseInsurance = (index, Color) => {
    if (Color === 1) {
      const file = this.state.ChooseInsurance[index];
      const ChooseInsurances = this.state.ChooseInsurance;
      const ChooseColors = this.state.ChooseColor;
      ChooseInsurances.splice(index, 1);
      ChooseColors.splice(index, 1);
      this.setState({
        OurPlan: this.state.OurPlan.concat(file),
        ChooseInsurance: ChooseInsurances,
        ChooseColor: ChooseColors,
      });
    } else {
      const file = this.state.ChooseInsurance[index];
      const ChooseInsurances = this.state.ChooseInsurance;
      const ChooseColors = this.state.ChooseColor;
      ChooseInsurances.splice(index, 1);
      ChooseColors.splice(index, 1);
      this.setState({
        SpecialPlan: this.state.SpecialPlan.concat(file),
        ChooseInsurance: ChooseInsurances,
        ChooseColor: ChooseColors,
      });
    }
  }

  checkColor = planId => {
    const { planList } = this.state;
    const isOurPlan = planList.filter(ourPlan => ourPlan.plan._id === planId).length !== 0;
    if (isOurPlan) {
      return 1;
    }
    return 2;
  }

  RenderInnerRight = () => {
    if (this.state.ChooseInsurance.length >= 1) {
      const listItems = this.state.ChooseInsurance.map((number, i) => (
        <PlanTemplate
          index={i}
          price={number.price}
          plan={number.plan.planName}
          colorPlan={this.checkColor(number.plan._id)}
          closetap={this.state.closetap}
          handleDeleteChooseInsurance={this.handleDeleteChooseInsurance}
        />
      ));
      return listItems;
    }
    return (
      <EmptyPlan>
        <EmptyPlanText>ยังไม่มีแผนประกันที่เลือก</EmptyPlanText>
      </EmptyPlan>
    );
  }

  RenderOurplan = () => {
    if (this.state.OurPlan.length >= 1) {
      const listItems = this.state.OurPlan.map((number, i, ourPlan) => (
        <PlanTemplate
          id={number.planName}
          index={i}
          ourPlan={ourPlan}
          plan={number.plan.planName}
          price={number.price}
          colorPlan={1}
          closetap={false}
          handleDeleteOurplan={this.handleDeleteOurplan}
        />
      ));
      return listItems;
    } return '';
  }

  RenderSpecialplan = () => {
    if (this.state.SpecialPlan.length >= 1) {
      const listItems = this.state.SpecialPlan.map((number, i, specialPlan) => (
        <PlanTemplate
          id={number.planName}
          index={i}
          price={number.price}
          plan={number.plan.planName}
          specialPlan={specialPlan}
          colorPlan={2}
          closetap={false}
          handleDeleteSpecialPlan={this.handleDeleteSpecialPlan}
        />
      ));
      return listItems;
    } return '';
  }

  filterTemplatePlan = (choosePlans, originalPlans) => {
    const plans = choosePlans.filter(choosePlan =>
      originalPlans.map(plan => plan.plan._id === choosePlan.plan._id).indexOf(true) !== -1);
    let template = [];
    if (plans.length > 0) {
      template = plans.map(plan =>
        Object.assign({}, {
          planId: plan.plan._id,
          price: plan.price,
        }),
      );
    }
    return template;
  }

  handleNext = () => {
    const { ChooseInsurance } = this.state;
    const { insurerPlanList, planList } = this.props;
    const master = this.filterTemplatePlan(ChooseInsurance, planList);
    const insurer = this.filterTemplatePlan(ChooseInsurance, insurerPlanList);
    this.props.choosePlan({ master, insurer });
  }

  render() {
    const panels = _.times(1, () => ({
      title: <TextInbox>แผนประกันของคุณ</TextInbox>,
      content: (
        <Message
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '0px',
            borderColor: '#ffffff',
          }}
          header={<div> {this.RenderOurplan(this.state.OurPlan)} </div>}
          content={''}
        />
      ),
    }));

    const panels2 = _.times(1, () => ({
      title: <TextInbox>ข้อเสนอพิเศษจากบริษัทประกัน</TextInbox>,
      content: (
        <Message
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '0px',
          }}
          header={<div> {this.RenderSpecialplan(this.state.SpecialPlan)} </div>}
          content={''}
        />
      ),
    }));
    return (
      <div className="ChooseInsurancePlan">
        <div className="ChooseInsurer">
          <NavBenefit step={this.state.step} />
        </div>
        <div className="row">
          <Detail >
            <Head>เลือกแผนประกันที่ต้องการ</Head>
            <div className="row">
              <div className="large-6 columns">
                <Inner>
                  <InnerHead>
                    <Inboxtext>แผนประกันทั้งหมด</Inboxtext>
                  </InnerHead>
                  <AccordionStyle panels={panels} />
                  <AccordionStyle2 panels={panels2} />
                </Inner>
              </div>
              <div className="large-6 columns">
                <InnerRight>
                  <InnerHead2>
                    <Inboxtext>แผนประกันที่เลือก</Inboxtext>
                  </InnerHead2>
                  {this.RenderInnerRight()}
                </InnerRight>
                <Link to="/addbenefit">
                  <Submit onClick={this.handleNext}>ต่อไป</Submit>
                </Link>
              </div>
            </div>
          </Detail>

        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getInsurancePlan: () => dispatch(getInsurancePlan()),
  getTemplatePlan: () => dispatch(getTemplatePlan()),
  choosePlan: plans => dispatch(choosePlan(plans)),
});

const mapStateToProps = state => ({
  planList: state.choosePlan.insurancePlan.master,
  insurerPlanList: state.choosePlan.insurancePlan.insurer,
  choosePlans: state.choosePlan.choosePlan || [],
});

export default connect(mapStateToProps, mapDispatchToProps)(ChooseInsurancePlan);
