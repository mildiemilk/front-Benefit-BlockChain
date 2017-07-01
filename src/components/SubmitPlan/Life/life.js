import React, { Component } from 'react'

import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import {
  Button,
  Checkbox,
  Form,
  Grid,
  Image,
  Input,
  Radio,
  Segment,
  Dropdown,
} from 'semantic-ui-react'
import '../../../styles/SubmitPlan.scss'
import bed from '../../image/icons-8-single-bed1.jpg'
import stethoscope from '../../image/icons-8-stethoscope1.jpg'
import tooth from '../../image/icons-8-toot1.jpg'
import heart from '../../image/icons-8-like.jpg'
import erase from '../../image/icons-8-erase.png'

const options = [{ text: '1', value: 1 }]

class Life extends Component {
  constructor() {
    super()
    this.state = {
      value: '',
      lifePerYear: null,
      lifeTimeOfSalary: null,
      lifeNotExceed: null,
    }
  }

  static propTypes = {}

  onInputChange(e) {
    this.setState({ nameInput: e.target.value })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { email, password } = this.state
    this.props.authenticate(email, password)
    console.log(this.state)
  }

  handleRadio = (e, { value }) => {
    this.setState({ value })
    if (this.state.value === 'secondLifeChoice') {
      document.getElementById('lifeTimeOfSalary').value = ''
      this.setState({ lifeTimeOfSalary: null })
    } else if (this.state.value === 'firstLifeChoice') {
      document.getElementById('lifePerYear').value = ''
      this.setState({ lifePerYear: null })
    } else {
      document.getElementById('lifeTimeOfSalary').value = ''
      this.setState({ lifeTimeOfSalary: null })
      document.getElementById('lifeNotExceed').value = ''
      this.setState({ lifeNotExceed: null })
    }
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  render() {
    return (
      <div>
        <br />
        <p className="head">
          <u>
            ประกันชีวิต (Life)
          </u>
        </p>
        <br />
        <p className="head">ระบุรูปแบบประกันที่ต้องการ</p>
        <Form>
          <Form.Group inline>
            <Form.Field>
              <Radio
                label="จำนวนเงิน"
                name="lifeGroup"
                value="firstLifeChoice"
                checked={this.state.value === 'firstLifeChoice'}
                onChange={this.handleRadio}
              />
            </Form.Field>
            {this.state.value === 'firstLifeChoice'
              ? <Form.Input
                  placeholder="จำนวนบาท"
                  name=" lifePerYear"
                  id=" lifePerYear"
                  onChange={this.handleChange}
                  required
                />
              : <Form.Input
                  placeholder="จำนวนบาท"
                  name=" lifePerYear"
                  id=" lifePerYear"
                  onChange={this.handleChange}
                  readOnly
                />}
            <p> บาท</p>
          </Form.Group>
          <Form.Group inline>
            <Form.Field>
              <Radio
                label="คูณอัตราเงินเดือน"
                name="lifeGroup"
                value="secondLifeChoice"
                checked={this.state.value === 'secondLifeChoice'}
                onChange={this.handleRadio}
              />
            </Form.Field>
            {this.state.value === 'secondLifeChoice'
              ? <Form.Select
                  placeholder="เท่า"
                  name="lifeTimeOfSalary"
                  id="lifeTimeOfSalary"
                  options={options}
                  onChange={this.handleChange}
                  required
                />
              : <Form.Select
                  placeholder="เท่า"
                  name="lifeTimeOfSalary"
                  id="lifeTimeOfSalary"
                  options={1}
                  onChange={this.handleChange}
                  disabled
                />}
            <p> เท่า</p>
          </Form.Group>
          <Form.Group inline>
            <Form.Field>
              <Radio
                label="คูณอัตราเงินเดือน"
                name="lifeGroup"
                value="thirdLifeChoice"
                checked={this.state.value === 'thirdtLifeChoice'}
                onChange={this.handleRadio}
              />
            </Form.Field>
            {this.state.value === 'thirdLifeChoice'
              ? <div style={{ display: 'inherit' }}>
                  <Form.Select
                    placeholder="เท่า"
                    options={1}
                    name="lifeTimeOfSalary"
                    id="lifeTimeOfSalary"
                    onChange={this.handleChange}
                    required
                  />
                  <Form.Input
                    label="เท่า แต่ไม่เกิน"
                    placeholder="จำนวนบาท"
                    name="lifeNotExceed"
                    id="lifeNotExceed"
                    onChange={this.handleChange}
                    required
                  />
                </div>
              : <div style={{ display: 'inherit' }}>
                  <Form.Select
                    placeholder="เท่า"
                    options={1}
                    onChange={this.handleChange}
                    name="lifeTimeOfSalary"
                    id="lifeTimeOfSalary"
                    disabled
                  />
                  <Form.Input
                    label="เท่า แต่ไม่เกิน"
                    placeholder="จำนวนบาท"
                    name="lifeNotExceed"
                    id="lifeNotExceed"
                    onChange={this.handleChange}
                    readOnly
                  />
                </div>}
            <p> บาท</p>
          </Form.Group>
          <div className="row">
            <Button
              style={{
                marginTop: '3%',
                textAlign: 'center',
                width: '164px',
                height: '40px',
                backgroundColor: '#3A7BD5',
                color: 'white',
                float: 'right',
                borderRadius: '20px',
                marginRight: '5%',
                marginBottom: '3%',
              }}
              type="submit"
            >
              บันทึก
            </Button>
          </div>
        </Form>
      </div>
    )
  }
}

Life.propTypes = {}

const mapDispatchToProps = dispatch => ({})
const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Life)
