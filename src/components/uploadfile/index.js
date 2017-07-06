import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Dropzone from 'react-dropzone'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { createProfile } from '../../api/profileCompany'
import styled from 'react-sc'
import NavInsure from '../NavInsure'
import Sidebar from '../sidebar'
import uploadicon from '../image/icons-8-upload.png'
import csvpic from '../image/icons-8-csv.png'
import {Detail,Head,Head2,Inner,UploadBox,INInner,
        subInner,Submit,Submitupload,Inboxtext,
        Imagestyle,DropzoneStyle,inputStyle } from './styled'
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
          files: [],

      }
    }
  onDrop(files) {
    this.setState({
       files: this.state.files.concat(files)
    });
   console.log(this.state.files);
  }

  _handleImageChange(e, stateName) {
    e.preventDefault()
    let reader = new FileReader()
    let file = e.target.files[0]
    reader.onloadend = () => {
      this.setState({
        [stateName]: file,
        filePreviewUrl: reader.result,
      })
    }
    reader.readAsDataURL(file)

  }

  RenderListfile = (files) => {
    return files.map((file) =>
    <Grid.Row >
      <Grid.Column width={2}>
        <Image src={csvpic} />
      </Grid.Column>
      <Grid.Column width={14}>
        <Icon style={{positon:'absolute',top:'-25px'}} link name='close'  />
        <p> {file.name} - {file.size} bytes </p>
        <Progress percent={20} size='tiny' color='blue' />
      </Grid.Column>
      <Divider />
    </Grid.Row>
    );

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
                  <DropzoneStyle onDrop={this.onDrop.bind(this)}>
                    <Imagestyle  src={uploadicon} />
                    <Inboxtext>ลากไฟล์มาวางที่นี้<br></br>หรือ<br></br></Inboxtext>
                    <Submitupload>
                      {/* <inputStyle type="file"
                        onChange={e => this._handleImageChange(e, 'file1')} /> */}
                      เลือกไฟล์
                    </Submitupload>
                  </DropzoneStyle>
                </Inner>
              </Grid.Column>
              <Grid.Column width={8}>
                <Inner>
                  <Head2>
                    กรุณาอัพโหลดเอกสารยืนยันโบกเกอร์
                  </Head2>
                  <DropzoneStyle onDrop={this.onDrop.bind(this)}>
                    <Imagestyle src={uploadicon} />
                    <Inboxtext>ลากไฟล์มาวางที่นี้<br></br>หรือ<br></br></Inboxtext>
                    <Submitupload>
                      {/* <inputStyle type="file"
                        onChange={e => this._handleImageChange(e, 'file1')} /> */}
                      เลือกไฟล์
                    </Submitupload>
                  </DropzoneStyle>
                </Inner>
              </Grid.Column>
            </Grid.Row>



            <Grid.Row centered>
              <Grid.Column width={16} >
                <UploadBox>
                  <Grid>
                    <Grid.Row >
                      <Grid.Column width={16}>
                        <Head2 style={{fontSize:'20px'}}>
                          uploading
                        </Head2>
                      </Grid.Column>
                    </Grid.Row>
                    <Divider />
                    {this.RenderListfile(this.state.files)}
                  </Grid>
                </UploadBox>
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
