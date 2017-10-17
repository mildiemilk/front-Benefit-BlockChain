import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Divider } from 'semantic-ui-react';

const BoxTooltip = styled.div`
  width: 208px;
  height: 143px;
  border-radius: 2px;
  background-color: #ffffff;
  box-shadow: 0 1px 6px 0 rgba(107, 107, 107, 0.5);
  padding: 10px;
`;
const DivTool = styled.div`

`;
const CircleStatus = styled.div`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background-color: ${props => props.color};    
  margin-right: 5px;
  display: inline-block;
`;
// const TextTool = styled.div`
//   display: inline-block;
// `;
const DateTool = styled.div`
  font-size: 14px;
  margin-top: 10px;
`;
const NumTool = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: ${props => props.margin};
`;
class CustomTooltip extends Component {
  static propTypes = {
    // type: PropTypes.string.isRequired,
    payload: PropTypes.arrayOf(PropTypes.object).isRequired,
    active: PropTypes.bool.isRequired,
    label: PropTypes.string.isRequired,

  }
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { active } = this.props;
    if (active) {
      const { payload, label } = this.props;
      return (
        <BoxTooltip>
          <div className="row">
            <div className="large-8 columns">
              <DateTool>{`${label}`}</DateTool>
            </div>
            <div className="large-4 columns">
              <NumTool margin="10px">
                {`${payload[0].payload.insurance + payload[0].payload.health + payload[0].payload.expense}`}
              </NumTool>
            </div>
          </div>
          <Divider />
          <DivTool>
            <div className="row">
              <div className="large-8 columns">
                <CircleStatus color="#689be3" /> ประกันภัย :
              </div>
              <div className="large-4 columns">
                <NumTool>{`${payload[0].payload.insurance}`}</NumTool>
              </div>
            </div>
            <div className="row">
              <div className="large-8 columns">
                <CircleStatus color="#5daa3f" /> ค่าใช้จ่ายสุขภาพ :
              </div>
              <div className="large-4 columns">
                <NumTool>{`${payload[0].payload.health}`}</NumTool>
              </div>
            </div>
            <div className="row">
              <div className="large-8 columns">
                <CircleStatus color="#eb5769" /> ค่าใช้จ่ายทั่วไป :
              </div>
              <div className="large-4 columns">
                <NumTool>{`${payload[0].payload.expense}`}</NumTool>
              </div>
            </div>
          </DivTool>
        </BoxTooltip>
      );
    }
    return null;
  }
}

export default CustomTooltip;
