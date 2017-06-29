import React, { Component } from 'react'
import { Button } from 'semantic-ui-react'
import ViewPlanBox from './ViewPlanBox'
import { Divider, Search } from 'semantic-ui-react'
import { PostContent, Space, BackHome } from './Styled'

export default class ViewAllPlan extends Component {
  render() {
    return (
      <div>
        <PostContent>จัดแผนสิทธิประโยชน์</PostContent>
        <Divider inverted />
        <BackHome>&lt; กลับหน้าหลัก </BackHome>
        <Search />
        <ViewPlanBox />
      </div>
    )
  }
}
