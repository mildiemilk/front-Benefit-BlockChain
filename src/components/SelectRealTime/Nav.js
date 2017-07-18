import React, { Component } from 'react'
import { Divider } from 'semantic-ui-react'
import { Head, Box, List } from './styled'

class NavSelectRealTime extends Component {
    render(){
        return (
                <div>
                    <div className='row'>
                        <div className='large-12 column'>
                            <Head> สรุปจำนวนพนักงาน </Head>
                            <Divider />
                        </div>
                    </div>
                    <div className='row'>
                        <div className = 'large-4 columns'>
                            <Box>
                                <List>จำนวนพนักงานทั้งหมด</List>
                                <Divider />
                            </Box>
                            
                        </div>
                        <div className = 'large-4 columns'>
                            <Box>
                                <List>แผนสิทธิประโยชน์ที่เลือก</List>
                                <Divider />
                            </Box>
                        </div>
                        <div className = 'large-4 columns'>
                            <Box>
                                <List>เวลาที่เหลือในการเลือกแผนสิทธิประโยชน์</List>
                                <Divider />
                            </Box>
                        </div>
                    </div>
                </div>
        )
    }

}

export default NavSelectRealTime