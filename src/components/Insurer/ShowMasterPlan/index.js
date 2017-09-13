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
    DataCompany: PropTypes.shape({}).isRequired,
  }
  constructor(props) {
    super(props);
    console.log('ShowMasterPlan', this.props);
    const data = this.props.DataCompany;
    const { status,
            totalPrice,
            countBidding,
            startNewInsurance,
            updatedAt,
            expiredOldInsurance,
            plan,
          } = data;
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
      masterplan: plan.master,
      editplan: [],
      claimdata: [1, 2, 3],
      selectInsurerPlan: false,
      editDetailMP: false,
      totalPrice,
      countBidding,
      startNewInsurance,
      updatedAt,
      expiredOldInsurance,
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
    // this.props.sendToParent({detail:'prim ba'}, 0);
    // const data = this.props.data;
    // const { plan } = data;
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
      startNewInsurance,
      updatedAt,
      expiredOldInsurance,
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
              masterplan={masterplan}
              editplan={editplan}
              totalPrice={totalPrice}
              countBidding={countBidding}
              startNewInsurance={startNewInsurance}
              updatedAt={updatedAt}
              expiredOldInsurance={expiredOldInsurance}
              handleOnpenModal={this.handleOnpenModal}
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
