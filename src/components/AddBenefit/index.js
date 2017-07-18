import React, { Component } from 'react'
import NavBenefit from '../NavBenefit'
import { Icon, Divider, Checkbox } from 'semantic-ui-react'
import Detail from './detail'
import Setting from './setting'

class AddBenefit extends Component {
  constructor(props) {
    super(props)
    this.state = {
      step: 2,
      isSetting: false,
    }
  }

  handleSetting = () => {
    if (this.state.isSetting) {
      this.setState({ isSetting: false })
    } else {
      this.setState({ isSetting: true })
    }
  }

  render() {
    return (
      <div className="AddBenefit">
        <NavBenefit step={this.state.step} />
        {this.state.isSetting
          ? <Setting handleSetting={this.handleSetting} />
          : <Detail handleSetting={this.handleSetting} />}
      </div>
    )
  }
}

export default AddBenefit
