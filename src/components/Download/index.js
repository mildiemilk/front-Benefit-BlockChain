import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NavBenefit from '../NavBenefit'
import {
  DetailDiv,
  Text,
  DetailIn,
  List,
  Head,
  Side,
  BackButton,
  NextButton,
  Upload,
  UploadInput,
  UploadButton,
  UploadDiv,
} from './styled'

class Download extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 4,
      file: null,
      filePreviewUrl: '',
    }
  }

  _handleImageChange(e) {
    e.preventDefault()

    const reader = new FileReader()
    const file = e.target.files[0]

    reader.onloadend = () => {
      this.setState({
        file,
        filePreviewUrl: reader.result,
      })
    }

    reader.readAsDataURL(file)
  }

  render() {
    const { filePreviewUrl } = this.state
    let $filePreview = null
    if (filePreviewUrl) {
      $filePreview = <span>{this.state.file.name}&nbsp;</span>
    } else {
      $filePreview = (
        <span style={{ opacity: '0.2' }}>
          please Upload file template.xlsx{' '}
        </span>
      )
    }
    return (
      <div>
        <NavBenefit step={this.state.step} />
        <DetailDiv>
          <Text>แบ่งกลุ่มพนักงาน</Text>
          <DetailIn>
            <Head>
              <List>
                {' '}
                ขั้นตอนที่ 1 : กรุณาดาวน์โหลด Template เพื่อกรอกข้อมูลพนักงาน
              </List>
            </Head>
            <Side />
          </DetailIn>
          <DetailIn>
            <Head>
              <List>
                {' '}
                ขั้นตอนที่ 2 : กรุณาอัพโหลด Employee data เพื่อเพิ่มข้อมูลลงในระบบ
                {' '}
              </List>
            </Head>
            <Side>
              <Upload>
                อัพโหลดไฟล์ :
                <UploadDiv>{$filePreview}</UploadDiv>

                <UploadButton>
                  <UploadInput
                    className="previewInput"
                    type="file"
                    onChange={e => this._handleImageChange(e)}
                  />
                  เลือกไฟล์
                </UploadButton>
              </Upload>
            </Side>
          </DetailIn>
        </DetailDiv>
        <div className="row">
          <div className="large-3 large-offset-1 columns">
            <Link to="settingbenefit"><BackButton> กลับ </BackButton></Link>
          </div>
          <div className="large-2 large-offset-5 columns">
            <Link to="/employeebenefits"><NextButton> ต่อไป </NextButton></Link>
          </div>
          <div className="large-1 columns" />
        </div>
      </div>
    )
  }
}

export default Download
