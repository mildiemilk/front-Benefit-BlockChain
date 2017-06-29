import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  Grid,
  Image,
  Container,
  Divider,
  Checkbox,
  Segment,
  Icon,
} from 'semantic-ui-react'

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
      <Container>
        <Segment.Group>
          <Segment>
            <Icon name="warning sign" size="big" />
            ดำเนินขั้นตอนต่อไปนี้เพื่อใช้งาน BenefiTable
          </Segment>
          <Segment.Group horizontal>
            <Segment>
              <Link to={{ pathname: '/simpleRq' }}>
                <Checkbox radio label="1.แผนประกันภัย" readOnly />
              </Link>
            </Segment>
            <Segment>
              <Checkbox radio label="2.จัดแผนสิทธิประโยชน์" readOnly />
            </Segment>
            <Segment>
              <Checkbox radio label="3.อัพเดตข้อมูลพนักงาน" readOnly />
            </Segment>
          </Segment.Group>
        </Segment.Group>

        <h1> ยินดีต้อนรับเข้าสู่ BenefiTable </h1>
        <Divider />

        <Grid>
          <Grid.Column width={3} />
          <Grid.Column width={10}>
            <Grid>
              <Grid.Row columns={3}>
                <Grid.Column>
                  <Image
                    centered
                    width="201.3px"
                    height="201.2px"
                    src={artboard1}
                    shape="circular"
                  />
                  <Container textAlign="center"> สร้างแผนของคุณ </Container>
                </Grid.Column>
                <Grid.Column>
                  <Image
                    centered
                    width="201.3px"
                    height="201.2px"
                    src={artboard3}
                    shape="circular"
                  />
                  <Container textAlign="center"> อัพเดตจำนวนพนักงาน </Container>
                </Grid.Column>
                <Grid.Column>
                  <Image
                    centered
                    width="201.3px"
                    height="201.2px"
                    src={artboard2}
                    shape="circular"
                  />
                  <Container textAlign="center"> รายการเคลม </Container>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={3}>
                <Grid.Column>
                  <Image
                    centered
                    width="201.3px"
                    height="201.2px"
                    src={artboard4}
                    shape="circular"
                  />
                  <Container textAlign="center"> เตือนความจำ </Container>
                </Grid.Column>
                <Grid.Column>
                  <Image
                    centered
                    width="201.3px"
                    height="201.2px"
                    src={artboard5}
                    shape="circular"
                  />
                  <Container textAlign="center"> โปรไฟล์ของคุณ </Container>
                </Grid.Column>
                <Grid.Column>
                  <Image
                    centered
                    width="201.3px"
                    height="201.2px"
                    src={artboard6}
                    shape="circular"
                  />
                  <Container textAlign="center"> ตั้งค่า </Container>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Grid.Column>
          <Grid.Column width={3} />
        </Grid>
      </Container>
    )
  }
}

Dashboard.propTypes = {}

const mapStateToProps = state => ({})
export default connect(mapStateToProps)(Dashboard)
