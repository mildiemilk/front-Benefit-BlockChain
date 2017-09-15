import React, { Component } from 'react';
import Head from '../Head';
import DetailClaim from './DetailClaim';
import ExtendClaim from './ExtendClaim';

class ClaimEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHealth: true,
      isExpense: false,
      isInsurance: false,
      isExtend: false,
    };
  }
  handleDetail = () => {
    const { isExtend } = this.state;
    this.setState({
      isExtend: !isExtend,
    });
  }
  handleHealth = () => {
    const { isHealth } = this.state;
    if (!isHealth) {
      this.setState({
        isHealth: true,
        isExpense: false,
        isInsurance: false,
      });
    }
  }
  handleExpense = () => {
    const { isExpense } = this.state;
    if (!isExpense) {
      this.setState({
        isHealth: false,
        isExpense: true,
        isInsurance: false,
      });
    }
  }
  handleInsurance = () => {
    const { isInsurance } = this.state;
    if (!isInsurance) {
      this.setState({
        isHealth: false,
        isExpense: false,
        isInsurance: true,
      });
    }
  }
  styletabHealth = () => {
    if (this.state.isHealth) {
      return 'active';
    }
    return '';
  }
  styletabExpense = () => {
    if (this.state.isExpense) {
      return 'active';
    }
    return '';
  }
  styletabInsurance = () => {
    if (this.state.isInsurance) {
      return 'active';
    }
    return '';
  }
  render() {
    const { isExtend } = this.state;
    return (
      <div>
        <Head content="เคลม" />
        {isExtend
        ? <ExtendClaim
          isHealth={this.state.isHealth}
          isExpense={this.state.isExpense}
          isInsurance={this.state.isInsurance}
          handleDetail={this.handleDetail}
        />
        : <DetailClaim
          styletabExpense={this.styletabExpense}
          styletabHealth={this.styletabHealth}
          styletabInsurance={this.styletabInsurance}
          handleExpense={this.handleExpense}
          handleHealth={this.handleHealth}
          handleInsurance={this.handleInsurance}
          handleDetail={this.handleDetail}
          isHealth={this.state.isHealth}
          isExpense={this.state.isExpense}
          isInsurance={this.state.isInsurance}
        />
        }
      </div>
    );
  }
}

export default ClaimEmployee;
