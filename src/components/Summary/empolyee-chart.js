import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PieChart, Pie, Cell } from 'recharts';

const graphColor = ['#458cdc', '#39b7af', '#45a1d9', '#7ab7c6'];

const data = [{ name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
{ name: 'Group C', value: 300 }, { name: 'Group D', value: 200 }];

class Empolyeechart extends Component {
  static propTypes = {
    summaryGroup: PropTypes.shape({}).isRequired,
  }
  constructor() {
    super();
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
    const { summaryGroup } = this.props;
    return (
      <div>
        <div className="chart-main-box">
          <div className="chart-head-box">
            <p>จำนวนพนักงานทั้งหมด</p>
          </div>
          <div className="row">
            <div className="large-6 columns">
              <div className="chart-text-style">
                <p className="chart-radial-sum">{summaryGroup.total}</p>
                <p>คน</p>
              </div>
              <PieChart width={300} height={200}>
                <Pie
                  data={this.renderGroup()}
                  innerRadius={40}
                  outerRadius={65}
                  cy={90}
                  cx={100}
                  fill="#8884d8"
                >
                  {
                    data.map((entry, index) =>
                      <Cell fill={graphColor[index % graphColor.length]} />)
                  }
                </Pie>
              </PieChart>
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

export default Empolyeechart;
