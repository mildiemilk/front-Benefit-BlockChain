import React from 'react'
import { Card, Check, Cardlast } from './styled'

class CardInsure extends React.Component {
  constructor() {
    super()
    this.state = {
      insurers: ['AIA', 'SCB', 'milk', 'gggg', 'dfdsf', 'sdddd', 'eeeee'],
    }
  }

  renderList = insurers => {
    console.log(insurers)
    return insurers.map(insurer => (
      <Card className="large-2 columns">
        <Check
          type="checkbox"
          name="selector"
          onChange={this.props.handleCheck}
        />
        {insurer}
      </Card>
    ))
  }

  render() {
    console.log(this.state.insurers)
    return (
      <div>
        {this.renderList(this.state.insurers)}
      </div>
    )
  }
}

export default CardInsure
