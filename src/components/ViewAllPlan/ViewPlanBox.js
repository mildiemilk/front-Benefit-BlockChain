import React, { Component } from 'react'
import { Icon, Table, Rating, Header, Checkbox } from 'semantic-ui-react'
import styled from 'react-sc'

export default class ViewPlanBox extends Component {
  constructor() {
    super()
    this.list = [
      {
        name: 'Management 1',
        updataBy: 'HR',
        date: '2 sep 1995',
      },
      {
        name: 'Management 2',
        updataBy: 'HR',
        date: '26 sep 1995',
      },
      {
        name: 'Management 3',
        updataBy: 'HR',
        date: '9 dec 1995',
      },
      {
        name: 'Management 4',
        updataBy: 'HR',
        date: '20 dec 1995',
      },
    ]
  }

  renderList = list => {
    const output = []
    for (var i = 0; i < list.length; i++) {
      output.push(
        <tr>
          <td>
            <Checkbox />
          </td>
          <td singleLine> {list[i].name} </td>
          <td> {list[i].updataBy} </td>
          <td> {list[i].date} </td>
          <td>
            <Icon disabled name="edit" size="large" />
            <Icon disabled name="paste" size="large" />
            <Icon disabled name="trash" size="large" />
          </td>
        </tr>,
      )
    }
    return output
  }

  render() {
    return (
      <table>
        {this.renderList(this.list)}
      </table>
    )
  }
}
