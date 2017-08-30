import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Divider } from 'semantic-ui-react';
import styled from 'styled-components';

const HeadList = styled.div`
  font-size: 32px;
  margin: 20px 0px;
`;

class Head extends Component {
  static propTypes = {
    content: PropTypes.string.isRequired,
  }
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { content } = this.props;
    return (
      <div className="row">
        <HeadList>
          {content}
        </HeadList>
        <Divider />
      </div>
    );
  }
}

export default Head;
