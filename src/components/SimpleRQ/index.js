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
  Image,
} from 'semantic-ui-react'
import { fillSimpleRQ } from '../../api/simpleRequirement'
import { UploadButton, InputBox } from './styled'
import ModalSimpleRQ from './ModalSimpleRQ'
import styled from 'react-sc'
import NavInsure from '../NavInsure'

const CardHeader = styled(Card)`
    &&&{
      margin: 0 0 0 0;
      padding-top: 0.2%;
      font-size: 20px;
      box-shadow: 0 0 0 0;
    }
  `

class simpleRQ extends Component {
  constructor() {
    super()
    this.state = {
      step: 1,
      numberOfEmployee: '',
      typeOfInsurance: '',
      day: '',
      month: '',
      year: '',
      IPD: false,
      OPD: false,
      dental: false,
      life: false,
      other: false,
      otherDes: '',
      file: '',
      filePreviewUrl: '',
    }
  }
  _handleImageChange(e) {
    e.preventDefault()

    let reader = new FileReader()
    let file = e.target.files[0]

    reader.onloadend = () => {
      this.setState({
        file: file,
        filePreviewUrl: reader.result,
      })
    }

    reader.readAsDataURL(file)
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
      day,
      month,
      year,
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
      day,
      month,
      year,
    )
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  handleCheck = (e, { name, checked }) => this.setState({ [name]: checked })

  render() {
    // console.log(this.props.data)
    let { filePreviewUrl } = this.state
    let $filePreview = null
    if (filePreviewUrl) {
      $filePreview = <span>{this.state.file.name}&nbsp;</span>
    }

    console.log(this.state)
    return (
      <div id="simpleRQ">

        <NavInsure step={this.state.step} />
        <Card fluid id="cardSimpleRQ">
          <CardHeader>
            <p id="headCardRQ"> แผนประกันที่ต้องการ </p>
          </CardHeader>
          <Grid>
            <Grid.Row>
              <Grid.Column width={5}>
                <p> จำนวนพนักงาน </p>
              </Grid.Column>
              <Grid.Column width={11}>
                <Select
                  fluid
                  name="numberOfEmployee"
                  defaultValue={this.state.numberOfEmployee}
                  placeholder="จำนวนพนักงาน"
                  options={simpleRQOption.employeeOption}
                  onChange={this.handleChange}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={5}>
                <p> รูปแบบประกันที่ต้องการ </p>
              </Grid.Column>
              <Grid.Column width={11}>
                <InputBox
                  name="typeOfInsurance"
                  defaultValue={this.state.typeOfInsurance}
                  placeholder="รูปแบบประกันที่ต้องการ"
                  onChange={this.handleChange}
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={5}>
                <p> อัพโหลดแผนประกันที่ใช้ในปัจจุบัน </p>
              </Grid.Column>
              <Grid.Column width={11}>
                <div>
                  {$filePreview}
                  <UploadButton>
                    <input
                      style={{ opacity: '0', position: 'absolute' }}
                      type="file"
                      onChange={e => this._handleImageChange(e)}
                    />
                    อัพโหลดไฟล์
                  </UploadButton>
                </div>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column width={5}>
                <p> วันหมดอายุของกรมธรรม์ </p>
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
                <p> สิทธิประโยชน์ที่ต้องการ </p>
              </Grid.Column>
              <Grid.Column width={11}>
                <Form>
                  <Form.Group inline>
                    <Form.Field
                      width={6}
                      control={Checkbox}
                      defaultChecked={this.state.IPD}
                      label="IPD"
                      name="IPD"
                      onChange={this.handleCheck}
                    />
                    <Form.Field
                      control={Checkbox}
                      defaultChecked={this.state.OPD}
                      label="OPD"
                      name="OPD"
                      onChange={this.handleCheck}
                    />
                  </Form.Group>
                  <Form.Group inline>
                    <Form.Field
                      width={6}
                      control={Checkbox}
                      defaultChecked={this.state.dental}
                      label="Dental"
                      name="dental"
                      onChange={this.handleCheck}
                    />
                    <Form.Field
                      control={Checkbox}
                      defaultChecked={this.state.life}
                      label="Life"
                      name="life"
                      onChange={this.handleCheck}
                    />
                  </Form.Group>
                  <Form.Group inline>
                    <Form.Field
                      width={2}
                      control={Checkbox}
                      defaultChecked={this.state.other}
                      label="Other"
                      name="other"
                      onChange={this.handleCheck}
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
        <ModalSimpleRQ data={this.state} handlePost={this.handlePost} />

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
    day,
    month,
    year,
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
        day,
        month,
        year,
      ),
    ),
})

export default connect(null, mapDispatchToProps)(simpleRQ)
