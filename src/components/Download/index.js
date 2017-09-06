import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import NavBenefit from '../NavBenefit';
import { fileEmployee, getTemplate } from '../../api/profile-company';
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
  ImgWithPointer,
} from './styled';
import excel from '../../../assets/Download/icons-8-ms-excel.png';
import DownL from '../../../assets/Download/group-2.png';

class Download extends Component {
  static propTypes = {
    fileEmployee: PropTypes.func.isRequired,
    getTemplate: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      step: 4,
      file: null,
      filePreviewUrl: '',
    };
  }

  _handleFileChange(e) {
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

  handleClick = () => {
    this.props.fileEmployee(this.state.file);
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
                    <ImgWithPointer src={DownL} alt="download" onClick={this.props.getTemplate} role="button" aria-hidden />
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
                      accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                      onChange={e => this._handleFileChange(e)}
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
            <Link to="/employeebenefits"><NextButton onClick={this.handleClick}> ต่อไป </NextButton></Link>
          </div>
          <div className="large-1 columns" />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  fileEmployee: data => dispatch(fileEmployee(data)),
  getTemplate: () => dispatch(getTemplate()),
});


export default connect(null, mapDispatchToProps)(Download);
