import React, { Component } from 'react'
import styled from 'react-sc'
import { Progress, Icon } from 'semantic-ui-react'
import Nav from './Nav'
import {
  DetailDiv,
  NextButton,
  HeadDetail,
  BoxDetail,
  HeadList,
  TextR,
  TextL,
  Num,
  ListL,
  Lists,
  ListR,
  BoxList,
  DetailIn,
  Number,
} from './styled'

const ProgressStyle = styled(Progress) `
    &&&{
        width: 80%;
        margin: 0px 20px;
        display: inline-block;
        height: 15px;
        border-radius: 100px;
    }
`

class SelectRealTime extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isPlan: true,
    }
  }

  handlePlan = () => {
    const { isPlan } = this.state
    if (!isPlan) {
      this.setState({
        isPlan: true,
      })
    } else {
      this.setState({
        isPlan: false,
      })
    }
  }
  render() {
    let TypeIcon = null
    if (!this.state.isPlan) {
      TypeIcon = <Icon name="caret right" />
    } else {
      TypeIcon = <Icon name="caret down" />
    }
    return (
      <div className="SelectRealTime">
        <Nav />
        <DetailDiv>
          <HeadDetail>
            รายละเอียด
          </HeadDetail>
          <BoxDetail>
            <HeadList>
              <TextL>พนักงานกลุ่ม A </TextL>
              <TextR>
                จำนวนพนักงานในกลุ่ม
                <Num>148/200</Num>
              </TextR>
            </HeadList>

            <BoxList>
              <Lists onClick={this.handlePlan}>
                <ListL> แผนสิทธิประโยชน์ที่เลือก </ListL>
                <ListR>{TypeIcon}</ListR>
              </Lists>
            </BoxList>
            {this.state.isPlan
              ? <DetailIn>
                <tr>
                  <td>แผนสิทธิประโยชน์ 1</td>
                  <td>
                    <ProgressStyle percent={68} color="yellow" />
                    <Number>
                      68 คน
                      </Number>
                  </td>
                </tr>
              </DetailIn>
              : null}
          </BoxDetail>

        </DetailDiv>
        <NextButton>ต่อไป</NextButton>
      </div>
    )
  }
}

export default SelectRealTime
