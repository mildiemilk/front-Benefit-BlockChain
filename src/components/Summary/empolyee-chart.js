import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PieChart, Pie, Cell } from 'recharts';
import { DivChart } from './styled';

const graphColor = ['#458cdc', '#39b7af', '#45a1d9', '#7ab7c6'];

const data = [{ name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
{ name: 'Group C', value: 300 }, { name: 'Group D', value: 200 }];

class EmpolyeeChart extends Component {
  static propTypes = {
    summaryGroup: PropTypes.shape({}).isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderGroup = () => {
    const Group = this.props.summaryGroup;
    const allGroup = Group.groups;
    console.log('aaa->', allGroup);
    if (allGroup !== undefined && allGroup.length >= 1) {
      return allGroup.map(element => Object.assign({}, {
        name: element.groupName,
        value: element.count,
      }));
    }
    return '';
  }
  renderList = () => {
    const list = this.renderGroup();
    console.log('list', list);
    if (list !== undefined && list.length >= 1) {
      console.log('sdfs');
      return list.map((element, index) => (
        <div className="tag-color-chart">
          <span
            className="rv-discrete-color-legend-item__color"
            style={{ background: graphColor[index], height: '7.5px', width: '7.5px', borderRadius: '50%' }}
          />
          <span className="rv-discrete-color-legend-item__title">
            กลุ่ม {element.name} {element.value} คน
          </span>
        </div>
      ));
    }
    return '';
  }
  render() {
    console.log('props--employee', this.props);
    const { summaryGroup, width, height } = this.props;
    console.log('w,h', width, height);
    return (
      <div>
        <div className="chart-main-box">
          <div className="chart-head-box">
            <p>จำนวนพนักงานทั้งหมด</p>
          </div>
          <div className="row">
            <div className="large-6 columns">
              <DivChart width={width} height={height} >
                <div>{summaryGroup.total}</div>
                <div className="chart-radial-sum">คน</div>
                <PieChart width={width} height={height}>
                  <Pie
                    data={this.renderGroup()}
                    innerRadius={60}
                    outerRadius={80}
                    cy="50%"
                    cx="50%"
                    fill="#8884d8"
                  >
                    {
                      data.map((entry, index) =>
                        <Cell fill={graphColor[index % graphColor.length]} />)
                    }
                  </Pie>
                </PieChart>
              </DivChart>
            </div>
            <div className="large-6 columns">
              <div className="chart-list">{this.renderList()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default EmpolyeeChart;
