import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Head from '../../Head';
import { Detail } from './styled';
import UploadEmployee from '../../Download/uploadEmployee';
import { fileEmployee } from '../../../api/profile-company';
import { Button } from '../../StyleComponent';

class AddEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: null,
      filePreviewUrl: '',
      isComplete: false,
    };
  }

  handleFile = (file, filePreviewUrl) => {
    this.setState({
      file,
      filePreviewUrl,
    });
  }

  handleClick = () => {
    fileEmployee(this.state.file).then(() => this.setState({ isComplete: true }));
  }

  render() {
    const { file, filePreviewUrl, isComplete } = this.state;
    if (isComplete) {
      return <Redirect to="/employeelist" />;
    }
    return (
      <div>
        <Head content="เพิ่มพนักงานเป็นกลุ่ม" />
        <Detail>
          <UploadEmployee
            handleFile={this.handleFile}
            file={file}
            filePreviewUrl={filePreviewUrl}
          />
        </Detail>
        <div className="row">
          <div className="large-2 large-offset-9 columns">
            <Button onClick={this.handleClick}>เพิ่มพนักงานใหม่</Button>
          </div>
          <div className="large-1 columns" />
        </div>
      </div>
    );
  }
}

export default AddEmployee;

