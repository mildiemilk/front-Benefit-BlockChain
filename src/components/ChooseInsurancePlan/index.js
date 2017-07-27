import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import _ from 'lodash'
import { Link } from 'react-router-dom'
import { Message } from 'semantic-ui-react'
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
} from './styled'
import NavBenefit from '../NavBenefit'
import PlanTemplate from './plantemplate'
import { getAllPlan } from '../../api/set-plan'
import { choosePlan } from '../../api/benefit-plan'

class ChooseInsurancePlan extends Component {
  static propTypes = {
    getAllPlan: PropTypes.func.isRequired,
    choosePlan: PropTypes.func.isRequired,
    planList: PropTypes.arrayOf(PropTypes.object).isRequired,
  }
  constructor(props) {
    super(props)
    this.state = {
      step: 1,
      ChooseColor: [],
      PlanTemplateState: 1,
      ChooseInsurance: [],
      OurPlan: [],
      SpacialPlan: [
        {
          planName: 'แผนจากบริษัทประกันที่ 1',
          price: 1563,
        },
        {
          planName: 'แผนจากบริษัทประกันที่ 2',
          price: 9900,
        },
      ],
      closetap: true,
    }
    props.getAllPlan()
  }

  componentWillReceiveProps(newProps) {
    if (newProps.planList !== this.props.planList) {
      this.setState({ OurPlan: newProps.planList })
    }
  }

  handleDeleteOurplan = index => {
    const file = this.state.OurPlan[index]
    const OurPlans = this.state.OurPlan
    OurPlans.splice(index, 1)
    this.setState({
      ChooseInsurance: this.state.ChooseInsurance.concat(file),
      OurPlan: OurPlans,
      ChooseColor: this.state.ChooseColor.concat(1),
    })
  }

  handleDeleteSpacialPlan = index => {
    const file = this.state.SpacialPlan[index]
    const SpacialPlans = this.state.SpacialPlan
    SpacialPlans.splice(index, 1)
    this.setState({
      ChooseInsurance: this.state.ChooseInsurance.concat(file),
      SpacialPlan: SpacialPlans,
      ChooseColor: this.state.ChooseColor.concat(2),
    })
  }

  handleDeleteChooseInsurance = (index, Color) => {
    if (Color === 1) {
      const file = this.state.ChooseInsurance[index]
      const ChooseInsurances = this.state.ChooseInsurance
      const ChooseColors = this.state.ChooseColor
      ChooseInsurances.splice(index, 1)
      ChooseColors.splice(index, 1)
      this.setState({
        OurPlan: this.state.OurPlan.concat(file),
        ChooseInsurance: ChooseInsurances,
        ChooseColor: ChooseColors,
      })
    } else {
      const file = this.state.ChooseInsurance[index]
      const ChooseInsurances = this.state.ChooseInsurance
      const ChooseColors = this.state.ChooseColor
      ChooseInsurances.splice(index, 1)
      ChooseColors.splice(index, 1)
      this.setState({
        SpacialPlan: this.state.SpacialPlan.concat(file),
        ChooseInsurance: ChooseInsurances,
        ChooseColor: ChooseColors,
      })
    }
  }

  RenderInnerRight = () => {
    if (this.state.ChooseInsurance.length >= 1) {
      const listItems = this.state.ChooseInsurance.map((number, i) => (
        <PlanTemplate
          id={number.planName}
          index={i}
          price={number.price}
          colorPlan={this.state.ChooseColor[i]}
          closetap={this.state.closetap}
          handleDeleteChooseInsurance={this.handleDeleteChooseInsurance}
        />
      ))
      return listItems
    }
    return (
      <EmptyPlan>
        <EmptyPlanText>ยังไม่มีแผนประกันที่เลือก</EmptyPlanText>
      </EmptyPlan>
    )
  }

  RenderOurplan = () => {
    const listItems = this.state.OurPlan.map((number, i) => (
      <PlanTemplate
        id={number.planName}
        index={i}
        price={number.price}
        colorPlan={1}
        closetap={false}
        handleDeleteOurplan={this.handleDeleteOurplan}
      />
    ))
    return listItems
  }

  RenderSpacialplan = () => {
    const listItems = this.state.SpacialPlan.map((number, i) => (
      <PlanTemplate
        id={number.planName}
        index={i}
        price={number.price}
        colorPlan={2}
        closetap={false}
        handleDeleteSpacialPlan={this.handleDeleteSpacialPlan}
      />
    ))
    return listItems
  }

  handleNext = () => {
    this.props.choosePlan(this.state.ChooseInsurance)
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
    }))

    const panels2 = _.times(1, () => ({
      title: <TextInbox>ข้อเสนอพิเศษจากบริษัทประกัน</TextInbox>,
      content: (
        <Message
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '0px',
          }}
          header={<div> {this.RenderSpacialplan(this.state.SpacialPlan)} </div>}
          content={''}
        />
      ),
    }))

    return (
      <div className="ChooseInsurancePlan">
        <div className="ChooseInsurer">
          <NavBenefit step={this.state.step} />
        </div>
        <div className="row">
          <Detail className="large-12 columns">
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
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getAllPlan: () => dispatch(getAllPlan()),
  choosePlan: plans => dispatch(choosePlan(plans)),
})

const mapStateToProps = state => ({
  planList: state.plan.planList,
  choosePlan: state.choosePlan.choosePlan,
})

export default connect(mapStateToProps, mapDispatchToProps)(ChooseInsurancePlan)
