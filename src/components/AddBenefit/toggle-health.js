import React, { Component } from 'react';
import { Checkbox } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { HeadList, Toggled } from './styled';

class ToggleHealth extends Component {
  static propTypes = {
    isHealth: PropTypes.bool.isRequired,
    handleToggleHealth: PropTypes.func.isRequired,
    boxInStyle: PropTypes.func.isRequired,
  }
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    console.log('toggle yaa');
    return (
      <div className={this.props.boxInStyle(this.props.isHealth)}>
        <div className="row">
          <div className="large-8 columns">
            <HeadList>ค่าใช้จ่ายสุขภาพ (Health)</HeadList>
          </div>
          <div className="large-4 columns">
            <div className="toggle">
              <Toggled>
                ไม่มี
                {' '}
                <Checkbox
                  toggle
                  checked={this.props.isHealth}
                  onClick={this.props.handleToggleHealth}
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

export default ToggleHealth;
