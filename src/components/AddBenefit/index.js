import React, { Component } from 'react'
import NavBenefit from '../NavBenefit'
class AddBenefit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 2,
    }
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
