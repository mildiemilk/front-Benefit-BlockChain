import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Dropzone from 'react-dropzone'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { createProfile } from '../../api/profile-company'
import styled from 'react-sc'
import NavSettingBenefit from '../navSettingBenefit'
import PlanTemplate from './plantemplate'
import Sidebar from '../sidebar'
import icon1 from '../image/icons-8-treatment-plan.png'
import icon2 from '../image/icons-8-view-file.png'

import _ from 'lodash'
import {
  Detail,
  Head,
  Inner,
  InnerRight,
  Submit,
  Inboxtext,
  inputStyle,
  TextInbox,
  InnerHead,
  InnerHead2,
  AccordionStyle,
  AccordionStyle2,
  ManagePlan,
  ImageIcon1,
  ImageIcon2,
  EmptyPlan,
  EmptyPlanText,
} from './styled'
import {
  Grid,
  Image,
  Container,
  Divider,
  Checkbox,
  Segment,
  Icon,
  Table,
  Accordion,
  Label,
  Message,
} from 'semantic-ui-react'

// ----------------------------------------------------------------

class ChooseInsurancePlan extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 1,
      ChooseColor: [],
      PlanTemplateState: 1,
      ChooseInsurance: [],

      OurPlan: [
        {
          planName: 'แผนประกันที่ 1',
          price: 12000,
        },
        {
          planName: 'แผนประกันที่ 2',
          price: 12500,
        },
        {
          planName: 'แผนประกันที่ 3',
          price: 11000,
        },
        {
          planName: 'แผนประกันที่ 4',
          price: 12300,
        },
      ],
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
    }
  }

  handleDeleteOurplan = index => {
    let file = this.state.OurPlan[index]
    const OurPlans = this.state.OurPlan
    OurPlans.splice(index, 1)
    this.setState({
      ChooseInsurance: this.state.ChooseInsurance.concat(file),
      OurPlan: OurPlans,
      ChooseColor: this.state.ChooseColor.concat(1),
    })
    console.log(this.state.ChooseColor)
  }

  handleDeleteSpacialPlan = index => {
    let file = this.state.SpacialPlan[index]
    const SpacialPlans = this.state.SpacialPlan
    SpacialPlans.splice(index, 1)
    this.setState({
      ChooseInsurance: this.state.ChooseInsurance.concat(file),
      SpacialPlan: SpacialPlans,
      ChooseColor: this.state.ChooseColor.concat(2),
    })
    console.log(this.state.ChooseColor)
  }

  handleDeleteChooseInsurance = (index, Color) => {
    if (Color == 1) {
      let file = this.state.ChooseInsurance[index]
      const ChooseInsurances = this.state.ChooseInsurance
      const ChooseColors = this.state.ChooseColor
      ChooseInsurances.splice(index, 1)
      ChooseColors.splice(index, 1)
      this.setState({
        OurPlan: this.state.OurPlan.concat(file),
        ChooseInsurance: ChooseInsurances,
        ChooseColor: ChooseColors,
      })
      console.log(this.state.ChooseInsurance)
      console.log(this.state.ChooseColor)
    } else {
      let file = this.state.ChooseInsurance[index]
      const ChooseInsurances = this.state.ChooseInsurance
      const ChooseColors = this.state.ChooseColor
      ChooseInsurances.splice(index, 1)
      ChooseColors.splice(index, 1)
      this.setState({
        SpacialPlan: this.state.SpacialPlan.concat(file),
        ChooseInsurance: ChooseInsurances,
        ChooseColor: ChooseColors,
      })
      console.log(this.state.ChooseInsurance)
      console.log(this.state.ChooseColor)
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
          closetap={true}
          handleDeleteChooseInsurance={this.handleDeleteChooseInsurance}
        />
      ))
      return listItems
    } else {
      return (
        <EmptyPlan>
          <EmptyPlanText>ยังไม่มีแผนประกันที่เลือก</EmptyPlanText>
        </EmptyPlan>
      )
    }
  }

  RenderOurplan = plan => {
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

  RenderSpacialplan = plan => {
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

  render() {
    const panels = _.times(1, i => ({
      title: <TextInbox>แผนประกันของคุณ</TextInbox>,
      content: (
        <Message
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '0px',
            borderColor: '#ffffff',
          }}
          header={
            <div>
              {this.RenderOurplan(this.state.OurPlan)}
            </div>
          }
          content={''}
        />
      ),
    }))

    const panels2 = _.times(1, i => ({
      title: <TextInbox>ข้อเสนอพิเศษจากบริษัทประกัน</TextInbox>,
      content: (
        <Message
          style={{ backgroundColor: '#ffffff', borderRadius: '0px' }}
          header={
            <div>
              {this.RenderSpacialplan(this.state.SpacialPlan)}
            </div>
          }
          content={''}
        />
      ),
    }))

    // ----------------------------------------------------------------------
    return (
      <div className="ChooseInsurancePlan">
        <div className="ChooseInsurer">
          <NavSettingBenefit step={this.state.step} />
        </div>
        <div className="row">
          <Detail className="large-12 columns">
            <Head>เลือกแผนประกันที่ต้องการ</Head>
            <Inner>
              <InnerHead>
                <Inboxtext>แผนประกันทั้งหมด</Inboxtext>
              </InnerHead>
              <AccordionStyle panels={panels} />
              <AccordionStyle2 panels={panels2} />
            </Inner>
            <InnerRight>
              <InnerHead2>
                <Inboxtext>แผนประกันที่เลือก</Inboxtext>
              </InnerHead2>
              {this.RenderInnerRight()}
            </InnerRight>
            <Submit>ต่อไป</Submit>
          </Detail>

        </div>
      </div>
    )
  }
}
export default ChooseInsurancePlan
