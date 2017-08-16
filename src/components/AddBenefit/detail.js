import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  DetailDiv,
  Text,
  TextLine,
  Box,
  Setting,
  BoxIn,
  DivImage,
  BackButton,
  NextButton,
} from './styled';
import HealthBenefit from './health-benefit';
import ExpenseBenefit from './expense-benefit';
import ToggleHealth from './toggle-health';
import HeadHealth from './head-health';
import ToggleExpense from './toggle-expense';

class Detail extends Component {
  static propTypes = {
    handleSetting: PropTypes.func.isRequired,
    HealthList: PropTypes.arrayOf(PropTypes.string).isRequired,
    ExpenseList: PropTypes.arrayOf(PropTypes.string).isRequired,
    isHealth: PropTypes.bool.isRequired,
    isExpense: PropTypes.bool.isRequired,
    handleToggleHealth: PropTypes.func.isRequired,
    handleToggleExpense: PropTypes.func.isRequired,
    handleTextChangeExpense: PropTypes.func.isRequired,
    handleTextChangeHealth: PropTypes.func.isRequired,
    addTodoExpense: PropTypes.func.isRequired,
    removeTodoExpense: PropTypes.func.isRequired,
    addTodoHealth: PropTypes.func.isRequired,
    removeTodoHealth: PropTypes.func.isRequired,
    nextButtonHandleclick: PropTypes.func.isRequired,
    TextHealth: PropTypes.string.isRequired,
    TextExpense: PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  boxInStyle = state => {
    if (state) return 'BoxLine';
    return '';
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
                <HeadHealth handleSetting={this.props.handleSetting} />
                <BoxIn>
                  <ToggleHealth
                    boxInStyle={this.boxInStyle} isHealth={this.props.isHealth}
                    handleToggleHealth={this.props.handleToggleHealth}
                  />
                  {this.props.isHealth
                    ? <HealthBenefit
                      removeTodoHealth={this.props.removeTodoHealth}
                      addTodoHealth={this.props.addTodoHealth}
                      HealthList={this.props.HealthList}
                      TextHealth={this.props.TextHealth}
                      handleTextChangeHealth={
                        this.props.handleTextChangeHealth
                      }
                    />
                    : null}
                </BoxIn>
              </Box>

            </div>
            <div className="large-6 columns">
              <Box>
                <DivImage>
                  <div className="imageExpense" />
                </DivImage>
                <Setting onClick={() => this.props.handleSetting('Expense')}>
                  <Icon name="setting" /> ตั้งค่าขั้นสูง{' '}
                </Setting>
                <BoxIn>
                  <ToggleExpense
                    boxInStyle={this.boxInStyle}
                    isExpense={this.props.isExpense}
                    handleToggleExpense={this.props.handleToggleExpense}
                  />
                  {this.props.isExpense
                    ? <ExpenseBenefit
                      ExpenseList={this.props.ExpenseList}
                      removeTodoExpense={this.props.removeTodoExpense}
                      addTodoExpense={this.props.addTodoExpense}
                      TextExpense={this.props.TextExpense}
                      handleTextChangeExpense={
                        this.props.handleTextChangeExpense
                      }
                    />
                    : null}
                </BoxIn>
              </Box>
            </div>
          </div>
        </DetailDiv>
        <div className="row">
          <div className="large-3 large-offset-1 columns">
            <Link to="chooseinsuranceplan">
              <BackButton> กลับ </BackButton>
            </Link>
          </div>
          <div className="large-2 large-offset-5 columns">
            <NextButton onClick={this.props.nextButtonHandleclick}>
              {' '}ต่อไป{' '}
            </NextButton>
          </div>
          <div className="large-1 columns" />
        </div>
      </div>
    );
  }
}

export default Detail;
