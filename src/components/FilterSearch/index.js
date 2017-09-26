import React, { Component } from 'react';
import { Input, Popup, Divider } from 'semantic-ui-react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import search from '../../../assets/EmployeeList/icons-8-sorting-options.png';

const Inputs = styled(Input)`
  height: 40px;
  border-top-left-radius: 5px !important;
  border-bottom-left-radius: 5px !important;
  background-color: #ffffff;
  border: solid 1px #dddddd;
  padding-left: 40px;
  width: 70%;
  display: inline-block !important;
`;
const Filter = styled.div`
  height: 40px;
  width: 30%;
  padding-top: 7px;
  text-align: center;
  display: inline-block;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background-color: #ffffff;
  border: solid 1px #dddddd;
  cursor: pointer;
`;
const Img = styled.img`
  margin-left: 11px;
`;
const DivPopup = styled.div`
width: 572px;
padding: 20px;
`;
export const ListPopup = styled.div`
font-size: 13px;
letter-spacing: 0.2px;
margin-left: 11px;
display: inline-block;
`;
const DivFloat = styled.div`
float: left !important;
`;
const TextPopup = styled.div`
text-size: 13px;
cursor: pointer;
`;
const ClearPopup = TextPopup.extend`
color: #ee384e;
`;
const CanclePopup = TextPopup.extend`
color: #8b8b8b;
display: inline-block;
`;
const SubmitPopup = TextPopup.extend`
color: #3a7bd5;
display: inline-block;
margin-left: 37px;
`;
class FilterSearch extends Component {
  static propTypes = {
    groupBenefit: PropTypes.arrayOf(PropTypes.object).isRequired,
    handleChange: PropTypes.func.isRequired,
  }
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }
  handlePopup = () => {
    this.setState({ isOpen: !this.state.isOpen });
  }

  renderGroupPopup = Groups => {
    const allGroup = Groups.map(Group => (
      <DivFloat className="large-4 columns">
        <input type="checkbox" value="group" />
        <ListPopup>{Group.name}</ListPopup>
      </DivFloat>
    ));
    return allGroup;
  }

  render() {
    return (
      <div className="large-4 columns">
        <Inputs
          icon="search"
          iconPosition="left"
          placeholder="ค้นหา"
          name="search"
          onChange={this.props.handleChange}
        />
        <Popup
          trigger={
            <Filter>
              Filter <Img src={search} alt="filter" />
            </Filter>
          }
          content={<DivPopup>
            <div className="row">
              <div className="large-3 columns">
                กลุ่มพนักงาน
              </div>
              <div className="large-9 columns">
                {this.renderGroupPopup(this.props.groupBenefit)}
              </div>
            </div>
            <Divider />
            <div className="row">
              <div className="large-3 columns">
                แผนสิทธิประโยชน์
              </div>
              <div className="large-9 columns">
                {this.renderGroupPopup(this.props.groupBenefit)}
              </div>
            </div>
            <Divider />
            <div className="row">
              <div className="large-3 columns">
                สถานะของพนักงาน
              </div>
              <div className="large-9 columns">
                <DivFloat className="large-4 columns">
                  <input type="checkbox" value="group" />
                  <ListPopup>พนักงานเข้าใหม่</ListPopup>
                </DivFloat>
                <DivFloat className="large-4 columns">
                  <input type="checkbox" value="group" />
                  <ListPopup>พนักงานประจำ</ListPopup>
                </DivFloat>
                <DivFloat className="large-4 columns">
                  <input type="checkbox" value="group" />
                  <ListPopup>ปรับตำแหน่ง</ListPopup>
                </DivFloat>
                <DivFloat className="large-4 columns">
                  <input type="checkbox" value="group" />
                  <ListPopup>ลาออก</ListPopup>
                </DivFloat>
              </div>
            </div>
            <Divider />
            <div className="row">
              <div className="large-4 columns">
                <ClearPopup>Clear all filters</ClearPopup>
              </div>
              <div className="large-3 large-offset-5 columns">
                <CanclePopup onClick={this.handlePopup}>ยกเลิก</CanclePopup>
                <SubmitPopup> ตกลง</SubmitPopup>
              </div>
            </div>
          </DivPopup>}
          on="click"
          open={this.state.isOpen}
          onClose={this.handlePopup}
          onOpen={this.handlePopup}
          position="bottom center"
        />
      </div>
    );
  }
}

export default FilterSearch;
