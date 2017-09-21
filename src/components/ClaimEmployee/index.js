import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Head from '../Head';
import DetailClaim from './DetailClaim';
import ExtendClaim from './ExtendClaim';
import { getClaimList } from '../../api/profile-company';

class ClaimEmployee extends Component {
  static propTypes = {
    getClaimList: PropTypes.func.isRequired,
    claimList: PropTypes.shape({}).isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      isHealth: true,
      isExpense: false,
      isInsurance: false,
      isExtend: false,
      index: 1,
      indexDetail: '',
    };
    props.getClaimList();
  }
  // componentDidMount() {
  //   this.setIndex();
  // }
  // setIndex = () => {
  //   const { isHealth, isExpense, isInsurance } = this.state;
  //   if (isHealth) {
  //     this.setState({
  //       index: 1,
  //     });
  //   } else if (isExpense) {
  //     this.setState({
  //       index: 0,
  //     })
  //   } else if (isInsurance) {
  //     this.setState({
  //       index: 2,
  //     });
  //   }
  // }
  handleDetail = index => {
    console.log('dfdfd');
    const { isExtend } = this.state;
    this.setState({
      isExtend: !isExtend,
      indexDetail: index,
    });
  }
  handleHealth = () => {
    const { isHealth } = this.state;
    if (!isHealth) {
      this.setState({
        isHealth: true,
        index: 1,
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
        index: 0,
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
        index: 2,
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
    console.log('props===>Claim', this.props);
    console.log('state--', this.state.index);
    return (
      <div>
        <Head content="เคลม" />
        {isExtend
        ? <ExtendClaim
          isHealth={this.state.isHealth}
          isExpense={this.state.isExpense}
          isInsurance={this.state.isInsurance}
          handleDetail={this.handleDetail}
          claimList={this.props.claimList}
          index={this.state.index}
          indexDetail={this.state.indexDetail}
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
          claimList={this.props.claimList}
          index={this.state.index}
        />
        }
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getClaimList: () => dispatch(getClaimList()),
});

const mapStateToProps = state => ({
  claimList: state.profile.claimList,
});

export default connect(mapStateToProps, mapDispatchToProps)(ClaimEmployee);
