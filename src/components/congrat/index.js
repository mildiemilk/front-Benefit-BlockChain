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
import { Submit } from './styled'
import pic from '../image/gifts.png'
import { Link } from 'react-router-dom'

const congrat = () => (
  <Container>
    <div style={{ padding: '13%', textAlign: 'center', fontSize: '25px' }}>
      <Image
        src={pic}
        style={{
          width: '585px',
          hight: '242px',
          display: 'block',
          margin: 'auto',
        }}
      />
      <p
        style={{
          fontFamily: 'Kanit',
          fontWeight: 'bold',
          fontSize: '28px',
          marginBottom: '10px',
        }}
      >
        <br /> ขอแสดงความยินดี !
      </p>
      <p style={{ fontFamily: 'Kanit' }}>
        คุณได้จัดแผนประกันภัยเรียบร้อยแล้ว <br />
        กรุณากด ‘ต่อไป’ เพื่อไปยังขั้นตอนจัดแผนสิทธิประโยชน์ <br />

      </p>
      <Link to="/chooseinsuranceplan">
        <Submit>
          ต่อไป
        </Submit>
      </Link>
    </div>
  </Container>
)

export default congrat
