import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import EmpolyeeChart from '../Summary/empolyee-chart';
import PlanChart from '../Summary/plan-chart';
import { Head, Box, ListTime, Pic, NavTimeout } from './styled';
import time from '../../../assets/bidding/icons-8-time.png';
import CountDown from '../Bidding/CountDowns';

const DividerStyle = styled(Divider)`
    &&&{
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
      border: solid 1px rgba(151, 151, 151, 0.22);
    }
`;
class NavSelectRealTime extends Component {
  static propTypes = {
    timeout: PropTypes.string.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log('nav', this.props.timeout);
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
              <NavTimeout>
                <Pic><img src={time} alt="time" /></Pic>
                <CountDown date={this.props.timeout} />
              </NavTimeout>
            </Box>
          </div>
        </div>
      </div>
    );
  }
}

export default NavSelectRealTime;
