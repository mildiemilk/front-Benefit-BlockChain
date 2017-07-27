import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Button, Form } from 'semantic-ui-react'
import { editPlan } from '../../../api/set-plan'
import '../../../styles/submit-plan.scss'
import DentalModal from './dental-modal'

class Dental extends Component {
  static propTypes = {
    handleVerifyState: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    editPlan: PropTypes.func.isRequired,
    handleRecordVerifyState: PropTypes.func.isRequired,
    handleResetDental: PropTypes.func.isRequired,
    handleCloseModal: PropTypes.func.isRequired,
    dentalPerYear: PropTypes.string.isRequired,
    handleNewReset: PropTypes.string.isRequired,
    activePlan: PropTypes.number.isRequired,
    setPlan: PropTypes.string.isRequired,
    openModal: PropTypes.func.isRequired,
    planList: PropTypes.arrayOf(PropTypes.object).isRequired,
    reset: PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {}
  }

  componentDidUpdate() {
    if (this.props.setPlan === 'Dental' && this.props.reset === true) {
      this.handleResetdata()
    }
  }

  handleChange = (e, { name, value }) => {
    this.props.handleChange(e, { name, value })
    this.props.handleVerifyState('dentalRecord')
  }

  handleClick = () => {
    const { dentalPerYear } = this.props
    this.props.editPlan(
      { dentalPerYear },
      this.props.planList[this.props.activePlan].planId,
      'dental',
    )
    this.props.handleRecordVerifyState('dentalRecord')
  }

  handleResetdata = () => {
    document.getElementById('dentalPerYear').value = ''
    this.props.handleResetDental()
    this.props.handleNewReset()
    this.props.handleVerifyState('dentalRecord')
  }

  render() {
    return (
      <div>
        <br />
        <p className="head">
          <u>
            ค่ารักษาทันตกรรม (Dental)
          </u>
        </p>
        <br />
        <p className="head">ระบุรูปแบบประกันที่ต้องการ</p>
        <Form onSubmit={this.handleClick}>
          <Form.Group inline>
            <Form.Input
              type="number"
              label="ใช้บริการได้ไม่เกิน"
              placeholder="จำนวนเงิน"
              name="dentalPerYear"
              id="dentalPerYear"
              onChange={this.handleChange}
              value={this.props.dentalPerYear}
              required
            />
            <p> บาท/ปี</p>
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
                marginBottom: '3%',
              }}
              type="submit"
            >
              บันทึก
            </Button>
          </div>
        </Form>
        <DentalModal
          openModal={this.props.openModal}
          handleCloseModal={this.props.handleCloseModal}
          handleClick={this.handleClick}
        />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  editPlan: (editData, planId, editType) =>
    dispatch(editPlan(editData, planId, editType)),
})
const mapStateToProps = state => ({
  planList: state.plan.planList,
})

export default connect(mapStateToProps, mapDispatchToProps)(Dental)
