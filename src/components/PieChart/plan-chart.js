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
  { group: '1', number: 6 },
  { group: '2', number: 17 },
  { group: '3', number: 25 },
  { group: '4', number: 30 },
  { group: '5', number: 40 },
]
const graphColor = ['#cd3b54', '#528240', '#12939A', '#19CDD7', '#223F9A']

class Planchart extends Component {
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
            แผน {element.group} {element.number} คน
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
            <p>แผนสิทธิประโยชน์ที่พนักงานเลือก</p>
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
                  style={{ width: '300px' }}
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

Planchart.propTypes = {}

const mapDispatchToProps = dispatch => ({})
const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Planchart)
