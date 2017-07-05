import React, { Component } from 'react'
import Countdown from 'react-count-down'

class Bidding extends Component {
  constructor() {
    super()
  }

  render() {
    const cb = () => {
      console.log('expired callback')
    }
    const OPTIONS = {
      endDate: '03/01/2018 10:55 AM',
      prefix: 'until my birthday!',
      cb,
    }

    return <Countdown options={OPTIONS} />
  }
}

export default Bidding
