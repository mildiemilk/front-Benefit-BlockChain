import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Divider, Icon, Modal } from 'semantic-ui-react';
// import { Button } from '../../StyleComponent';
import '../../../styles/InsurerStyle/Claim.scss';
import '../../../styles/main_icon.scss';
import { Head, NavDetail } from './styled';
import { getClaim } from '../../../api/Insurer/claim';
import ModalApprove from './ModalApprove';
import ModalReject from './ModalReject';
import { StatusTag, Text } from './styled';
import reject from '../../../../assets/Insurer/redcancel@2x.png';
import confirm from '../../../../assets/Insurer/greenchecked@2x.png';
import IconZoom from '../../../../assets/employee/icon_zoom.png';

class ClaimDetail extends Component {
  static propTypes = {
    // children: PropTypes.element.isRequired,
    getClaim: PropTypes.func.isRequired,
    // updateStatusClaim: PropTypes.func.isRequired,
    claim: PropTypes.arrayOf(PropTypes.object).isRequired,
    match: PropTypes.shape({ params: PropTypes }),
    // match1: PropTypes.shape({ params: PropTypes.index }),
  }
  static defaultProps = {
    match: {
      params: 0,
    },
    match1: {
      params: 0,
    },
  }
  constructor(props) {
    super(props);
    this.state = {
      companyId: props.match.params.companyId,
      index: props.match.params.index,
      // ClaimID: props.match.params.index,
      openModal: false,
      modalImg: '',
    };
    // props.getCompanyBidding(this.state.companyId);
  }
  componentWillMount() {
    this.props.getClaim(this.state.companyId);
  }
  handleViewImg = () => {
    const { index } = this.state;
    const { claim } = this.props;
    // console.log('>>>handleViewImg', id);
    console.log('>>>handleViewImg--', claim[index].detail.imageClaimFile.urlImg);
    const image = claim[index].detail.imageClaimFile.urlImg.map((item, i) => (
      <div
        className="claim-img-block"
        key={i.toString()}
        onClick={() => this.handleOpenModal(item)}
        role="button"
        aria-hidden
      >
        <img alt="" src={item} className="claim-img" />
        <img alt="" src={IconZoom} className="calim-img-icon-zoom" />
      </div>
    ));
    return image;
  }
  handleOpenModal = item => this.setState({ openModal: true, modalImg: item });

