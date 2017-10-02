import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getCustomer, getCustomerFile } from '../../../../../api/Insurer/customer';
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
CircelBlue,
} from './styled';

class ViewPlan extends Component {
  static propTypes = {
    getCustomer: PropTypes.func.isRequired,
    getCustomerFile: PropTypes.func.isRequired,
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
      companyId: props.match.params.companyId,
      index: props.match.params.index,
      step: 2,
    };
    props.getCustomer();
    // props.getCustomerFile(this.state.companyId);
  }

  handleClickDownload = () => {
    this.props.getCustomerFile(this.state.companyId);
  }
  render() {
    const { customer } = this.props;
    const { index } = this.state;
    const PicStyle = {
      width: '44px',
      height: '44px',
    };
    if (customer.length > 0) {
      return (
        <div className="Download">
          <HeaderCompanyInfo DataCompany={customer[index]} PageName="allcustomer" />
          <CustomerName>
            ลูกค้าของคุณ &nbsp; /&nbsp;{customer[index].companyName}
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
                  <CircelBlue onClick={this.handleClickDownload}>
                    <img className="imageStyle-download" alt="download" role="button" aria-hidden src={IconDownload} onClick={this.handleClickDownload} />
                  </CircelBlue>
                </div>
              </div>
            </DownloadDiv>
          </WhiteBackGround>
          <Link to={`/stepmanagement/download/${index}/${customer[index].companyId}`}>
            <BackButton>กลับ</BackButton>
          </Link>
          <Link to={`/stepupload/${index}/${customer[index].companyId}`}>
            <NextButton>ต่อไป</NextButton>
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
  getCustomer: () => dispatch(getCustomer()),
  getCustomerFile: companyId => dispatch(getCustomerFile(companyId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ViewPlan);
