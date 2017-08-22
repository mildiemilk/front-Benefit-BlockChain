import React, { Component } from 'react';
import { Icon } from 'semantic-ui-react';
import SearchBox from './search-box';
import HopitalMap from './hospital-map';
import {
  Head,
  ElementBackground,
  HeadInBox,
  BackToIndex,
} from './styled';

class FindHospital extends Component {
  constructor() {
    super();
    this.state = {
      SearchTerm: '',
      isChoose: false,
      isChooselatlong: '',
      hospital: [
        {
          hospitalName: 'กรุงเทพ',
          location: '2 ซอยศูนย์วิจัย 7 ถนนเพชรบุรีตัดใหม่ 47',
          phonenumber: '0-2310-3000',
          latlong: [13.7484071, 100.5835079],
        },
        {
          hospitalName: 'กรุงเทพคริสเตียน',
          location: '124 ถนนสีลม 4-6 แขวงบางรัก เขตบางรัก',
          phonenumber: '0-2235-1000-7, 0-2634-0560-79',
          latlong: [13.7278963, 100.530871],
        },
        {
          hospitalName: 'กล้วยน้ำไทย',
          location: '124 ถนนสีลม 4-6 แขวงบางรัก เขตบางรัก',
          phonenumber: '0-2310-3000',
          latlong: [13.7140132, 100.5854883],
        },
      ],
    };
  }
  handleSearchBoxChange(keyword) {
    this.setState({ SearchTerm: keyword });
  }

  filterHospital(list) {
    if (this.state.isChoose) {
      return list.filter(
        hospital => hospital.hospitalName === this.state.SearchTerm,
      );
    }
    return list.filter(
      hospital =>
      hospital.hospitalName
          .toLowerCase()
          .indexOf(this.state.SearchTerm.toLowerCase()) >= 0,
    );
  }

  handleIsChoose = (keyword, latlong) => {
    this.setState({
      isChoose: true,
      SearchTerm: keyword,
      isChooselatlong: latlong,
    });
  }
  handleBacktoindex = () => {
    this.setState({
      isChoose: false,
      SearchTerm: '',
      isChooselatlong: '',
    });
  }

  renderFiledHospital = hosList => {
    const listItems = hosList.map((number, i) => (
      <ElementBackground
        index={i}
        onClick={() => this.handleIsChoose(
          number.hospitalName, number.latlong)}
      >
        <HeadInBox>
          {number.hospitalName}
        </HeadInBox>
        {number.location}<br />
        <Icon name="phone" />
        {number.phonenumber}
      </ElementBackground>
    ));
    return listItems;
  }

  renderFindhospitalTemplete = () => {
    if (this.state.isChoose === false) {
      return (
        <div>
          <Head>ค้นหาโรงพยาบาลในเครือข่าย</Head>
          <ElementBackground style={{ marginBottom: '8px' }}>
            <SearchBox
              callback={
              keyword => this.handleSearchBoxChange(keyword)}
            />
          </ElementBackground>
          <ElementBackground>
            <HeadInBox>
              รายชื่อโรงพยาบาลในเครือข่าย
            </HeadInBox>
          </ElementBackground>
          {this.renderFiledHospital(
            this.filterHospital(
              this.state.hospital))}
        </div>
      );
    }
    return (
      <div>
        <Head> ค้นหาโรงพยาบาล &gt; {this.state.SearchTerm} </Head>
        {this.renderFiledHospital(
          this.filterHospital(
            this.state.hospital))}
        <HopitalMap
          latlong={this.state.isChooselatlong}
        />
        <BackToIndex
          onClick={() => this.handleBacktoindex()}
        >
          &lt; ย้อนกลับ
        </BackToIndex>
      </div>
    );
  }


  render() {
    return (
      <div className="find-hospital">
        {this.renderFindhospitalTemplete()}
        <div style={{ height: '16px' }} />
      </div>
    );
  }
}

export default FindHospital;
