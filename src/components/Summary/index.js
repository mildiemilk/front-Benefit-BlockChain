import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Table } from 'semantic-ui-react';
import '../../styles/chart-box.scss';
import EmpolyeeChart from './empolyee-chart';
import PlanChart from './plan-chart';
import { setCompleteStep, getCompleteStep } from '../../api/profile-company';
import ModalConfirmPassword from '../ModalConfirmPassword';

class Piechart extends Component {
  static propTypes = {
    data: PropTypes.shape.isRequired,
    setCompleteStep: PropTypes.func.isRequired,
    completeStep: PropTypes.bool.isRequired,
    getCompleteStep: PropTypes.func.isRequired,
  }
  constructor() {
    super();
    this.state = {
      passwordToConfirm: '',
    };
  }
  componentDidMount = () => {
    this.props.getCompleteStep();
  }
  handlePost = e => {
    e.preventDefault();
    const { passwordToConfirm } = this.state;
    const step = 3;
    this.props.setCompleteStep(passwordToConfirm, step);
  }
  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  render() {
    const { completeStep } = this.props;
    if (completeStep) {
      return <Redirect to="/dashboard" />;
    }
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
            <ModalConfirmPassword
              handlePost={this.handlePost}
              handleChange={this.handleChange}
              data={this.props.data}
              content="ส่งข้อมูล"
              head="การส่งข้อมูล"
            />
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  setCompleteStep: (passwordToConfirm, step) =>
  dispatch(setCompleteStep(passwordToConfirm, step)),
  getCompleteStep: () => dispatch(getCompleteStep()),
});
const mapStateToProps = state => ({
  data: state.profile,
  completeStep: state.profile.completeStep[3],
});

export default connect(mapStateToProps, mapDispatchToProps)(Piechart);
