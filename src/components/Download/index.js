import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import NavBenefit from '../NavBenefit';
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
  Uploads,
  BrowsButton,
  UploadDiv,
  DivDownload,
  AltFile,
} from './styled';
import excel from '../../../assets/Download/icons-8-ms-excel.png';
import DownL from '../../../assets/Download/group-2.png';

class Download extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 4,
      file: null,
      filePreviewUrl: '',
    };
  }

  _handleImageChange(e) {
    e.preventDefault();

    const reader = new FileReader();
    const file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file,
        filePreviewUrl: reader.result,
      });
    };

    reader.readAsDataURL(file);
  }

  render() {
    const { filePreviewUrl } = this.state;
    let $filePreview = null;
    if (filePreviewUrl) {
      $filePreview = <span>{this.state.file.name}&nbsp;</span>;
    } else {
      $filePreview = (
        <span style={{ opacity: '0.2' }}>
          please Upload file template.xlsx{' '}
        </span>
      );
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
            <Side>
              <DivDownload>
                <div className="row">
                  <div className="large-3 columns">
                    <img src={excel} alt="excel" />
                  </div>
                  <div className="large-6 columns">
                    <AltFile> Employeedata</AltFile>
                    <AltFile>Template.xlsx</AltFile>
                    <AltFile>Filesize: 0.4 Mb</AltFile>
                  </div>
                  <div className="large-3 columns">
                    <img src={DownL} alt="download" />
                  </div>
                </div>
              </DivDownload>
            </Side>
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

                <Uploads>
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
                </Uploads>
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
    );
  }
}

export default Download;
