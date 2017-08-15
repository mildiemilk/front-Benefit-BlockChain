import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Submit, ImageStyle, Head, Space } from './styled';
import pic from '../image/gifts.png';

class congratStep3 extends Component {
  constructor() {
    super();
    this.state = {};
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
            คุณจัดแผนสิทธิประโยชน์ให้พนักงานของคุณเรียบร้อยแล้ว<br />
            กรุณากด ‘ต่อไป’ เพื่อไปยังขั้นตอนสรุปจำนวนพนักงาน<br />
          </p>
          <Link to="/Selectrealtime">
            <Submit>
              ต่อไป
            </Submit>
          </Link>
        </Space>
      </Container>
    );
  }
}

export default congratStep3;
