import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import ViewPlanBox from './ViewPlanBox'
import { Divider, Search, Input, Table, Icon } from 'semantic-ui-react'
import { PostContent, BackHome, RecViewAllPlan, ViewHeader } from './Styled'
import styled from 'react-sc'

import SearchBox from './SearchBox'
import '../../styles/ViewPlanTable.scss'

export default class ViewAllPlan extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <PostContent> จัดแผนประกัน </PostContent>
          <Divider inverted />
          <RecViewAllPlan>
            <div style={{ marginTop: '2%' }} className="row">
              <div className="large-3 large-offset-1 columns">
                <ViewHeader> แพลนทั้งหมด </ViewHeader>
                <BackHome>&lt; กลับหน้าหลัก </BackHome>
              </div>

              <div className="large-4 large-offset-2 columns">
                <SearchBox />
              </div>
            </div>

            <div style={{ marginTop: '4%' }} className="row">
              <div className="large-10 large-offset-1 columns">
                <table>
                  <tr>
                    <th> <Icon disabled name="trash" size="large" /> </th>
                    <th> ชื่อแพลน </th>
                    <th> แก้ไขครั้งล่าสุดโดย </th>
                    <th> วันที่ </th>
                    <th> Action </th>
                  </tr>
                </table>
                <ViewPlanBox />
              </div>
            </div>
          </RecViewAllPlan>
        </div>

      </div>
    )
  }
}
