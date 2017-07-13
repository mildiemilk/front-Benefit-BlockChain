import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Divider, Search, Input, Table, Icon } from 'semantic-ui-react'
import {
  Rec,
  Header,
  AddPlan,
  AddContent,
  HeaderSpace,
  Blog,
  Blogs,
  BlogImg,
  BlogContent,
  BackButton,
  NextButton,
} from './Styled'
import styled from 'react-sc'
import NavBenefit from '../NavBenefit'
import SettingPlan from './SettingPlan.js'

export class SettingBenefit extends Component {
  constructor() {
    super()
    this.state = {
      step: 3,
      addPlan: false,
    }
  }

  handleAddPlan = () => {
    if (this.state.addPlan) {
      this.setState({ addPlan: false })
    } else {
      this.setState({ addPlan: true })
    }
  }

  render() {
    return (
      <div>
        <NavBenefit step={this.state.step} />
        <div className="row">
          <Rec>
            <HeaderSpace className="row">
              <div className="large-4 large-offset-1 columns">
                <Header> จัดแผนสิทธิประโยชน์ที่ต้องการ </Header>
              </div>
            </HeaderSpace>

            <div className="row">
              <div className="large-2 large-offset-1 columns">
                <AddPlan onClick={this.handleAddPlan}>
                  <AddContent>
                    <Icon disabled name="add circle" />
                    เพิ่มแผนสิทธิประโยชน์
                  </AddContent>
                </AddPlan>
              </div>

              <div className="large-8 columns">
                {this.state.addPlan
                  ? <SettingPlan />
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
              <BackButton> กลับ </BackButton>
            </div>

            <div className="large-2 large-offset-5 columns">
              <NextButton> ต่อไป </NextButton>
            </div>

            <div className="large-1 columns" />

          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getAllPlan: () => dispatch(getAllPlan()),
})

const mapStateToProps = state => ({
  planList: state.plan,
})

export default connect(mapStateToProps, mapDispatchToProps)(SettingBenefit)
