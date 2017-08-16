import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextList, DetailList } from './styled';

class AddBenefit extends Component {
  static propTypes = {
    List: PropTypes.arrayOf(PropTypes.object).isRequired,
  }
  constructor() {
    super();
    this.state = {
    };
  }
  renderList = lists => {
    const benefitList = lists.map(list =>
      <TextList>
        {list}
      </TextList>,
    );
    return benefitList;
  }

  render() {
    const { List } = this.props;
    if (List) {
      return (
        <div className="large-6 columns">
          <DetailList>{this.renderList(List)}</DetailList>
        </div>
      );
    }
    return <div />;
  }
}

export default AddBenefit;
