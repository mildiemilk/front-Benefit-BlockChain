import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { DivDownload, AltFile, ImgWithPointer } from './styled';
import excel from '../../../assets/Download/icons-8-ms-excel@2x.png';
import DownL from '../../../assets/Download/group-2.png';

class BoxDownload extends Component {
  static propTypes = {
    getTemplate: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <DivDownload>
        <div className="row">
          <div className="large-3 columns">
            <img src={excel} alt="excel" width="65px" height="60px" />
          </div>
          <div className="large-6 columns">
            <AltFile> Employeedata</AltFile>
            <AltFile>Template.xlsx</AltFile>
            <AltFile>Filesize: 0.4 Mb</AltFile>
          </div>
          <div className="large-3 columns">
            <ImgWithPointer src={DownL} alt="download" onClick={this.props.getTemplate} role="button" aria-hidden />
          </div>
        </div>
      </DivDownload>
    );
  }
}

export default BoxDownload;
