import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import '../../styles/employee-benefits.scss'
import MenuTab from './menu-tab'
import form from '../image/icons-8-form.png'
import SelectBox from './select-box'
import ModalWarningRecord from './modal-warning-record'
import ModalWarning from './modal-warning'
import NavBenefit from '../NavBenefit/'

class employeeBenefits extends Component {
  constructor() {
    super()
    this.state = {
      groupName: [{ name: 'GroupA' }, { name: 'GroupB' }, { name: 'GroupC' }],
      planName: [{ name: 'planA' }, { name: 'planB' }, { name: 'planC' }],
      selectGroup: false,
      selected: '',
      value: '',
      valueFixed: '',
      plan: '',
      selectPlan: [],
      selectOption: '',
      columnsLenght: 'large-11 columns',
      defualtPlan: '',
      activeGroup: '',
      verifyState: true,
      openModal: false,
      verifyChoosePlan: false,
      openWarningModal: false,
      warningMessage: '',
      step: 5,
    }
  }

  handleActiveGroup = index => {
    if (this.state.verifyState === false) {
      this.setState({ openModal: true })
    } else {
      this.setState({ activeGroup: index })
      this.setState({ selectGroup: true })
      this.setState({ plan: '' })
    }
  }

  handleActivePlan = (index, value) => {
    const indexOfSelectPlan = this.state.selectPlan.indexOf(value)
    if (indexOfSelectPlan > -1) {
      this.setState({ defualtPlan: index })
    }
  }

  handleChangePlan = (e, { name, value }) => {
    this.setState({ [name]: value })
    if (value === 'Fixed') {
      this.setState({ selectOption: 'Fixed' })
      this.setState({ columnsLenght: 'large-11 columns' })
    } else {
      this.setState({ selectOption: 'Flex' })
      this.setState({ columnsLenght: 'large-7 columns' })
    }
  }

  handleFixedChange = value => {
    this.setState({ verifyState: false })
    this.setState({ verifyChoosePlan: true })
    if (this.state.selectPlan.length > 0) {
      this.state.selectPlan.pop()
      this.state.selectPlan.push(value)
    } else {
      this.state.selectPlan.push(value)
    }
  }

  handleSubmit = () => {
    if (this.state.verifyChoosePlan === false) {
      this.setState({ openWarningModal: true })
      this.setState({ warningMessage: 'คุณยังไม่ได้เลือกแผนสิทธิสำหรับกลุ่ม' })
    } else if (
      this.state.selectOption === 'Flex' &&
      this.state.defualtPlan === ''
    ) {
      this.setState({ openWarningModal: true })
      this.setState({ warningMessage: 'คุณยังไม่ได้ตั้งค่าแผนเริ่มต้น' })
    } else if (
      this.state.selectOption === 'Flex' &&
      this.state.selectPlan.length < 2
    ) {
      this.setState({ openWarningModal: true })
      this.setState({ warningMessage: 'Flex ต้องมีแผนที่เลือกอย่างน้อย 2 แผน' })
    } else {
      this.setState({ verifyState: true })
    }
  }

  handleCloseModal = () => {
    this.setState({ openModal: false })
  }

  closeWarningModal = () => {
    this.setState({ openWarningModal: false })
  }

  handleFlexChange = (e, { value }) => {
    this.setState({ verifyState: false })
    this.setState({ verifyChoosePlan: true })
    if (this.state.selectPlan.length > 0) {
      const index = this.state.selectPlan.indexOf(value)
      if (index > -1) {
        this.state.selectPlan.splice(index, 1)
        if (this.state.defualtPlan === index) {
          this.setState({ defualtPlan: '' })
        }
      } else {
        this.state.selectPlan.push(value)
      }
    } else {
      this.state.selectPlan.push(value)
    }
  }

  render() {
    return (
      <div>
        <NavBenefit step={this.state.step} />
        <div className="employeeBenefits-box">
          <Container>
            <div className="row">
              <div className="large-10 large-centered columns">
                <p className="employeeBenefits-head-text">
                  จัดแผนสิทธิประโยชน์ให้พนักงานแต่ละกลุ่ม
                </p>
                <p>กรุณากดที่ชื่อกลุ่มของพนักงานเพื่อทำการจัดแผนสิทธประโยชน์</p>
                <div className="row">
                  <div className="large-3 columns">
                    <MenuTab
                      groupName={this.state.groupName}
                      handleActiveGroup={this.handleActiveGroup}
                      activeGroup={this.state.activeGroup}
                    />
                  </div>
                  <div className="large-9 columns">
                    {this.state.selectGroup
                      ? <SelectBox
                          planName={this.state.planName}
                          plan={this.state.plan}
                          selectOption={this.state.selectOption}
                          columnsLenght={this.state.columnsLenght}
                          handleChangePlan={this.handleChangePlan}
                          handleFixedChange={this.handleFixedChange}
                          handleFlexChange={this.handleFlexChange}
                          handleActivePlan={this.handleActivePlan}
                          defualtPlan={this.state.defualtPlan}
                          value={this.state.value}
                          valueFixed={this.state.valueFixed}
                          handleSubmit={this.handleSubmit}
                        />
                      : <div className="employeeBenefits-Start-box">
                          <div className="employeeBenefits-center-in-box">
                            <img src={form} alt="form" className="imageMenu" />
                            <p className="employeeBenefits-text-start-box">
                              ยังไม่มีการจัดแผนสิทธิประโยชน์
                            </p>
                          </div>
                        </div>}
                  </div>
                </div>
              </div>
            </div>
            <ModalWarningRecord
              openModal={this.state.openModal}
              handleCloseModal={this.handleCloseModal}
              handleSubmit={this.handleSubmit}
            />
            <ModalWarning
              openWarningModal={this.state.openWarningModal}
              warningMessage={this.state.warningMessage}
              closeWarningModal={this.closeWarningModal}
            />
          </Container>
        </div>
        <div className="row">
          <div className="large-3 large-offset-1 columns">
            <Link to="/download">
              <button className="back-step-button">กลับ</button>
            </Link>
          </div>
          <div className="large-3 large-offset-4 columns">
            <button className="next-step-button">ต่อไป</button>
          </div>
          <div className="large-1 columns" />
        </div>
      </div>
    )
  }
}

employeeBenefits.propTypes = {}

export default employeeBenefits
