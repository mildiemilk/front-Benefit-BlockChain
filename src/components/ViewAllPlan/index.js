import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import ViewPlanBox from './ViewPlanBox'
import { Divider, Search, Input } from 'semantic-ui-react'
import { PostContent, BackHome, RecViewAllPlan, ViewHeader } from './Styled'
import styled from 'react-sc'

import SearchBox from './SearchBox'

const SearchNew = styled(Search)`
  &&&{

  }
`

export default class ViewAllPlan extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <PostContent> จัดแผนประกัน </PostContent>
          <Divider inverted />
          <RecViewAllPlan>
            <div className="large-3 large-offset-1 columns">
              <ViewHeader> แพลนทั้งหมด </ViewHeader>
              <BackHome>&lt; กลับหน้าหลัก </BackHome>
            </div>
            <div className="large-4 large-offset-3 columns">
              <SearchBox />
              <Input action="ไป" placeholder="ค้นหา" />

            </div>
            <div className="row">
              <div className="large-10 large-offset-1 columns">
                <ViewPlanBox />
              </div>
            </div>
          </RecViewAllPlan>
        </div>
      </div>
    )
  }
}
