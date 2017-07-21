import React, { Component } from 'react'
import { HeadLists, TextInput } from './styled'
import List from './list-health'

class HealthBenefit extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  addTodoEnter = e => {
    if (e.key === 'Enter') {
      this.props.addTodoHealth()
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
          HealthList={this.props.HealthList}
          sendDel={this.props.removeTodoHealth}
        />
      </div>
    )
  }
}

export default HealthBenefit
