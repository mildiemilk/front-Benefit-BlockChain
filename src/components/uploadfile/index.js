import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { createProfile } from '../../api/profileCompany'
import styled from 'react-sc'
import NavInsure from '../NavInsure'
import Sidebar from '../sidebar'
import uploadicon from './icons-8-upload.png'
import csvpic from './icons-8-csv.png'
import {Detail,Head,Head2,Inner,Inner2,INInner,
        subInner,Submit,Submitupload,Inboxtext} from './styled'
import {
  Grid,
  Image,
  Container,
  Divider,
  Checkbox,
  Segment,
  Icon,
  Progress,
} from 'semantic-ui-react'

class Uploadfile extends Component{

    constructor(props) {
        super(props)
        this.state = {
            step: 5,
        }
    }

    render(){
      return(
        <div>
          <div className='ChooseInsurer'>
            <NavInsure step={this.state.step}/>
          </div>
          <div className='row'>
            <Detail className='large-12 columns'>
              <Head>อัพโหลดไฟล์</Head>
            <Grid >
              <Grid.Row>
                <Grid.Column width={8}>
                  <Inner>
                    <Head2>
                      กรุณาอัพโหลด Employee Claim Data
                    </Head2>
                    <INInner>
                      <Image style={{
                        position:'relative',
                        left:'10px',
                        display:'block',
                        margin:'auto',
                        width:'74px',
                        height:'63px'}}
                        src={uploadicon}
                       />
                      <Inboxtext>ลากไฟล์มาวางที่นี้<br></br>หรือ<br></br></Inboxtext>
                      <Submitupload>เลือกไฟล์</Submitupload>
                    </INInner>
                  </Inner>
                </Grid.Column>
                <Grid.Column width={8}>
                  <Inner>
                    <Head2>
                      กรุณาอัพโหลดเอกสารยืนยันโบกเกอร์
                    </Head2>
                    <INInner>
                      <Image style={{
                        position:'relative',
                        left:'10px',
                        display:'block',
                        margin:'auto',
                        width:'74px',
                        height:'63px'}}
                        src={uploadicon}
                       />
                      <Inboxtext>ลากไฟล์มาวางที่นี้<br></br>หรือ<br></br></Inboxtext>
                      <Submitupload>เลือกไฟล์</Submitupload>
                    </INInner>
                  </Inner>
                </Grid.Column>
              </Grid.Row>

              <Grid.Row centered>
                <Grid.Column width={16} >
                  <Inner2>
                    <Grid>
                      <Grid.Row >
                        <Grid.Column width={16}>
                          <Head2 style={{fontSize:'20px'}}>
                            uploading
                          </Head2>
                        </Grid.Column>
                      </Grid.Row>
                      <Divider />
                      <Grid.Row >
                        <Grid.Column width={1}><Image src={csvpic}/></Grid.Column>
                        <Grid.Column width={15}>
                          Employee claim data 2016
                          <Icon link name='close' />
                          <Progress percent={20} size='tiny' color='blue' />
                        </Grid.Column>
                      </Grid.Row>
                      <Divider />
                      <Grid.Row >
                        <Grid.Column width={1}><Image src={csvpic}/></Grid.Column>
                        <Grid.Column width={15}>
                          เอกสารยืนยันโปรเกอร์
                          <Icon link name='close' />
                          <Progress percent={60} size='tiny' color='blue' />
                        </Grid.Column>
                      </Grid.Row>
                      <Divider />
                    </Grid>
                  </Inner2>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Detail>
          <Submit>ต่อไป</Submit>
        </div>
      </div>
    )
  }
}
export default Uploadfile
