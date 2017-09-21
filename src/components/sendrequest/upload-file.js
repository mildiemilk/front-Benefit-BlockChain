import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, DetailFile } from './styled';
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
    const list = files.map(file => (
      <Card className="large-2 columns">
        <DetailFile>
          <img src={this.imageFile(file.ext)} alt="file" />
        </DetailFile>
        <DetailFile>
          {file.name}
        </DetailFile>
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
