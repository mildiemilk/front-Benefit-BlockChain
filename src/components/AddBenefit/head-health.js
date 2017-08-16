import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { DivImage, Setting } from './styled';

class HeadHealth extends Component {
  static propTypes = {
    handleSetting: PropTypes.func.isRequired,
  }
  constructor() {
    super();
    this.state = {
    };
  }
  render() {
    return (
      <div>
        <DivImage>
          <div className="imagehealth" />
        </DivImage>
        <Setting onClick={() => this.props.handleSetting('Health')}>
          <Icon name="setting" /> ตั้งค่าขั้นสูง{' '}
        </Setting>
      </div>
    );
  }
}

export default HeadHealth;
