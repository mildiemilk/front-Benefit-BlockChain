import React, { Component } from 'react';
import congrat from '../../image/asset-1.png';
import healthpic from '../../image/5.png';
import insurepic from '../../image/7.png';
import expendpic from '../../image/6.png';
import {
  Submit,
  HeaderBox,
  BoxStyle,
  HeaderBoxRight,
  DataStyle,
  ImageInbox,
  ImageStyle,
  Textfirst,
} from './styled';

class EmployeeFixPlan extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="fixplan">
        <div className="backgroundStlye">
          <div className="row">
            <div className="small-10 small-centered columns">
              <ImageStyle alt="asset" src={congrat} />
              <Textfirst >
                ยินดีด้วย!<br />นี้คือสิทธิประโยชน์ของคุณ
              </Textfirst>
              <BoxStyle>
                <HeaderBox>
                  <div
                    className="small-6  columns"
                    style={{ fontSize: '14px' }}
                  >
                    แผนประกันภัย
                  </div>
                  <HeaderBoxRight className="small-4 columns">
                    ดูเพิ่มเติม &gt;
                  </HeaderBoxRight>
                </HeaderBox>
                <DataStyle className="small-7 columns">
                  <b>ผลประโยชน์และการคุ้มครอง</b><br />
                  ค่าห้อง: 400 <br />
                  ผ่าตัด : 20,000 บาท/ครั่ง
                </DataStyle>
                <div className="small-3 columns">
                  <ImageInbox src={insurepic} />
                </div>
              </BoxStyle>
              <BoxStyle>
                <HeaderBox>
                  <div
                    className="small-6  columns"
                    style={{ fontSize: '14px' }}
                  >
                    สุขภาพ
                  </div>
                  <HeaderBoxRight className="small-4 columns">
                    ดูเพิ่มเติม &gt;
                  </HeaderBoxRight>
                </HeaderBox>
                <DataStyle className="small-7 columns">
                  <b>ผลประโยชน์และการคุ้มครอง</b><br />
                  ค่าห้อง: 400 <br />
                  บริการ : 2,000 บาท
                </DataStyle>
                <div className="small-3 columns">
                  <ImageInbox src={healthpic} />
                </div>
              </BoxStyle>
              <BoxStyle>
                <HeaderBox>
                  <div
                    className="small-6  columns"
                    style={{ fontSize: '14px' }}
                  >
                    ใช้จ่ายทั่วไป
                  </div>
                  <HeaderBoxRight className="small-4 columns">
                    ดูเพิ่มเติม &gt;
                  </HeaderBoxRight>
                </HeaderBox>
                <DataStyle className="small-7 columns">
                  <b>ผลประโยชน์และการคุ้มครอง</b><br />
                  ค่าห้อง: 400 <br />
                  บริการ : 2,000 บาท
                </DataStyle>
                <div className="small-3 columns">
                  <ImageInbox src={expendpic} />
                </div>
              </BoxStyle>

              <Submit>
                ยืนยัน
              </Submit>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EmployeeFixPlan;
