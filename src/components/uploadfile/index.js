import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Icon } from 'semantic-ui-react'
import { uploadFile } from '../../api/upload-file'
import {
  Detail,
  Head,
  Inner,
  Inner2,
  FileuploadBox,
  Submit,
  BrowsButton,
  TextNormal,
  AddBlockButton,
} from './styled'
import NavInsure from '../NavInsure'

class Uploadfile extends Component {
  static propTypes = {
    uploadFile: PropTypes.func.isRequired,
  }

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
    const file = e.target.files[0]
    this.setState({
      ClaimData: this.state.ClaimData.concat(file),
    })
    if (this.state.ClaimData.length >= this.state.AmountUploadBlock) {
      const add = this.state.AmountUploadBlock + 1
      this.setState({
        AmountUploadBlock: add,
      })
    }
  }

  handleUploadBroker(e) {
    e.preventDefault()
    const file = e.target.files[0]
    this.setState({
      summitBrokerFile: file,
    })
  }

  handleDelete = e => {
    e.preventDefault()
    if (this.state.ClaimData.length <= this.state.AmountUploadBlock - 1) {
      const newv = this.state.AmountUploadBlock - 1
      this.setState({
        AmountUploadBlock: newv,
      })
    }

    const ClaimDatas = this.state.ClaimData
    ClaimDatas.splice(e.target.id, 1)
    this.setState({
      ClaimData: ClaimDatas,
    })
  }

  handleAddAmountUploadBlock = () => {
    const add = this.state.AmountUploadBlock + 1
    this.setState({
      AmountUploadBlock: add,
    })
  }

  handleNextClick = () => {
    const file = this.state.ClaimData
    this.props.uploadFile(file)
    // window.location.href = '/sendrequest'
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
    return ''
  }

  RenderUploadRow = () => {
    const output = []
    for (let i = 1; i < this.state.AmountUploadBlock; i += 1) {
      output.push(
        <div className="row">
          <div className=" large-offset-4 large-6  columns">
            <FileuploadBox>
              {this.RenderInsideBlock(i)}
            </FileuploadBox>
          </div>
          <div className=" large-2 columns">
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
          </div>
        </div>,
      )
    }
    return output
  }

  RenderListClaimData = () => {
    const { ClaimData } = this.state
    if (ClaimData.length >= 1) {
      return (
        <p>
          {ClaimData[0].name} &nbsp;
          {(ClaimData[0].size / 100000).toFixed(2)} MB
          <Icon
            id={0}
            style={{ positon: 'absolute', top: '-25px' }}
            link
            name="close"
            onClick={this.handleDelete}
          />
        </p>
      )
    }
    return <p />
  }

  handleDeleteBrokerFile = () => {
    this.setState({
      summitBrokerFile: '',
    })
  }

  RendersummitBrokerFile = () => {
    const { summitBrokerFile } = this.state
    if (summitBrokerFile) {
      return (
        <p>
          {summitBrokerFile.name} &nbsp;
          {(summitBrokerFile.size / 100000).toFixed(2)} MB
          <Icon
            id={1}
            style={{ positon: 'absolute', top: '-25px' }}
            link
            name="close"
            onClick={this.handleDeleteBrokerFile}
          />
        </p>
      )
    }
    return <p />
  }

  render() {
    return (
      <div>
        <div className="ChooseInsurer">
          <NavInsure step={this.state.step} />
        </div>
        <Detail>
          <Head>อัพโหลดไฟล์</Head>


          <TextNormal>
                กรุณาอัพโหลดไฟล์เพื่อส่งให้บริษัทประกัน
                (รองรับไฟล์ประเภท .pdf, .docx และ .xlsx ขนาดไฟล์สูงสุดไม่เกิน 20 MB)
                <br />
          </TextNormal>
          <div className="row">
            <div className=" large-12 columns">
              <Inner>
                <div className=" large-4 columns">
                  <TextNormal>
                    กรุณาอัพโหลดเอกสารยืนยันโบกเกอร์ :
                  </TextNormal>
                </div>
                <div className=" large-6 columns">
                  <FileuploadBox>
                    {this.RendersummitBrokerFile()}
                  </FileuploadBox>
                </div>
                <div className=" large-2 columns">
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
                </div>
              </Inner>
            </div>
          </div>
          <Inner2>
            <div className="row">
              <div className="large-4 columns">
                <TextNormal>
                  กรุณาอัพโหลด Employee Claim Data :
                </TextNormal>
              </div>
              <div className="large-6 columns">
                <FileuploadBox>
                  {this.RenderListClaimData()}
                </FileuploadBox>
              </div>
              <div className="large-2 columns">
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
              </div>
            </div>
            {this.RenderUploadRow()}
            <AddBlockButton
              onClick={e => this.handleAddAmountUploadBlock(e)}
            >
              + เพิ่มไฟล์
            </AddBlockButton>
          </Inner2>
          <Submit onClick={this.handleNextClick}>ต่อไป</Submit>
        </Detail>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  uploadFile: ClaimData => dispatch(uploadFile(ClaimData)),
})

export default connect(null, mapDispatchToProps)(Uploadfile)
