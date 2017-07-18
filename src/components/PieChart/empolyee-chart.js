import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { RadialChart } from 'react-vis'
import '../../styles/chart-box.scss'

import {
  Button,
  Checkbox,
  Form,
  Grid,
  Image,
  Input,
  Container,
  Table,
  Icon,
} from 'semantic-ui-react'

const myData = [{ angle: 5 }, { angle: 5 }]
let graphData = []
const myPlan = [
  { group: 'A', number: 10 },
  { group: 'B', number: 20 },
  { group: 'C', number: 5 },
  { group: 'D', number: 20 },
  { group: 'E', number: 30 },
]
const graphColor = ['#FF991F', '#DA70BF', '#125C77', '#00441b', '#c7e9c0']

class Empolyeechart extends Component {
  constructor() {
    super()
    this.state = {}
  }

  renderList = list => {
    return list.map((element, index) => {
      graphData.push({
        angle: element.number,
        style: { stroke: graphColor[index], fill: graphColor[index] },
      })
      return (
        <div className="rv-discrete-color-legend-item vertical">
          <span
            className="rv-discrete-color-legend-item__color"
            style={{ background: graphColor[index], height: '3.5px' }}
          />
          <span className="rv-discrete-color-legend-item__title">
            พนักงานกลุ่ม {element.group} {element.number} คน
          </span>
        </div>
      )
    })
  }

  render() {
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
                    marginLeft: '4.2%',
                    marginTop: '3%',
                  }}
                >
                  <p className="chart-radial-sum">129</p>
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
                  style={{ width: '300px', height: '200px' }}
                >
                  {this.renderList(myPlan)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Empolyeechart.propTypes = {}

const mapDispatchToProps = dispatch => ({})
const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Empolyeechart)
