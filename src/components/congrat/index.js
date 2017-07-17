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

const congrat = () => (
  <Container>
    <div style={{ padding: '13%', textAlign: 'center' ,fontSize: '25px' }}>
      <Image
        src={pic}
        style={{width: '585px', hight: '242px', display: 'block', margin: 'auto', }}
      />
      <p style={{ fontFamily: 'Kanit', fontWeight:'bold',fontSize: '28px', marginBottom:'10px'}} >
      <br></br>  ขอแสดงความยินดี !
      </p>
      <p style={{ fontFamily: 'Kanit'}}>
        คุณได้จัดแผนประกันภัยเรียบร้อยแล้ว <br></br>
        กรุณากด ‘ต่อไป’ เพื่อไปยังขั้นตอนจัดแผนสิทธิประโยชน์ <br></br>
      </p>
      <Submit>
        ต่อไป
      </Submit>
    </div>
  </Container>
)

export default congrat
