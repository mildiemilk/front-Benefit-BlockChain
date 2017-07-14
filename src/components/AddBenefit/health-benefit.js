import React, { Component } from 'react'
import { HeadLists, TextInput } from './styled'
import List from './list-health'

class HealthBenefit extends Component {
    constructor(props){
        super(props)
        this.state = {
            HealthList: [],
            text: '',
        }
    }

    addTodo = () => {
        this.setState({
            HealthList: this.state.HealthList.concat(this.state.text),
            text: '',
        })
    }
    removeTodo = (e) => {
        const result = this.state.HealthList;
        result.splice(e, 1);
        this.setState({
            HealthList: result
        })
    }

    addTodoEnter = (e) => {
        if (e.key === 'Enter') {
            this.addTodo()
        }
    }

    handleTextChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }
    render(){
        return(
            <div>
                <HeadLists>กรุณาระบุรายละเอียดที่ต้องการ</HeadLists>
                <TextInput placeholder='กดเพื่อพิมพ์รายละเอียดที่ต้องการแล้วกด Enter' onChange={this.handleTextChange} type="text" value={this.state.text} onKeyPress={this.addTodoEnter}/>
                <List HealthList={this.state.HealthList}
                    sendDel={this.removeTodo}/>
            </div>
        )
    }
}

export default HealthBenefit
