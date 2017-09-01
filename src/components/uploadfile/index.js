import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
  }

  constructor(props) {
    super(props);
    this.state = {
      step: 5,
      claimData: [],
      summitBrokerFile: '',
      AmountUploadBlock: 1,
    };
  }

  handleUploadclaimdata(e) {
    e.preventDefault();
    const file = e.target.files[0];
    this.setState({
      claimData: this.state.claimData.concat(file),
    });
    if (this.state.claimData.length >= this.state.AmountUploadBlock) {
      const add = this.state.AmountUploadBlock + 1;
      this.setState({
        AmountUploadBlock: add,
      });
    }
  }

  // handleUploadBroker(e) {
  //   e.preventDefault();
  //   const file = e.target.files[0];
  //   this.setState({
  //     summitBrokerFile: file,
  //   });
  // }

  handleDelete = e => {
    e.preventDefault();
    if (this.state.claimData.length <= this.state.AmountUploadBlock - 1) {
      const newv = this.state.AmountUploadBlock - 1;
      this.setState({
        AmountUploadBlock: newv,
      });
    }

    const claimDatas = this.state.claimData;
    claimDatas.splice(e.target.id, 1);
    this.setState({
      claimData: claimDatas,
    });
  }

  handleAddAmountUploadBlock = () => {
    const add = this.state.AmountUploadBlock + 1;
    this.setState({
      AmountUploadBlock: add,
    });
  }

  handleNextClick = () => {
    const file = this.state.claimData;
    this.props.claimData(file);
  }

  RenderInsideBlock = id => {
    if (this.state.claimData[id]) {
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
    for (let i = 1; i < this.state.AmountUploadBlock; i += 1) {
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
                  id="uploadfor"
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
    if (claimData.length >= 1) {
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

  // handleDeleteBrokerFile = () => {
  //   this.setState({
  //     summitBrokerFile: '',
  //   });
  // }

  // RendersummitBrokerFile = () => {
  //   const { summitBrokerFile } = this.state;
  //   if (summitBrokerFile) {
  //     return (
  //       <p>
  //         {summitBrokerFile.name} &nbsp;
  //         {(summitBrokerFile.size / 100000).toFixed(2)} MB
  //         <Icon
  //           id={1}
  //           style={{ positon: 'absolute', top: '-25px' }}
  //           link
  //           name="close"
  //           onClick={this.handleDeleteBrokerFile}
  //         />
  //       </p>
  //     );
  //   }
  //   return <p />;
  // }

  render() {
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
          {/* <Inner>
            <div className="row">
              <div className=" large-12 columns">
                <div className=" large-4 columns">
                  <TextNormal>
                    กรุณาอัพโหลดเอกสารยืนยันโบกเกอร์ :
                  </TextNormal>
                </div>
                <div className=" large-6 columns">
                  <FileuploadBox>
                    {this.RendersummitBrokerFile()}
                  </FileuploadBox>
                </div>
                <div className=" large-2 columns">
                  <Upload>
                    <BrowsButton for="uploadbrokerfor">
                      <input
                        id="uploadbrokerfor"
                        style={{ display: 'none' }}
                        type="file"
                        accept=".xls,.xlsx,.pdf,.docx"
                        onChange={e => this.handleUploadBroker(e)}
                      />
                      เลือกไฟล์
                    </BrowsButton>
                  </Upload>
                </div>
              </div>
            </div>
          </Inner> */}
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
                      id="uploadfor"
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

export default connect(null, mapDispatchToProps)(Uploadfile);
