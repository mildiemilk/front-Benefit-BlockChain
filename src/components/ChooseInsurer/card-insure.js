import React from 'react'
import { Card, Check } from './styled'
import { connect } from 'react-redux'
import { getAllInsurer } from '../../api/choose-insurer'
import _ from 'lodash'
class CardInsure extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  renderList = insurers => {
    return insurers.map(insurer => (
      <Card className="large-2 columns">
        <Check
          type="checkbox"
          id={insurers.indexOf(insurer)}
          defaultChecked={this.props.handleDefaultCheck(insurer)}
          onChange={this.props.handleCheck}
        />
        {insurer.insurerName}
      </Card>
    ))
  }

  componentDidMount() {
    this.props.getAllInsurer()
  }

  render() {
    return (
      <div>
        {this.renderList(this.props.insurerList)}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  getAllInsurer: () => dispatch(getAllInsurer()),
})

export default connect(null, mapDispatchToProps)(CardInsure)
