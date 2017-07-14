import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Dropzone from 'react-dropzone'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { createProfile } from '../../api/profile-company'
import styled from 'react-sc'
import NavInsure from '../NavInsure'
import Sidebar from '../sidebar'
import uploadicon from '../image/icons-8-upload.png'
import csvpic from '../image/icons-8-csv.png'
import {
  Detail,
  Head,
  Inner,
  Inner2,
  UploadBox,
  FileuploadBox,
  subInner,
  Submit,
  Submitupload,
  Inboxtext,
  BrowsButton,
  Imagestyle,
  DropzoneStyle,
  inputStyle,
  TextNormal,
} from './styled'
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

class Uploadfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 5,
      ClaimData: [],
      summitBrokerFile: '',
    }
  }
  _handleUploadcliamdata(e) {
    e.preventDefault()
    let file = e.target.files[0]
    this.setState({
      ClaimData: this.state.ClaimData.concat(file),
    })
    console.log(this.state.ClaimData)
  }

  _handleUploadBroker(e) {
    e.preventDefault()
    let file = e.target.files[0]
    this.setState({
      summitBrokerFile: file,
    })
    console.log(this.state.summitBrokerFile)
  }

  handleDelete = e => {
    console.log(e.target.id)
    const ClaimDatas = this.state.ClaimData
    ClaimDatas.splice(e.target.id, 1)
    this.setState({
      ClaimData: ClaimDatas,
    })
    console.log(this.state.ClaimData)
  }

  RenderUploadRow = ClaimData => {
    const output = []
    for (var i = 1; i < ClaimData.length; i++) {
      output.push(
        <tr style={{ height: '50px' }}>
          <td> </td>
          <td>
            <FileuploadBox>
              <p>
                {this.state.ClaimData[i].name} &nbsp;
                {(this.state.ClaimData[i].size / 100000).toFixed(2)} MB
                <Icon
                  id={i}
                  onClick={this.handleDelete}
                  style={{ positon: 'absolute', top: '-25px' }}
                  link
                  name="close"
                />
              </p>
            </FileuploadBox>
          </td>
          <td>
            <input
              style={{ opacity: '0', position: 'absolute' }}
              type="file"
              accept=".xls,.xlsx,.pdf,.docx"
              onChange={e => this._handleUploadcliamdata(e)}
            />
            <BrowsButton>เลือกไฟล์</BrowsButton>
          </td>
        </tr>,
      )
    }
    return output
  }

  handleDelete = e => {
    console.log(e.target.id)
    const ClaimDatas = this.state.ClaimData
    ClaimDatas.splice(e.target.id, 1)
    this.setState({
      ClaimData: ClaimDatas,
    })
    console.log(this.state.ClaimData)
  }

  RenderListClaimData = ClaimData => {
    if (this.state.ClaimData.length >= 1) {
      return (
        <p>
          {this.state.ClaimData[0].name} &nbsp;
          {(this.state.ClaimData[0].size / 100000).toFixed(2)} MB
          <Icon
            id={0}
            style={{ positon: 'absolute', top: '-25px' }}
            link
            name="close"
            onClick={this.handleDelete}
          />
        </p>
      )
    } else return <p />
  }

  handleDeleteBrokerFile = e => {
    this.setState({
      summitBrokerFile: '',
    })
    console.log(this.state.ClaimData)
  }

  RendersummitBrokerFile = summitBrokerFile => {
    if (this.state.summitBrokerFile) {
      return (
        <p>
          {this.state.summitBrokerFile.name} &nbsp;
          {(this.state.summitBrokerFile.size / 100000).toFixed(2)} MB
          <Icon
            id={1}
            style={{ positon: 'absolute', top: '-25px' }}
            link
            name="close"
            onClick={this.handleDeleteBrokerFile}
          />
        </p>
      )
    } else return <p />
  }

  render() {
    return (
      <div>
        <div>
          <NavInsure step={this.state.step} />
        </div>
        <div className="row">
          <Detail className="large-12 columns">
            <Head>อัพโหลดไฟล์</Head>
            <Grid>
              <Grid.Row>
                <TextNormal>
                  กรุณาอัพโหลดไฟล์เพื่อส่งให้บริษัทประกัน
                  (รองรับไฟล์ประเภท .pdf, .docx และ .xlsx ขนาดไฟล์สูงสุดไม่เกิน 20 MB)
                  <br />
                </TextNormal>
                <Grid.Column width={16}>
                  <Inner>
                    <table style={{ width: '100%' }}>
                      <tr>
                        <td style={{ width: '274px' }}>
                          <TextNormal>
                            กรุณาอัพโหลดเอกสารยืนยันโบกเกอร์ :
                          </TextNormal>
                        </td>
                        <td>
                          <FileuploadBox>
                            {this.RendersummitBrokerFile(
                              this.state.summitBrokerFile,
                            )}
                          </FileuploadBox>
                        </td>
                        <td>
                          <input
                            style={{ opacity: '0', position: 'absolute' }}
                            type="file"
                            accept=".xls,.xlsx,.pdf,.docx"
                            onChange={e => this._handleUploadBroker(e)}
                          />
                          <BrowsButton>
                            เลือกไฟล์
                          </BrowsButton>
                        </td>
                      </tr>
                    </table>
                  </Inner>
                </Grid.Column>

                <Grid.Column width={16}>
                  <Inner2>
                    <table style={{ width: '100%' }}>
                      <tr style={{ height: '50px' }}>
                        <td style={{ width: '275px' }}>
                          <TextNormal>
                            กรุณาอัพโหลด Employee Claim Data :
                          </TextNormal>
                        </td>
                        <td>
                          <FileuploadBox>
                            {this.RenderListClaimData(this.state.ClaimData)}

                          </FileuploadBox>
                        </td>
                        <td>
                          <input
                            style={{ opacity: '0', position: 'absolute' }}
                            type="file"
                            accept=".xls,.xlsx,.pdf,.docx"
                            onChange={e => this._handleUploadcliamdata(e)}
                          />
                          <BrowsButton>เลือกไฟล์</BrowsButton>
                        </td>
                      </tr>

                      {this.RenderUploadRow(this.state.ClaimData)}

                      <tr style={{ height: '50px' }}>
                        <td />
                        <td>
                          <BrowsButton>
                            <input
                              style={{ opacity: '0', position: 'absolute' }}
                              type="file"
                              accept=".xls,.xlsx,.pdf,.docx"
                              onChange={e => this._handleUploadcliamdata(e)}
                            />
                            + เพิ่มไฟล์
                          </BrowsButton>
                        </td>
                        <td />
                      </tr>
                    </table>
                  </Inner2>
                </Grid.Column>

              </Grid.Row>

            </Grid>
            <Link to="/sendrequest"><Submit>ต่อไป</Submit></Link>
          </Detail>

        </div>
      </div>
    )
  }
}
export default Uploadfile
