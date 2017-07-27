import React, { Component } from 'react'
import { Form, Divider, Icon, Popup, List } from 'semantic-ui-react'
import '../../styles/employee-list.scss'

class employeeList extends Component {
  constructor() {
    super()
    this.state = {
      seach: '',
      minList: 0,
      maxList: 3,
      pageNumber: 1,
      data: [
        {
          code: 'M001',
          name: 'john',
          email: 'email',
          level: 'พนักงาน',
          position: 'Dev',
          group: 'A',
        },
        {
          code: 'M002',
          name: 'Author',
          email: 'email',
          level: 'พนักงาน',
          position: 'Dev',
          group: 'A',
        },
        {
          code: 'M003',
          name: 'Kx',
          email: 'email',
          level: 'พนักงาน',
          position: 'Sell',
          group: 'B',
        },
        {
          code: 'M004',
          name: 'Critl',
          email: 'email',
          level: 'outsource',
          position: 'Dev',
          group: 'C',
        },
        {
          code: 'M005',
          name: 'Zai',
          email: 'email',
          level: 'คนทั่วไป',
          position: 'Dev',
          group: 'Z',
        },
        {
          code: 'M006',
          name: 'Uni',
          email: 'email',
          level: 'พนักงาน',
          position: 'Manager',
          group: 'X',
        },
        {
          code: 'M007',
          name: 'Jack',
          email: 'email',
          level: 'พนักงาน',
          position: 'Manager',
          group: 'Y',
        },
        {
          code: 'M008',
          name: 'Joe',
          email: 'email',
          level: 'พนักงานชั่วคราว',
          position: 'Business',
          group: 'F',
        },
        {
          code: 'M009',
          name: 'Miracle',
          email: 'email',
          level: 'พนักงาน',
          position: 'Art',
          group: 'V',
        },
        {
          code: 'M010',
          name: 'PPD',
          email: 'email',
          level: 'พนักงาน',
          position: 'Art',
          group: 'D',
        },
      ],
    }
  }

  plusLimitChange = () => {
    if (this.state.maxList <= this.renderSeach().length) {
      const { data } = this.state
      this.setState({
        minList: this.state.minList + 4,
        maxList: this.state.maxList + 4,
        pageNumber: this.state.pageNumber + 1,
      })
      if (this.state.maxList > data.length) {
        this.setState({ maxList: data.length })
      }
    }
  }

  minusLimitChange = () => {
    if (this.state.minList !== 0) {
      this.setState({
        minList: this.state.minList - 4,
        maxList: this.state.maxList - 4,
        pageNumber: this.state.pageNumber - 1,
      })
    }
  }
  sortByGroup = value => {
    if (value === 'respect') {
      this.setState({
        data: this.state.data.sort((a, b) => {
          if (a.group.toLowerCase() < b.group.toLowerCase()) return -1
          if (a.group.toLowerCase() > b.group.toLowerCase()) return 1
          return 0
        }),
      })
    } else {
      this.setState({
        data: this.state.data.sort((a, b) => {
          if (a.group.toLowerCase() < b.group.toLowerCase()) return 1
          if (a.group.toLowerCase() > b.group.toLowerCase()) return -1
          return 0
        }),
      })
    }
  }

  sortByName = value => {
    if (value === 'respect') {
      this.setState({
        data: this.state.data.sort((a, b) => {
          if (a.name.toLowerCase() < b.name.toLowerCase()) return -1
          if (a.name.toLowerCase() > b.name.toLowerCase()) return 1
          return 0
        }),
      })
    } else {
      this.setState({
        data: this.state.data.sort((a, b) => {
          if (a.name.toLowerCase() < b.name.toLowerCase()) return 1
          if (a.name.toLowerCase() > b.name.toLowerCase()) return -1
          return 0
        }),
      })
    }
  }

  sortByCode = value => {
    if (value === 'respect') {
      this.setState({
        data: this.state.data.sort((a, b) => {
          if (a.code.toLowerCase() < b.code.toLowerCase()) return -1
          if (a.code.toLowerCase() > b.code.toLowerCase()) return 1
          return 0
        }),
      })
    } else {
      this.setState({
        data: this.state.data.sort((a, b) => {
          if (a.code.toLowerCase() < b.code.toLowerCase()) return 1
          if (a.code.toLowerCase() > b.code.toLowerCase()) return -1
          return 0
        }),
      })
    }
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  renderSeach = () => {
    const list = this.state.data.filter(
      data =>
        data.name.toLowerCase().indexOf(this.state.seach.toLowerCase()) >= 0 ||
        data.code.toLowerCase().indexOf(this.state.seach.toLowerCase()) >= 0 ||
        data.level.toLowerCase().indexOf(this.state.seach.toLowerCase()) >= 0 ||
        data.position.toLowerCase().indexOf(this.state.seach.toLowerCase()) >=
          0 ||
        data.group.toLowerCase().indexOf(this.state.seach.toLowerCase()) >= 0,
    )
    return list
  }

  renderListEmployee = () => {
    const seachData = this.renderSeach()
    const showData = seachData.filter(
      (data, index) =>
        index >= this.state.minList && index <= this.state.maxList,
    )
    return showData.map(element => (
      <div className="employee-list-box">
        <div className="row">
          <div className="large-2 columns">
            <div className="list-box-in-list-first">
              <div className="row">
                <div className="large-4 columns">
                  <div className="profile-employee-box">
                    <p>{element.name[0]}{element.name[1]}</p>
                  </div>
                </div>
                <div className="large-8 columns">
                  <span>{element.code}</span>
                </div>
              </div>
            </div>
          </div>
          <div className="large-2 columns">
            <div className="list-box-in-list">
              <p>{element.name}</p>
            </div>
          </div>
          <div className="large-2 columns">
            <div className="list-box-in-list">
              <p>{element.level}</p>
            </div>
          </div>
          <div className="large-2 columns">
            <div className="list-box-in-list">
              <p>{element.position}</p>
            </div>
          </div>
          <div className="large-2 columns">
            <div className="list-box-in-list">
              <p>{element.group}</p>
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
    ))
  }

  render() {
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
                      name="seach"
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
                    <p>ระดับ</p>
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
    )
  }
}

export default employeeList
