import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { DetailList, ButtonDelete, TextList } from './styled';

class ListHealth extends Component {
  static propTypes = {
    HealthList: PropTypes.arrayOf(PropTypes.string).isRequired,
    sendDel: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <DetailList>
        {this.props.HealthList.map((item, index) => (
          <TextList>
            {item}
            <ButtonDelete onClick={() => this.props.sendDel(index)}>
              <Icon name="delete" />
            </ButtonDelete>
          </TextList>
        ))}

      </DetailList>
    );
  }
}

export default ListHealth;
