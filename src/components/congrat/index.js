import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import { Submit, ImageStyle, Head, Space } from './styled';
import pic from '../image/gifts.png';

class congrat extends Component {
  constructor() {
    super();
    this.state = {};
  }

  handleClick = () => {
    window.location.href = '/chooseinsuranceplan';
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
          <Submit onClick={this.handleClick} >
            ต่อไป
          </Submit>
        </Space>
      </Container>
    );
  }
}

export default congrat;
