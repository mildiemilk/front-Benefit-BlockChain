import React, { Component } from 'react'
import {
  DetailDiv,
  Text,
  Back,
  SettingList,
  DivInput,
  SettingLine,
  ButtonSetting,
  ButtonSettings,
} from './styled'

class Setting extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedOption1: 'full',
      selectedOption2: 'full',
      selectedOption3: 'full',
    }
  }
  handleOptionChange1 = (changeEvent) =>{
    console.log('aaaa')
    console.log(this.state.selectedOption1)
  this.setState({
    selectedOption1: changeEvent.target.value
  });
  }
  handleOptionChange2 = (changeEvent) =>{
    console.log('bbbb')
    this.setState({
      selectedOption2: changeEvent.target.value
    });
  }
  handleOptionChange3 = (changeEvent) =>{
    console.log('ccc')
    this.setState({
      selectedOption3: changeEvent.target.value
    });
  }
  render() {
    return (
      <DetailDiv>
        <Text>ตั้งค่าแผนสิทธิประโยชน์</Text>
        <Back onClick={this.props.handleSetting}> &lt; กลับหน้าหลัก</Back>
        <SettingList>การคำนวณสวัสดิการสำหรับพนักงานเข้าใหม่กลางปี</SettingList>  
        <div className = 'radio'>
          <SettingLine>
            <label>
              <DivInput type="radio" value="full" checked={this.state.selectedOption1 === 'full'} 
                                onChange={this.handleOptionChange1} />ให้สิทธิประโยชน์เต็มจำนวน
              <ButtonSetting>ค่าเริ่มต้น</ButtonSetting>
            </label>
          </SettingLine>
        </div>
        <div className = 'radio'>
          <SettingLine>
            <label>
              <DivInput type="radio" value="pro-rate" checked={this.state.selectedOption1 === 'pro-rate'} 
                              onChange={this.handleOptionChange1} />ให้สิทธิประโยชน์ตาม Pro-rate
            </label>
          </SettingLine>
        </div>

        <SettingList>การคำนวณสวัสดิการสำหรับพนักงานลาออกกลางปี</SettingList>
         <div className = 'radio'>
          <SettingLine>
            <label>
              <DivInput type="radio" value="full" checked={this.state.selectedOption2 === 'full'} 
                                onChange={this.handleOptionChange2} />ให้สิทธิประโยชน์เต็มจำนวน
              <ButtonSetting>ค่าเริ่มต้น</ButtonSetting>
            </label>
          </SettingLine>
        </div>
        <div className = 'radio'>
          <SettingLine>
            <label>
              <DivInput type="radio" value="pro-rate" checked={this.state.selectedOption2 === 'pro-rate'} 
                              onChange={this.handleOptionChange2} />ให้สิทธิประโยชน์ตาม Pro-rate
            </label>
          </SettingLine>
        </div>

        <SettingList>
          การคำนวณสวัสดิการสำหรับพนักงานได้เลื่อนตำแหน่ง
        </SettingList>
        <div className = 'radio'>
          <SettingLine>
            <label>
              <DivInput type="radio" value="full" checked={this.state.selectedOption3 === 'full'} 
                                onChange={this.handleOptionChange3} />ให้สิทธิประโยชน์เต็มจำนวน
              <ButtonSetting>ค่าเริ่มต้น</ButtonSetting>
            </label>
          </SettingLine>
        </div>
        <div className = 'radio'>
          <SettingLine>
            <label>
              <DivInput type="radio" value="pro-rate" checked={this.state.selectedOption3 === 'pro-rate'} 
                                onChange={this.handleOptionChange3} />ให้สิทธิประโยชน์ตาม Pro-rate
            </label>
          </SettingLine>
        </div>
      </DetailDiv>
    )
  }
}

export default Setting