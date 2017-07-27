import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Table } from 'semantic-ui-react'
import '../../styles/chart-box.scss'
import EmpolyeeChart from './empolyee-chart'
import PlanChart from './plan-chart'

class Piechart extends Component {
  constructor() {
    super()
    this.state = {}
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

const mapDispatchToProps = () => ({})
const mapStateToProps = () => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Piechart)
