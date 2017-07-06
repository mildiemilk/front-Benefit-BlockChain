import React, { Component } from 'react'
import Countdown from 'react-count-down'
import { Divider, Icon } from 'semantic-ui-react'
import { Card, Text } from './styled'
class Box extends Component {
  constructor() {
    super()
  }

  render() {
   
    return (
      <div className="Box">
        <Card>
        <div className='row'>
          <div className='large-3 columns'>
              <Text>AIA Insurance</Text>
          </div>
          <div className='large-6 columns'>
              <div className='row'>
                  <div className='large-4 columns'>
                      <Text>0001</Text>
                  </div>
                  <div className='large-2 columns'>
                      <Text>1</Text>
                  </div>
                  <div className='large-2 columns'>
                      <Text>22 มิย 60</Text>
                  </div>
                  <div className='large-4 columns'>
                      <Text>1000000</Text>
                  </div>
              </div> 
          </div>
          <div className='large-1 columns'>
              <Text><Icon name='external' size='big'/></Text>
          </div>
          <div className='large-2 columns'>
              <Text>ร่วมประมูล</Text>
          </div>
        </div>
     
         </Card>
      </div>


    )
  }
}

export default Box
