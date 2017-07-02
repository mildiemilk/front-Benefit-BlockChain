import React from 'react'
import { Card, Check } from './styled'
class CardInsure extends React.Component {
  render() {
    return (
      <div>
        <Card className="large-2 columns">
          <Check type="checkbox" name="selector" />
        </Card>
        <Card className="large-2 columns">
          <Check type="checkbox" name="selector" />
        </Card>
        <Card className="large-2 columns">
          <Check type="checkbox" name="selector" />
        </Card>
        <Card className="large-2 columns">
          <Check type="checkbox" name="selector" />
        </Card>
        <Card className="large-2 columns">
          <Check type="checkbox" name="selector" />
        </Card>
        <Card className="large-2 columns">
          <Check type="checkbox" name="selector" />
        </Card>
      </div>
    )
  }
}

export default CardInsure
