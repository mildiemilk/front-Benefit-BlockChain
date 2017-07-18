import React, {Component} from 'react'
import Nav from './Nav'
import { Icon } from 'semantic-ui-react'
import { DetailDiv, NextButton, HeadDetail, BoxDetail, HeadList, TextR, TextL, Num, List, ListL, Lists, ListR, BoxList, DetailIn, BoxIn} from './styled'
class SelectRealTime extends Component {
    constructor(props){
        super(props)
        this.state = {
            isPlan: true,
        }
    }

    handlePlan = () => {
        const { isPlan } = this.state
        if(!isPlan){
            console.log(isPlan)
            this.setState({
                isPlan: true,
            })
        }
        else {
            console.log(isPlan)
            this.setState({
                isPlan: false,
            })
          
        }
    }

    render(){
        return(
            <div className='NavSelectRealTime'>
                <Nav/>
                <DetailDiv>
                    <HeadDetail>
                        รายละเอียด
                    </HeadDetail>
                    <BoxDetail>
                        <HeadList>
                            <TextL>พนักงานกลุ่ม A  </TextL>
                            <TextR>
                                จำนวนพนักงานในกลุ่ม
                                <Num>148/200</Num>
                            </TextR>
                        </HeadList>
                     
                        <BoxList>
                            <Lists>
                                <ListL> แผนสิทธิประโยชน์ที่เลือก </ListL>
                                <ListR><Icon name='caret right' onClick = {this.handlePlan}/></ListR>
                            </Lists>
                        </BoxList>
                        {this.state.isPlan
                        ?<DetailIn>
                            <tr>
                                <td>แผนสิทธิประโยชน์ 1</td>
                                <td>68 คน</td>
                            </tr>
                        </DetailIn>
                        :null
                        }

                    </BoxDetail>
                </DetailDiv>

                <NextButton>ต่อไป</NextButton>
            </div>
        )
    }
}

export default SelectRealTime