import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button } from 'semantic-ui-react'
import ViewPlanBox from './ViewPlanBox'
import { Divider, Search, Input, Table, Icon } from 'semantic-ui-react'
import { PostContent, BackHome, RecViewAllPlan, ViewHeader } from './Styled'
import styled from 'react-sc'
import SearchBox from './SearchBox'
import NavInsure from '../NavInsure'
import ModalView from './ModalView'
import { getAllPlan } from '../../api/setPlan'

export class ViewAllPlan extends Component {
  constructor() {
    super()
    this.state = {
      step: 3,
      passwordToConfirm: '',
      SearchTerm: '',
    }
  }

  handleSearchBoxChange(keyword) {
    this.setState({ SearchTerm: keyword })
  }

  filterPlan(list) {
    return list.filter(
      plan =>
        plan.planName
          .toLowerCase()
          .indexOf(this.state.SearchTerm.toLowerCase()) >= 0,
    )
  }

  render() {
    {
      this.props.getAllPlan()
    }
    return (
      <div className="ViewAllPlan">
        <NavInsure step={this.state.step} />
        <div className="row">
          <RecViewAllPlan>
            <div className="row">
              <div className="large-3 large-offset-1 columns">
                <ViewHeader> แพลนทั้งหมด </ViewHeader>
                <BackHome>&lt; กลับหน้าหลัก </BackHome>
              </div>

              <div className="large-2 large-offset-4 columns">
                <SearchBox
                  callback={keyword => this.handleSearchBoxChange(keyword)}
                />
              </div>
              <div className="large-2 columns" />
            </div>

            <div style={{ marginTop: '4%' }} className="row">
              <div className="large-10 large-offset-1 columns">
                <table>
                  <tr>
                    <th> <ModalView /> </th>
                    <th> ชื่อแพลน </th>
                    <th> แก้ไขครั้งล่าสุดโดย </th>
                    <th> วันที่ </th>
                    <th> Action </th>
                  </tr>
                </table>
                <ViewPlanBox planList={this.filterPlan(this.props.planList)} />
              </div>
            </div>
          </RecViewAllPlan>
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

export default connect(mapStateToProps, mapDispatchToProps)(ViewAllPlan)
