import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import NavBenefit from '../NavBenefit';
import { fileEmployee } from '../../api/profile-company';
import {
  BackButton,
  NextButton,
} from './styled';
import UploadEmployee from './uploadEmployee';

class Download extends Component {
  static propTypes = {
    getTemplate: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      step: 4,
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
    const { isComplete, file, filePreviewUrl, step } = this.state;
    if (isComplete) {
      return <Redirect to="/employeebenefits" />;
    }
    return (
      <div>
        <NavBenefit step={step} />
        <UploadEmployee
          handleFile={this.handleFile}
          file={file}
          filePreviewUrl={filePreviewUrl}
        />
        <div className="row">
          <div className="large-3 large-offset-1 columns">
            <Link to="settingbenefit"><BackButton> กลับ </BackButton></Link>
          </div>
          <div className="large-2 large-offset-5 columns">
            <NextButton onClick={this.handleClick}> ต่อไป </NextButton>
          </div>
          <div className="large-1 columns" />
        </div>
      </div>
    );
  }
}

export default Download;
