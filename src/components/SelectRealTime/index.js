import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Progress, Icon } from 'semantic-ui-react';
import Nav from './Nav';
import { getBenefitPlan } from '../../api/benefit-plan';
import { getSummaryEmployee, getSummaryGroup } from '../../api/profile-company';
import {
  DetailDiv,
  NextButton,
  HeadDetail,
  BoxDetail,
  HeadList,
  TextR,
  TextL,
  Num,
  ListL,
  Lists,
  ListR,
  BoxList,
  DetailIn,
  Number,
  Default,
  HeadPlan,
} from './styled';

const ProgressStyle = styled(Progress) `
    &&&{
        width: 80%;
        margin: 5px 20px;
        display: inline-block;
        height: 15px;
        border-radius: 100px;
    }
`;

class SelectRealTime extends Component {
  static propTypes = {
    getBenefitPlan: PropTypes.func.isRequired,
    getSummaryEmployee: PropTypes.func.isRequired,
    getSummaryGroup: PropTypes.func.isRequired,
    benefitPlan: PropTypes.arrayOf(PropTypes.object).isRequired,
    summaryEmployee: PropTypes.arrayOf(PropTypes.object).isRequired,
    summaryGroup: PropTypes.shape({}).isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      isPlan: true,
      timeout: false,
    };
  }
  componentDidMount() {
    this.props.getBenefitPlan();
    this.props.getSummaryEmployee();
    this.props.getSummaryGroup();
  }
  handlePlan = () => {
    const { isPlan } = this.state;
    if (!isPlan) {
      this.setState({
        isPlan: true,
      });
    } else {
      this.setState({
        isPlan: false,
      });
    }
  }
  notiTimeout = () => {
    this.setState({
      timeout: true,
    });
  }
  renderDetailPlan = allPlan => {
    console.log('allplan---<before', allPlan);
    if (allPlan !== undefined && allPlan.plan.length >= 1) {
      console.log('allplan===>', allPlan);
      const result = allPlan.plan.map((plan, index) => (
        <DetailIn>
          <div className="row">
            <div className="large-5 columns">
              <HeadPlan>{plan}</HeadPlan>
              {allPlan.defaultPlan === plan
              ? <Default>ค่าเริิ่มต้น</Default>
              : null
              }
            </div>
            <div className="large-7 columns">
              <ProgressStyle percent={allPlan.confirm[index]} color="yellow" />
              <Number>
                {allPlan.confirm[index]} คน
                </Number>
            </div>
          </div>
        </DetailIn>
      ))
      return result;
    }
    return '';
  }
  renderBox = allGroups => {
    let TypeIcon = null;
    if (!this.state.isPlan) {
      TypeIcon = <Icon name="caret right" />;
    } else {
      TypeIcon = <Icon name="caret down" />;
    }
    console.log('all', allGroups);
    if (allGroups !== undefined && allGroups.length >= 1) {
      const group = allGroups.map((allGroup, index) => {
        let sum;
        console.log('---summary---', this.props.summaryEmployee[index]);
        if (this.props.summaryEmployee[index] !== undefined &&
          this.props.summaryEmployee[index].confirm.length >= 1) {
          sum = this.props.summaryEmployee[index].confirm.reduce((a, b) => a + b, 0);
        }
        return (<BoxDetail>
          <HeadList>
            <TextL>พนักงานกลุ่ม {allGroup.groupName} </TextL>
            <TextR>
              จำนวนพนักงานในกลุ่ม
              <Num>{sum}/{allGroup.count}</Num>
            </TextR>
          </HeadList>
          <BoxList>
            <Lists onClick={this.handlePlan}>
              <ListL> แผนสิทธิประโยชน์ที่เลือก </ListL>
              <ListR>{TypeIcon}</ListR>
            </Lists>
          </BoxList>
          {this.state.isPlan
            ? this.renderDetailPlan(this.props.summaryEmployee[index])
            : null}
        </BoxDetail>
        )
      });
      return group;
    }
    return '';
  }
  render() {
    const { benefitPlan, summaryGroup } = this.props;
    return (
      <div className="SelectRealTime">
        {benefitPlan.length >= 1
        ? <Nav
          timeout={benefitPlan[0].timeout}
          summaryGroup={summaryGroup}
          notiTimeout={this.notiTimeout}
        />
        : <div />
        }
        <DetailDiv>
          <HeadDetail>
            รายละเอียด
          </HeadDetail>
          {this.renderBox(summaryGroup.groups)}
        </DetailDiv>
        <div className="row">
          <div className="large-2 large-offset-10 columns">
            { this.state.timeout
            ? <Link to="/summary"><NextButton>ต่อไป</NextButton></Link>
            : <div />
            }
          </div>

        </div>

      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getBenefitPlan: () => dispatch(getBenefitPlan()),
  getSummaryEmployee: () => dispatch(getSummaryEmployee()),
  getSummaryGroup: () => dispatch(getSummaryGroup()),
});
const mapStateToProps = state => ({
  benefitPlan: state.benefitPlan.plan,
  summaryEmployee: state.profile.summaryEmployee,
  summaryGroup: state.profile.summaryGroup,
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectRealTime);
