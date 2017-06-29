import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { companyFill } from '../../../actions'
import {
  Button,
  Form,
  Grid,
  Segment,
  Image,
  Dropdown,
  Menu,
  Container,
} from 'semantic-ui-react'
import {
  Text,
  Box,
  Border,
  Head,
  Detail1,
  Oval,
  Detail2,
  Detail3,
  Next,
} from './Styled'
import styled from 'react-sc'
import './style.scss'

const SegmentWithHeight = styled(Segment)`
  &&&{
    height: 100%;
    min-height: 642.2px;
  }
`
const NextButton = styled.button`
    width: 100%;
    height: auto;
    border: none;
    border-radius: 20px;
    background-color: #f7555f;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
    color: white;
    margin-top: 20%;
    display: block;
    text-align:center;
    padding: 5%;
  
`
const UploadImage = styled.div`
    position: relative;
    overflow: hidden;
    border-radius: 50%;
  
`
const BusinessTypes = [
  {
    text: 'ประเภท 1',
    value: 'Type 1',
  },
  {
    text: 'ประเภท 2',
    value: 'Type 2',
  },
  {
    text: 'ประเภท 3',
    value: 'Type 3',
  },
]
const NumberOfEmployees = [
  {
    text: '1-50',
    value: '1-50',
  },
  {
    text: '51-100',
    value: '51-100',
  },
  {
    text: '101-150',
    value: '101-150',
  },
]

class SettingProfile extends Component {
  constructor() {
    super()
    this.state = {
      nameInput: '',
      address: '',
      HR: '',
      tel: '',
      typeOfB: '',
      numberOfEmployees: '',
      broker: '',
      insurer: '',
      file: '',
      imagePreviewUrl: ''
    }
  }
 _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    console.log('handle uploading-', this.state.file);
  }
  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }

    reader.readAsDataURL(file)
  }
  handleSubmit = e => {
    e.preventDefault()
    const { companyFill } = this.props
    const {
      nameInput: { value: nameInput },
      address: { value: address },
      HR: { value: HR },
      tel: { value: tel },
      broker: { value: broker },
      insurer: { value: insurer },
    } = e.target

    this.setState({
      nameInput: nameInput,
      address: address,
      HR: HR,
      tel: tel,
      broker: broker,
      insurer: insurer,
    })

    companyFill(this.state)
  }
  onInputChange(value,stateName) {
    this.setState({[stateName]:value})
  }
  
  render() {
    const {profile} =this.props;
    // console.log(this.state)
    console.log('profile: ')
    console.log(profile)
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    // let elmnt = document.getElementById("Image")
    // let width = elmnt.clientWidth;
    // let height = elmnt.clientHeight;
    // console.log('pic'+height);
    if (imagePreviewUrl) {
      // if(height===40){
      //   $imagePreview = 
      //   (<div className="thumbnail">
      //     <img id='Image' className="portrait" src={imagePreviewUrl} />
      //   </div>)}
      // else{
        $imagePreview = (<img id='Image' className="thumbnail" src={imagePreviewUrl} />);
      // }
    } else {
      $imagePreview = (<div className='preview'>Please select an Image for Preview</div>);
    }
    return (
      <div style={{ background: '#F1F1F1', paddingTop: '5%' }}>
        <div className="row">
          <div className="large-10 large-offset-1 columns">
            <Head>กรุณาตั้งค่าโปรไฟล์</Head>
          </div>
        </div>
      
        <div className="row">
          <div className="large-4 large-offset-1 columns">
                <SegmentWithHeight>
                  <Detail1>
                    อัพโหลดโลโก้
                  </Detail1>
                  <div  
                   >{$imagePreview}</div>
                   
                  <form onSubmit={(e)=>this._handleSubmit(e)}>
                  
                    <input className="previewInput"
                      type="file" 
                      onChange={(e)=>this._handleImageChange(e)} />
                   
                    <Oval type="submit" 
                      onClick={(e)=>this._handleSubmit(e)}>อัพโหลดรูปภาพ</Oval>
                  </form>
            {/*<label className="fileContainer">
                  <div className="uploadfile">
                    <i className="fa fa-upload" aria-hidden="true"></i>
                  </div>
                  <span className="label">{this.state.filename}</span>
                  <input type="file"
                    accept="application/pdf, image/*"
                    onChange={event => this._handleImageChange(event)}
                  />
                </label>*/}
                </SegmentWithHeight>
          </div>
                <form onSubmit={this.handleSubmit}>
                    <div className="large-6 columns">
                      <Segment raised>
                        <Detail2>
                          ข้อมูลบริษัท
                        </Detail2>
                        <Detail3>
                          ชื่อบริษัท
                        </Detail3>
                        <Box
                          name="nameInput"
                          size="big"
                          placeholder="ชื่อบริษัท"
                          required
                        />
                        <Detail3>
                          ที่อยู่บริษัท
                        </Detail3>
                        <Box
                          name="address"
                          size="big"
                          placeholder="ที่อยู่บริษัท"
                          
                        />
                        <Detail3>
                          บุคคลติดต่อหลัก
                        </Detail3>
                        <Box
                          name="HR"
                          size="big"
                          placeholder="บุคคลติดต่อหลัก"
                  
                        />
                        <Detail3>
                          เบอร์โทร
                        </Detail3>
                        <Box
                          name="tel"
                          size="big"
                          placeholder="เบอร์โทร"
                    
                        />
                        <Detail3>
                          ประเภทธุรกิจ
                        </Detail3>
                        <Dropdown
                          placeholder="ประเภทธุรกิจ"
                          onChange={(t, data) => this.onInputChange(data.value,'typeOfB')}
                          name="typeOfB"
                          fluid
                          selection
                          options={BusinessTypes}
                        />
                        <Detail3>
                          จำนวนพนักงาน
                        </Detail3>
                        <Dropdown
                          placeholder="จำนวนพนักงาน"
                          onChange={(n, data) => this.onInputChange(data.value,'numberOfEmployees')}
                          name="numberOfEmployees"
                          fluid
                          selection
                          options={NumberOfEmployees}
                        />
                        <Detail3>
                          Broker ที่ใช้ในปัจจุบัน
                        </Detail3>
                        <Box
                          name="broker"
                          size="big"
                          placeholder="Broker ที่ใช้ในปัจจุบัน"
                        
                        />
                        <Detail3>
                          บริษัทประกันที่ใช้ในปัจจุบัน
                        </Detail3>
                        <Box
                          name="insurer"
                          size="big"
                          placeholder="บริษัทประกันที่ใช้ในปัจจุบัน"
                        />
                      </Segment>
                    </div>
                    <div className="row">
                      <div className="large-2 large-offset-9 columns">
                        <NextButton type="submit"> ต่อไป </NextButton>
                      </div>
                    </div>
                </form>
      </div>
      </div>
    )
  }
}

SettingProfile.propTypes = {
}

const mapStateToProps = state => ({
  profile: state.profile,
})
export default connect(mapStateToProps, { companyFill })(SettingProfile)




         
  