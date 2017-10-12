import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Progress, Icon } from 'semantic-ui-react';
import Nav from './Nav';
import { getBenefitPlan, getSummaryBenefitPlan } from '../../api/benefit-plan';
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
    getSummaryBenefitPlan: PropTypes.func.isRequired,
    getSummaryEmployee: PropTypes.func.isRequired,
    getSummaryGroup: PropTypes.func.isRequired,
    benefitPlan: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    summaryEmployee: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    summaryGroup: PropTypes.shape({}).isRequired,
    summaryBenefitPlan: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  }
  constructor(props) {
    super(props);
    const showDetail = [];
    this.state = {
      timeout: false,
      showDetail,
    };
    props.getSummaryBenefitPlan();
    setInterval(() => {
      props.getBenefitPlan();
      props.getSummaryEmployee();
    }, 2000);
  }

  componentDidMount() {
    this.props.getSummaryGroup();
  }

  componentWillReceiveProps(nextProps) {
    const { summaryGroup } = nextProps;
    if (summaryGroup.groups.length !== this.state.showDetail.length) {
      const showDetail = [];
      for (let i = 0; i < summaryGroup.groups.length; i += 1) {
        showDetail.push(true);
      }
      this.setState({ showDetail });
    }
  }

  handleBar = number => {
    if (number === 0) {
      return 'none';
    }
    return 'yellow';
  }

  notiTimeout = () => {
    this.setState({
      timeout: true,
    });
  }

  handleeShowDetail = index => {
    const { showDetail } = this.state;
    showDetail[index] = !showDetail[index];
    this.setState({ showDetail });
  }

  renderDetailPlan = allPlan => {
    if (allPlan !== undefined && allPlan.plan.length >= 1) {
      const result = allPlan.plan.map((plan, index) => (
        <DetailIn key={index.toString()}>
          <div className="row">
            <div className="large-5 columns">
              <HeadPlan>{plan}</HeadPlan>
              {
                allPlan.defaultPlan === plan
                ? <Default>แผนเริิ่มต้น</Default>
                : <div />
              }
            </div>
            {
              this.state.timeout
              ? <div className="large-7 columns Bar">
                <ProgressStyle
                  percent={(allPlan.amountOfPlan[index] / allPlan.totalOfGroup) * 100}
                  className={this.handleBar(allPlan.amountOfPlan[index])}
                />
                <Number>
                  {allPlan.amountOfPlan[index]} คน
                </Number>
              </div>
              : <div className="large-7 columns Bar">
                <ProgressStyle
                  percent={(allPlan.confirm[index] / allPlan.totalOfGroup) * 100}
                  className={this.handleBar(allPlan.confirm[index])}
                />
                <Number>
                  {allPlan.confirm[index]} คน
                </Number>
              </div>
            }
          </div>
        </DetailIn>
      ));
      return result;
    }
    return '';
  }

  renderBox = allGroups => {
    const { summaryEmployee } = this.props;
    const { showDetail } = this.state;
    if (allGroups !== undefined && allGroups.length >= 1) {
      const group = allGroups.map((allGroup, index) => {
        let sum = 0;
        let TypeIcon = null;
        if (!showDetail[index]) {
          TypeIcon = <Icon name="caret right" />;
        } else {
          TypeIcon = <Icon name="caret down" />;
        }
        if (this.state.timeout) {
          if (summaryEmployee[index] !== undefined &&
            summaryEmployee[index].amountOfPlan.length >= 1) {
            sum = summaryEmployee[index].amountOfPlan.reduce((a, b) => a + b, 0);
          }
        } else {
          if (summaryEmployee[index] !== undefined &&
            summaryEmployee[index].confirm.length >= 1) {
            sum = summaryEmployee[index].confirm.reduce((a, b) => a + b, 0);
          }
        }
        return (<BoxDetail key={index.toString()}>
          <HeadList>
            <TextL>พนักงานกลุ่ม {allGroup.groupName} </TextL>
            <TextR>
              จำนวนพนักงานในกลุ่ม
              <Num>{sum}/{allGroup.count}</Num>
            </TextR>
          </HeadList>
          <BoxList>
            <Lists onClick={() => this.handleeShowDetail(index)}>
              <ListL> แผนสิทธิประโยชน์ที่เลือก </ListL>
              <ListR>{TypeIcon}</ListR>
            </Lists>
          </BoxList>
          {
            showDetail[index]
            ? this.renderDetailPlan(this.props.summaryEmployee[index])
            : <div />
          }
        </BoxDetail>
        );
      });
      return group;
    }
    return '';
  }

  render() {
    const { benefitPlan, summaryGroup, summaryBenefitPlan } = this.props;
    return (
      <div className="SelectRealTime">
        {
          benefitPlan.length >= 1
          ? <Nav
            timeout={benefitPlan[0].timeout}
            summaryGroup={summaryGroup}
            notiTimeout={this.notiTimeout}
            summaryBenefitPlan={summaryBenefitPlan}
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
            {
              this.state.timeout
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
  getSummaryBenefitPlan: () => dispatch(getSummaryBenefitPlan()),
});
const mapStateToProps = state => ({
  benefitPlan: state.benefitPlan.plan,
  summaryEmployee: state.profile.summaryEmployee,
  summaryGroup: state.profile.summaryGroup,
  summaryBenefitPlan: state.benefitPlan.summaryBenefitPlan,
});

export default connect(mapStateToProps, mapDispatchToProps)(SelectRealTime);
