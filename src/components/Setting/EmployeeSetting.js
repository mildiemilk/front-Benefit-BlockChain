import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'react-router-dom';
// import { Container } from 'semantic-ui-react';
import { Button, Icon } from 'semantic-ui-react';
import {
HeadContentBox,
SubContentBox,
InputStyle,
DataBoxEm,
ContentBox,
DividerBox,
DividerBoxEm,
TagDiv,
} from './styled';

class EmployeeSetting extends Component {
  static propTypes = {
    handleDeleteTag: PropTypes.func.isRequired,
    handleAddArray: PropTypes.func.isRequired,
    Department: PropTypes.string.isRequired,
    Position: PropTypes.string.isRequired,
    EmployeeType: PropTypes.string.isRequired,
  }
  constructor() {
    super();
    this.state = {
      DepWord: '',
      PosWord: '',
      EmpWord: '',
    };
  }
  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value });
  }

  renderTag = TagElement => {
    const listItems = TagElement.map((TagObject, id) => (
      <TagDiv id={id}>
        {TagObject} &nbsp;
        <Icon
          name="remove"
          style={{ cursor: 'pointer' }}
          onClick={() => this.props.handleDeleteTag(TagElement, id)}
        />
      </TagDiv>
    ),
   );
    return listItems;
  }


  render() {
    const { Department, Position, EmployeeType } = this.props;
    const { DepWord, PosWord, EmpWord } = this.state;
    return (
      <ContentBox>
        <HeadContentBox className="setting">
          <SubContentBox>
            <Icon name="group" /> &nbsp;
              พนักงาน
            </SubContentBox>
          <DividerBox />
          <div style={{ padding: '0px 80px' }} >
            <DataBoxEm >
              ระบุแผนกในบริษัท
            </DataBoxEm>
            <InputStyle
              placeholder="พิมพ์รายละเอียดที่ต้องการ"
              type="text"
              name="DepWord"
              onChange={this.handleChange}
            />
            <Button
              className="Summit"
              onClick={() => this.props.handleAddArray(Department, DepWord)}
            >
              เพิ่ม
            </Button>
            {this.renderTag(this.props.Department)}
          </div>
          <DividerBoxEm />

          <div style={{ padding: '0px 80px' }} >
            <DataBoxEm>
              ระบุตำแหน่งงงานในบริษัท
            </DataBoxEm>
            <InputStyle
              placeholder="พิมพ์รายละเอียดที่ต้องการ"
              type="text"
              name="PosWord"
              onChange={this.handleChange}
            />
            <Button
              className="Summit"
              onClick={() => this.props.handleAddArray(Position, PosWord)}
            >
              เพิ่ม
            </Button>
            {this.renderTag(Position)}
          </div>
          <DividerBoxEm />

          <div style={{ padding: '0px 80px' }} >
            <DataBoxEm>
              ระบุประเภทของพนักงานในบริษัท
            </DataBoxEm>
            <InputStyle
              placeholder="พิมพ์รายละเอียดที่ต้องการ"
              type="text"
              name="EmpWord"
              onChange={this.handleChange}
            />
            <Button
              className="Summit"
              onClick={() => this.props.handleAddArray(EmployeeType, EmpWord)}
            >
              เพิ่ม
            </Button>
            {this.renderTag(EmployeeType)}
          </div>
          <DividerBoxEm />
        </HeadContentBox>
      </ContentBox>
    );
  }
}

export default EmployeeSetting;
