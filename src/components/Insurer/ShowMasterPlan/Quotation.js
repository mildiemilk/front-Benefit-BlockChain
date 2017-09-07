import React, { Component } from 'react';
import IconPlan from '../../../../assets/insurer/icon_plan@3x.png';

class Quotation extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="quotation-box quotation-line">
          <div className="quotation-header-box">
            <div className="quotation-header-l">
              <span className="quotation-l-text">เลขที่ใบเสนอราคา : -</span>
              <span className="quotation-l-text">เสนอราคาไปแล้ว : 0 ครั้ง</span>
              <span className="quotation-l-text">วันที่เสนอราคาล่าสุด : -</span>
            </div>
            <div className="quotation-header-r">
              <span className="quptation-r-text">ราคาที่เสนอไป</span>
              <span className="quptation-r-price">-</span>
            </div>
          </div>
        </div>
        <div className="quotation-box">
          <div className="quotation-show-mp">
            <span className="quotation-body-title">รายการแพลนทั้งหมด</span>
            <div className="quotation-body-show-mp-box">
              <div className="quotation-body-show-mp">
                <div className="quotation-mp-name-box">
                  <img alt="" className="quotation-icon-plan" src={IconPlan} />
                  <span className="quotation-mp-name">Management Plan 1</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Quotation;
