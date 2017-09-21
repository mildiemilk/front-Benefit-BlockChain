import React, { Component } from 'react';
import { RadialChart } from 'react-vis';
import PropTypes from 'prop-types';
import '../../styles/chart-box.scss';

const graphData = [];
// const myPlan = [
//   { group: 'A', number: 10 },
//   { group: 'B', number: 20 },
//   { group: 'C', number: 5 },
//   { group: 'D', number: 20 },
//   { group: 'E', number: 30 },
// ];
const graphColor = ['#458cdc', '#39b7af', '#45a1d9', '#7ab7c6'];

class Empolyeechart extends Component {
  static propTypes = {
    summaryGroup: PropTypes.shape({}).isRequired,
  }
  constructor() {
    super();
    this.state = {};
  }
  renderGroup = Group => {
    const allGroup = Group.groups;
    console.log('aaa->', allGroup);
    if (allGroup !== undefined && allGroup.length >= 1) {
      const companyGroup = [];
      allGroup.map(element => {
        companyGroup.push({
          group: element.groupName,
          number: element.count,
        });
        console.log('companyGroup', companyGroup);
        return companyGroup;
      });
      return companyGroup;
    }
    return '';
  }
  renderList = list => {
    if (list.length >= 1) {
      // const graphData = [];
      // console.log('graph11', graphData.length);
      // console.log('graph12', graphData)
      const lists = list.map((element, index) => {
        console.log('element', element);
        graphData.push({
          angle: element.number,
          style: { stroke: graphColor[index], fill: graphColor[index] },
        });
        console.log('graph', graphData);
        return (
          <div className="rv-discrete-color-legend-item vertical">
            <span
              className="rv-discrete-color-legend-item__color"
              style={{ background: graphColor[index], height: '3.5px' }}
            />
            <span className="rv-discrete-color-legend-item__title">
              กลุ่ม {element.group} {element.number} คน
            </span>
          </div>
        );
      });
      return lists;
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
              <div className="chart-pie-box">
                <div
                  style={{
                    position: 'absolute',
                    zIndex: 10,
                    marginLeft: '55px',
                    marginTop: '50px',
                  }}
                >
                  <p className="chart-radial-sum">{summaryGroup.total}</p>
                  <p className="chart-radial-text">คน</p>
                </div>
                <RadialChart
                  innerRadius={68}
                  radius={50}
                  data={graphData}
                  width={150}
                  height={150}
                  colorType="category"
                  colorRange={graphColor}
                />
              </div>
            </div>
            <div className="large-6 columns">
              <div className="chart-data-box">
                <div
                  className="rv-discrete-color-legend vertical "
                  style={{ width: '300px' }}
                >
                  {this.renderList(this.renderGroup(summaryGroup))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Empolyeechart;
