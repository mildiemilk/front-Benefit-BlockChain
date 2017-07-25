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
  AddBlockButton,
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
import { uploadFile } from '../../api/upload-file'

class Uploadfile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 5,
      ClaimData: [],
      summitBrokerFile: '',
      AmountUploadBlock: 1,
    }
  }

  handleUploadcliamdata(e) {
    e.preventDefault()
    let file = e.target.files[0]
    this.setState(
      {
        ClaimData: this.state.ClaimData.concat(file),
      },
      () => console.log(this.state.ClaimData),
    )
    if (this.state.ClaimData.length >= this.state.AmountUploadBlock) {
      const add = this.state.AmountUploadBlock + 1
      this.setState({
        AmountUploadBlock: add,
      })
    }
  }

  handleUploadBroker(e) {
    e.preventDefault()
    let file = e.target.files[0]
    this.setState(
      {
        summitBrokerFile: file,
      },
      () => console.log(this.state.summitBrokerFile),
    )
  }

  handleDelete = e => {
    e.preventDefault()
    if (this.state.ClaimData.length <= this.state.AmountUploadBlock - 1) {
      const newv = this.state.AmountUploadBlock - 1
      this.setState({
        AmountUploadBlock: newv,
      })
      console.log('decrease :', this.state.AmountUploadBlock)
    }

    const ClaimDatas = this.state.ClaimData
    ClaimDatas.splice(e.target.id, 1)
    this.setState({
      ClaimData: ClaimDatas,
    })
    console.log('length splice :', this.state.ClaimData.length)
  }

  handleAddAmountUploadBlock = () => {
    const add = this.state.AmountUploadBlock + 1
    this.setState({
      AmountUploadBlock: add,
    })
    console.log('AmountUploadBlock:', this.state.AmountUploadBlock)
  }

  handleNextClick = () => {
    const file = this.state.ClaimData
    this.props.uploadFile(file)
    //window.location.href = '/sendrequest'
  }

  RenderInsideBlock = id => {
    if (this.state.ClaimData[id]) {
      return (
        <p>
          {this.state.ClaimData[id].name} &nbsp;
          {(this.state.ClaimData[id].size / 100000).toFixed(2)} MB
          <Icon
            id={id}
            onClick={this.handleDelete}
            style={{ positon: 'absolute', top: '-25px' }}
            link
            name="close"
          />
        </p>
      )
    }
    console.log('inner id:', id)
  }

  RenderUploadRow = () => {
    const output = []
    for (var i = 1; i < this.state.AmountUploadBlock; i++) {
      console.log('outner id:', i)
      output.push(
        <tr style={{ height: '50px' }}>
          <td> </td>
          <td>
            <FileuploadBox>
              {this.RenderInsideBlock(i)}
            </FileuploadBox>
          </td>
          <td>
            <BrowsButton for="uploadfor">
              <input
                id="uploadfor"
                style={{ display: 'none' }}
                type="file"
                accept=".xls,.xlsx,.pdf,.docx"
                onChange={e => this.handleUploadcliamdata(e)}
              />
              เลือกไฟล์
            </BrowsButton>
          </td>
        </tr>,
      )
    }
    return output
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
        <div className="ChooseInsurer">
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
                        <td style={{ width: '251px' }}>
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
                        <td style={{ width: '20%' }}>
                          <BrowsButton for="uploadbrokerfor">
                            <input
                              id="uploadbrokerfor"
                              style={{ display: 'none' }}
                              type="file"
                              accept=".xls,.xlsx,.pdf,.docx"
                              onChange={e => this.handleUploadBroker(e)}
                            />
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
                        <td style={{ width: '251px' }}>
                          <TextNormal>
                            กรุณาอัพโหลด Employee Claim Data :
                          </TextNormal>
                        </td>
                        <td>
                          <FileuploadBox>
                            {this.RenderListClaimData(this.state.ClaimData)}
                          </FileuploadBox>
                        </td>
                        <td style={{ width: '20%' }}>
                          <BrowsButton for="uploadfor">
                            <input
                              id="uploadfor"
                              style={{ display: 'none' }}
                              type="file"
                              accept=".xls,.xlsx,.pdf,.docx"
                              onChange={e => this.handleUploadcliamdata(e)}
                            />
                            เลือกไฟล์
                          </BrowsButton>
                        </td>
                      </tr>
                      {this.RenderUploadRow()}
                      <tr style={{ height: '50px' }}>
                        <td />
                        <td>
                          <AddBlockButton
                            onClick={e => this.handleAddAmountUploadBlock(e)}
                          >
                            + เพิ่มไฟล์
                          </AddBlockButton>
                        </td>
                        <td />
                      </tr>
                    </table>
                  </Inner2>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Submit onClick={this.handleNextClick}>ต่อไป</Submit>
          </Detail>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  uploadFile: ClaimData => dispatch(uploadFile(ClaimData)),
})

export default connect(null, mapDispatchToProps)(Uploadfile)
