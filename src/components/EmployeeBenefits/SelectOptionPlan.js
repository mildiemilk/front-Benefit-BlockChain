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
  Container,
  Dropdown,
  Radio,
  Icon,
  Popup,
  List,
} from 'semantic-ui-react'
import { PopupView } from '../Bidding/styled'
import '../../styles/employeeBenefits.scss'
import '../../styles/PopUpColor.scss'
import SettingBenefitModal from './SettingBenefitModal'

const a = []

class SelectOptionPlan extends Component {
  constructor() {
    super()
    this.state = {
      selectedGroup: '',
      value: '',
      plan: '',
      selectPlan: [],
      openSettingBenefit: false,
    }
  }

  handleChange = (e, { value }) => {
    this.setState({ value })
    this.props.handleFixedChange(value)
  }

  handleClick = () => {
    console.log(this.state.selectPlan)
  }

  handleModal = () => {
    this.setState({ openSettingBenefit: true })
  }

  closeModal = () => {
    this.setState({ openSettingBenefit: false })
  }

  renderList = list => {
    return list.map((element, index) => {
      const isActive = index === this.props.defualtPlan ? '-active' : ''
      return (
        <div className="row">
          <div className="large-1 columns">
            <div className="select-button">
              {this.props.selectOption === 'Fixed'
                ? <Form.Field>
                    <Radio
                      name="planGroup"
                      value={element.name}
                      checked={this.state.value === element.name}
                      onChange={this.handleChange}
                    />
                  </Form.Field>
                : <Form.Field>
                    <Checkbox
                      value={element.name}
                      onChange={this.props.handleFlexChange}
                    />
                  </Form.Field>}
            </div>
          </div>
          <div className={this.props.columnsLenght}>
            <div className="plan-box">
              {element.name}
              <PopupView
                trigger={
                  <Icon
                    style={{ float: 'right', cursor: 'pointer' }}
                    name="ellipsis vertical"
                    size="large"
                  />
                }
                content={
                  <List divided relaxed>
                    <List.Item>
                      <List.Content onClick={() => this.handleModal()}>
                        <p><Icon name="file text outline" />ดูแพลน</p>
                      </List.Content>
                    </List.Item>
                  </List>
                }
                on="click"
                hideOnScroll
                position="bottom center"
                style={{
                  backgroundColor: '#3a7bd5',
                  color: 'white',
                  zIndex: '1',
                }}
              />
            </div>
            <SettingBenefitModal
              openSettingBenefit={this.state.openSettingBenefit}
              closeModal={this.closeModal}
            />
          </div>
          {this.props.plan === 'Flex'
            ? <div className="large-4 columns">
                <div
                  className={`basic-status-box${isActive}`}
                  onClick={() =>
                    this.props.handleActivePlan(index, element.name)}
                >
                  <p>ตั้งแผนนี้เป็นค่าเริ่มต้น</p>
                </div>
              </div>
            : null}
        </div>
      )
    })
  }

  render() {
    return (
      <div className="PopUpColor">
        <Form>
          {this.renderList(this.props.planName)}
          <div className="row">
            <button
              className="record-select-plan"
              onClick={() => this.props.handleSubmit()}
            >
              บันทึก
            </button>
          </div>
        </Form>
      </div>
    )
  }
}

SelectOptionPlan.propTypes = {}

const mapDispatchToProps = dispatch => ({})
const mapStateToProps = state => ({})

export default connect(mapStateToProps, mapDispatchToProps)(SelectOptionPlan)
