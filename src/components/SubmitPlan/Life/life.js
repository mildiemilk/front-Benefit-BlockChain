import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { Button, Form, Radio } from 'semantic-ui-react'
import { editPlan } from '../../../api/set-plan'
import '../../../styles/submit-plan.scss'
import LifeModal from './life-modal'
import about from '../../image/icons-8-about.png'

const options = [{ text: '1', value: 1 }]

class Life extends Component {
  static propTypes = {
    handleChange: PropTypes.func.isRequired,
    handleVerifyState: PropTypes.func.isRequired,
    editPlan: PropTypes.string.isRequired,
    handleResetLife: PropTypes.func.isRequired,
    handleNewReset: PropTypes.func.isRequired,
    lifePerYear: PropTypes.string.isRequired,
    lifeTimeOfSalary: PropTypes.string.isRequired,
    lifeNotExceed: PropTypes.string.isRequired,
    handleRecordVerifyState: PropTypes.func.isRequired,
    handleCloseModal: PropTypes.func.isRequired,
    planList: PropTypes.string.isRequired,
    activePlan: PropTypes.string.isRequired,
    setPlan: PropTypes.string.isRequired,
    reset: PropTypes.string.isRequired,
    openModal: PropTypes.string.isRequired,
    handleNextPlan: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props)
    const { lifePerYear, lifeNotExceed, lifeTimeOfSalary } = this.props
    let value

    if (lifePerYear) {
      value = 'firstLifeChoice'
    } else if (lifeNotExceed) {
      value = 'thirdLifeChoice'
    } else if (lifeTimeOfSalary) {
      value = 'secondLifeChoice'
    } else {
      value = ''
    }

    this.state = { value }
  }

  componentDidUpdate() {
    if (this.props.setPlan === 'Life' && this.props.reset === true) {
      this.handleResetData()
    }
  }

  handleRadio = (e, { value }) => {
    this.handleResetData()
    this.setState({ value })
  }

  handleChange = (e, { name, value }) => {
    this.props.handleChange(e, { name, value })
    this.props.handleVerifyState('lifeRecord')
  }

  handleClick = () => {
    const { lifePerYear, lifeTimeOfSalary, lifeNotExceed } = this.props
    this.props.handleRecordVerifyState('lifeRecord')
    this.props.editPlan(
      { lifePerYear, lifeTimeOfSalary, lifeNotExceed },
      this.props.planList[this.props.activePlan].planId,
      'life',
    )
  }

  handleResetData = () => {
    document.getElementById('lifeTimeOfSalary').value = ''
    document.getElementById('lifePerYear').value = ''
    document.getElementById('lifeNotExceed').value = ''
    this.props.handleResetLife()
    this.setState({ value: '' })
    this.props.handleNewReset()
    this.props.handleVerifyState('lifeRecord')
  }

  render() {
    return (
      <div>
        <br />
        <p className="head">
          <u>
            ประกันชีวิต (Life)
          </u>
          <span>
            <img src={about} alt="about" />
          </span>
        </p>
        <br />
        <p className="head">ระบุรูปแบบประกันที่ต้องการ</p>
        <Form onSubmit={this.handleClick}>
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
                type="number"
                placeholder="จำนวนบาท"
                name="lifePerYear"
                id="lifePerYear"
                onChange={this.handleChange}
                value={this.props.lifePerYear}
                required
              />
              : <Form.Input
                type="number"
                placeholder="จำนวนบาท"
                name="lifePerYear"
                id="lifePerYear"
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
                value={this.props.lifeTimeOfSalary}
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
                checked={this.state.value === 'thirdLifeChoice'}
                onChange={this.handleRadio}
              />
            </Form.Field>
            {this.state.value === 'thirdLifeChoice'
              ? <div style={{ display: '-webkit-box' }}>
                <Form.Select
                  placeholder="เท่า"
                  options={options}
                  name="lifeTimeOfSalary"
                  id="lifeTimeOfSalary"
                  value={this.props.lifeTimeOfSalary}
                  onChange={this.handleChange}
                  style={{ width: '100px' }}
                />
              </div>
              : <div style={{ display: '-webkit-box' }}>
                <Form.Select
                  placeholder="เท่า"
                  options={1}
                  onChange={this.handleChange}
                  name="lifeTimeOfSalary"
                  id="lifeTimeOfSalary"
                  disabled
                  style={{ width: '150px' }}
                />
              </div>}
            <p> บาท</p>
          </Form.Group>
          {this.state.value === 'thirdLifeChoice'
            ? <div style={{ marginLeft: '5.5%' }}>
              <Form.Group inline>
                <Form.Field>
                  <Form.Input
                    type="number"
                    label="เท่า แต่ไม่เกิน"
                    placeholder="จำนวนบาท"
                    name="lifeNotExceed"
                    id="lifeNotExceed"
                    onChange={this.handleChange}
                    required
                  />
                </Form.Field>
                <p>บาท</p>
              </Form.Group>
            </div>
            : <div style={{ marginLeft: '5.5%' }}>
              <Form.Group inline>
                <Form.Field>
                  <Form.Input
                    type="number"
                    label="เท่า แต่ไม่เกิน"
                    placeholder="จำนวนบาท"
                    name="lifeNotExceed"
                    id="lifeNotExceed"
                    onChange={this.handleChange}
                    readOnly
                  />
                </Form.Field>
                <p>บาท</p>
              </Form.Group>
            </div>}
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
                marginBottom: '3%',
              }}
              type="submit"
            >
              บันทึก
            </Button>
          </div>
        </Form>
        <LifeModal
          openModal={this.props.openModal}
          handleCloseModal={this.props.handleCloseModal}
          handleClick={this.handleClick}
          handleNextPlan={this.props.handleNextPlan}
        />
      </div>
    )
  }
}

Life.propTypes = {}

const mapDispatchToProps = dispatch => ({
  editPlan: (editData, planId, editType) =>
    dispatch(editPlan(editData, planId, editType)),
})
const mapStateToProps = state => ({
  planList: state.plan.planList,
})

export default connect(mapStateToProps, mapDispatchToProps)(Life)
