import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { RadialChart } from 'react-vis'
import '../../styles/chart-box.scss'
import EmpolyeeChart from './empolyee-chart'
import PlanChart from './plan-chart'
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

class Piechart extends Component {
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
            style={{ background: graphColor[index] }}
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
        <div className="row">
          <div className="large-6 columns">
            <EmpolyeeChart />
          </div>
          <div className="large-6 columns">
            <PlanChart />
          </div>
        </div>
        <div className="table-chart-box">
          <div className="row">
            <div className="large-10 large-centered columns">
              <p className="chart-head-text">รายละเอียด</p>
              <Table celled structured>
                <Table.Header>
                  <Table.Row>
                    <Table.HeaderCell
                      rowSpan="2"
                      textAlign="center"
                      style={{
                        backgroundColor: '#3a7bd5',
                        color: 'white',
                        height: '80px',
                      }}
                    >
                      กลุ่มพนักงาน
                    </Table.HeaderCell>
                    <Table.HeaderCell
                      rowSpan="2"
                      textAlign="center"
                      style={{
                        backgroundColor: '#3a7bd5',
                        color: 'white',
                        height: '80px',
                      }}
                    >
                      แผนสิทธิประโยชน์ 1
                    </Table.HeaderCell>
                    <Table.HeaderCell
                      rowSpan="2"
                      textAlign="center"
                      style={{
                        backgroundColor: '#3a7bd5',
                        color: 'white',
                        height: '80px',
                      }}
                    >
                      แผนสิทธิประโยชน์ 2
                    </Table.HeaderCell>
                  </Table.Row>
                </Table.Header>

                <Table.Body>
                  <Table.Row>
                    <Table.Cell textAlign="center" style={{ height: '60px' }}>
                      Alpha Team
                    </Table.Cell>
                    <Table.Cell textAlign="center" style={{ height: '60px' }}>
                      50
                    </Table.Cell>
                    <Table.Cell textAlign="center" style={{ height: '60px' }}>
                      24
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell textAlign="center" style={{ height: '60px' }}>
                      Beta Team
                    </Table.Cell>
                    <Table.Cell textAlign="center" style={{ height: '60px' }}>
                      22
                    </Table.Cell>
                    <Table.Cell textAlign="center" style={{ height: '60px' }}>
                      52
                    </Table.Cell>
                  </Table.Row>
                  <Table.Row>
                    <Table.Cell
                      textAlign="center"
                      style={{ height: '60px', backgroundColor: '#d8e4f3' }}
                    >
                      GammaTeam
                    </Table.Cell>
                    <Table.Cell
                      textAlign="center"
                      style={{ height: '60px', backgroundColor: '#d8e4f3' }}
                    >
                      77
                    </Table.Cell>
                    <Table.Cell
                      textAlign="center"
                      style={{ height: '60px', backgroundColor: '#d8e4f3' }}
                    >
                      77
                    </Table.Cell>
                  </Table.Row>
                </Table.Body>
              </Table>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="large-11 columns">
            <button className="send-request-button">ส่งข้อมูล</button>
          </div>
        </div>
      </div>
    )
  }
}

Piechart.propTypes = {}

const mapDispatchToProps = dispatch => ({})
const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Piechart)
