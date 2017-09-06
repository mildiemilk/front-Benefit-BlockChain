import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Head from '../../Head';
import { Detail } from '../../StyleComponent';

class Claim extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
  }
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="ClaimList">
        <Head content="แผนสิทธิประโยชน์ของคุณ" />
        <Detail>
          <div className="row">
            <div className="large-6 columns">hh</div>
            <div className="large-6 columns">hh</div>
          </div>
        </Detail>
      </div>
    );
  }
}
export default Claim;
