import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card } from './styled';
import xlsx from '../../../assets/Uploadfile/icons-8-ms-excel.png';
import pdf from '../../../assets/Uploadfile/icons-8-pdf.png';

class UploadFile extends Component {
  static propTypes = {
    files: PropTypes.arrayOf(PropTypes.object).isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  imageFile = ext => {
    if (ext === 'pdf') return pdf;
    else if (ext === 'xlsx') return xlsx;
    return null;
  }

  renderList = files => {
    const list = files.map((file, i) => (
      <Card className="large-2 mediam-2 small-2 columns" key={i.toString()}>
        <div className="send-req-img-upload-box">
          <img className="send-req-img-upload" src={this.imageFile(file.ext)} alt="file" />
        </div>
        <div className="send-req-file-name">
          {file.name}
        </div>
      </Card>
    ));
    return list;
  }

  render() {
    if (this.props.files) {
      return (
        <div>
          <div className="row">
            {this.renderList(this.props.files)}
          </div>
        </div>
      );
    }
    return <div />;
  }
}

export default UploadFile;
