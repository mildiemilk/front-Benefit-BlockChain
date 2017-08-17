import React, { Component } from 'react';

class DeadlineBox extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="box-space">
            <div className="small-4 columns" style={{ paddingRight: '0px' }}>
              <div className="date-deadline-box">
                <div className="deadline-number">
                  08
                </div>
                <div className="deadline-text">วัน</div>
              </div>
            </div>
            <div
              className="small-4 columns"
              style={{ paddingRight: '0px', paddingLeft: '0px' }}
            >
              <div className="hour-deadline-box">
                <div className="deadline-number">
                  12
                </div>
                <div className="deadline-text">ชั่วโมง</div>
              </div>
            </div>
            <div className="small-4 columns" style={{ paddingLeft: '0px' }}>
              <div className="second-deadline-box">
                <div className="deadline-number">
                  36
                </div>
                <div className="deadline-text">นาที</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DeadlineBox;
