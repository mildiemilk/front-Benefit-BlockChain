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
  }
  render() {
    return (
      <DetailDiv>
        <Text>ตั้งค่าแผนสิทธิประโยชน์</Text>
        <Back onClick={this.props.handleSetting}> &lt; กลับหน้าหลัก</Back>
        <SettingList>การคำนวณสวัสดิการสำหรับพนักงานเข้าใหม่กลางปี</SettingList>

        <SettingLine>
          <DivInput type="radio" value="" checked />ให้สิทธิประโยชน์เต็มจำนวน
          <ButtonSetting>ค่าเริ่มต้น</ButtonSetting>
        </SettingLine>
        <SettingLine>
          <DivInput type="radio" />ให้สิทธิประโยชน์ตาม Pro-rate
        </SettingLine>
        <SettingList>การคำนวณสวัสดิการสำหรับพนักงานลาออกกลางปี</SettingList>
        <SettingLine>
          <DivInput type="radio" value="" checked />เรียกคืนเต็มจำนวน
          <ButtonSettings>ค่าเริ่มต้น</ButtonSettings>
        </SettingLine>
        <SettingLine>
          <DivInput type="radio" />เรียกคืนตาม Pro-rate
        </SettingLine>
        <SettingList>
          การคำนวณสวัสดิการสำหรับพนักงานได้เลื่อนตำแหน่ง
        </SettingList>
        <SettingLine>
          <DivInput type="radio" value="" checked />ให้สิทธิประโยชน์เต็มจำนวน
          <ButtonSetting>ค่าเริ่มต้น</ButtonSetting>
        </SettingLine>
        <SettingLine>
          <DivInput type="radio" />ให้สิทธิประโยชน์ตาม Pro-rate
        </SettingLine>
      </DetailDiv>
    )
  }
}

export default Setting
