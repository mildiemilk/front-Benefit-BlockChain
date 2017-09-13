import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import IconPlan from '../../../../assets/Insurer/icon_plan@3x.png';
import IconDownload from '../../../../assets/Insurer/icon_download@3x.png';
import IconView from '../../../../assets/Insurer/icon_view@3x.png';
import IconAddPlan from '../../../../assets/Insurer/icon_add_plan@3x.png';

class Quotation extends Component {
  static propTypes = {
    masterplan: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    editplan: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    handleOnpenModal: PropTypes.func.isRequired,
    priceBidding: PropTypes.string.isRequired,
    updatedAt: PropTypes.string.isRequired,
    countBidding: PropTypes.number.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  ShowMasterPlan = plans =>
    plans.map(
      (plan, index) =>
        <div className="quotation-body-show-mp" keys={index}>
          <div className="quotation-mp-name-box">
            <img alt="" className="quotation-icon-plan" src={IconPlan} />
            <span className="quotation-mp-name">Management Plan {index + 1}</span>
          </div>
          <div className="quotation-mp-price-box">
            <input className="quotation-mp-input-price" type="number" placeholder="เสนอราคา" />
            <div
              className="quotation-circle-icon-view"
              onClick={() => this.props.handleOnpenModal('editDetailMP')}
              role="button"
              aria-hidden
            >
              <img alt="" className="quotation-mp-icon-view" src={IconView} />
            </div>
            <div className="quotation-circle-icon-download">
              <img alt="" className="quotation-mp-icon-download" src={IconDownload} />
            </div>
          </div>
        </div>,
    );

  render() {
    const {
      masterplan,
      editplan,
      handleOnpenModal,
      priceBidding,
      updatedAt,
      countBidding,
    } = this.props;
    return (
      <div>
        <div className="quotation-box quotation-line">
          <div className="quotation-header-box">
            <div className="quotation-header-l">
              <span className="quotation-l-text">เลขที่ใบเสนอราคา : -</span>
              <span className="quotation-l-text">เสนอราคาไปแล้ว : {(countBidding === '') ? '0' : countBidding} ครั้ง</span>
              <span className="quotation-l-text">วันที่เสนอราคาล่าสุด : {moment(updatedAt).locale('th').format('DD MMMM YYYY')}</span>
            </div>
            <div className="quotation-header-r">
              <span className="quptation-r-text">ราคาที่เสนอไป</span>
              <span className="quptation-r-price">{(priceBidding === '') ? '-' : priceBidding}</span>
            </div>
          </div>
        </div>
        <div className="quotation-box">
          <div className="quotation-show-mp">
            <span className="quotation-body-title">รายการแพลนทั้งหมด</span>
            <div className="quotation-body-show-mp-box">
              {this.ShowMasterPlan(masterplan)}
            </div>
            <div className="quotation-mp-edit-title-box">
              <span className="quotation-mp-edit-title">รายการแพลนที่คุณเสนอเพิ่มเติม</span>
              <div className="quotation-btn-add-plan-box">
                <button className="quotation-mp-edit-btn" onClick={() => handleOnpenModal('selectInsurerPlan')}>
                  <img alt="" className="quotation-icon-add-plan" src={IconAddPlan} />
                  เพิ่มจากแผนประกันภัยของคุณ
                </button>
              </div>
            </div>
            <div className="quotation-add-plan-box">
              {
                editplan.length === 0
                ? <div className="quotation-mp-edit-noplan">
                  ยังไม่มีแพลนเพิ่มเติม
                </div>
                : <div />
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Quotation;
