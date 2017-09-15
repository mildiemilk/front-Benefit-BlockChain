import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Divider } from 'semantic-ui-react';
import styled from 'styled-components';

const HeadList = styled.div`
  font-size: 32px;
  margin: 20px 0px;
  font-size: ${props => props.fontSize};
`;
const Dividers = styled(Divider)`
  height: 2px;
  border: solid 2px #c3c3c3;
  margin-bottom:29px;
`;
class Head extends Component {
  static propTypes = {
    content: PropTypes.string.isRequired,
    fontSize: PropTypes.number.isRequired,
  }
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const { content } = this.props;
    return (
      <div className="row">
        <HeadList fontSize={this.props.fontSize}>
          {content}
        </HeadList>
        <Dividers />
      </div>
    );
  }
}

export default Head;
