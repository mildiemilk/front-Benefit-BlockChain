import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, Icon } from 'semantic-ui-react';
import icon1 from '../image/icons-8-treatment-plan.png';
import { ManagePlan } from './styled';
import ModalPlan from './modal-plan';

class PlanTemplate extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    closetap: PropTypes.bool.isRequired,
    colorPlan: PropTypes.number.isRequired,
    handleDeleteChooseInsurance: PropTypes.func.isRequired,
    handleDeleteOurplan: PropTypes.func.isRequired,
    handleDeleteSpacialPlan: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    ourPlan: PropTypes.arrayOf(PropTypes.object),
    // specialPlans: PropTypes.arrayOf(PropTypes.object),

  }

  static defaultProps = {
    ourPlan: [],
  }

  constructor() {
    super();
    this.state = {};
  }

  handleClick() {
    this.props.onClick();
  }

  RenderTable = (colorPlan, id) => {
    const RenderTables = (
      <p>
        <table style={{ width: '100%' }}>
          <tr>
            <td style={{ width: '55px' }}>
              <Image src={icon1} style={{ width: '25px', height: '30px' }} />
            </td>
            <td style={{ width: '70%' }}>
              <b>{this.props.id}</b><br />
              ราคาต่อหัว : {this.props.price} บาท
            </td>
            {this.renderColumnIsCloseTap(colorPlan, id)}
          </tr>
        </table>
      </p>
    );
    return RenderTables;
  }

  renderColumnIsCloseTap = colorPlan => {
    let columnIsCloseTap;
    if (this.props.closetap) {
      columnIsCloseTap = (
        <td style={{ width: '30px', paddingLeft: '40px' }}>
          <Icon
            name="close"
            size="big"
            style={{ left: '20px', cursor: 'pointer' }}
            onClick={() =>
              this.props.handleDeleteChooseInsurance(
                this.props.index,
                colorPlan,
              )}
          />
        </td>
      );
    } else {
      columnIsCloseTap = (
        <td style={{ width: '18%' }}>
          <td>
            <Icon name="chevron right" size="big" style={{ left: '20px' }} />
          </td>
        </td>
      );
    }
    return columnIsCloseTap;
  }

  render() {
    const { id, price, colorPlan } = this.props;
    let component = '';
    if (this.props.closetap) {
      if (this.props.colorPlan === 1) {
        component = (
          <div>
            <ManagePlan>
              {this.RenderTable(colorPlan, id)}
            </ManagePlan>
          </div>
        );
      } else if (this.props.colorPlan === 2) {
        component = (
          <div>
            <ManagePlan style={{ backgroundColor: '#c0ccda' }}>
              {this.RenderTable(colorPlan, id)}
            </ManagePlan>
          </div>
        );
      }
    } else {
      if (this.props.colorPlan === 1) {
        component = (
          <ManagePlan>
            <table>
              <tr>
                <td
                  style={{ width: '55px', cursor: 'pointer' }}
                  onClick={() =>
                    this.props.handleDeleteOurplan(this.props.index)}
                  role="button"
                  aria-hidden
                >
                  <Image
                    src={icon1}
                    style={{ width: '25px', height: '30px' }}
                  />
                </td>
                <td
                  style={{ width: '70%', cursor: 'pointer' }}
                  onClick={() =>
                    this.props.handleDeleteOurplan(this.props.index)}
                  role="button"
                  aria-hidden
                >
                  <b>{this.props.id}</b><br />
                  ราคาต่อหัว : {price} บาท
                </td>
                <td>
                  <td style={{ width: '40px' }}>
                    <ModalPlan plan={this.props.ourPlan[this.props.index]} />
                  </td>
                  <td
                    style={{ width: '30px', cursor: 'pointer' }}
                    onClick={() =>
                      this.props.handleDeleteOurplan(this.props.index)}
                    role="button"
                    aria-hidden
                  >
                    <Icon
                      name="chevron right"
                      size="big"
                      style={{ left: '20px' }}
                    />
                  </td>
                </td>
              </tr>
            </table>
          </ManagePlan>
        );
      } else if (this.props.colorPlan === 2) {
        component = (
          <ManagePlan style={{ backgroundColor: '#c0ccda' }}>
            <table>
              <tr>
                <td
                  style={{ width: '55px', cursor: 'pointer' }}
                  onClick={() =>
                    this.props.handleDeleteSpacialPlan(this.props.index)}
                  role="button"
                  aria-hidden
                >
                  <Image
                    src={icon1}
                    style={{ width: '25px', height: '30px' }}
                  />
                </td>
                <td
                  style={{ width: '70%', cursor: 'pointer' }}
                  onClick={() =>
                    this.props.handleDeleteSpacialPlan(this.props.index)}
                  role="button"
                  aria-hidden
                >
                  <b>{this.props.id}</b><br />
                  ราคาต่อหัว : {price} บาท
                </td>
                <td>
                  <td style={{ width: '40px' }}>
                    {/* <ModalPlan /> */}
                  </td>
                  <td
                    style={{ width: '30px', cursor: 'pointer' }}
                    onClick={() =>
                      this.props.handleDeleteSpacialPlan(this.props.index)}
                    role="button"
                    aria-hidden
                  >
                    <Icon
                      name="chevron right"
                      size="big"
                      style={{ left: '20px' }}
                    />
                  </td>
                </td>
              </tr>
            </table>
          </ManagePlan>
        );
      }
    }
    return component;
  }
}

export default PlanTemplate;
