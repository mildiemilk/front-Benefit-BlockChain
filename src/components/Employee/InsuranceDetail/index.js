import React, { Component } from 'react';
import { Icon, Link } from 'semantic-ui-react';
import styled from 'styled-components';
import Header from '../header';
import Footer from '../footer';

const Icons = styled(Icon)`
  &&&{
    position: absolute;
    right: 6px;
  }
`;

class InsuranceDetail extends Component {
  constructor() {
    super();
    this.state = {
      IPDBox: false,
    };
  }

  handleToggleIPD = () => {
    if (this.state.IPDBox) {
      this.setState({ IPDBox: false });
    } else {
      this.setState({ IPDBox: true });
    }
  }

  render() {
    return (
      <div className="InsuranceDetail">
        <Header />
        <div className="MarginDiv">
          <div className="row">
            <div className="small-10 small-centered columns">
              <div className="SpaceHeader">
                <p className="HeaderInsurance"> แผนประกันภัย </p>
              </div>

              <div className="DividerDiv">
                <div className="DivImg">
                  <div className="RecHeader">
                    <img
                      className="ToppicImg"
                      src="../../../../employee/insurance/life.png"
                      alt="Toppic"
                    />
                    <p className="ToppicDetail">
                      LIFE
                    </p>
                  </div>

                  <img
                    className="NoteIcon"
                    src="../../../../employee/insurance/icons-8-info.png"
                    alt="Note"
                  />
                </div>

                <div className="RecDetail">
                  <div className="SpaceDetail">
                    <p className="Detail">
                      คูณด้วยอัตราเงินเดือน 2 เท่า
                    </p>
                  </div>
                </div>
              </div>

              <div className="DividerDiv">
                <div className="DivImg">
                  <div className="RecHeader">
                    <img
                      className="ToppicImg"
                      src="../../../../employee/insurance/opd.png"
                      alt="Toppic"
                    />
                    <p className="ToppicDetail">
                      OPD
                    </p>
                  </div>

                  <img
                    className="NoteIcon"
                    src="../../../../employee/insurance/icons-8-info.png"
                    alt="Note"
                  />
                </div>

                <div className="RecDetail">
                  <div className="SpaceDetail">
                    <p className="Detail">
                      ค่ารักษาครั้งล่ะ 2,000 บาท
                    </p>
                  </div>
                </div>
              </div>

              <div className="DividerDiv">
                <div className="DivImg">
                  <div className="RecHeader">
                    <img
                      className="ToppicImg"
                      src="../../../../employee/insurance/dental.png"
                      alt="Toppic"
                    />
                    <p className="ToppicDetail">
                      DENTAL
                    </p>
                  </div>

                  <img
                    className="NoteIcon"
                    src="../../../../employee/insurance/icons-8-info.png"
                    alt="Note"
                  />
                </div>

                <div className="RecDetail">
                  <div className="SpaceDetail">
                    <p className="Detail">
                      ค่ารักษา 4,000 บาท/ปี
                    </p>
                  </div>
                </div>
              </div>

              <div className="DividerDiv">
                <div className="DivImg">
                  <div className="RecHeader">
                    <img
                      className="ToppicImg"
                      src="../../../../employee/insurance/ipd.png"
                      alt="Toppic"
                    />
                    <p className="ToppicDetail">
                      IPD
                    </p>
                  </div>

                  <img
                    className="NoteIcon"
                    src="../../../../employee/insurance/icons-8-info.png"
                    alt="Note"
                  />
                </div>

                <div className="DivImg">
                  <div className="RecDetail">
                    <div className="SpaceDetail">
                      <span className="Detail">
                        คุ้มครองสูงสุด 20,000 บาท
                      </span>
                      {this.state.IPDBox
                      ? <Icons
                        onClick={this.handleToggleIPD}
                        disabled
                        name="remove"
                      />
                      : <Icons
                        onClick={this.handleToggleIPD}
                        disabled
                        name="plus"
                      />}

                      {this.state.IPDBox
                      ? <div className="SpaceSubDetail">
                        <div className="clearfix">
                          <span className="LeftDetail">
                            Lumsum
                          </span>
                          <span className="RightDetail">
                            1,200 บาท/ปี
                          </span>
                        </div>

                        <div className="clearfix">
                          <span className="LeftDetail">
                            Co-Pay
                          </span>
                        </div>

                        <div className="clearfix">
                          <span className="TabDetail">
                            Quota Share
                          </span>
                          <span className="RightDetail">
                            10%
                          </span>
                        </div>

                        <div className="clearfix">
                          <span className="LeftDetail">
                            Detail 1
                          </span>
                          <span className="RightDetail">
                            400 บาท
                          </span>
                        </div>

                        <div className="clearfix">
                          <span className="LeftDetail">
                            Detail 2
                          </span>
                        </div>

                        <div className="clearfix">
                          <span className="TabDetail">
                            Detail 2.1
                          </span>
                          <span className="RightDetail">
                            200 บาท/ครั้ง
                          </span>
                        </div>

                        <div className="clearfix">
                          <span className="TabDetail">
                            Detail 2.2
                          </span>
                          <span className="RightDetail">
                            500 บาท
                          </span>
                        </div>

                        <div className="clearfix">
                          <span className="LeftDetail">
                            Detail 3
                          </span>
                          <span className="RightDetail">
                            300 บาท
                          </span>
                        </div>

                      </div>
                      : null}
                    </div>
                  </div>
                </div>
              </div>

              <div className="DivBack">
                <Link to="/flexyplan">
                  <u className="BackButton">
                    &lt; ย้อนกลับ
                  </u>
                </Link>
              </div>

            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default InsuranceDetail;
