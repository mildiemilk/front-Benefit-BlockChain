import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getTemplate } from '../../../api/profile-company';
import {
  DetailDiv,
  Text,
  DetailIn,
  List,
  Head,
  Side,
  Upload,
  Uploads,
  BrowsButton,
  UploadDiv,
} from '../styled';
import BoxDownload from '../../BoxDownload';

class UploadEmployee extends Component {
  static propTypes = {
    getTemplate: PropTypes.func.isRequired,
    handleFile: PropTypes.func.isRequired,
    filePreviewUrl: PropTypes.string.isRequired,
    file: PropTypes.shape({}).isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  _handleFileChange(e) {
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      this.props.handleFile(file, reader.result);
    };

    reader.readAsDataURL(file);
  }

  render() {
    const { filePreviewUrl, file, getTemplate } = this.props;
    let $filePreview = null;
    if (filePreviewUrl) {
      $filePreview = <span>{file.name}&nbsp;</span>;
    } else {
      $filePreview = (
        <span style={{ opacity: '0.2' }}>
          please Upload file template.xlsx{' '}
        </span>
      );
    }
    return (
      <div>
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
              <BoxDownload getTemplate={getTemplate} />
            </Side>
          </DetailIn>
          <DetailIn>
            <Head>
              <List>
                {' '}
                ขั้นตอนที่ 2 : กรุณาอัพโหลดข้อมูลพนักงานเพื่อเพิ่มข้อมูลลงในระบบ
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
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getTemplate: () => dispatch(getTemplate()),
});


export default connect(null, mapDispatchToProps)(UploadEmployee);