  handleCloseModal = () => this.setState({ openModal: false, modalImg: '' });
  // handleClickchangeStatus = (statusClaim, claimId) => {
  //   updateStatusClaim(statusClaim, claimId, null)();
  // }
  render() {
    const { claim } = this.props;
    const { index, companyId } = this.state;
    console.log('>>>handleViewImg', claim);
    if (claim.length > 0) {
      let tag;
      if (claim[index].status === 'pending') {
        tag = <StatusTag color="#3a7bd5"><Icon name="hourglass two" />รอพิจารณา</StatusTag>;
      } else if (claim[index].status === 'approve') {
        tag = <StatusTag color="#46b3b8"><Icon name="checkmark two" />อนุมัติ</StatusTag>;
      } else {
        tag = <StatusTag color="#f7555f"><Icon name="remove two" />ไม่อนุมัติ</StatusTag>;
      }
      return (
        <div className="ClaimDetail">
          <div className="row">
            <div className="large-4 columns"><Head>รายละเอียดการเคลม</Head></div>
          </div>
          <Divider />
          <div className="row">
            <div className="large-7 columns">
              <NavDetail>
                <div className="row">
                  <div className="left-box-detail">
                    <div className="row">
                      <div className="large-7 columns fontweight">เลขที่อ้างอิง : 000213453 </div>
                      <div className="large-5 columns">{tag}</div> <br />
                    </div>
                    <Divider />
                    <div className="row">
                      <div className="large-4 columns fontweight">แผนประกันภัย </div>
                      <div className="large-7 columns">{claim[index].claimNumber}<br /><Divider /></div>
                    </div>
                    <div className="row">
                      <div className="large-4 columns fontweight">เรื่องที่เคลม </div>
                      <div className="large-7 columns">ค่ารักษาพยาบาลกรณีผู้ป่วยใน (In-Patient Department : IPD) <br /><Divider /></div>
                    </div>
                    <div className="row">
                      <div className="large-4 columns fontweight">สถานที่ที่ใช้บริการ </div>
                      <div className="large-7 columns">โรงพยาบาลราชวิถี <br /><Divider /></div>
                    </div>
                    <div className="row">
                      <div className="large-4 columns fontweight">ผู้เคลม </div>
                      <div className="large-7 columns">{claim[index].detail.name} <Link to="/claimprofile"><span className="inline-link">ดูโปรไฟล์</span></Link><br /><Divider /></div>
                    </div>
                    <div className="row">
                      <div className="large-4 columns fontweight">จำนวนเงินที่เคลม </div>
                      <div className="large-7 columns">{claim[index].detail.amount} บาท<br /><Divider /></div>
                    </div>
                    <div className="row">
                      <div className="large-4 columns fontweight">ผู้เคลม </div>
                      <div className="large-7 columns">{claim[index].detail.name} <br /><Divider /></div>
                    </div>
                    <div className="row">
                      <div className="large-4 columns fontweight">ธนาคาร </div>
                      <div className="large-7 columns">{claim[index].detail.bank} <br /><Divider /></div>
                    </div>
                    <div className="row">
                      <div className="large-4 columns fontweight">เลขที่บัญชี </div>
                      <div className="large-7 columns">{claim[index].detail.bankAccountNumber}<br /><Divider /></div>
                    </div>
                    <div className="row">
                      <div className="large-4 columns fontweight">หลักฐานการเคลม </div>
                      <div className="receiptDiv">
                        {this.handleViewImg(claim[index])}
                      </div>
                    </div>
                  </div>
                </div>
              </NavDetail>
            </div>
            <div className="large-5 columns">
              <NavDetail>
                <div className="left-box-detail">
                  <div className="row">
                    <div className="large-7 columns fontweight">รายละเอียดแผนประกันภัย </div>
                    <br />
                  </div>
                  <Divider />
                  <div className="row">
                    <div className="large-7 columns fontweight">IPD </div><br />
                  </div>
                  <div className="row">
                    <div className="large-6 columns">Room & Board<br />
                      General exspanses<br />
                      Surgery<br />
                      Doctor Visit<br />
                      Special Consultatoin<br />
                      Emergency OPD </div>
                    <div className="large-6 columns text-right">2,000 บาท<br />
                      25,000 บาท<br />
                      25,000 บาท<br />
                      2,000 บาท<br />
                      5,000 บาท<br />
                      5,000 บาท</div><br />
                  </div>
                  <Divider />
                  <div className="row">
                    <div className="large-7 columns fontweight">OPD </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="large-6 columns">30 ครั้ง / ปี</div>
                    <div className="large-6 columns text-right">1,800 บาท / ครั้ง</div>
                  </div>
                  <Divider />
                  <div className="row">
                    <div className="large-7 columns fontweight">Dental </div>
                  </div>
                  <br />
                  <div className="row">
                    <div className="large-6 columns">Lumsum</div>
                    <div className="large-6 columns text-right">3,000 บาท / ปี</div>
                  </div>
                  <Divider />
                  {(claim[index].status === 'pending')
                    ? <div className="row">
                      <div className="large-6 columns">
                        <ModalReject
                          claimId={claim[index]._id}
                          companyId={companyId}
                        />
                      </div>
                      <div className="large-6 columns">
                        <ModalApprove
                          claimId={claim[index]._id}
                          companyId={companyId}
                        />
                      </div>
                    </div>
                    : ''
                  }
                  {
                  (claim[index].status === 'approve')
                  ? <div className="row"><div className="large-12 columns status-icon"><img src={confirm} alt="allEmployee" width="29px" height="29px" />อนุมัติ</div></div>
                  : ''
                  }
                  {
                  (claim[index].status === 'reject')
                  ? <div className="row"><div className="large-12 columns status-icon"><img src={reject} alt="allEmployee" width="29px" height="29px" />ไม่อนุมัติ</div></div>
                  : ''
                  }
                </div>
                {(claim[index].status === 'reject')
                ? <div className="row"><div className="large-12 columns status-icon"><Text>{claim[index].reason}</Text></div></div>
                : ''
                }
              </NavDetail>
            </div>
          </div>
          <Modal
            open={this.state.openModal}
            onClose={this.handleCloseModal}
            className="claim-modal-box"
          >
            <img alt="" className="claim-img-modal-img" src={this.state.modalImg} />
          </Modal>
        </div>
      );
    }
    return <div />
  }
  }
const mapDispatchToProps = dispatch => ({
  getClaim: companyId => dispatch(getClaim(companyId)),
  // getGroupBenefit: () => dispatch(getGroupBenefit()),
  // getBenefitPlan: () => dispatch(getBenefitPlan()),
});

const mapStateToProps = state => ({
  claim: state.claimReducer.claim,
  // company: state.claimReducer.company,
  // count: state.claimReducer.count,
  // groupBenefit: state.profile.groupBenefit,
  // benefitPlan: state.benefitPlan.plan,
});
export default connect(mapStateToProps, mapDispatchToProps)(ClaimDetail);
