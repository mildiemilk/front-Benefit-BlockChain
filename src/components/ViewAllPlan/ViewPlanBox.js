import React, { Component } from 'react'
import { Icon, Table, Rating, Header, Checkbox } from 'semantic-ui-react'
import styled from 'react-sc'

const TableCell = styled(Table)`
  &&&{
    border-left: 0px solid;
  }
`

export default class ViewPlanBox extends Component {
  constructor() {
    super()
    this.list = [
      {
        name: 'PlanA',
        updataBy: 'HR',
        date: '2 sep 1995',
      },
      {
        name: 'PlanB',
        updataBy: 'HR',
        date: '26 sep 1995',
      },
    ]
  }

  renderList = list => {
    const output = []
    for (var i = 0; i < list.length; i++) {
      output.push(
        <Table.Row>
          <Table.Cell>
            <Header textAlign="center"><Checkbox /></Header>
          </Table.Cell>
          <Table.Cell singleLine> {list[i].name} </Table.Cell>
          <Table.Cell> {list[i].updataBy} </Table.Cell>
          <Table.Cell> {list[i].date} </Table.Cell>
          <Table.Cell textAlign="center">
            <Icon disabled name="edit" size="large" />
            <Icon disabled name="paste" size="large" />
            <Icon disabled name="times rectangle outline" size="large" />
          </Table.Cell>
        </Table.Row>,
      )
    }
    return output
  }

  render() {
    return (
      <Table striped>

        <Table.Body>
          {this.renderList(this.list)}
        </Table.Body>
      </Table>
    )
  }
}
