import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Divider, Icon } from 'semantic-ui-react';
// import HeadCompanyInfo from '../header-company-info';
import HeaderBoxClaim from './header-box-claim';
import { Button } from '../../StyleComponent';
import '../../../styles/InsurerStyle/Claim.scss';
import { getGroupBenefit } from '../../../api/profile-company';
import {
  FileuploadBoxs,
  // BrowsButton,
  Upload,
  Head,
  TextNormal,
} from './styled';

class ClaimAnalysis extends Component {
  static propTypes = {
    // children: PropTypes.element.isRequired,
    // match: PropTypes.shape({ params: PropTypes.claimId }),
    // groupBenefit: PropTypes.arrayOf(PropTypes.object).isRequired,
    getGroupBenefit: PropTypes.func.isRequired,
    // getBenefitPlan: PropTypes.func.isRequired,
  }
  static defaultProps = {
    match: {
      params: 0,
    },
  }
  constructor() {
    super();
    this.state = {};
  }
  componentDidMount() {
    this.props.getGroupBenefit();
  }
  render() {
    return (
      <div className="ClaimAnalysis">
        <Head>ภาพรวมการเคลม</Head>
        <Divider />
        <HeaderBoxClaim />
        <div className="boxDetail">
          <div className="graphBox">
            <div className="row">
              <div>จำนวนการเคลมทั้งหมด</div>
            </div>
            <Divider />
          </div>
        </div>
        <div className="boxDetail">
          <div className="graphBox">
            <div className="row">
              <div className="large-6  columns">อัปโหลดข้อมูลการเคลม</div>
              <div className=" large-2 columns"><Icon name="coppy" />ดูประวัติการส่งไฟล์ข้อมูล</div>
            </div>
            <Divider />
            <div className="row">
              <div> อัพเดตข้อมูลล่าสุดวันที่ 30-07-2560</div>
            </div>
            <div className="row">
              <div className="large-2 large-offset-1 columns">
                <TextNormal>
                  อัพโหลดไฟล :
                </TextNormal>
              </div>
              <div className="large-4  columns">
                <FileuploadBoxs>กรุณาอัพโหลดไฟล์</FileuploadBoxs>
              </div>
              <div className=" large-5 columns">
                <Upload>
                  <Button for="uploadfor">
                    <input
                      id=""
                      style={{ display: 'none' }}
                      name="name[]"
                      type="file"
                      accept=".pdf,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                      onChange={e => this.handleUploadclaimdata(e)}
                    />
                    เลือกไฟล์
                  </Button>
                </Upload>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  // employeeDetail: () => dispatch(employeeDetail()),
  getGroupBenefit: () => dispatch(getGroupBenefit()),
  // getBenefitPlan: () => dispatch(getBenefitPlan()),
});

const mapStateToProps = state => ({
  data: state.profile.employeeDetail,
  groupBenefit: state.profile.groupBenefit,
  benefitPlan: state.benefitPlan.plan,
});
export default connect(mapStateToProps, mapDispatchToProps)(ClaimAnalysis);
