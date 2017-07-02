import React, { Component } from 'react'
import { Icon, Table, Rating, Header, Checkbox } from 'semantic-ui-react'
import styled from 'react-sc'

const TableCell = styled(Table)`
  &&&{
    border-left: 0px solid;
  }
`

export default class ViewPlanBox extends Component {
  render() {
    return (
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell singleLine textAlign="center">
              {' '}<Icon disabled name="trash" size="large" />{' '}
            </Table.HeaderCell>
            <Table.HeaderCell>ชื่อแพลน</Table.HeaderCell>
            <Table.HeaderCell>แก้ไขครั้งล่าสุดโดย</Table.HeaderCell>
            <Table.HeaderCell>วันที่</Table.HeaderCell>
            <Table.HeaderCell textAlign="center">Action</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          <Table.Row>
            <Table.Cell>
              <Header textAlign="center"><Checkbox /></Header>
            </Table.Cell>
            <Table.Cell singleLine>Management 1</Table.Cell>
            <Table.Cell> โบรกเกอร์ 234 </Table.Cell>
            <Table.Cell> 11 มิถุนายน 2560 </Table.Cell>
            <Table.Cell textAlign="center">
              <Icon disabled name="edit" size="large" />
              <Icon disabled name="paste" size="large" />
              <Icon disabled name="times rectangle outline" size="large" />
            </Table.Cell>
          </Table.Row>
          <Table.Row>

            <Table.Cell>
              <Header textAlign="center"> <Checkbox /> </Header>
            </Table.Cell>
            <Table.Cell singleLine>Management 2</Table.Cell>
            <Table.Cell> บริษัท 000 </Table.Cell>
            <Table.Cell> 11 มิถุนายน 2560 </Table.Cell>
            <Table.Cell textAlign="center">
              <Icon disabled name="edit" size="large" />
              <Icon disabled name="paste" size="large" />
              <Icon disabled name="times rectangle outline" size="large" />
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    )
  }
}
