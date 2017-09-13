import React, { Component } from 'react';
import { Upload, Input, DivCover, ButtonUp } from './styled';

class Cover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      file: '',
      imagePreviewUrl: '',
    };
  }
  _handleImageChange = e => {
    e.preventDefault();
    const reader = new FileReader();
    const file = e.target.files[0];
    reader.onloadend = () => {
      this.setState({
        file,
        imagePreviewUrl: reader.result,
      });
    };
    reader.readAsDataURL(file);
  }

  render() {
    const { imagePreviewUrl } = this.state;
    let $imagePreview = null;
    $imagePreview = (
      <div className="profile">
        <div className="thumbnail">
          {imagePreviewUrl
          ? <img src={imagePreviewUrl} alt="imageCompany" />
          : <DivCover />
          }
          <Upload for="buttonImg">
            <ButtonUp>อัพโหลดรูปภาพหน้าปก</ButtonUp>
            <Input
              id="buttonImg"
              type="file"
              onChange={e => this._handleImageChange(e)}
            />
          </Upload>
        </div>
      </div>
    );
    return (
      <div>
        {$imagePreview}
      </div>
    );
  }
}

export default Cover;
