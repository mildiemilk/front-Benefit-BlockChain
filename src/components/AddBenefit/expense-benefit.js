import React, { Component } from 'react'
import { HeadLists, TextInput } from './styled'
import ListExpense from './list-expense'

class ExpenseBenefit extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  addTodoEnter = e => {
    if (e.key === 'Enter') {
      this.props.addTodoExpense()
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
          ExpenseList={this.props.ExpenseList}
          sendDel={this.props.removeTodoExpense}
        />
      </div>
    )
  }
}

export default ExpenseBenefit
