import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon, Popup, List } from 'semantic-ui-react';
import { PlanBox } from './styled';
import PlanBoxModal from './planbox-modal';

export default class PlanBoxs extends Component {
  static propTypes = {
    modalOpen: PropTypes.bool.isRequired,
    handleModal: PropTypes.func.isRequired,
    handleCloseModal: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    planList: PropTypes.arrayOf(PropTypes.object).isRequired,
    plan: PropTypes.shape.isRequired,
    activePlan: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <PlanBox>
        <span> {this.props.plan.planName} </span>
        <Popup
          trigger={
            <Icon
              name="ellipsis vertical"
              size="large"
              style={{ float: 'right', cursor: 'pointer' }}
            />
          }
          content={
            <List divided relaxed style={{ cursor: 'pointer' }}>
              <List.Item>
                <List.Content onClick={e => this.props.handleModal(e)}>
                  <p id={this.props.id}>
                    <Icon name="file text outline" />ดูแผน
                  </p>
                </List.Content>
              </List.Item>
              <List.Item>
                <List.Content onClick={this.props.handleDelete}>
                  <p id={this.props.id}><Icon name="trash outline" />ลบแผน</p>
                </List.Content>
              </List.Item>
            </List>
          }
          on="click"
          position="bottom center"
          style={{ zIndex: '1' }}
        />
        <PlanBoxModal
          modalOpen={this.props.modalOpen}
          handleCloseModal={this.props.handleCloseModal}
          activePlan={this.props.activePlan}
          planList={this.props.planList}
        />
      </PlanBox>
    );
  }
}
