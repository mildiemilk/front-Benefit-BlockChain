import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getCustomer, getCustomerSelectPlan } from '../../../../../api/Insurer/customer';
import HeaderCompanyInfo from '../../../header-company-info';
// import IconPlan from '../../../../../../assets/Insurer/icon_plan@3x.png';
// import IconView from '../../../../../../assets/Insurer/icon_view@3x.png';
// import IconDownload from '../../../../../../assets/Insurer/icon_download@3x.png';
import NavStep from '../NavStep';
import {
CustomerName,
WhiteBackGround,
HeadSecondDiv,
NextButton,
BackButton,
DivHeadBackcolor,
DivContent,
UploadDiv,
BrowsButton,
PlanBlock,
} from './styled';

class Benefits extends Component {
  static propTypes = {
    getCustomer: PropTypes.func.isRequired,
    getCustomerSelectPlan: PropTypes.func.isRequired,
    customer: PropTypes.arrayOf(PropTypes.object).isRequired,
    customerSelectPlan: PropTypes.arrayOf(PropTypes.object).isRequired,
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
      filePreviewUrl: '',
      namePlan: '',
      idPlan: '',
      isClickPlan: false,
      step: 4,
      file: null,
    };
    props.getCustomer();
  }
  componentWillMount() {
    this.props.getCustomerSelectPlan(this.state.companyId);
  }
  // componentDidMount() {
  //   this.handleClick(id, name);
  // }
  // componentWillReceiveProps(nextProps) {
  //   const { data } = nextProps.data;
  //   this.setState({ DataCompany: data });
  // }
  // componentWillUpdate(nextProps, nextState) {
  //   if (nextState.updateBiding) {
  //     this.props.getCompanyBidding(this.state.companyId);
  //   }
  //   if (this.state.updateBiding) {
  //     this.setState({ updateBiding: false });
  //     this.props.getCompanyBidding(this.state.companyId);
  //     console.log('sddddd----ss', this.props.data.data);
  //   }
  // }
  handleClick = (id, name) => {
    this.setState({ isClickPlan: true,
      namePlan: name,
      idPlan: id });
  }
  // componentWillUpdate() {
  //   if (this.state.updateClaim) {
  //     this.setState({ updateClaim: false });
  //     this.props.getClaimStatus();
  //   }
  // }
  ShowPlan = Plans =>
    Plans.map(
      (Plans, index) =>
        <PlanBlock onClick={this.handleClick(index, Plans.planId.planName)} keys={index}>
          <div className="quotation-body-show-mp" keys={index}>
            <div className="quotation72width">
              <span className="quotation-mp-name">{Plans.planId.planName}</span>
            </div>
          </div>
        </PlanBlock>,
    );

  render() {
    const { customer, customerSelectPlan } = this.props;
    const { index } = this.state;
    const { filePreviewUrl, namePlan } = this.state;
    let $filePreview = null;
    if (filePreviewUrl) {
      $filePreview = <span>{this.state.file.name}&nbsp;</span>;
    } else {
      $filePreview = (
        <span style={{ opacity: '0.2' }}>
          please Upload file .xlsx{' '}
        </span>
      );
    }
    if (customer.length > 0) {
      return (
        <div style={{ padding: 15 }} className="stepBenefits">
          <HeaderCompanyInfo DataCompany={customer[index]} PageName="allcustomer" />
          <CustomerName>
            ลูกค้าของคุณ &nbsp; /&nbsp;{customer[index].companyName}
          </CustomerName>
          <NavStep step={4} />
          <WhiteBackGround>
            <div className="row">
              <div className="large-3 columns">
                <HeadSecondDiv>
                  อัพโหลดรายละเอียดแผนประกันภัย
                </HeadSecondDiv>
                <div className="quotation-box">
                  <div className="quotation-show-mp">
                    <div className="quotation-body-show-mp-box">
                      {customerSelectPlan.length > 0
                        ? this.ShowPlan(customerSelectPlan)
                        : <div className="quotation-mp-edit-noplan">
                          ยังไม่มีแพลนเพิ่มเติม
                          </div>
                        }
                    </div>
                  </div>
                </div>
              </div>
              <div className="large-9 columns">
                <DivHeadBackcolor>
                  {namePlan}
                </DivHeadBackcolor>
                <DivContent className="contentSecond">
                  <div className="row">
                    <div className="large-12 columns padTop">
                      อัปโหลดไฟล์รายละเอียดแผนประกันภัยฉบับสมบูรณ์ ขนาดไม่เกิน 100 MB
    เพื่อให้เจ้าชองกรมธรรม์สามารถตรวจสอบแผนประกันภัยของตัวเองได้
                    </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="large-12 columns padTop">
                    อัพโหลดไฟล์ :
                    </div>
                  </div>
                  <div className="row">
                    <div className="large-8 columns">
                      <UploadDiv>{$filePreview}</UploadDiv>
                    </div>
                    <div className="large-4 columns ">
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
              </div>
            </div>
          </WhiteBackGround>
          <Link to={`/customerplan/${index}/${customer[index].companyId}`}>
            <BackButton>กลับ</BackButton>
          </Link>
          <Link to={`/stepdownload/${index}/${customer[index].companyId}`}>
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
  customerSelectPlan: state.customerSelectPlanReducer.customerSelectPlan,
});

const mapDispatchToProps = dispatch => ({
  getCustomer: () => dispatch(getCustomer()),
  getCustomerSelectPlan: companyId => dispatch(getCustomerSelectPlan(companyId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Benefits);
