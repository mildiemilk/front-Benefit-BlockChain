import React, { Component } from 'react'
import {
  Button,
  Checkbox,
  Form,
  Grid,
  Image,
  Input,
  Container,
  Table,
  Icon,
} from 'semantic-ui-react'

('.context.example .ui.sidebar')
  .sidebar({
    context: $('.context.example .bottom.segment')
  })
  .sidebar('attach events', '.context.example .menu .item')
;
class SideBar extends Component {
    
    render(){
        return(
            <div>
                <div className="ui top attached demo menu">
                    <a className="item">
                        <i className="sidebar icon"></i>
                        Menu
                    </a>
                </div>
                <div className="ui bottom attached segment pushable">
                    <div className="ui inverted labeled icon left inline vertical sidebar menu">
                        <a className="item">
                            <i className="home icon"></i>
                            Home
                        </a>
                        <a className="item">
                            <i className="block layout icon"></i>
                            Topics
                        </a>
                        <a className="item">
                            <i className="smile icon"></i>
                            Friends
                        </a>
                        <a className="item">
                            <i className="calendar icon"></i>
                            History
                        </a>
                </div>
                <div className="pusher">
                    <div className="ui basic segment">
                    {/*{this.props.children}*/}
                    fdghd
                    
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default SideBar