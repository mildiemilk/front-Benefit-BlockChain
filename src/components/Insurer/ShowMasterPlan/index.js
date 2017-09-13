import React, { Component } from 'react';
// import { Modal } from 'semantic-ui-react';
// import styled from 'styled-components';
import PropTypes from 'prop-types';
import JoinBid from './JoinBid';
import Quotation from './Quotation';
import QuotationClaim from './QuotationClaim';
import ModalInsurer from './ModalInsurer';
// import FormSubmitPlan from './SubmitPlan/FormSubmitPlan/form-submit-plan';
// import AllPlan from './SubmitPlan/all-plan';
// import PlanBoxModal from './ModalPlanBox/planbox-modal';
import IconChat from '../../../../assets/Insurer/icon_chat@3x.png';
// import {} from ''

class ShowMasterPlan extends Component {
  static propTypes = {
    data: PropTypes.shape({}).isRequired,
  }
  constructor(props) {
    super(props);
    const data = this.props.data;
    const { status, totalPrice, countBidding, updatedAt } = data;
    let joinbid;
    let quotation;
    if (status === 'watting') {
      joinbid = false;
      quotation = true;
    } else if (status === 'join') {
      joinbid = false;
      quotation = true;
    } else {
      joinbid = false;
      quotation = true;
    }
    this.state = {
      joinbid,
      modalCancelJoin: false,
      quotation,
      masterplan: [1, 2, 3, 4, 5],
      editplan: [],
      claimdata: [1, 2, 3],
      selectInsurerPlan: false,
      editDetailMP: false,
      // Insurerplan:,
      totalPrice,
      countBidding,
      updatedAt,
    };
  }

  handleOnpenModal = name => this.setState({ [name]: true });

  handleCloseModal = nameModal => this.setState({ [nameModal]: false });

  handleChangeStateQuotation = () =>
    this.setState({
      joinbid: false,
      quotation: true,
    });

  changePositionPage = () => {
    if (this.state.position === 'relative-box') {
      this.setState({ position: 'fixed-box' });
    } else {
      this.setState({ position: 'relative-box' });
    }
  }

  render() {
    const {
      joinbid,
      modalCancelJoin,
      quotation,
      masterplan,
      editplan,
      claimdata,
      selectInsurerPlan,
      editDetailMP,
      totalPrice,
      countBidding,
      updatedAt,

    } = this.state;
    return (
      <div>
        <div className="show-mp-box">
          {
            joinbid
            ? <JoinBid
              handleOnpenModal={this.handleOnpenModal}
              handleChangeStateQuotation={this.handleChangeStateQuotation}
            />
            : <div />
          }
          {
            quotation
            ? <Quotation
              priceBidding={totalPrice}
              masterplan={masterplan}
              editplan={editplan}
              handleOnpenModal={this.handleOnpenModal}
              countBidding={countBidding}
              updatedAt={updatedAt}
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
              <button
                className="quotation-btn-price"
                onClick={() => this.handleOnpenModal('modalCancelJoin')}
              >
                เสนอราคา
              </button>
            </div>
            <div className="quotation-chat-box">
              <img alt="" src={IconChat} className="quotation-icon-chat" />
              แชทกับ White Cat Company
            </div>
          </div>
          : <div />
        }
        <ModalInsurer
          joinbid={joinbid}
          modalCancelJoin={modalCancelJoin}
          handleCloseModal={this.handleCloseModal}
          selectInsurerPlan={selectInsurerPlan}
          editDetailMP={editDetailMP}
        />
      </div>
    );
  }
}

export default ShowMasterPlan;
