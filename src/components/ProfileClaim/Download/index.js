import React, { Component } from 'react';
import { Divider } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import { Detail } from '../../StyleComponent';
import { Head, DivPic, TextClaim } from '../styled';
import doc from '../../../../assets/ProfileClaim/icons-8-documents.png';
import BoxDownload from '../../BoxDownload';

class Download extends Component {
  static propTypes = {
    handleDetail: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Detail padding="20px 30px">
        <div className="row">
          <div className="large-9 columns">
            <Head>ข้อมูลการเคลมจากบริษัทประกันภัย</Head>
          </div>
          <div className="large-3 columns">
            <DivPic onClick={this.props.handleDetail}>
              <img src={doc} alt="doc" width="18px" height="18px" />
              <TextClaim >ดูข้อมูลการเคลมย้อนหลัง</TextClaim>
            </DivPic>
          </div>
        </div>
        <Divider />
        <TextClaim color="#4a4a4a">ข้อมูลล่าสุดวันที่ 12-2-58</TextClaim>
        <BoxDownload />
      </Detail>
    );
  }
}

export default Download;
