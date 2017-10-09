import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Icon, Popup, List } from 'semantic-ui-react';
import { AddTopic } from './styled';

const ListContent = styled(List.Content)`
    &&&{
      font-size: 12px;
      cursor: pointer;
    }
`;

class AddPlanBar extends Component {
  static propTypes = {
    plan: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    activePlan: PropTypes.number.isRequired,
    handleActivePlan: PropTypes.func.isRequired,
    handleDeletePlan: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      isClose: [false, false, false],
      popup: -1,
    };
  }

  handleClickPlan = index => {
    this.setState({ popup: index });
    this.props.handleActivePlan(index);
  }

  handlePopup = () => this.setState({ isClose: !this.state.isClose, popup: -1 });

  handleDeletePlan = () => {
    this.setState({ popup: -1 });
    this.props.handleDeletePlan();
  }

  renderList = list => {
    const { popup } = this.state;
    const lists = list.map((element, index) => {
      const isActive = index === this.props.activePlan ? 'active' : '';
      return (
        <div
          key={index.toString()}
          className={`addBox ${isActive}`}
          onClick={() => this.handleClickPlan(index)}
          role="button"
          aria-hidden
        >
          <Popup
            trigger={
              <Icon
                style={{ float: 'left', marginTop: '1px' }}
                name="ellipsis vertical"
                size="large"
              />
            }
            content={
              <List divided relaxed>
                <List.Item>
                  <ListContent>
                    <p
                      onClick={this.handleDeletePlan}
                      role="button"
                      aria-hidden
                    >
                      <Icon name="trash outline" />ลบแผน
                    </p>
                  </ListContent>
                </List.Item>
              </List>
            }
            on="click"
            hideOnScroll
            position="bottom center"
            open={popup === index}
            onClose={this.handlePopup}
          />

          <AddTopic> {element.benefitPlanName} </AddTopic>
        </div>
      );
    });
    return lists;
  }

  render() {
    if (this.props.plan.length >= 1) {
      return (
        <div>
          {this.renderList(this.props.plan)}
        </div>
      );
    }
    return <div />;
  }
}

export default AddPlanBar;
