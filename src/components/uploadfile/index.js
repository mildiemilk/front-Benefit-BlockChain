import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Grid, Icon } from 'semantic-ui-react'
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
        <tr style={{ height: '50px' }}>
          <td>&nbsp;</td>
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
                            {this.RendersummitBrokerFile()}
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
                            {this.RenderListClaimData()}
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
