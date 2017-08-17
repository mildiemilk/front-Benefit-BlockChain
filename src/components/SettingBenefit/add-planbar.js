import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Icon, Popup, List } from 'semantic-ui-react';
import { AddTopic } from './styled';

const ListContent = styled(List.Content)`
    &&&{
      font-size: 12px;
    }
`;

class AddPlanBar extends Component {
  static propTypes = {
    plan: PropTypes.string.isRequired,
    activePlan: PropTypes.string.isRequired,
    handleActivePlan: PropTypes.func.isRequired,
    handleDeletePlan: PropTypes.func.isRequired,
  }
  constructor() {
    super();
    this.state = {};
  }

  renderList = list => {
    const lists = list.map((element, index) => {
      const isActive = index === this.props.activePlan ? 'active' : '';
      return (
        <div
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
                      <Icon name="trash outline" />ลบแพลน
                    </p>
                  </ListContent>
                </List.Item>
              </List>
            }
            on="click"
            hideOnScroll
            position="bottom center"
          />

          <AddTopic> {element.planName} </AddTopic>
        </div>
      );
    });
    return lists;
  }

  render() {
    return (
      <div>
        {this.renderList(this.props.plan)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  planList: state.plan.planList,
});

export default connect(mapStateToProps)(AddPlanBar);
