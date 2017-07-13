import React, { Component } from 'react'
import NavBenefit from '../NavBenefit'
import { Detail, Text, TextLine, Box, Setting, Image, BoxIn, DivImage, Toggles, HeadList, Toggled } from './styled'
import { Icon, Divider, Checkbox } from 'semantic-ui-react'
import Health from '../../../assets/AddBenefit/artboards-1.png'
import Expense from '../../../assets/AddBenefit/artboards-2.png'
import gift from '../image/gigift.jpg'
import HealthBenefit from './HealthBenefit'

class AddBenefit extends Component {
    constructor(props){
        super(props)
        this.state = {
            step: 2,
            isHealth: false
        }
    }
    handleToggle = () => {
        if (this.state.isHealth) {
        this.setState({ isHealth: false })
        } else {
        this.setState({ isHealth: true })
        }
    }
    boxInStyle = (state) => {
        if(state)
        return 'BoxLine'
        
    }
    render(){
        return(
            <div className = 'AddBenefit'>
                <NavBenefit step = {this.state.step}/>
                <Detail>
                    <Text>ระบุสิทธิประโยชน์</Text>
                    <TextLine>กรุณาระบุสิทธิประโยชน์ที่ต้องการ</TextLine>
                    <div className = 'row'>
                        <div className = 'large-6 columns'>
                            <Box>
                                <DivImage>
                                <div className='imagehealth'/>
                                </DivImage>
                                <Setting><Icon name='setting'/> ตั้งค่าขั้นสูง </Setting>
                                <BoxIn>
                                    <div className = {this.boxInStyle(this.state.isHealth)}>
                                        <div className = 'row'>
                                            <div className = 'large-6 columns'>
                                                <HeadList>ค่าใช้จ่ายสุขภาพ (Health)</HeadList>
                                            </div>
                                            <div className = 'large-6 columns'>
                                                <Toggles>
                                                    ไม่มี <Checkbox toggle  onClick={this.handleToggle} /> มี 
                                                </Toggles>
                                            </div>
                                        </div>
                                    </div>
                                    {this.state.isHealth
                                    ?<HealthBenefit/>
                                    :null
                                    }
                                </BoxIn>
                            </Box>
                            
                        </div>
                        <div className = 'large-6 columns'>
                            <Box>
                                <DivImage>
                                <div className = 'imageExpense'/>
                                </DivImage>
                                <Setting><Icon name='setting'/> ตั้งค่าขั้นสูง </Setting>
                                <BoxIn>
                                    <div className = 'row'>
                                        <div className = 'large-8 columns'>
                                            <HeadList>ค่าใช้จ่ายทั่วไป (General Expense)</HeadList>
                                        </div>
                                        <div className = 'large-4 columns'>
                                            <Toggled>
                                                ไม่มี <Checkbox toggle  onClick={this.handleToggle} /> มี 
                                            </Toggled>
                                        </div>
                                    </div>
                                </BoxIn>
                            </Box>
                            
                        </div>
                    </div>
                </Detail>
               
            </div>
        )
  }

  render() {
    return (
      <div className="AddBenefit">
        <NavBenefit step={this.state.step} />
      </div>
    )
  }
}

export default AddBenefit
