import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PieChart, Pie, Cell } from 'recharts';
import { DivChart } from './styled';

const graphColor = ['#e9a62a', '#fcc928', '#e28329', '#f5e054'];

const data = [{ name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
{ name: 'Group C', value: 300 }, { name: 'Group D', value: 200 }];

class PlanChart extends Component {
  static propTypes = {
    summaryBenefitPlan: PropTypes.arrayOf(PropTypes.object).isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    cx: PropTypes.string.isRequired,
    cy: PropTypes.string.isRequired,
  }
  constructor() {
    super();
    this.state = {};
  }
  sumAllEmployee = () => {
    const allEmployee = this.props.summaryBenefitPlan;
    console.log('allEmployee', allEmployee);
    let sum = 0;
    if (allEmployee !== undefined && allEmployee.length >= 1) {
      const summary = allEmployee.map(em => {
        console.log('em', em.amount);
        sum += em.amount;
        return 'test'
      })
      console.log('summary', summary);
      return sum
    }
    return '';
  }
  renderGroup = () => {
    const Group = this.props.summaryBenefitPlan;
    if (Group !== undefined && Group.length >= 1) {
      return Group.map(element => Object.assign({}, {
        name: element.benefitPlanName,
        value: element.amount,
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
    // const { summaryBenefitPlan } = this.props;
    const { width, height, cx, cy } = this.props;
    return (
      <div>
        <div className="chart-main-box">
          <div className="chart-head-box">
            <p>แผนสิทธิประโยชน์ที่พนักงานเลือก</p>
          </div>
          <div className="row">
            <div className="large-6 columns">
              <DivChart width={width} height={height} >
                <div>{this.sumAllEmployee()}</div>
                <div className="chart-radial-sum">คน</div>
                <PieChart width={width} height={height}>
                  <Pie
                    data={this.renderGroup()}
                    innerRadius={60}
                    outerRadius={80}
                    cy={cx}
                    cx={cy}
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

export default PlanChart;
