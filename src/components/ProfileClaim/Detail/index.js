import React, { Component } from 'react';
import { Input, Icon } from 'semantic-ui-react';
import styled from 'styled-components';
import { Detail } from '../../StyleComponent';
import { ListBox, TextList, HeadList, IconBox } from '../styled';

const Inputs = styled(Input)`
  height: 40px;
  border-radius: 5px;
  background-color: #ffffff;
  border: solid 1px #dddddd;
  margin-bottom:32px;
`;
class DetailClaim extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  renderList = () => (
    <ListBox>
      <div className="row">
        <div className="large-2 columns">
          <TextList>31/03/2016</TextList>
        </div>
        <div className="large-5 columns">
          <TextList>3012_ClaimData.xlsx</TextList>
        </div>
        <div className="large-3 columns">
          <TextList>23 mb</TextList>
        </div>
        <div className="large-2 columns">
          <TextList>
            <IconBox bgcolor="white">
              <Icon name="download" />
            </IconBox>
            <IconBox bgcolor="#e74c3c" color="white">
              <Icon name="trash" />
            </IconBox>
          </TextList>
        </div>
      </div>
    </ListBox>
  )
  render() {
    return (
      <div>
        <Inputs
          icon="search"
          iconPosition="left"
          placeholder="ค้นหา"
          name="search"
          onChange={this.handleChange}
        />
        <Detail padding="40px 50px">
          <HeadList className="row">
            <div className="large-2 columns">
              วันที่
            </div>
            <div className="large-5 columns">
              ชื่อไฟล์
            </div>
            <div className="large-3 columns">
              ขนาดไฟล์
            </div>
            <div className="large-2 columns">
              Option
            </div>
          </HeadList>
          {this.renderList()}
        </Detail>
      </div>
    );
  }
}

export default DetailClaim;
