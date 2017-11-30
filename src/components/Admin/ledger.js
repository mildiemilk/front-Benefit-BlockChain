import React, { Component } from 'react';
import { Block, LedgerStyled, Icons } from './styled';

class Ledger extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderBlock = () => (
    <Block>
      kkk
    </Block>
  )
  render() {
    return (
      <LedgerStyled>
        <Icons name="share alternate" size="large" />
        {this.renderBlock()}
        {this.renderBlock()}
        {this.renderBlock()}
        {this.renderBlock()}
      </LedgerStyled>
    );
  }
}

export default Ledger;
