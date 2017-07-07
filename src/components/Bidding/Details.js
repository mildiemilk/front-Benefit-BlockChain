import React, { Component } from 'react'
import { Divider } from 'semantic-ui-react'
import { BoxDetail, Back, Text } from './styled'
import NavBidding from './NavBidding'


class Details extends Component {
  constructor(props) {
    super(props)
  
  }

  render() {
    return (
      <div className="Bidding">
       <Back onClick={this.props.handleClick}> &lt; กลับหน้าหลัก</Back>
        <BoxDetail>
            <Text> AIA Insurance </Text>
        </BoxDetail>

      </div>
    )
  }
}

export default Details





