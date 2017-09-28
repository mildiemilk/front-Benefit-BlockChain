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
} from './styled';

class ViewPlan extends Component {
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
    const PicStyle = {
      width: '44px',
      height: '44px',
    };
    if (customer.length === 0) {
      return (
        <div>
          Empty
        </div>
      );
    }
    return (
      <div className="Download">
        <HeaderCompanyInfo DataCompany={customer[CustomerIndex]} />
        <CustomerName>
          ลูกค้าของคุณ &nbsp; /&nbsp;{customer[CustomerIndex].companyName}
        </CustomerName>
        <NavStep step={2} />
        <WhiteBackGround>
          <HeadSecondDiv>
            ดาวน์โหลดข้อมูลพนักงาน
          </HeadSecondDiv>
          <DownloadDiv>
            <div className="row">
              <div className="large-1 columns">
                <img alt="" style={PicStyle} src={excelpic} />
              </div>
              <div className="large-10 columns">
                <span className="DownloadText">Employee Data Template.xlsx</span>
                <br />
                <span className="DownloadText">File size : 0.4 Mb</span>
              </div>
              <div className="large-1 columns">
                <div className="circelBlue">
                  <img alt="" className="imageStyle-download" src={IconDownload} />
                </div>
              </div>
            </div>
          </DownloadDiv>
        </WhiteBackGround>
        <Link to="/customermanage/viewplan/0">
          <BackButton>กลับ</BackButton>
        </Link>
        <Link to="/customermanage/upload/0">
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

export default connect(mapStateToProps, mapDispatchToProps)(ViewPlan);
