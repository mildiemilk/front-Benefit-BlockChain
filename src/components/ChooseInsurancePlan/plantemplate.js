import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, Icon } from 'semantic-ui-react';
import icon1 from '../image/icons-8-treatment-plan.png';
import { ManagePlan } from './styled';
import ModalPlan from './modal-plan';

class PlanTemplate extends Component {
  static propTypes = {
    // onClick: PropTypes.func.isRequired,
    // id: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    closetap: PropTypes.bool.isRequired,
    colorPlan: PropTypes.number.isRequired,
    handleDeleteChooseInsurance: PropTypes.func,
    handleDeleteOurplan: PropTypes.func,
    handleDeleteSpecialPlan: PropTypes.func,
    index: PropTypes.number.isRequired,
    ourPlan: PropTypes.arrayOf(PropTypes.object),
    plan: PropTypes.shape({}).isRequired,
    specialPlan: PropTypes.arrayOf(PropTypes.object),

  }

  static defaultProps = {
    handleDeleteChooseInsurance: () => {},
    handleDeleteOurplan: () => {},
    handleDeleteSpecialPlan: () => {},
    ourPlan: [],
    specialPlan: [],
  }

  constructor() {
    super();
    this.state = {};
  }

  /* handleClick() {
    this.props.onClick();
  } */

  RenderTable = colorPlan => {
    const RenderTables = (
      <p>
        <table style={{ width: '100%' }}>
          <tr>
            <td style={{ width: '55px' }}>
              <Image src={icon1} style={{ width: '25px', height: '30px' }} />
            </td>
            <td style={{ width: '70%' }}>
              <b>{this.props.plan}</b><br />
              ราคาต่อหัว : {this.props.price} บาท
            </td>
            {this.renderColumnIsCloseTap(colorPlan)}
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
    const { price, colorPlan, plan } = this.props;
    let component = '';
    if (this.props.closetap) {
      if (this.props.colorPlan === 1) {
        component = (
          <div>
            <ManagePlan>
              {this.RenderTable(colorPlan)}
            </ManagePlan>
          </div>
        );
      } else if (this.props.colorPlan === 2) {
        component = (
          <div>
            <ManagePlan style={{ backgroundColor: '#c0ccda' }}>
              {this.RenderTable(colorPlan)}
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
                  <b>{plan}</b><br />
                  ราคาต่อหัว : {price} บาท
                </td>
                <td>
                  <td style={{ width: '40px' }}>
                    <ModalPlan plan={this.props.ourPlan[this.props.index].plan} />
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
                    this.props.handleDeleteSpecialPlan(this.props.index)}
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
                    this.props.handleDeleteSpecialPlan(this.props.index)}
                  role="button"
                  aria-hidden
                >
                  <b>{this.props.plan}</b><br />
                  ราคาต่อหัว : {price} บาท
                </td>
                <td>
                  <td style={{ width: '40px' }}>
                    <ModalPlan plan={this.props.specialPlan[this.props.index].plan} />
                  </td>
                  <td
                    style={{ width: '30px', cursor: 'pointer' }}
                    onClick={() =>
                      this.props.handleDeleteSpecialPlan(this.props.index)}
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
