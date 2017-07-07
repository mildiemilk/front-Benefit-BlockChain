import React, { Component } from 'react'
import { Divider } from 'semantic-ui-react'
import { BoxDetail, Back, Text, InSide, TextSide, HeadBar, TextLine, HeadList, Special, TextInsure } from './styled'
import NavBidding from './NavBidding'
import Plan from './Plan'

class Details extends Component {
  constructor(props) {
    super(props)
  
  }

  render() {
    return (
      <div className = "Bidding">
       <Back onClick={this.props.handleClick}> &lt; กลับหน้าหลัก</Back>
        <BoxDetail>
          <InSide>
            <div className = 'row'>
              <div className = 'large-3 columns'>
              <TextLine> AIA Insurance </TextLine>
              </div>
              <div className = 'large-3 large-offseet-6 columns'>
                <TextSide> เลขที่ใบเสนอราคา 00001 </TextSide>
              </div>
            </div>
          </InSide>
          <HeadBar>
              <div className = 'row'>
                <div className = 'large-4 columns'>
                  <HeadList> วันที่เสนอราคา: 22 มิถุนายน 2560 </HeadList>
                </div>
                <div className =  'large-3 large-offset-1 columns'>
                  <HeadList>การเสนอราคาครั้งที่ 1</HeadList>
                </div>
                <div className = 'large-3 columns'>
                  <HeadList>ราคาที่เสนอ 10,000,000 บาท</HeadList>
                </div>
              </div>
            </HeadBar>
            <InSide>
              <div className = 'row'>
                <div className = 'large-3 columns'>
                <TextLine>รายการแพลนของคุณ</TextLine>
                </div>
              </div>
              <div className = 'row'>
                <Plan/> 
              </div>
            </InSide>
            <InSide>
              <div className = 'row'>
                <div className = 'large-6 columns'>
                <TextInsure>ข้อเสนอจากบริษัทประกัน</TextInsure> <Special>พิเศษสำหรับคุณ</Special>
                </div>  
              </div>
              <div className = 'row'>
                <Plan/>
              </div>
            </InSide>
        </BoxDetail>

      </div>
    )
  }
}

export default Details





