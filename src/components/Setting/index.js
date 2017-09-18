import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
import { Divider, Icon } from 'semantic-ui-react';
import {
  HeadText,
  ContentBox,
  HeadContentBox,
  DividerBox,
  LeftBox,
} from './styled';
import FirstRightElement from './FirstRightElement';
import SecondRightElement from './SecondRightElement';
import EmployeeSetting from './EmployeeSetting';

class Setting extends Component {
  static propTypes = {
    // getCompanyBiddingList: PropTypes.func.isRequired,
    // Bidding: PropTypes.shape({}).isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      FirstTap: false,
      SecondTap: false,
      PasswordSetting: true,
      SamePass: true,
      Password: '12345',
      biddingNoti: true,
      pricebidNoti: false,
      newClaimNoti: true,
      Department: ['HR', 'programming', 'IT Support', 'sale'],
      Position: ['leadprogrammer', 'CTO', 'projectManager',
        'front-end developer', 'CEO', 'Back-end developer'],
      EmployeeType: ['partime', 'FullTime', 'OutSource'],
    };
  }

  // componentDidMount() {
  //   this.props.getCompanyBiddingList();
  // }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  }
  handleToggle = (e, { name }) => {
    const newvalue = this.state[name];
    this.setState({ [name]: !newvalue });
  }
  handleTogleFirstTap = () => {
    this.setState({ FirstTap: !this.state.FirstTap });
  }
  handleTogleSecondTap = () => {
    this.setState({ SecondTap: !this.state.SecondTap });
  }
  handleSettingPassword = () => {
    this.setState({ PasswordSetting: true });
  }
  handleSettingEmployee = () => {
    this.setState({ PasswordSetting: false });
  }
  handleAddArray = (arrName, value) => {
    const newArr = arrName;
    newArr[newArr.length + 1] = value;
    this.setState({
      [arrName]: newArr,
    });
  }
  handleDeleteTag = (arrName, id) => {
    if (arrName.length > 1) {
      const NewArr = arrName;
      NewArr.splice(id, 1);
      this.setState({
        [arrName]: NewArr,
      });
    } else {
      const arrName = [''];
      this.setState([arrName]);
    }
  }

  handleChangePassWord = (pass, Newpass, reNewpass) => {
    if (pass === this.state.Password) {
      if (Newpass === reNewpass) {
        this.setState({
          Password: Newpass,
        });
      } else {
        this.setState({
          SamePass: false,
        });
      }
    }
    // console.log(this.state.Password);
  }

  renderRightElement = () => {
    if (this.state.PasswordSetting === true) {
      return (
        <ContentBox>
          <HeadContentBox>
            <FirstRightElement
              handleTogleFirstTap={this.handleTogleFirstTap}
              handleChangePassWord={this.handleChangePassWord}
              FirstTap={this.state.FirstTap}
              SamePass={this.state.SamePass}
            />
          </HeadContentBox>
          <DividerBox style={{ margin: '0px' }} />
          <HeadContentBox>
            <SecondRightElement
              handleTogleSecondTap={this.handleTogleSecondTap}
              handleToggle={this.handleToggle}
              SecondTap={this.state.SecondTap}
              biddingNoti={this.state.biddingNoti}
              pricebidNoti={this.state.pricebidNoti}
              newClaimNoti={this.state.newClaimNoti}
            />
          </HeadContentBox>
        </ContentBox>
      );
    }
    return (
      <div>
        <EmployeeSetting
          handleChange={this.handleChange}
          handleDeleteTag={this.handleDeleteTag}
          handleAddArray={this.handleAddArray}
          Department={this.state.Department}
          Position={this.state.Position}
          EmployeeType={this.state.EmployeeType}
        />
      </div>
    );
  }
 // ----------------------------------------------------------
  render() {
    const Blue = {
      color: '#3a7bd5',
    };
    const Black = {
      color: 'Black',
    };
    return (
      <div className="setting">
        <HeadText>การตั้งค่า</HeadText>
        <Divider />
        <div className="row">
          <div className="large-3 columns">
            <ContentBox style={{ cursor: 'pointer' }}>
              <LeftBox
                className="Hover"
                onClick={() => this.handleSettingPassword()}
                style={(this.state.PasswordSetting === true) ? Blue : Black}

              >
                <Icon name="setting" />&nbsp;การตั้งค่าทั่วไป
              </LeftBox>
              <DividerBox />
              <LeftBox
                className="Hover"
                onClick={() => this.handleSettingEmployee()}
                style={(this.state.PasswordSetting === true) ? Black : Blue}
              >
                <Icon name="group" /> &nbsp;พนักงาน
              </LeftBox>
            </ContentBox>
          </div>
          {/* -------------RightBox---------- */}
          <div className="large-9 columns">
            {this.renderRightElement()}
          </div>
        </div>
      </div>
    );
  }
}

// const mapStateToProps = state => ({
//   Bidding: state.biddingListReducer,
// });

// const mapDispatchToProps = dispatch => ({
//   getCompanyBiddingList: () => dispatch(getCompanyBiddingList()),

// });

export default Setting;
