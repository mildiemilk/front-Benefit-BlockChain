import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getCustomer } from '../../../../../api/Insurer/customer';
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
} from './styled';

class UploadPolicyNumber extends Component {
  static propTypes = {
    getCustomer: PropTypes.func.isRequired,
    customer: PropTypes.arrayOf(PropTypes.object).isRequired,
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
      CustomerIndex: props.match.params.index,
    };
    props.getCustomer();
  }


  render() {
    const { customer } = this.props;
    const { CustomerIndex } = this.state;
    if (customer.length === 0) {
      return (
        <div>
          Empty
        </div>
      );
    }
    return (
      <div className="Upload">
        <HeaderCompanyInfo DataCompany={customer[CustomerIndex]} />
        <CustomerName>
          ลูกค้าของคุณ &nbsp; /&nbsp;{customer[CustomerIndex].companyName}
        </CustomerName>
        <NavStep step={3} />
        <WhiteBackGround>
          <HeadSecondDiv>
            อัปโหลดเลขกรมธรรม์
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
                  <div className="circelBlue">
                    <img alt="" className="imageStyle-download" src={IconDownload} />
                  </div>
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
              <div className="large-2 columns padTop ">
                อัพโหลดไฟล์ :
              </div>
              <div className="large-10 columns ">
                <UploadDiv>
                  Policy_number.xlsx
                </UploadDiv>
              </div>
            </div>
          </DivContent>
        </WhiteBackGround>
        <Link to="/customermanage/download/0">
          <BackButton>กลับ</BackButton>
        </Link>
        <Link to="/customermanage/viewplan/0">
          <NextButton>ต่อไป</NextButton>
        </Link>
      </div>

    );
  }
}

const mapStateToProps = state => ({
  customer: state.customerReducer.customer,
});

const mapDispatchToProps = dispatch => ({
  getCustomer: () => dispatch(getCustomer()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadPolicyNumber);
