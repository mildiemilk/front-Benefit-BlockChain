import React, { Component } from 'react'
import { Divider } from 'semantic-ui-react'
import { Head, Box, ListTime } from './styled'
import styled from 'react-sc'
import EmpolyeeChart from '../PieChart/empolyee-chart'
import PlanChart from '../PieChart/plan-chart'

const DividerStyle = styled(Divider)`
    &&&{
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
	    border: solid 1px rgba(151, 151, 151, 0.22);
    }
`
class NavSelectRealTime extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="large-12 column">
            <Head> สรุปจำนวนพนักงาน </Head>
            <Divider />
          </div>
        </div>
        <div className="row">
          <div className="large-4 columns">
            <EmpolyeeChart />

          </div>
          <div className="large-4 columns">
            <PlanChart />
          </div>
          <div className="large-4 columns">
            <Box>
              <ListTime>เวลาที่เหลือในการเลือกแผนสิทธิประโยชน์</ListTime>
              <DividerStyle />
            </Box>
          </div>
        </div>
      </div>
    )
  }
}

export default NavSelectRealTime
