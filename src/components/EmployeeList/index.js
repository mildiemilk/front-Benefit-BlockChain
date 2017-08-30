import React, { Component } from 'react';
import { Form, Divider, Icon, Popup, List } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { employeeDetail } from '../../api/profile-company';

class employeeList extends Component {
  static propTypes = {
    employeeDetail: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      minList: 0,
      maxList: 3,
      pageNumber: 1,
      data: [],
    };
  }
  componentDidMount() {
    this.props.employeeDetail();
  }
  componentWillReceiveProps(newProps) {
    if (this.state.data !== newProps.data) {
      this.setState({
        data: newProps.data,
      }, () => console.log('state', this.state.data));
      console.log('props', newProps.data);
    }
  }
  plusLimitChange = () => {
    if (this.state.maxList <= this.renderSearch().length) {
      const { data } = this.state;
      this.setState({
        minList: this.state.minList + 4,
        maxList: this.state.maxList + 4,
        pageNumber: this.state.pageNumber + 1,
      });
      if (this.state.maxList > data.length) {
        this.setState({ maxList: data.length });
      }
    }
  }

  minusLimitChange = () => {
    if (this.state.minList !== 0) {
      this.setState({
        minList: this.state.minList - 4,
        maxList: this.state.maxList - 4,
        pageNumber: this.state.pageNumber - 1,
      });
    }
  }
  sortByGroup = value => {
    if (value === 'respect') {
      this.setState({
        data: this.state.data.sort((a, b) => {
          if (a.detail.benefit_group.toLowerCase() < b.detail.benefit_group.toLowerCase()) {
            return -1;
          }
          if (a.detail.benefit_group.toLowerCase() > b.detail.benefit_group.toLowerCase()) {
            return 1;
          }
          return 0;
        }),
      });
    } else {
      this.setState({
        data: this.state.data.sort((a, b) => {
          if (a.detail.benefit_group.toLowerCase() < b.detail.benefit_group.toLowerCase()) {
            return 1;
          }
          if (a.detail.benefit_group.toLowerCase() > b.detail.benefit_group.toLowerCase()) {
            return -1;
          }
          return 0;
        }),
      });
    }
  }

  sortByName = value => {
    if (value === 'respect') {
      this.setState({
        data: this.state.data.sort((a, b) => {
          if (a.detail.name.toLowerCase() < b.detail.name.toLowerCase()) return -1;
          if (a.detail.name.toLowerCase() > b.detail.name.toLowerCase()) return 1;
          return 0;
        }),
      });
    } else {
      this.setState({
        data: this.state.data.sort((a, b) => {
          if (a.detail.name.toLowerCase() < b.detail.name.toLowerCase()) return 1;
          if (a.detail.name.toLowerCase() > b.detail.name.toLowerCase()) return -1;
          return 0;
        }),
      });
    }
  }

  sortByCode = value => {
    if (value === 'respect') {
      this.setState({
        data: this.state.data.sort((a, b) => {
          if (a.detail.employee_code.toLowerCase() < b.detail.employee_code.toLowerCase()) {
            return -1;
          }
          if (a.detail.employee_code.toLowerCase() > b.detail.employee_code.toLowerCase()) {
            return 1;
          }
          return 0;
        }),
      });
    } else {
      this.setState({
        data: this.state.data.sort((a, b) => {
          if (a.detail.employee_code.toLowerCase() < b.detail.employee_code.toLowerCase()) {
            return 1;
          }
          if (a.detail.employee_code.toLowerCase() > b.detail.employee_code.toLowerCase()) {
            return -1;
          }
          return 0;
        }),
      });
    }
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  renderSearch = data => {
    const list = data.filter(
      data =>
        data.detail.name.toLowerCase().indexOf(this.state.search.toLowerCase()) >= 0 ||
        data.detail.employee_code.toLowerCase().indexOf(this.state.search.toLowerCase()) >= 0 ||
        data.detail.type_of_employee.toLowerCase().indexOf(this.state.search.toLowerCase()) >= 0 ||
        data.detail.level.toLowerCase().indexOf(this.state.search.toLowerCase()) >=
          0 ||
        data.detail.benefit_group.toLowerCase().indexOf(this.state.search.toLowerCase()) >= 0,
    );
    return list;
  }

  renderListEmployee = data => {
    const searchData = this.renderSearch(data);
    const showData = searchData.filter(
      (data, index) =>
        index >= this.state.minList && index <= this.state.maxList,
    );
    return showData.map(element => (
      <div className="employee-list-box">
        <div className="row">
          <div className="large-2 columns">
            <div className="list-box-in-list">
              <p>{element.detail.employee_code}</p>
            </div>
          </div>
          <div className="large-2 columns">
            <div className="list-box-in-list">
              <p>{element.detail.name}</p>
            </div>
          </div>
          <div className="large-2 columns">
            <div className="list-box-in-list">
              <p>{element.email}</p>
            </div>
          </div>
          <div className="large-2 columns">
            <div className="list-box-in-list">
              <p>{element.detail.type_of_employee}</p>
            </div>
          </div>
          <div className="large-2 columns">
            <div className="list-box-in-list">
              <p>{element.detail.benefit_group}</p>
            </div>
          </div>
          <div className="large-2 columns">
            <div className="list-box-in-list">
              <div className="edit-employee-list">
                <Icon name="edit" />
              </div>
              <div className="bin-employee-list">
                <Icon name="trash" />
              </div>
            </div>
          </div>
        </div>
      </div>
    ));
  }

  render() {
    console.log('state render', this.state.data);
    return (
      <div>
        <div className="row">
          <div className="large-12 columns">
            <p className="employee-list-head"> รายชื่อพนักงาน </p>
            <Divider />
          </div>
          <div className="employee-list-options">
            <div className="row">
              <div className="large-3 columns">
                <Form>
                  <Form.Group inline>
                    <Form.Input
                      placeholder="ค้นหา"
                      onChange={this.handleChange}
                      name="search"
                    />
                    <Icon name="search" size="large" />
                  </Form.Group>
                </Form>
              </div>
              <div className="large-9 columns">
                <button className="add-employee-button">
                  {' '}เพิ่มพนักงานใหม่{' '}
                </button>
              </div>
            </div>
            <div className="list-employee-box">
              <div className="list-header">
                <div className="row">
                  <div className="large-2 columns">
                    <span>รหัสพนักงาน</span>
                    <Popup
                      trigger={
                        <Icon
                          name="sort descending"
                          style={{ cursor: 'pointer' }}
                        />
                      }
                      content={
                        <List divided relaxed style={{ cursor: 'pointer' }}>
                          <List.Item>
                            <List.Content
                              onClick={() => this.sortByCode('respect')}
                            >
                              <p>A -&gt; Z</p>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Content
                              onClick={() => this.sortByCode('reverse')}
                            >
                              <p>Z -&gt; A</p>
                            </List.Content>
                          </List.Item>
                        </List>
                      }
                      on="click"
                      hideOnScroll
                      position="bottom center"
                    />
                  </div>
                  <div className="large-2 columns">
                    <span>ชื่อ-นามสกุล</span>
                    <Popup
                      trigger={
                        <Icon
                          name="sort descending"
                          style={{ cursor: 'pointer' }}
                        />
                      }
                      content={
                        <List divided relaxed style={{ cursor: 'pointer' }}>
                          <List.Item>
                            <List.Content
                              onClick={() => this.sortByName('respect')}
                            >
                              <p>A -&gt; Z</p>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Content
                              onClick={() => this.sortByName('reverse')}
                            >
                              <p>Z -&gt; A</p>
                            </List.Content>
                          </List.Item>
                        </List>
                      }
                      on="click"
                      hideOnScroll
                      position="bottom center"
                    />
                  </div>
                  <div className="large-2 columns">
                    <p>Email</p>
                  </div>
                  <div className="large-2 columns">
                    <p>ตำแหน่ง</p>
                  </div>
                  <div className="large-2 columns">
                    <span>กลุ่มสิทธิประโยชน์</span>
                    <Popup
                      trigger={
                        <Icon
                          name="sort descending"
                          style={{ cursor: 'pointer' }}
                        />
                      }
                      content={
                        <List divided relaxed style={{ cursor: 'pointer' }}>
                          <List.Item>
                            <List.Content
                              onClick={() => this.sortByGroup('respect')}
                            >
                              <p>A -&gt; Z</p>
                            </List.Content>
                          </List.Item>
                          <List.Item>
                            <List.Content
                              onClick={() => this.sortByGroup('reverse')}
                            >
                              <p>Z -&gt; A</p>
                            </List.Content>
                          </List.Item>
                        </List>
                      }
                      on="click"
                      hideOnScroll
                      position="bottom center"
                    />
                  </div>
                  <div className="large-2 columns">
                    <p>Option</p>
                  </div>
                </div>
              </div>
              {this.renderListEmployee(this.state.data)}
            </div>
            <div className="list-change-level">
              <div
                className="list-change-level-box"
                onClick={this.minusLimitChange}
                role="button"
                aria-hidden
              >
                <Icon name="caret left" size="large" />
              </div>
              <div className="list-change-level-box-number">
                <p>{this.state.pageNumber}</p>
              </div>
              <div
                className="list-change-level-box"
                onClick={this.plusLimitChange}
                role="button"
                aria-hidden
              >
                <Icon name="caret right" size="large" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  employeeDetail: () => dispatch(employeeDetail()),
});

const mapStateToProps = state => ({
  data: state.profile.employeeDetail,
});

export default connect(mapStateToProps, mapDispatchToProps)(employeeList);
