import React from 'react';
import { Image, Container } from 'semantic-ui-react';

import pic from '../image/proove@3x.png';

const confirmIdentity = () => (
  <Container>

    <div style={{ padding: '13%', textAlign: 'center' }}>
      <span
        style={{
          fontFamily: 'Kanit',
          hight: '10%',
          fontSize: '140%',
          fontWeight: 'bold',
        }}
      >
        กรุณารอการตรวจสอบตัวตนจากระบบของเรา <br />
      </span>
      <span style={{ fontFamily: 'Kanit', fontSize: '130%' }}>
        ติดต่อผ่ายบริการลูกค้า benefitable โทร 024-xxx-xxxx <br /><br /> <br />
      </span>
      <Image
        src={pic}
        style={{
          width: '585px',
          hight: '242px',
          display: 'block',
          margin: 'auto',
        }}
      />
    </div>
  </Container>
);

export default confirmIdentity;
