import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { PieChart, Pie, Cell } from 'recharts';

const graphColor = ['#e9a62a', '#fcc928', '#e28329', '#f5e054'];

const data = [{ name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
{ name: 'Group C', value: 300 }, { name: 'Group D', value: 200 }];

class PlanChart extends Component {
  static propTypes = {
    summaryBenefitPlan: PropTypes.arrayOf(PropTypes.object).isRequired,
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
    return (
      <div>
        <div className="chart-main-box">
          <div className="chart-head-box">
            <p>แผนสิทธิประโยชน์ที่พนักงานเลือก</p>
          </div>
          <div className="row">
            <div className="large-6 columns">
              <div className="chart-text-style">
                <p className="chart-radial-sum">{this.sumAllEmployee()}</p>
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

export default PlanChart;
