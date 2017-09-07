import React, { Component } from 'react';
import Head from '../Head';
import { Box, Pic, Text, Number } from '../StyleComponent';
import allclaim from '../../../assets/ClaimEmployee/allclaim.png';
import insurance from '../../../assets/ClaimEmployee/insurance.png';
import health from '../../../assets/ClaimEmployee/health.png';
import expense from '../../../assets/ClaimEmployee/expense.png';
import DetailClaim from './DetailClaim';

class ClaimEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div>
        <Head content="เคลม" />
        <div className="row">
          <div className="large-3 columns">
            <Box>
              <Pic color="#5c6879"><img src={allclaim} alt="allEmployee" /></Pic>
              <Text>รายการเคลมทั้งหมด</Text>
              <Number>1200</Number>
            </Box>
          </div>
          <div className="large-3 columns">
            <Box>
              <Pic color="#689be4"><img src={insurance} alt="allEmployee" /></Pic>
              <Text>รายการเคลมประกันภัย</Text>
              <Number>1200</Number>
            </Box>
          </div>
          <div className="large-3 columns">
            <Box>
              <Pic color="#5daa3f"><img src={health} alt="allEmployee" /></Pic>
              <Text>รายการเคลมสุขภาพ</Text>
              <Number>1200</Number>
            </Box>
          </div>
          <div className="large-3 columns">
            <Box>
              <Pic color="#ec5769"><img src={expense} alt="allEmployee" /></Pic>
              <Text>รายการเคลมทั่วไป</Text>
              <Number>1200</Number>
            </Box>
          </div>
        </div>
        <DetailClaim />
      </div>
    );
  }
}

export default ClaimEmployee;
