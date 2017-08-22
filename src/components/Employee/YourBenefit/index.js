import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import IconHead from '../../../../assets/employee/your_benefit_icon.png';
import Benefits1 from '../../image/flexy-1.png';
import Benefits2 from '../../image/flexy-2.png';
import Benefits3 from '../../image/flexy-3.png';

class YourBenefit extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <span className="yb-header">แผนสิทธิประโยชน์</span>
        <div className="yb-box-head">
          <div className="yb-box-head-icon-box">
            <img className="yb-box-head-icon" src={IconHead} alt="" />
            <span className="yb-box-head-text">แผนสิทธิประโยชน์</span>
          </div>
          <ul className="yb-box-head-date">
            <li>เริ่มแผน 10/10/60</li>
            <li>สิ้นสุดแผน 10/10/61</li>
          </ul>
        </div>
        <div className="yb-box-body">
          <div className="yb-body-head">
            <img className="yb-body-head-img" src={Benefits1} alt="" />
            <span className="yb-body-head-text">แผนประกันภัย</span>
          </div>
          <div className="yb-body-box">
            <div className="yb-body-div-text">
              <ul className="yb-body-text">
                <li>ผลประโยชน์และความคุ้มครอง</li>
                <li>IPD 400 บาท/วัน</li>
                <li>OPD 1200 บาท/ครั้ง</li>
              </ul>
            </div>
            <div className="yb-body-icon">
              <Icon name="chevron right" />
            </div>
          </div>
          <button className="yb-btn-view-pdf">
            <Icon name="file pdf outline" />
            View PDF
          </button>
        </div>
        <div className="yb-box-body">
          <div className="yb-body-head">
            <img className="yb-body-head-img" src={Benefits2} alt="" />
            <span className="yb-body-head-text">สุขภาพ</span>
          </div>
          <div className="yb-body-box">
            <div className="yb-body-div-text">
              <ul className="yb-body-text">
                <li>สิทธิประโยชน์</li>
                <li>ซื้อสินค้า 400 บาท</li>
                <li>บริการด้านสขภาพ 800 บาท</li>
              </ul>
            </div>
            <div className="yb-body-icon">
              <Icon name="chevron right" />
            </div>
          </div>
          <button className="yb-btn-view-pdf">
            <Icon name="file pdf outline" />
            View PDF
          </button>
        </div>
        <div className="yb-box-body">
          <div className="yb-body-head">
            <img className="yb-body-head-img" src={Benefits3} alt="" />
            <span className="yb-body-head-text">ใช้จ่ายทั่วไป</span>
          </div>
          <div className="yb-body-box">
            <div className="yb-body-div-text">
              <ul className="yb-body-text">
                <li>สิทธิประโยชน์</li>
                <li>ค่ารถ ค่าเติมน้ำมัน 1,000 บาท</li>
                <li>ค่าของใช้ 200 บาท</li>
              </ul>
            </div>
            <div className="yb-body-icon">
              <Icon name="chevron right" />
            </div>
          </div>
          <button className="yb-btn-view-pdf">
            <Icon name="file pdf outline" />
            View PDF
          </button>
        </div>
        <button className="yb-btn-clam">เคลม</button>
      </div>
    );
  }
}

export default YourBenefit;
