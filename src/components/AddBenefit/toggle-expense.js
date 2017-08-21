import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Checkbox } from 'semantic-ui-react';
import { HeadList, Toggled } from './styled';

class ToggleExpense extends Component {
  static propTypes = {
    isExpense: PropTypes.bool.isRequired,
    handleToggleExpense: PropTypes.func.isRequired,
    boxInStyle: PropTypes.func.isRequired,
  }
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    return (
      <div className={this.props.boxInStyle(this.props.isExpense)}>
        <div className="row">
          <div className="large-8 columns">
            <HeadList>ค่าใช้จ่ายทั่วไป (General Expense)</HeadList>
          </div>
          <div className="large-4 columns">
            <div className="toggle">
              <Toggled>
                ไม่มี
                {' '}
                <Checkbox
                  toggle
                  checked={this.props.isExpense}
                  onClick={this.props.handleToggleExpense}
                />
                {' '}
                มี
              </Toggled>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ToggleExpense;
