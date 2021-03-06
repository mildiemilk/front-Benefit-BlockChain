import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  DetailDiv,
  Text,
  Back,
  SettingList,
  DivInput,
  SettingLine,
  ButtonSetting,
} from './styled';

class Setting extends Component {
  static propTypes = {
    Types: PropTypes.string.isRequired,
    handleSetting: PropTypes.func.isRequired,
    handleOptionChangeHealth1: PropTypes.func.isRequired,
    handleOptionChangeHealth2: PropTypes.func.isRequired,
    handleOptionChangeHealth3: PropTypes.func.isRequired,
    handleOptionChangeExpense1: PropTypes.func.isRequired,
    handleOptionChangeExpense2: PropTypes.func.isRequired,
    handleOptionChangeExpense3: PropTypes.func.isRequired,
    selectedOptionHealth1: PropTypes.string.isRequired,
    selectedOptionHealth2: PropTypes.string.isRequired,
    selectedOptionHealth3: PropTypes.string.isRequired,
    selectedOptionExpense1: PropTypes.string.isRequired,
    selectedOptionExpense2: PropTypes.string.isRequired,
    selectedOptionExpense3: PropTypes.string.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <DetailDiv>
        <Text>ตั้งค่าแผนสิทธิประโยชน์ {this.props.Types}</Text>
        <Back onClick={this.props.handleSetting}> &lt; กลับหน้าหลัก</Back>
        <SettingList>การคำนวณสวัสดิการสำหรับพนักงานเข้าใหม่กลางปี</SettingList>
        <div className="radio">
          <SettingLine>
            <label htmlFor="SettingLine">
              {this.props.Types === 'Health'
                ? <div>
                  <DivInput
                    type="radio"
                    value="full"
                    checked={this.props.selectedOptionHealth1 === 'full'}
                    onChange={this.props.handleOptionChangeHealth1}
                  />
                  ให้สิทธิประโยชน์เต็มจำนวน
                    <ButtonSetting>ค่าเริ่มต้น</ButtonSetting>
                </div>
                : <div>
                  <DivInput
                    type="radio"
                    value="full"
                    checked={this.props.selectedOptionExpense1 === 'full'}
                    onChange={this.props.handleOptionChangeExpense1}
                  />
                  ให้สิทธิประโยชน์เต็มจำนวน
                    <ButtonSetting>ค่าเริ่มต้น</ButtonSetting>
                </div>}
            </label>
          </SettingLine>
        </div>
        <div className="radio">
          <SettingLine>
            <label htmlFor="SettingLine">
              {this.props.Types === 'Health'
                ? <div>
                  <DivInput
                    type="radio"
                    value="pro-rate"
                    checked={this.props.selectedOptionHealth1 === 'pro-rate'}
                    onChange={this.props.handleOptionChangeHealth1}
                  />
                  ให้สิทธิประโยชน์ตาม Pro-rate
                  </div>
                : <div>
                  <DivInput
                    type="radio"
                    value="pro-rate"
                    checked={this.props.selectedOptionExpense1 === 'pro-rate'}
                    onChange={this.props.handleOptionChangeExpense1}
                  />
                  ให้สิทธิประโยชน์ตาม Pro-rate
                  </div>}
            </label>
          </SettingLine>
        </div>

        <SettingList>การคำนวณสวัสดิการสำหรับพนักงานลาออกกลางปี</SettingList>
        <div className="radio">
          <SettingLine>
            <label htmlFor="SettingLine">
              {this.props.Types === 'Health'
                ? <div>
                  <DivInput
                    type="radio"
                    value="full"
                    checked={this.props.selectedOptionHealth2 === 'full'}
                    onChange={this.props.handleOptionChangeHealth2}
                  />
                  ให้สิทธิประโยชน์เต็มจำนวน
                    <ButtonSetting>ค่าเริ่มต้น</ButtonSetting>
                </div>
                : <div>
                  <DivInput
                    type="radio"
                    value="full"
                    checked={this.props.selectedOptionExpense2 === 'full'}
                    onChange={this.props.handleOptionChangeExpense2}
                  />
                  ให้สิทธิประโยชน์เต็มจำนวน
                    <ButtonSetting>ค่าเริ่มต้น</ButtonSetting>
                </div>}
            </label>
          </SettingLine>
        </div>
        <div className="radio">
          <SettingLine>
            <label htmlFor="SettingLine">
              {this.props.Types === 'Health'
                ? <div>
                  <DivInput
                    type="radio"
                    value="pro-rate"
                    checked={this.props.selectedOptionHealth2 === 'pro-rate'}
                    onChange={this.props.handleOptionChangeHealth2}
                  />
                  ให้สิทธิประโยชน์ตาม Pro-rate
                  </div>
                : <div>
                  <DivInput
                    type="radio"
                    value="pro-rate"
                    checked={this.props.selectedOptionExpense2 === 'pro-rate'}
                    onChange={this.props.handleOptionChangeExpense2}
                  />
                  ให้สิทธิประโยชน์ตาม Pro-rate
                  </div>}
            </label>
          </SettingLine>
        </div>

        <SettingList>
          การคำนวณสวัสดิการสำหรับพนักงานได้เลื่อนตำแหน่ง
        </SettingList>
        <div className="radio">
          <SettingLine>
            <label htmlFor="SettingLine">
              {this.props.Types === 'Health'
                ? <div>
                  <DivInput
                    type="radio"
                    value="full"
                    checked={this.props.selectedOptionHealth3 === 'full'}
                    onChange={this.props.handleOptionChangeHealth3}
                  />
                  ให้สิทธิประโยชน์เต็มจำนวน
                    <ButtonSetting>ค่าเริ่มต้น</ButtonSetting>
                </div>
                : <div>
                  <DivInput
                    type="radio"
                    value="full"
                    checked={this.props.selectedOptionExpense3 === 'full'}
                    onChange={this.props.handleOptionChangeExpense3}
                  />
                  ให้สิทธิประโยชน์เต็มจำนวน
                    <ButtonSetting>ค่าเริ่มต้น</ButtonSetting>
                </div>}
            </label>
          </SettingLine>
        </div>
        <div className="radio">
          <SettingLine>
            <label htmlFor="SettingLine">
              {this.props.Types === 'Health'
                ? <div>
                  <DivInput
                    type="radio"
                    value="pro-rate"
                    checked={this.props.selectedOptionHealth3 === 'pro-rate'}
                    onChange={this.props.handleOptionChangeHealth3}
                  />
                  ให้สิทธิประโยชน์ตาม Pro-rate
                  </div>
                : <div>
                  <DivInput
                    type="radio"
                    value="pro-rate"
                    checked={this.props.selectedOptionExpense3 === 'pro-rate'}
                    onChange={this.props.handleOptionChangeExpense3}
                  />
                  ให้สิทธิประโยชน์ตาม Pro-rate
                  </div>}
            </label>
          </SettingLine>
        </div>
      </DetailDiv>
    );
  }
}

export default Setting;
