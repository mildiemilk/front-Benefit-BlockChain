import React, { Component } from 'react';
import PropTypes from 'prop-types';

class JoinBid extends Component {
  static propTypes = {
    handleOnpenModal: PropTypes.func.isRequired,
    handleChangeStateQuotation: PropTypes.func.isRequired,
    end: PropTypes.bool.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      handleOnpenModal,
      handleChangeStateQuotation,
      end,
    } = this.props;
    return (
      <div>
        {end
        ? null
        : <div className="joinbid-box">
          <div className="joinbid-l">คุณจะได้รับข้อมูลเพิ่มเติม เมื่อคุณเข้าร่วมการประมูลราคานี้</div>
          <div className="joinbid-r">
            <button className="joinbid-join" onClick={handleChangeStateQuotation}>เข้าร่วม</button>
            <button className="joinbid-cancel" onClick={() => handleOnpenModal('modalCancelJoin')}>ไม่เข้าร่วม</button>
          </div>
        </div>
        }
      </div>
    );
  }
}

export default JoinBid;
