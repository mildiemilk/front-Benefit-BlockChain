import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Icon } from 'semantic-ui-react'
import {
  Rec,
  Header,
  AddPlan,
  AddContent,
  HeaderSpace,
  Blog,
  BlogImg,
  BlogContent,
  BackButton,
  NextButton,
} from './styled'
import NavBenefit from '../NavBenefit'
import SettingPlan from './setting-plan'
import AddPlanBar from './add-planbar'
import {
  getOptionPlan,
  getBenefitPlan,
  setBenefitPlan,
} from '../../api/benefit-plan'

class SettingBenefit extends Component {
  static propTypes = {
    getBenefitPlan: PropTypes.func.isRequired,
    getOptionPlan: PropTypes.func.isRequired,
    benefitPlan: PropTypes.array.isRequired,
    setBenefitPlan: PropTypes.func.isRequired,
    optionPlan: PropTypes.array.isRequired,
  }
  constructor() {
    super()
    this.state = {
      step: 3,
      activePlan: '',
      emptyPlan: true,
      planName: '',
      plan: '',
      isHealth: false,
      isExpense: false,
      health: '',
      expense: '',
      planList: [],
    }
  }

  componentDidMount() {
    this.props.getOptionPlan()
    this.props.getBenefitPlan()
  }

  componentWillReceiveProps(newProps) {
    if (newProps.benefitPlan.length === 0) {
      this.setState({ emptyPlan: true })
    } else this.setState({ emptyPlan: false })

    if (newProps.benefitPlan !== this.props.benefitPlan) {
      this.setState({ planList: newProps.benefitPlan })
    }
  }

  handleAddPlan = () => {
    this.setState({
      activePlan: '',
      emptyPlan: false,
      planName: '',
      plan: '',
      isHealth: false,
      isExpense: false,
      health: '',
      expense: '',
    })
  }

  handleDeletePlan = () => {
    const { activePlan, planList } = this.state
    planList.splice(activePlan, 1)
    this.props.setBenefitPlan(this.state.planList)
    this.handleAddPlan()
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })

  handleToggle = (e, { name, checked }) => {
    this.setState({ [name]: !checked }, () => {
      if (!this.state.isHealth) this.setState({ health: '' })
      if (!this.state.isExpense) this.setState({ expense: '' })
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    const {
      planName,
      plan,
      isHealth,
      isExpense,
      health,
      expense,
      activePlan,
      planList,
    } = this.state
    const newPlan = { planName, plan, isHealth, isExpense, health, expense }
    let updatePlan
    if (activePlan === '') {
      updatePlan = planList.concat(newPlan)
      this.setState({ activePlan: planList.length })
    } else {
      updatePlan = planList
      updatePlan[activePlan] = newPlan
    }
    this.setState({ planList: updatePlan }, () =>
      this.props.setBenefitPlan(this.state.planList),
    )
  }

  handleActivePlan = index => {
    const { planList } = this.state
    this.setState({
      activePlan: index,
      planName: planList[index].planName,
      plan: planList[index].plan,
      isHealth: planList[index].isHealth,
      isExpense: planList[index].isExpense,
      health: planList[index].health,
      expense: planList[index].expense,
    })
  }

  render() {
    return (
      <div className="SettingBenefit">
        <NavBenefit step={this.state.step} />
        <div className="row">
          <Rec>
            <HeaderSpace className="row">
              <div className="large-4 large-offset-1 columns">
                <Header>
                  จัดแผนสิทธิประโยชน์ที่ต้องการ
                </Header>
              </div>
            </HeaderSpace>

            <div className="row">
              <div className="large-2 large-offset-1 columns">
                {!this.state.emptyPlan
                  ? <AddPlanBar
                      plan={this.state.planList}
                      handleActivePlan={this.handleActivePlan}
                      handleDeletePlan={this.handleDeletePlan}
                      activePlan={this.state.activePlan}
                    />
                  : null}

                <AddPlan onClick={this.handleAddPlan}>
                  <AddContent>
                    <Icon disabled name="add circle" />
                    เพิ่มแผนสิทธิประโยชน์
                  </AddContent>
                </AddPlan>

              </div>

              <div className="large-8 columns">
                {!this.state.emptyPlan
                  ? <SettingPlan
                      optionPlan={this.props.optionPlan}
                      handleChange={this.handleChange}
                      handleToggle={this.handleToggle}
                      handleSubmit={this.handleSubmit}
                      planName={this.state.planName}
                      plan={this.state.plan}
                      isHealth={this.state.isHealth}
                      isExpense={this.state.isExpense}
                      health={this.state.health}
                      expense={this.state.expense}
                    />
                  : <Blog>
                      <BlogImg src="../../../setbenefit/icons-8-form.png" />
                      <BlogContent>
                        {' '}ยังไม่มีการสร้างแผนสิทธิประโยชน์{' '}
                      </BlogContent>
                    </Blog>}

              </div>

              <div className="large-1 columns" />

            </div>
          </Rec>

          <div className="row">
            <div className="large-3 large-offset-1 columns">
              <Link to="/addbenefit">
                <BackButton>
                  กลับ
                </BackButton>
              </Link>
            </div>

            <div className="large-2 large-offset-5 columns">
              <NextButton>
                ต่อไป
              </NextButton>
            </div>

            <div className="large-1 columns" />

          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getOptionPlan: () => dispatch(getOptionPlan()),
  getBenefitPlan: () => dispatch(getBenefitPlan()),
  setBenefitPlan: plan => dispatch(setBenefitPlan(plan)),
})

const mapStateToProps = state => ({
  optionPlan: state.choosePlan,
  benefitPlan: state.benefitPlan.plan,
})

export default connect(mapStateToProps, mapDispatchToProps)(SettingBenefit)
