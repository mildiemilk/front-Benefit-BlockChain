import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import { Container } from 'semantic-ui-react';
import { Checkbox, Icon } from 'semantic-ui-react';
import {
  HeadContentBox,
  SubContentBox,
  RightBox,
  DividerSubBox,
  SecondDataBox,
} from './styled';

class FirstRightElement extends Component {
  static propTypes = {
    handleTogleSecondTap: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired,
    SecondTap: PropTypes.bool.isRequired,
    biddingNoti: PropTypes.bool.isRequired,
    pricebidNoti: PropTypes.bool.isRequired,
    newClaimNoti: PropTypes.bool.isRequired,
  }
  constructor() {
    super();
    this.state = {};
  }

  renderSecondTap = () => {
    const { biddingNoti, pricebidNoti, newClaimNoti } = this.props;
    if (this.props.SecondTap === true) {
      return (
        <HeadContentBox>
          <div className="row">
            <SubContentBox
              className="large-10 columns"
            >
              <Icon name="mail outline" /> &nbsp;
               แจ้งเตือนผ่าน E-mail
            </SubContentBox>
            <div className="large-2 columns">
              <RightBox onClick={() => this.props.handleTogleSecondTap()} >
                ปิด
              </RightBox>
            </div>
          </div>
          <DividerSubBox />
          <div style={{ padding: '0px 40px' }} >
            <SecondDataBox>
              แจ้งเตือนเมื่อมีบริษัทประกันเข้าร่วมการประมูล
            </SecondDataBox>
            {
              (biddingNoti)
              ? <Checkbox
                toggle defaultChecked
                name="biddingNoti"
                onClick={this.props.handleToggle}
              />
              : <Checkbox
                toggle
                name="biddingNoti"
                onClick={this.props.handleToggle}
              />
            }
            <SecondDataBox>
              แจ้งเตือนเมื่อมีบริษัทประกันส่งใบเสนอราคาประมูล
            </SecondDataBox>
            {
              (pricebidNoti)
              ? <Checkbox
                toggle defaultChecked
                name="pricebidNoti"
                onClick={this.props.handleToggle}
              />
              : <Checkbox
                toggle
                name="pricebidNoti"
                onClick={this.props.handleToggle}
              />
            }
            <SecondDataBox>
              แจ้งเตือนเมื่อมีการส่งคำขอเคลมใหม่
            </SecondDataBox>
            {
              (newClaimNoti)
              ? <Checkbox
                toggle defaultChecked
                name="newClaimNoti"
                onClick={this.props.handleToggle}
              />
              : <Checkbox
                toggle
                name="newClaimNoti"
                onClick={this.props.handleToggle}
              />
            }
          </div>
        </HeadContentBox>
      );
    }
    return (
      <div className="row">
        <SubContentBox
          className="large-10 columns"
        >
          <Icon name="mail outline" /> &nbsp;
           แจ้งเตือนผ่าน E-mail
        </SubContentBox>
        <div className="large-2 columns">
          <RightBox onClick={() => this.props.handleTogleSecondTap()} >
            แก้ใข
          </RightBox>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        {this.renderSecondTap()}
      </div>
    );
  }
}

export default FirstRightElement;
