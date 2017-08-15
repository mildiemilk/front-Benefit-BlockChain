import React from 'react';
import { Image, Container } from 'semantic-ui-react';

import pic from '../image/gift.png';

const welcomePage = () => (
  <Container>

    <div style={{ padding: '13%', textAlign: 'center' }}>
      <span
        style={{
          fontFamily: 'Kanit',
          hight: '10%',
          fontSize: '140%',
        }}
      >
        ยินดีต้อนรับ !HR <br />
      </span>
      <span style={{ fontFamily: 'Kanit', fontSize: '140%' }}>
        เลือกของขวัญเพื่อส่งมอบความสุขให้พนักงานของคุณ <br /><br /> <br />
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

export default welcomePage;
