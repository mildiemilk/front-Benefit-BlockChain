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
    };
  }
  handlePopup = () => this.setState({ isClose: !this.state.isClose });
  renderList = list => {
    const lists = list.map((element, index) => {
      const isActive = index === this.props.activePlan ? 'active' : '';
      return (
        <div
          key={index.toString()}
          className={`addBox ${isActive}`}
          onClick={() => this.props.handleActivePlan(index)}
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
                      onClick={this.props.handleDeletePlan}
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
            open={this.state.isClose}
            onOpen={this.handlePopup}
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
