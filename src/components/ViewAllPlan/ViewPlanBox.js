import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Icon, Table, Rating, Header, Checkbox } from 'semantic-ui-react'
import styled from 'react-sc'
import { getAllPlan } from '../../api/setPlan'

const TableCell = styled(Table)`
  &&&{
    border-left: 0px solid;
  }
`

class ViewPlanBox extends Component {
  constructor() {
    super()
  }

  renderList = list => {
    const output = []
    for (var i = 0; i < list.length; i++) {
      output.push(
        <Table.Row>
          <Table.Cell>
            <Header textAlign="center"><Checkbox /></Header>
          </Table.Cell>
          <Table.Cell singleLine> {list[i].planId} </Table.Cell>
          <Table.Cell> {list[i].updateBy} </Table.Cell>
          <Table.Cell> {list[i].updatedAt} </Table.Cell>
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
    {
      this.props.getAllPlan()
    }
    return (
      <Table striped>
        <Table.Body>
          {this.renderList(this.props.planList)}
        </Table.Body>
      </Table>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getAllPlan: () => dispatch(getAllPlan()),
})

const mapStateToProps = state => ({
  planList: state.plan,
})

export default connect(mapStateToProps, mapDispatchToProps)(ViewPlanBox)
