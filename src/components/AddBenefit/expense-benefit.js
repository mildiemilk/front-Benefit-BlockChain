import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { HeadLists, TextInput } from './styled';
import ListExpense from './list-expense';

class ExpenseBenefit extends Component {
  static propTypes = {
    handleTextChangeExpense: PropTypes.func.isRequired,
    addTodoExpense: PropTypes.func.isRequired,
    removeTodoExpense: PropTypes.func.isRequired,
    TextExpense: PropTypes.string.isRequired,
    expenseList: PropTypes.arrayOf(PropTypes.string).isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  addTodoEnter = e => {
    if (e.key === 'Enter') {
      this.props.addTodoExpense();
    }
  }

  render() {
    return (
      <div>
        <HeadLists>กรุณาระบุรายละเอียดที่ต้องการ</HeadLists>
        <TextInput
          placeholder="กดเพื่อพิมพ์รายละเอียดที่ต้องการแล้วกด Enter"
          onChange={this.props.handleTextChangeExpense}
          type="text"
          value={this.props.TextExpense}
          onKeyPress={this.addTodoEnter}
        />
        <ListExpense
          expenseList={this.props.expenseList}
          sendDel={this.props.removeTodoExpense}
        />
      </div>
    );
  }
}

export default ExpenseBenefit;
