import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
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
import { uploadFileDetail } from '../../../../../api/Insurer/customer';

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
      namePlan: '',
      idPlan: '',
      isClickPlan: false,
      step: 4,
      file: null,
      type: null,
      i: 0,
      err: '',
      renderAllCustomer: false,
    };
    props.getCustomer();
  }

  componentWillMount() {
    this.props.getCustomerSelectPlan(this.state.companyId);
  }

  componentWillReceiveProps(nextProps) {
    const file = [];
    const type = [];
    const idPlan = [];
    nextProps.customerSelectPlan.forEach(element => {
      file.push(null);
      type.push(element.type);
      idPlan.push(element.planId._id);
    });
    this.setState({
      namePlan: nextProps.customerSelectPlan[0].planId.planName,
      idPlan,
      type,
      file,
    });
  }

  handleClick = index => {
    this.setState({
      namePlan: this.props.customerSelectPlan[index].planId.planName,
      // idPlan: this.props.customerSelectPlan[index].planId._id,
      // type: this.props.customerSelectPlan[index].type,
      i: index,
    });
  }

  ShowPlan = () => {
    const { customerSelectPlan } = this.props;
    const plans = customerSelectPlan.map(
      (Plans, index) =>
        <PlanBlock
          onClick={() => this.handleClick(index)}
          key={index.toString()}
        >
          <div className="quotation-body-show-mp">
            <div className="quotation72width">
              <span className="quotation-mp-name">{Plans.planId.planName}</span>
            </div>
          </div>
        </PlanBlock>,
    );
    return plans;
  }

  handleUploadFile = ({ target: { files } }) => {
    const { file, i } = this.state;
    file[i] = files[0];
    this.setState({ file });
  }

  handleSave = () => {
    const { file, type, idPlan } = this.state;
    const check = file.indexOf(null);
    if (check === -1) {
      uploadFileDetail(file, type, idPlan)
      .then(() => {
        this.setState({ renderAllCustomer: true });
      });
    } else {
      this.setState({ err: 'กรุณาอัพโหลดไฟล์ให้ครบด้วยค่ะ' });
    }
  }

  render() {
    const { customer, customerSelectPlan } = this.props;
    const { index, file, namePlan, i, err, renderAllCustomer } = this.state;
    if (renderAllCustomer) {
      return <Redirect to={{ pathname: '/allcustomer' }} />;
    } else if (customer.length > 0) {
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
                        ? this.ShowPlan()
                        : <div className="quotation-mp-edit-noplan">
                          ยังไม่มีแผนเพิ่มเติม
                          </div>
                        }
                    </div>
                  </div>
                </div>
              </div>
              <div className="large-9 columns">
                {
                  err === ''
                  ? <span />
                  : <span className="login-d-error-msg">{err}</span>
                }
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
                      <UploadDiv>
                        <span>
                          {
                            file[i] === null
                            ? 'please Upload file .xlsx'
                            : file[i].name
                          }
                        </span>
                      </UploadDiv>
                    </div>
                    <div className="large-4 columns ">
                      <BrowsButton for="uploadfor">
                        <input
                          id="uploadfor"
                          style={{ display: 'none' }}
                          type="file"
                          accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
                          onChange={this.handleUploadFile}
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
          <NextButton onClick={this.handleSave}>บันทึก</NextButton>
        </div>

      );
    }
    return <div />;
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
