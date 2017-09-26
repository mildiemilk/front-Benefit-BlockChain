import React, { Component } from 'react';
import { Icon, Divider } from 'semantic-ui-react';
import MediaQuery from 'react-responsive';
import SearchBox from './search-box';
import HopitalMap from './hospital-map';
import {
  Head,
  ElementBackground,
  HeadInBox,
  BackToIndex,
  HeadDesk,
  BackgroundWhite,
  ImageStyle,
} from './styled';
import Hospital from '../../../../assets/employee/sidebar/hospitalPic.png';

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
        className="colorMedia"
        keys={i}
        index={i}
        onClick={() => this.handleIsChoose(
          number.hospitalName, number.latlong)}
      >
        <HeadInBox>
          {number.hospitalName}
        </HeadInBox>
        {number.location}<br />
        <Icon name="phone" />
        &nbsp; {number.phonenumber}
      </ElementBackground>
    ));
    return listItems;
  }

  renderFindhospitalTemplete = () => {
    if (this.state.isChoose === false) {
      return (
        <div>
          {/* --------------- Mobile ---------------------*/}
          <MediaQuery query="(max-width: 767px)">
            <Head> โรงพยาบาลในเครือข่าย </Head>
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
          </MediaQuery>
          {/* --------------- Desktop ---------------------*/}
          <MediaQuery query="(min-width: 768px)">
            <HeadDesk> โรงพยาบาลในเครือข่าย </HeadDesk>
            <Divider style={{ marginBottom: '20px' }} />
            <BackgroundWhite>
              <div
                className="row"
                style={{ marginBottom: 15 }}
              >
                <div
                  className="large-8 columns"
                  style={{ fontSize: '16px' }}
                >
                  <ImageStyle src={Hospital} />
                  รายชื่อโรงพยาบาลในเครือข่าย
                </div>
                <SearchBox
                  className="large-4 columns"
                  callback={
                  keyword => this.handleSearchBoxChange(keyword)}
                />
              </div>
              {this.renderFiledHospital(
                this.filterHospital(
                  this.state.hospital))}
            </BackgroundWhite>
          </MediaQuery>
        </div>
      );
    }
    return (
      <div>
        <MediaQuery query="(max-width: 767px)">
          <Head> ค้นหาโรงพยาบาล &gt; {this.state.SearchTerm} </Head>
        </MediaQuery>
        <MediaQuery query="(min-width: 768px)">
          <HeadDesk> ค้นหาโรงพยาบาล &gt; {this.state.SearchTerm} </HeadDesk>
          <Divider />
        </MediaQuery>
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
