import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import '../../styles/dashboard.scss'
import {
  Grid,
  Image,
  Container,
  Divider,
  Checkbox,
  Segment,
  Icon,
} from 'semantic-ui-react'

import backgroundpig from '../image/cityscape2.png'
import Checkboxpic from './group.png'
import artboard1 from '../image/dashboard/artboard-1.png'
import artboard2 from '../image/dashboard/artboard-2.png'
import artboard3 from '../image/dashboard/artboard-3.png'
import artboard4 from '../image/dashboard/artboard-4.png'
import artboard5 from '../image/dashboard/artboard-5.png'
import artboard6 from '../image/dashboard/artboard-6.png'

class Dashboard extends Component {
  constructor() {
    super()
  }

  render() {
    return (
      <Container className="dashboard">
        <Segment.Group>
          <Segment className="navTop">
            <Icon name="warning sign" size="big" inverted />
            ดำเนินขั้นตอนต่อไปนี้เพื่อใช้งาน BenefiTable
          </Segment>
        </Segment.Group>
        <div className="menu1">
          <span className="menu">
            <Link to={{ pathname: '/dashboard/simplerequirement' }}>
              <Image
                style={{ padding: '10px' }}
                src={Checkboxpic}
                avatar
                size="mini"
              />
              1. แผนประกันภัย
            </Link>
          </span>
          <span className="menu">
            <Image
              style={{ padding: '10px' }}
              src={Checkboxpic}
              avatar
              size="mini"
            />
            2. จัดแผนสิทธิประโยชน์
          </span>
          <span className="menu">
            <Image
              style={{ padding: '10px' }}
              src={Checkboxpic}
              avatar
              size="mini"
            />
            3. อัพเดตข้อมูลพนักงาน
          </span>
          <span className="menu">
            <Image
              style={{ padding: '10px' }}
              src={Checkboxpic}
              avatar
              size="mini"
            />
            4. สรุปจำนวนพนักงาน
          </span>
        </div>

        <span className="header">
          ยินดีต้อนรับเข้าสู่ BenefiTable
          <hr className="groove" />
        </span>
        <divider style={{ padding: '20px' }} />

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
                  <Container textAlign="center"> เตือนความจำ </Container>
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
          <img src={backgroundpig} className="bg" />
        </Grid>

      </Container>
    )
  }
}

Dashboard.propTypes = {}

const mapStateToProps = state => ({})
export default connect(mapStateToProps)(Dashboard)
