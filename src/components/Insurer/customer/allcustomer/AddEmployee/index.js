import React, { Component } from 'react';
import Head from '../../Head';
import { Detail, Text } from './styled';
import General from './General';
import Personal from './Personal';
import Claim from './Claim';
import ModalAddEmployee from './ModalAddEmployee';

class AddEmployee extends Component {
  constructor() {
    super();
    this.state = {
      isGeneral: true,
      isPersonal: false,
      isClaim: false,
    };
  }
  handleGeneral = () => {
    const { isGeneral } = this.state;
    if (!isGeneral) {
      this.setState({
        isGeneral: true,
        isPersonal: false,
        isClaim: false,
      });
    }
  }
  handlePersonal = () => {
    const { isPersonal } = this.state;
    if (!isPersonal) {
      this.setState({
        isGeneral: false,
        isPersonal: true,
        isClaim: false,
      });
    }
  }
  handleClaim = () => {
    const { isClaim } = this.state;
    if (!isClaim) {
      this.setState({
        isGeneral: false,
        isPersonal: false,
        isClaim: true,
      });
    }
  }
  styletabGeneral = () => {
    if (this.state.isGeneral) {
      return 'active';
    }
    return '';
  }
  styletabPersonal = () => {
    if (this.state.isPersonal) {
      return 'active';
    }
    return '';
  }
  styletabClaim = () => {
    if (this.state.isClaim) {
      return 'active';
    }
    return '';
  }
  render() {
    const { isGeneral, isPersonal, isClaim } = this.state;
    return (
      <div>
        <Head content="ข้อมูลพนักงาน" />
        <Detail>
          <div className="tab">
            <Text
              className={this.styletabGeneral()}
              name="isGeneral"
              onClick={this.handleGeneral}
            >ข้อมูลทั่วไป</Text>
            <Text
              className={this.styletabPersonal()}
              name="isPersonal"
              onClick={this.handlePersonal}
            >ข้อมูลส่วนตัว</Text>
            <Text
              className={this.styletabClaim()}
              name="isClaim"
              onClick={this.handleClaim}
              last
            >ประวัติการเคลม</Text>
          </div>
          {isGeneral
          ? <General />
          : null
          }
          {isPersonal
          ? <Personal />
          : null
          }
          {isClaim
          ? <Claim />
          : null
          }
        </Detail>
        <div className="row">
          <div className="large-2 large-offset-10 columns">
            <ModalAddEmployee />
          </div>
        </div>
      </div>
    )
  }
}

export default AddEmployee;
