import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';
// import { Link } from 'react-router-dom';
import { claimData } from '../../api/profile-company';
import {
  Detail,
  Head,
  Inner,
  FileuploadBox,
  FileuploadBoxs,
  Submit,
  BrowsButton,
  TextNormal,
  AddBlockButton,
  Upload,
  Uploads,
} from './styled';
import NavInsure from '../NavInsure';

class Uploadfile extends Component {
  static propTypes = {
    claimData: PropTypes.func.isRequired,
    haveClaimData: PropTypes.bool.isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      step: 5,
      claimData: [''],
      summitBrokerFile: '',
      AmountUploadBlock: 1,
      next: false,
    };
  }

  handleUploadclaimdata(e) {
    e.preventDefault();
    const file = e.target.files[0];
    const newClaim = this.state.claimData;
    newClaim[e.target.id] = file;
    this.setState({
      claimData: newClaim,
    });
  }

  handleDelete = e => {
    e.preventDefault();
    if (this.state.claimData.length > 1) {
      const newv = this.state.AmountUploadBlock - 1;
      const claimDatas = this.state.claimData;
      claimDatas.splice(e.target.id, 1);
      this.setState({
        AmountUploadBlock: newv,
        claimData: claimDatas,
      });
    } else {
      const claimData = [''];
      this.setState({ claimData });
    }
  }

  handleAddAmountUploadBlock = () => {
    const add = this.state.AmountUploadBlock + 1;
    this.setState({
      AmountUploadBlock: add,
    });
    this.setState({
      claimData: this.state.claimData.concat(''),
    });
  }

  handleNextClick = () => {
    const file = this.state.claimData;
    const sendFile = file.filter(element => element !== '');
    if (sendFile.length !== 0) {
      this.props.claimData(sendFile);
    } else this.setState({ next: true });
  }

  RenderInsideBlock = id => {
    if (this.state.claimData[id] && this.state.claimData[id] !== '') {
      return (
        <p>
          {this.state.claimData[id].name} &nbsp;
          {(this.state.claimData[id].size / 100000).toFixed(2)} MB
          <Icon
            id={id}
            onClick={this.handleDelete}
            style={{ positon: 'absolute', top: '-25px' }}
            link
            name="close"
          />
        </p>
      );
    }
    return '';
  }

  RenderUploadRow = () => {
    const output = [];
    const { AmountUploadBlock } = this.state;
    for (let i = 1; i < AmountUploadBlock; i += 1) {
      output.push(
        <div className="row">
          <div className=" large-offset-4 large-6  columns">
            <FileuploadBoxs>
              {this.RenderInsideBlock(i)}
            </FileuploadBoxs>
          </div>
          <div className=" large-2 columns">
            <Uploads>
              <BrowsButton for="uploadfor">
                <input
                  id={i}
                  style={{ display: 'none' }}
                  name="name[]"
                  type="file"
                  accept=".pdf,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                  onChange={e => this.handleUploadclaimdata(e)}
                />
                เลือกไฟล์
              </BrowsButton>
            </Uploads>
          </div>
        </div>,
      );
    }
    return output;
  }

  RenderListclaimData = () => {
    const { claimData } = this.state;
    if (claimData.length >= 1 && claimData[0] !== '') {
      return (
        <p>
          {claimData[0].name} &nbsp;
          {(claimData[0].size / 100000).toFixed(2)} MB
          <Icon
            id={0}
            style={{ positon: 'absolute', top: '-25px' }}
            link
            name="close"
            onClick={this.handleDelete}
          />
        </p>
      );
    }
    return <p />;
  }

  render() {
    const { haveClaimData } = this.props;
    const { next } = this.state;
    if (haveClaimData || next) {
      return <Redirect to="/sendrequest" />;
    }
    return (
      <div>
        <div className="ChooseInsurer">
          <NavInsure step={this.state.step} />
        </div>
        <Detail>
          <Head>อัพโหลดไฟล์</Head>
          <TextNormal>
                กรุณาอัพโหลดไฟล์เพื่อส่งให้บริษัทประกัน
                (รองรับไฟล์ประเภท .pdf และ .xlsx ขนาดไฟล์สูงสุดไม่เกิน 20 MB)
                <br />
          </TextNormal>
          <Inner>
            <div className="row">
              <div className="large-4 columns">
                <TextNormal>
                  กรุณาอัพโหลด Employee Claim Data :
                </TextNormal>
              </div>
              <div className="large-6 columns">
                <FileuploadBox>
                  {this.RenderListclaimData()}
                </FileuploadBox>
              </div>
              <div className="large-2 columns">
                <Upload>
                  <BrowsButton for="uploadfor">
                    <input
                      id={0}
                      style={{ display: 'none' }}
                      name="file[]"
                      type="file"
                      accept=".pdf,.docx,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                      onChange={e => this.handleUploadclaimdata(e)}
                    />
                    เลือกไฟล์
                </BrowsButton>
                </Upload>
              </div>
            </div>
            {this.RenderUploadRow()}
            <AddBlockButton
              onClick={e => this.handleAddAmountUploadBlock(e)}
            >
              + เพิ่มไฟล์
            </AddBlockButton>
          </Inner>
          {/* <Link to="/sendrequest"> */}
          <Submit onClick={this.handleNextClick}>ต่อไป</Submit>
          {/* </Link> */}
        </Detail>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  claimData: data => dispatch(claimData(data)),
});

const mapStateToProps = state => ({
  haveClaimData: state.profile.claimData.length !== 0,
});

export default connect(mapStateToProps, mapDispatchToProps)(Uploadfile);
