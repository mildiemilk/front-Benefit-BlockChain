import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as simpleRQOption from './simpleRQOption'
import { fillSimpleRQ } from '../../actions'
import {
  Grid,
  Container,
  Header,
  Divider,
  Step,
  Card,
  List,
  Input,
  Select,
  Button,
  Form,
  Checkbox,
  Modal,
} from 'semantic-ui-react'

class simpleRQ extends Component {
  constructor() {
    super()
    this.state = {
      employeeNum: '',
      typeInsurance: '',
      fileInsurance: '',
      expireInsurance: {
        day: '',
        month: '',
        year: '',
      },
      optionInsurance: {
        OPD: false,
        IPD: false,
        dental: false,
        life: false,
        other: false,
        otherText: '',
      },
    }
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  handleChangeExpire = (e, { name, value }) => {
    let expireInsurance = { ...this.state.expireInsurance }
    switch (name) {
      case 'day':
        expireInsurance.day = value
        break
      case 'month':
        expireInsurance.month = value
        break
      case 'year':
        expireInsurance.year = value
        break
    }
    this.setState({ expireInsurance })
  }
  handleCheck = (e, { label, checked }) => {
    let optionInsurance = { ...this.state.optionInsurance }
    switch (label) {
      case 'OPD':
        optionInsurance.OPD = checked
        break
      case 'IPD':
        optionInsurance.IPD = checked
        break
      case 'Dental':
        optionInsurance.dental = checked
        break
      case 'Life':
        optionInsurance.life = checked
        break
      case 'Other':
        optionInsurance.other = checked
        break
    }
    this.setState({ optionInsurance })
  }
  handleInputOther = (e, { value }) => {
    let optionInsurance = { ...this.state.optionInsurance }
    optionInsurance.otherText = value
    if (this.state.optionInsurance.other) this.setState({ optionInsurance })
  }

  handlePost = () => {
    console.log('click')
    fillSimpleRQ(this.state)
  }

  render() {
    console.log(this.state)
    console.log(this.props.data)
    return (
      <div id="simpleRQ">
        <Container id="containerWithBg">
          <h1 id="topic"> จัดแผนสิทธิประโยชน์ </h1>
          <Divider />
          <Step.Group size="mini" ordered items={simpleRQOption.steps} />
          <Card fluid id="cardSimpleRQ">
            <Card.Header>
              <h1 id="headCardRQ"> แผนประกันที่ต้องการ </h1>
            </Card.Header>
            <Grid>
              <Grid.Row>
                <Grid.Column width={5}>
                  <h3> จำนวนพนักงาน </h3>
                </Grid.Column>
                <Grid.Column width={11}>
                  <Select
                    fluid
                    name="employeeNum"
                    defaultValue={this.state.employeeNum}
                    placeholder="จำนวนพนักงาน"
                    options={simpleRQOption.employeeOption}
                    onChange={this.handleChange}
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={5}>
                  <h3> รูปแบบประกันที่ต้องการ </h3>
                </Grid.Column>
                <Grid.Column width={11}>
                  <Input
                    fluid
                    name="typeInsurance"
                    defaultValue={this.state.typeInsurance}
                    placeholder="รูปแบบประกันที่ต้องการ"
                    onChange={this.handleChange}
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={5}>
                  <h3> อัพโหลดแผนประกันที่ใช้ในปัจจุบัน </h3>
                </Grid.Column>
                <Grid.Column width={11}>
                  <Button id="uploadButton">อัพโหลดไฟล์</Button>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={5}>
                  <h3> วันหมดอายุของกรมธรรม์ </h3>
                </Grid.Column>
                <Grid.Column width={11}>
                  <Select
                    id="daySelect"
                    name="day"
                    placeholder="วัน"
                    options={simpleRQOption.dayOption}
                    onChange={this.handleChangeExpire}
                  />
                  <Select
                    id="monthSelect"
                    name="month"
                    placeholder="เดือน"
                    options={simpleRQOption.monthOption}
                    onChange={this.handleChangeExpire}
                  />
                  <Select
                    id="yearSelect"
                    name="year"
                    placeholder="ปี"
                    options={simpleRQOption.yearOption}
                    onChange={this.handleChangeExpire}
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column width={5}>
                  <h3> สิทธิประโยชน์ที่ต้องการ </h3>
                </Grid.Column>
                <Grid.Column width={11}>
                  <Form>
                    <Form.Group inline>
                      <Form.Field
                        width={6}
                        control={Checkbox}
                        defaultChecked={this.state.optionInsurance.IPD}
                        label="IPD"
                        onChange={this.handleCheck}
                      />
                      <Form.Field
                        control={Checkbox}
                        defaultChecked={this.state.optionInsurance.OPD}
                        label="OPD"
                        onChange={this.handleCheck}
                      />
                    </Form.Group>
                    <Form.Group inline>
                      <Form.Field
                        width={6}
                        control={Checkbox}
                        defaultChecked={this.state.optionInsurance.dental}
                        label="Dental"
                        onChange={this.handleCheck}
                      />
                      <Form.Field
                        control={Checkbox}
                        defaultChecked={this.state.optionInsurance.life}
                        label="Life"
                        onChange={this.handleCheck}
                      />
                    </Form.Group>
                    <Form.Group inline>
                      <Form.Field
                        width={2}
                        control={Checkbox}
                        defaultChecked={this.state.optionInsurance.other}
                        label="Other"
                        onChange={this.handleCheck}
                      />
                      <Form.Field
                        width={14}
                        control={Input}
                        placeholder="โปรดระบุ"
                        defaultValue={this.state.optionInsurance.otherText}
                        onChange={this.handleInputOther}
                      />
                    </Form.Group>
                  </Form>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Card>
          <Button floated="right" id="postButton" onClick={this.handlePost}>
            โพสท์
          </Button>
        </Container>
      </div>
    )
  }
}

simpleRQ.propTypes = {}

const mapStateToProps = state => ({
  data: state.simpleRQ,
})
export default connect(mapStateToProps, { fillSimpleRQ })(simpleRQ)
