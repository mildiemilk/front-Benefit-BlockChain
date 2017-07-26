import React, { Component } from 'react'
import styled from 'react-sc'
import {
  Grid,
  Image,
  Container,
  Divider,
  Checkbox,
  Segment,
  Icon,
} from 'semantic-ui-react'
import { Submit, ImageStyle, Head, Space } from './styled'
import pic from '../image/gifts.png'
import { Link } from 'react-router-dom'

class congrat extends Component {
  constructor() {
    super()
    this.state = {}
  }
  render() {
    return (
      <Container>
        <Space>
          <ImageStyle src={pic} />
          <Head>
            <br /> ขอแสดงความยินดี !
          </Head>
          <p>
            คุณได้จัดแผนประกันภัยเรียบร้อยแล้ว <br />
            กรุณากด ‘ต่อไป’ เพื่อไปยังขั้นตอนจัดแผนสิทธิประโยชน์ <br />
          </p>
          <Link to="/chooseinsuranceplan">
            <Submit>
              ต่อไป
            </Submit>
          </Link>
        </Space>
      </Container>
    )
  }
}

export default congrat
