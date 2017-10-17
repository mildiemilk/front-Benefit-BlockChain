import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DivHeight, DivBox } from './styled';

class MenuTab extends Component {
  static propTypes = {
    activeGroup: PropTypes.string.isRequired,
    handleActiveGroup: PropTypes.func.isRequired,
    groupName: PropTypes.arrayOf(PropTypes.object).isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      selected: '',
    };
  }
  renderList = list => {
    const showList = list.map((element, index) => {
      const isActive = index === this.props.activeGroup ? '-active' : '';
      return (
        <div
          className={`employeeBenefits-Menu-Tab-box${isActive}`}
          onClick={() => this.props.handleActiveGroup(index)}
          role="button"
          aria-hidden
        >
          {element.groupName}
        </div>
      );
    });
    return showList;
  }

  render() {
    return (
      <DivHeight>
        <div className="employeeBenefits-Menu-Tab-head-box">
          กลุ่มของพนักงาน
        </div>
        <DivBox>
          {this.renderList(this.props.groupName)}
        </DivBox>

      </DivHeight>
    );
  }
}

MenuTab.propTypes = {};

export default MenuTab;
