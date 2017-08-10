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
                <div className="deadline-text">
                  08
                </div>
                <div>วัน</div>
              </div>
            </div>
            <div
              className="small-4 columns"
              style={{ paddingRight: '0px', paddingLeft: '0px' }}
            >
              <div className="hour-deadline-box">
                <div className="deadline-text">
                  08
                </div>
                <div>ชั่วโมง</div>
              </div>
            </div>
            <div className="small-4 columns" style={{ paddingLeft: '0px' }}>
              <div className="second-deadline-box">
                <div className="deadline-text">
                  08
                </div>
                <div>ชั่วโมง</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DeadlineBox;
