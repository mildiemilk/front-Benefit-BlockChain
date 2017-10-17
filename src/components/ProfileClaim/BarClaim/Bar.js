import React, { Component } from 'react';
import styled from 'styled-components';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { AllClaimText } from '../styled';
import CustomTooltip from './CustomTooltip';

const BoxTooltip = styled.div`
  width: 208px;
  height: 143px;
  border-radius: 2px;
  background-color: #ffffff;
  box-shadow: 0 1px 6px 0 rgba(107, 107, 107, 0.5);
`;
class BarDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  customTooltip = data => (
    <BoxTooltip>
      {data[0].name}
    </BoxTooltip>
  );

  render() {
    const data = [
      { name: ' A', expense: 4000, insurance: 2400, health: 2400 },
      { name: ' B', expense: 3000, insurance: 1398, health: 2210 },
      { name: ' C', expense: 2000, insurance: 9800, health: 2290 },
      { name: ' D', expense: 2780, insurance: 3908, health: 2000 },
      { name: ' E', expense: 1890, insurance: 4800, health: 2181 },
      { name: ' F', expense: 2390, insurance: 3800, health: 2500 },
      { name: ' G', expense: 5490, insurance: 4300, health: 2100 },
      { name: ' H', expense: 6780, insurance: 4908, health: 2000 },
      { name: ' I', expense: 7890, insurance: 6800, health: 3181 },
      { name: ' J', expense: 3390, insurance: 6800, health: 3500 },
      { name: ' K', expense: 2490, insurance: 6300, health: 3100 },
      { name: ' A', expense: 4000, insurance: 2400, health: 2400 },
      { name: ' B', expense: 3000, insurance: 1398, health: 2210 },
      { name: ' C', expense: 2000, insurance: 9800, health: 2290 },
      { name: ' D', expense: 2780, insurance: 3908, health: 2000 },
      { name: ' E', expense: 1890, insurance: 4800, health: 2181 },
      { name: ' F', expense: 2390, insurance: 3800, health: 2500 },
      { name: ' G', expense: 5490, insurance: 4300, health: 2100 },
      { name: ' H', expense: 6780, insurance: 4908, health: 2000 },
      { name: ' I', expense: 7890, insurance: 6800, health: 3181 },
      { name: ' J', expense: 3390, insurance: 6800, health: 3500 },
      { name: ' K', expense: 2490, insurance: 6300, health: 3100 },
    ];
    return (
      <div>
        <AllClaimText>จำนวนการเคลมทั้งหมด 211 รายการ</AllClaimText>
        <BarChart
          width={600} height={300} data={data}
          margin={{ top: 20, right: 50, left: 20, bottom: 5 }}
        >
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey="insurance" stackId="a" fill="#eb5769" />
          <Bar dataKey="health" stackId="a" fill="#5daa3f" />
          <Bar dataKey="expense" stackId="a" fill="#689be3" />
        </BarChart>
      </div>
    );
  }
}

export default BarDetail;
