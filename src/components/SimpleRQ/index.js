import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import * as simpleRQOption from './simpleRQOption'
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
import { fillSimpleRQ } from '../../api/simpleRequirement'

class simpleRQ extends Component {
  constructor() {
    super()
    this.state = {
      numberOfEmployee: '',
      typeOfInsurance: '',
      fileInsurance: '',
      day: '',
      month: '',
      year: '',
      IPD: false,
      OPD: false,
      dental: false,
      life: false,
      other: false,
      otherDes: '',
    }
  }

  handlePost = e => {
    e.preventDefault()
    const {
      numberOfEmployee,
      typeOfInsurance,
      OPD,
      IPD,
      dental,
      life,
      other,
      otherDes,
    } = this.state
    this.props.fillSimpleRQ(
      numberOfEmployee,
      typeOfInsurance,
      IPD,
      OPD,
      dental,
      life,
      other,
      otherDes,
    )
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

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
                    name="numberOfEmployee"
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
                    name="typeOfInsurance"
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
                    onChange={this.handleChange}
                  />
                  <Select
                    id="monthSelect"
                    name="month"
                    placeholder="เดือน"
                    options={simpleRQOption.monthOption}
                    onChange={this.handleChange}
                  />
                  <Select
                    id="yearSelect"
                    name="year"
                    placeholder="ปี"
                    options={simpleRQOption.yearOption}
                    onChange={this.handleChange}
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
                        defaultChecked={this.state.IPD}
                        label="IPD"
                        onChange={this.handleChange}
                      />
                      <Form.Field
                        control={Checkbox}
                        defaultChecked={this.state.OPD}
                        label="OPD"
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                    <Form.Group inline>
                      <Form.Field
                        width={6}
                        control={Checkbox}
                        defaultChecked={this.state.dental}
                        label="Dental"
                        onChange={this.handleChange}
                      />
                      <Form.Field
                        control={Checkbox}
                        defaultChecked={this.state.life}
                        label="Life"
                        onChange={this.handleChange}
                      />
                    </Form.Group>
                    <Form.Group inline>
                      <Form.Field
                        width={2}
                        control={Checkbox}
                        defaultChecked={this.state.other}
                        label="Other"
                        onChange={this.handleChange}
                      />
                      <Form.Field
                        width={14}
                        name="otherDes"
                        control={Input}
                        placeholder="โปรดระบุ"
                        defaultValue={this.state.otherDes}
                        onChange={this.handleChange}
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

simpleRQ.propTypes = {
  fillSimpleRQ: PropTypes.func.isRequired,
}

const mapStateToProps = state => ({
  data: state.simpleRQ,
})

const mapDispatchToProps = dispatch => ({
  fillSimpleRQ: (
    numberOfEmployee,
    typeOfInsurance,
    IPD,
    OPD,
    dental,
    life,
    other,
    otherDes,
  ) =>
    dispatch(
      fillSimpleRQ(
        numberOfEmployee,
        typeOfInsurance,
        IPD,
        OPD,
        dental,
        life,
        other,
        otherDes,
      ),
    ),
})

export default connect(null, mapDispatchToProps)(simpleRQ)
