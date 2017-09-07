import React, { Component } from 'react';
import JoinBid from './JoinBid';
import Quotation from './Quotation';
import QuotationClaim from './QuotationClaim';
import IconChat from '../../../../assets/Insurer/icon_chat@3x.png';

class ShowMasterPlan extends Component {
  constructor(props) {
    super(props);
    this.state = {
      joinbid: true,
      modalCancelJoin: false,
      quotation: false,
      masterplan: [1, 2, 3, 4, 5, 6],
      editplan: [],
      claimdata: [1, 2, 3],
    };
  }

  handleOnpenModal = name => this.setState({ [name]: true });

  handleCloseModal = nameModal => this.setState({ [nameModal]: false });

  handleChangeStateQuotation = () =>
    this.setState({
      joinbid: false,
      modalCancelJoin: false,
      quotation: true,
    });

  render() {
    const {
      joinbid,
      quotation,
      masterplan,
      editplan,
      claimdata,
    } = this.state;
    return (
      <div>
        <div className="show-mp-box">
          {
            joinbid
            ? <JoinBid
              modalCancelJoin={this.state.modalCancelJoin}
              handleOnpenModal={this.handleOnpenModal}
              handleCloseModal={this.handleCloseModal}
              handleChangeStateQuotation={this.handleChangeStateQuotation}
            />
            : <div />
          }
          {
            quotation
            ? <Quotation
              masterplan={masterplan}
              editplan={editplan}
            />
            : <div />
          }
        </div>
        {
          quotation
          ? <div>
            <QuotationClaim
              claimdata={claimdata}
            />
            <div className="quotation-btn-price-box">
              <button className="quotation-btn-price">เสนอราคา</button>
            </div>
            <div className="quotation-chat-box">
              <img alt="" src={IconChat} className="quotation-icon-chat" />
              แชทกับ White Cat Company
            </div>
          </div>
          : <div />
        }
      </div>
    );
  }
}

export default ShowMasterPlan;
