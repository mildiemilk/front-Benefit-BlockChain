import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HeadLists, TextInput } from './styled';
import List from './list-health';

class HealthBenefit extends Component {
  static propTypes = {
    handleTextChangeHealth: PropTypes.func.isRequired,
    addTodoHealth: PropTypes.func.isRequired,
    removeTodoHealth: PropTypes.func.isRequired,
    TextHealth: PropTypes.string.isRequired,
    healthList: PropTypes.arrayOf(PropTypes.string).isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  addTodoEnter = e => {
    if (e.key === 'Enter') {
      this.props.addTodoHealth();
    }
  }

  render() {
    return (
      <div>
        <HeadLists>กรุณาระบุรายละเอียดที่ต้องการ</HeadLists>
        <TextInput
          placeholder="กดเพื่อพิมพ์รายละเอียดที่ต้องการแล้วกด Enter"
          onChange={this.props.handleTextChangeHealth}
          type="text"
          value={this.props.TextHealth}
          onKeyPress={this.addTodoEnter}
        />
        <List
          healthList={this.props.healthList}
          sendDel={this.props.removeTodoHealth}
        />
      </div>
    );
  }
}

export default HealthBenefit;
