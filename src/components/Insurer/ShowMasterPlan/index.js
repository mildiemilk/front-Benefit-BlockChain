import React, { Component } from 'react';
// import { Modal } from 'semantic-ui-react';
// import styled from 'styled-components';
import JoinBid from './JoinBid';
import Quotation from './Quotation';
import QuotationClaim from './QuotationClaim';
import ModalInsurer from './ModalInsurer';
// import FormSubmitPlan from './SubmitPlan/FormSubmitPlan/form-submit-plan';
// import AllPlan from './SubmitPlan/all-plan';
// import PlanBoxModal from './ModalPlanBox/planbox-modal';
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
      selectInsurerPlan: false,
      editDetailMP: false,
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
