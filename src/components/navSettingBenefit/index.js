import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { createProfile } from '../../api/profileCompany'
import { Step, Divider } from 'semantic-ui-react'
import { Head, Step1, StepRadius, Step6 } from './styled'
import styled from 'react-sc'

class NavSettingBenefit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: props.step,
    }
  }

  render() {
    return (
      <div className="NavInsure">
        <div className="row">
          <div className="large-12 column">
            <Head> จัดแผนสิทธิประโยชน์ </Head>
            <Divider />
          </div>
        </div>
        <div className="row">
          <StepRadius ordered>
            <Step1
              completed={this.props.step > 1}
              active={this.props.step === 1}
              description="เลือกแผนประกันที่ต้องการ"
            />
            <Step
              completed={this.props.step > 2}
              active={this.props.step === 2}
              description="ระบุสิทธิประโยชน์"
            />
            <Step
              completed={this.props.step > 3}
              active={this.props.step === 3}
              description="จัดแผนสิทธิประโยชน์"
            />
            <Step
              completed={this.props.step > 4}
              active={this.props.step === 4}
              description="จัดกลุ่มพนักงาน"
            />
            <Step
              completed={this.props.step > 5}
              active={this.props.step === 5}
              description="จัดแผนสิทธิประโยชน์สำหรับพนักงาน"
            />
            <Step6 active={this.props.step === 6} description="ส่งข้อมูล" />
          </StepRadius>
        </div>
      </div>
    )
  }
}

export default NavSettingBenefit
