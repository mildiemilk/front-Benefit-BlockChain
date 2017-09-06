import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import NavBenefit from '../NavBenefit';
import Detail from './detail';
import Setting from './setting';
import { planOption, getOptionPlan } from '../../api/benefit-plan';

class AddBenefit extends Component {
  static propTypes = {
    planOption: PropTypes.func.isRequired,
    getOptionPlan: PropTypes.func.isRequired,
    optionPlan: PropTypes.shape({}).isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      step: 2,
      isSetting: false,
      isHealth: false,
      isExpense: false,
      HealthList: [],
      ExpenseList: [],
      TextExpense: '',
      TextHealth: '',
      Types: '',
      selectedOptionHealth1: 'full',
      selectedOptionHealth2: 'full',
      selectedOptionHealth3: 'full',
      selectedOptionExpense1: 'full',
      selectedOptionExpense2: 'full',
      selectedOptionExpense3: 'full',
    };
  }

  componentDidMount() {
    this.props.getOptionPlan();
  }

  componentWillReceiveProps(newProps) {
    if (newProps.optionPlan !== this.props.optionPlan) {
      const { optionPlan } = newProps;
      this.setState({
        isHealth: optionPlan.isHealth,
        isExpense: optionPlan.isExpense,
        HealthList: optionPlan.health.HealthList,
        ExpenseList: optionPlan.expense.ExpenseList,
        selectedOptionHealth1: optionPlan.health.selectedOptionHealth1,
        selectedOptionHealth2: optionPlan.health.selectedOptionHealth2,
        selectedOptionHealth3: optionPlan.health.selectedOptionHealth3,
        selectedOptionExpense1: optionPlan.expense.selectedOptionExpense1,
        selectedOptionExpense2: optionPlan.expense.selectedOptionExpense2,
        selectedOptionExpense3: optionPlan.expense.selectedOptionExpense3,
      });
    }
  }

  handleToggleHealth = () => {
    if (this.state.isHealth) {
      this.setState({ isHealth: false });
    } else {
      this.setState({
        isHealth: true,
        HealthList: [],
      });
    }
  }

  handleToggleExpense = () => {
    if (this.state.isExpense) {
      this.setState({ isExpense: false });
    } else {
      this.setState({
        isExpense: true,
        ExpenseList: [],
      });
    }
  }

  handleSetting = types => {
    if (this.state.isSetting) {
      this.setState({
        isSetting: false,
        Types: types,
      });
    } else {
      this.setState({
        isSetting: true,
        Types: types,
      });
    }
  }

  addTodoExpense = () => {
    this.setState({
      ExpenseList: this.state.ExpenseList.concat(this.state.TextExpense),
      TextExpense: '',
    });
  }

  removeTodoExpense = e => {
    const result = this.state.ExpenseList;
    result.splice(e, 1);
    this.setState({
      ExpenseList: result,
    });
  }

  addTodoHealth = () => {
    this.setState({
      HealthList: this.state.HealthList.concat(this.state.TextHealth),
      TextHealth: '',
    });
  }

  removeTodoHealth = e => {
    const result = this.state.HealthList;
    result.splice(e, 1);
    this.setState({
      HealthList: result,
    });
  }

  handleTextChangeExpense = e => {
    this.setState({
      TextExpense: e.target.value,
    });
  }

  handleTextChangeHealth = e => {
    this.setState({
      TextHealth: e.target.value,
    });
  }

  handleOptionChangeHealth1 = changeEvent => {
    this.setState({
      selectedOptionHealth1: changeEvent.target.value,
    });
  }

  handleOptionChangeExpense1 = changeEvent => {
    this.setState({
      selectedOptionExpense1: changeEvent.target.value,
    });
  }

  handleOptionChangeHealth2 = changeEvent => {
    this.setState({
      selectedOptionHealth2: changeEvent.target.value,
    });
  }

  handleOptionChangeExpense2 = changeEvent => {
    this.setState({
      selectedOptionExpense2: changeEvent.target.value,
    });
  }

  handleOptionChangeHealth3 = changeEvent => {
    this.setState({
      selectedOptionHealth3: changeEvent.target.value,
    });
  }

  handleOptionChangeExpense3 = changeEvent => {
    this.setState({
      selectedOptionExpense3: changeEvent.target.value,
    });
  }

  nextButtonHandleclick = () => {
    const {
      isHealth,
      isExpense,
      HealthList,
      ExpenseList,
      selectedOptionHealth1,
      selectedOptionHealth2,
      selectedOptionHealth3,
      selectedOptionExpense1,
      selectedOptionExpense2,
      selectedOptionExpense3,
    } = this.state;
    this.props.planOption(
      isHealth,
      isExpense,
      HealthList,
      ExpenseList,
      selectedOptionHealth1,
      selectedOptionHealth2,
      selectedOptionHealth3,
      selectedOptionExpense1,
      selectedOptionExpense2,
      selectedOptionExpense3,
    );
  }

  render() {
    return (
      <div className="AddBenefit">
        <NavBenefit step={this.state.step} />
        {this.state.isSetting
          ? <Setting
            Types={this.state.Types}
            handleSetting={this.handleSetting}
            handleOptionChangeHealth1={this.handleOptionChangeHealth1}
            handleOptionChangeHealth2={this.handleOptionChangeHealth2}
            handleOptionChangeHealth3={this.handleOptionChangeHealth3}
            selectedOptionHealth1={this.state.selectedOptionHealth1}
            selectedOptionHealth2={this.state.selectedOptionHealth2}
            selectedOptionHealth3={this.state.selectedOptionHealth3}
            handleOptionChangeExpense1={this.handleOptionChangeExpense1}
            selectedOptionExpense1={this.state.selectedOptionExpense1}
            selectedOptionExpense2={this.state.selectedOptionExpense2}
            selectedOptionExpense3={this.state.selectedOptionExpense3}
            handleOptionChangeExpense2={this.handleOptionChangeExpense2}
            handleOptionChangeExpense3={this.handleOptionChangeExpense3}
          />
          : <Detail
            handleSetting={this.handleSetting}
            HealthList={this.state.HealthList}
            ExpenseList={this.state.ExpenseList}
            isHealth={this.state.isHealth}
            isExpense={this.state.isExpense}
            handleToggleHealth={this.handleToggleHealth}
            handleToggleExpense={this.handleToggleExpense}
            handleTextChangeExpense={this.handleTextChangeExpense}
            handleTextChangeHealth={this.handleTextChangeHealth}
            addTodoExpense={this.addTodoExpense}
            removeTodoExpense={this.removeTodoExpense}
            addTodoHealth={this.addTodoHealth}
            removeTodoHealth={this.removeTodoHealth}
            nextButtonHandleclick={this.nextButtonHandleclick}
            TextHealth={this.state.TextHealth}
            TextExpense={this.state.TextExpense}
          />}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  planOption: (
    isHealth,
    isExpense,
    HealthList,
    ExpenseList,
    TextExpense,
    TextHealth,
    Setting1,
    Setting2,
    Setting3,
    Setting4,
    Setting5,
    Setting6,
  ) =>
    dispatch(
      planOption(
        isHealth,
        isExpense,
        HealthList,
        ExpenseList,
        TextExpense,
        TextHealth,
        Setting1,
        Setting2,
        Setting3,
        Setting4,
        Setting5,
        Setting6,
      ),
    ),
  getOptionPlan: () => dispatch(getOptionPlan()),
});

const mapStateToProps = state => ({
  optionPlan: state.choosePlan,
});

export default connect(mapStateToProps, mapDispatchToProps)(AddBenefit);
