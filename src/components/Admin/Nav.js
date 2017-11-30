import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import Ledger from './ledger';
import { Head, Text } from './styled';

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Head>
        <Text>
          <Icon name="user" size="large" />
          Admin
        </Text>
        <Ledger />
      </Head>
    );
  }
}

export default Nav;
