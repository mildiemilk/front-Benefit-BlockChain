import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getCustomer, putUploadEmpData, getCustomerFile } from '../../../../../api/Insurer/customer';
import HeaderCompanyInfo from '../../../header-company-info';
import excelpic from '../../../../../../assets/Insurer/excel.png';
import IconDownload from '../../../../../../assets/Insurer/icon_download@3x.png';
import NavStep from '../NavStep';
import {
CustomerName,
WhiteBackGround,
HeadSecondDiv,
NextButton,
BackButton,
DownloadDiv,
DivHeadBackcolor,
DivContent,
UploadDiv,
BrowsButton,
CircelBlue,
} from './styled';
// import BoxDownload from '../../../../BoxDownload';

class UploadPolicyNumber extends Component {
  static propTypes = {
    getCustomer: PropTypes.func.isRequired,
    putUploadEmpData: PropTypes.func.isRequired,
    getCustomerFile: PropTypes.func.isRequired,
    customer: PropTypes.arrayOf(PropTypes.object).isRequired,
    // customer: PropTypes.arrayOf(PropTypes.object).isRequired,
    match: PropTypes.shape({ params: PropTypes.index }),
  }
  static defaultProps = {
    match: {
      params: 0,
    },
  }
  constructor(props) {
    super(props);
    this.state = {
      index: props.match.params.index,
      companyId: props.match.params.companyId,
      step: 3,
      file: null,
      filePreviewUrl: '',
    };
    props.getCustomer();
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
    this.props.putUploadEmpData(this.state.file, this.state.companyId);
  }
  handleClickDownload = () => {
    this.props.getCustomerFile(this.state.companyId);
  }

  render() {
    const { filePreviewUrl } = this.state;
    let $filePreview = null;
    if (filePreviewUrl) {
      $filePreview = <span>{this.state.file.name}&nbsp;</span>;
    } else {
      $filePreview = (
        <span style={{ opacity: '0.2' }}>
          please Upload file Policy number template.xlsx{' '}
        </span>
      );
    }
    const { customer } = this.props;
    const { index } = this.state;
    if (customer.length > 0) {
      return (
        <div className="Upload">
          <HeaderCompanyInfo DataCompany={customer[index]} PageName="allcustomer" />
          <CustomerName>
            ลูกค้าของคุณ &nbsp; /&nbsp;{customer[index].companyName}
          </CustomerName>
          <NavStep step={3} />
          <WhiteBackGround>
            <HeadSecondDiv>
              อัพโหลดเลขกรมธรรม์
            </HeadSecondDiv>
            <DivHeadBackcolor>
              ขั้นตอนที่ 1 : กรุณาดาวน์โหลด Template เพื่อกรอกข้อมูลพนักงาน
            </DivHeadBackcolor>
            <DivContent>
              <DownloadDiv className="Download">
                <div className="row">
                  <div className="large-3 columns padTop">
                    <img alt="" className="PicStyle " src={excelpic} />
                  </div>
                  <div className="large-6 columns">
                    <span className="DownloadText">
                      Policy number<br />
                     Template.xlsx<br />
                    </span>
                    <span className="DownloadText">File size : 0.4 Mb</span>
                  </div>
                  <div className="large-3 columns padTop">
                    {/* <BoxDownload getTemplate={this.props.getCustomerFile} /> */}
                    <CircelBlue onClick={this.handleClickDownload}>
                      <img className="imageStyle-download" alt="download" role="button" aria-hidden src={IconDownload} onClick={this.handleClickDownload} />
                      {/* onClick={getCustomerFile(this.state.companyId)} */}
                    </CircelBlue>
                  </div>
                </div>
              </DownloadDiv>
            </DivContent>
            <DivHeadBackcolor>
              ขั้นตอนที่ 2 : กรุณาอัพโหลดไฟล์ Employee Data Template.xlsx
              เพื่อเพิ่มข้อมูลพนักงานลงในระบบ
            </DivHeadBackcolor>
            <DivContent className="contentSecond">
              <div className="row">
                <div className="large-3 columns padTop">
                  อัพโหลดไฟล์ :
                </div>
                <div className="large-6 columns">
                  <UploadDiv>{$filePreview}</UploadDiv>
                </div>
                <div className="large-3 columns ">
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
                </div>
              </div>
            </DivContent>
          </WhiteBackGround>
          <Link to={`/stepdownload/${index}/${customer[index].companyId}`}>
            <BackButton>กลับ</BackButton>
          </Link>
          <Link to={`/stepbenefits/${index}/${customer[index].companyId}`}>
            <NextButton onClick={this.handleClick}>ต่อไป</NextButton>
          </Link>
        </div>

      );
    }
    return <div />
  }
}

const mapStateToProps = state => ({
  customer: state.customerReducer.customer,
  customerFile: state.customerFileReducer.customerFile,
});

const mapDispatchToProps = dispatch => ({
  putUploadEmpData: (data, id) => dispatch(putUploadEmpData(data, id)),
  getCustomer: () => dispatch(getCustomer()),
  getCustomerFile: companyId => dispatch(getCustomerFile(companyId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadPolicyNumber);
