import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import ViewPlanBox from './ViewPlanBox'
import { Divider, Search, Input, Table, Icon } from 'semantic-ui-react'
import { PostContent, BackHome, RecViewAllPlan, ViewHeader } from './Styled'
import styled from 'react-sc'
import SearchBox from './SearchBox'
import NavInsure from '../NavInsure'
import ModalView from './ModalView'

export default class ViewAllPlan extends Component {
  constructor() {
    super()
    this.list = [
      {
        name: 'Management1',
        updataBy: 'HR',
        date: '9 June 1995',
      },
      {
        name: 'Management2',
        updataBy: 'HR',
        date: '16 June 1995',
      },
      {
        name: 'Plan 3',
        updataBy: 'HR',
        date: '18 June 1995',
      },
      {
        name: 'แผน 4',
        updataBy: 'ฝ่ายบุคคล',
        date: '20 มิถุนายน 1995',
      },
    ]

    this.state = {
      step: 3,
      passwordToConfirm: '',
      SearchTerm: '',
    }
  }

  handleSearchBoxChange(keyword) {
    this.setState({ SearchTerm: keyword })
  }

  filterPlan(list) {
    return list.filter(
      plan =>
        plan.name.toLowerCase().indexOf(this.state.SearchTerm.toLowerCase()) >=
        0,
    )
  }

  render() {
    return (
      <div className="ViewAllPlan">
        <NavInsure step={this.state.step} />
        <div className="row">
          <RecViewAllPlan>
            <div style={{ marginTop: '2%' }} className="row">
              <div className="large-3 large-offset-1 columns">
                <ViewHeader> แพลนทั้งหมด </ViewHeader>
                <BackHome>&lt; กลับหน้าหลัก </BackHome>
              </div>

              <div className="large-2 large-offset-4 columns">
                <SearchBox
                  callback={keyword => this.handleSearchBoxChange(keyword)}
                />
              </div>
              <div className="large-2 columns" />
            </div>

            <div style={{ marginTop: '4%' }} className="row">
              <div className="large-10 large-offset-1 columns">
                <table>
                  <tr>
                    <th> <ModalView /> </th>
                    <th> ชื่อแพลน </th>
                    <th> แก้ไขครั้งล่าสุดโดย </th>
                    <th> วันที่ </th>
                    <th> Action </th>
                  </tr>
                </table>
                <ViewPlanBox items={this.filterPlan(this.list)} />
              </div>
            </div>
          </RecViewAllPlan>
        </div>

      </div>
    )
  }
}
