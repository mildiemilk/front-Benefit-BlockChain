import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Image, Container, Icon, Checkbox, Divider } from 'semantic-ui-react';
import { Head, Bar } from './styled';
import backgroundpig from '../image/cityscape2.png';
import artboard1 from '../image/dashboard/artboard-1.png';
import artboard2 from '../image/dashboard/artboard-2.png';
import artboard3 from '../image/dashboard/artboard-3.png';
import artboard4 from '../../../assets/Dashboard/history.png';
import artboard5 from '../image/dashboard/artboard-5.png';
import artboard6 from '../image/dashboard/artboard-6.png';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div className="dashboard">
        <div className="navTop">
          <Icon name="warning sign" size="big" inverted />
          ดำเนินขั้นตอนต่อไปนี้เพื่อใช้งาน BenefiTable
        </div>
        <Bar className="row">
          <div className="large-3 columns">
            <Link to={{ pathname: '/dashboard/simplerequirement' }}>
              <Checkbox label="1. แผนประกันภัย" />
            </Link>
          </div>
          <div className="large-3 columns">
            <Link to={{ pathname: '/dashboard/simplerequirement' }}>
              <Checkbox label="2. ประมูลราคา" />
            </Link>
          </div>
          <div className="large-3 columns">
            <Link to={{ pathname: '/dashboard/simplerequirement' }}>
              <Checkbox label="3. จัดแผนสิทธิประโยชน์" />
            </Link>
          </div>
          <div className="large-3 columns">
            <Link to={{ pathname: '/dashboard/simplerequirement' }}>
              <Checkbox label="4. สรุปจำนวนพนักงาน" />
            </Link>
          </div>
        </Bar>

        <Head>
          ยินดีต้อนรับเข้าสู่ BenefiTable
        </Head>
        <Divider />

        <Grid className="dash">
          <Grid.Column width={3} />
          <Grid.Column width={10}>
            <Grid>
              <Grid.Row columns={3}>
                <Grid.Column>
                  <Image
                    className="block"
                    centered
                    src={artboard1}
                    shape="circular"
                  />
                  <Container textAlign="center"> สร้างแผนของคุณ </Container>
                </Grid.Column>
                <Grid.Column>
                  <Image
                    className="block"
                    centered
                    src={artboard3}
                    shape="circular"
                  />
                  <Container textAlign="center"> อัพเดตจำนวนพนักงาน </Container>
                </Grid.Column>
                <Grid.Column>
                  <Image className="block" src={artboard2} shape="circular" />
                  <Container textAlign="center"> รายการเคลม </Container>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={3}>
                <Grid.Column>
                  <Image className="block" src={artboard4} shape="circular" />
                  <Container textAlign="center"> ประวัติการเคลม </Container>
                </Grid.Column>
                <Grid.Column>
                  <Image className="block" src={artboard5} shape="circular" />
                  <Container textAlign="center"> โปรไฟล์ของคุณ </Container>
                </Grid.Column>
                <Grid.Column>
                  <Image className="block" src={artboard6} shape="circular" />
                  <Container textAlign="center"> ตั้งค่า </Container>
                </Grid.Column>
              </Grid.Row>
            </Grid>

          </Grid.Column>
          <Grid.Column width={3} />
          <img src={backgroundpig} alt="background" className="bg" />
        </Grid>

      </div>
    );
  }
}

Dashboard.propTypes = {};

export default Dashboard;
