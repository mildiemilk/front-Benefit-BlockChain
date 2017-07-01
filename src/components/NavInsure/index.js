import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { createProfile } from '../../api/profileCompany'
import {
  Step,
  Divider,
} from 'semantic-ui-react'
import {
  Head,
  Step1,
  StepRadius,
  Step6,
} from './styled'
import styled from 'react-sc'


class NavInsure extends Component{

    constructor(props) {
        super(props)
        this.state = {
            step: props.step,
        }
    }

    render(){
        console.log('state'+this.state.step);
         console.log('props'+this.props.step);
        return(
            <div className='NavInsure'>
                <div className='row'>
                    <div className='large-12 column'>
                    <Head> จัดแผนประกัน </Head>
                    <Divider/>
                    </div>
                </div>
                <div className='row'>
                   <StepRadius ordered>
                        <Step1 completed={this.props.step > 1} active={this.props.step === 1} description='ระบุความต้องการ'/>
                        <Step completed={this.props.step > 2} active={this.props.step === 2} description='เลือกโบรกเกอร์'/>
                        <Step completed={this.props.step > 3} active={this.props.step === 3} description='จัดแผนประกัน'/>
                        <Step completed={this.props.step > 4} active={this.props.step === 4} description='เลือกบริษัทประกัน'/>
                        <Step completed={this.props.step > 5} active={this.props.step === 5} description='อัพโหลดไฟล์'/>
                        <Step6 active={this.props.step === 6} description='ส่งคำขอ'/>
                    </StepRadius>
                </div>
            </div>
        )
    }
}

export default NavInsure;