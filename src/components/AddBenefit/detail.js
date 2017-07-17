import React, { Component } from 'react'
import {
  DetailDiv,
  Text,
  TextLine,
  Box,
  Setting,
  Image,
  BoxIn,
  DivImage,
  HeadList,
  Toggled,
  HeadLists,
  BackButton,
  NextButton,
} from './styled'
import { Icon, Checkbox } from 'semantic-ui-react'
import HealthBenefit from './health-benefit'
import ExpenseBenefit from './expense-benefit'

class Detail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isHealth: false,
      isExpense: false,
      HealthList: [],
      ExpenseList: [],
    }
  }

  handleToggleHealth = () => {
    if (this.state.isHealth) {
      this.setState({ isHealth: false })
    } else {
      this.setState({ isHealth: true })
    }
  }

  handleToggleExpense = () => {
    if (this.state.isExpense) {
      this.setState({ isExpense: false })
    } else {
      this.setState({ isExpense: true })
    }
  }
  boxInStyle = state => {
    if (state) return 'BoxLine'
  }
  render() {
    return (
      <div>
        <DetailDiv>
          <Text>ระบุสิทธิประโยชน์</Text>
          <TextLine>กรุณาระบุสิทธิประโยชน์ที่ต้องการ</TextLine>
          <div className="row">
            <div className="large-6 columns">
              <Box>
                <DivImage>
                  <div className="imagehealth" />
                </DivImage>
                <Setting onClick={this.props.handleSetting}>
                  <Icon name="setting" /> ตั้งค่าขั้นสูง{' '}
                </Setting>
                <BoxIn>
                  <div className={this.boxInStyle(this.state.isHealth)}>
                    <div className="row">
                      <div className="large-8 columns">
                        <HeadList>ค่าใช้จ่ายสุขภาพ (Health)</HeadList>
                      </div>
                      <div className="large-4 columns">
                        <div className="Toggle">
                          <Toggled>
                            ไม่มี
                            {' '}
                            <Checkbox
                              toggle
                              onClick={this.handleToggleHealth}
                            />
                            {' '}
                            มี
                          </Toggled>
                        </div>
                      </div>
                    </div>
                  </div>
                  {this.state.isHealth ? <HealthBenefit /> : null}
                </BoxIn>
              </Box>

            </div>
            <div className="large-6 columns">
              <Box>
                <DivImage>
                  <div className="imageExpense" />
                </DivImage>
                <Setting><Icon name="setting" /> ตั้งค่าขั้นสูง </Setting>
                <BoxIn>
                  <div className={this.boxInStyle(this.state.isExpense)}>
                    <div className="row">
                      <div className="large-8 columns">
                        <HeadList>ค่าใช้จ่ายทั่วไป (General Expense)</HeadList>
                      </div>
                      <div className="large-4 columns">
                        <Toggled>
                          ไม่มี
                          {' '}
                          <Checkbox toggle onClick={this.handleToggleExpense} />
                          {' '}
                          มี
                        </Toggled>
                      </div>
                    </div>
                  </div>
                  {this.state.isExpense ? <ExpenseBenefit /> : null}
                </BoxIn>
              </Box>
            </div>
          </div>
        </DetailDiv>
        <div className="row">
          <div className="large-3 large-offset-1 columns">
            <BackButton> กลับ </BackButton>
          </div>
          <div className="large-2 large-offset-5 columns">
            <NextButton> ต่อไป </NextButton>
          </div>
          <div className="large-1 columns" />
        </div>
      </div>
    )
  }
}

export default Detail
