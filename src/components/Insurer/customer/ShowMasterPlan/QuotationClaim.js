import React, { Component } from 'react';
import PropTypes from 'prop-types';
import IconClaimData from '../../../../assets/Insurer/icon_claim_data@3x.png';
import IconDownload from '../../../../assets/Insurer/icon_download@3x.png';
import IconUser from '../../../../assets/Insurer/icon_user@3x.png';

class QuotationClaim extends Component {
  static propTypes = {
    claimdata: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  ShowClaimData = claimData =>
    claimData.map(
      (claim, index) =>
        <div className="quotation-body-show-mp" keys={index}>
          <div className="quotation-mp-name-box">
            <img alt="" className="quotation-icon-plan" src={IconClaimData} />
            <span className="quotation-mp-name">Claim Data year {index + 1} (01/02/17) - (25/08/17)</span>
          </div>
          <div className="quotation-mp-price-box">
            <div className="quotation-circle-icon-download">
              <img alt="" className="quotation-mp-icon-download" src={IconDownload} />
            </div>
          </div>
        </div>,
    );

  render() {
    const { claimdata } = this.props;
    return (
      <div className="show-mp-box grap">
        <span className="quotation-mp-claim-title">ข้อมูลการเคลม</span>
        {this.ShowClaimData(claimdata)}
        <span className="quotation-mp-claim-title grap-title">ข้อมูลพนักงาน</span>
        <div className="quotation-body-show-mp">
          <div className="quotation-mp-name-box">
            <img alt="" className="quotation-icon-plan" src={IconUser} />
            <span className="quotation-mp-name">Member List</span>
          </div>
          <div className="quotation-mp-price-box">
            <div className="quotation-circle-icon-download">
              <img alt="" className="quotation-mp-icon-download" src={IconDownload} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default QuotationClaim;
