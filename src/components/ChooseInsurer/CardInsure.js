import React from 'react'
import { Card, Check, Cardlast } from './styled'
import { connect } from 'react-redux'
import { getAllInsurer } from '../../reducers/chooseInsurer'
class CardInsure extends React.Component {
  constructor() {
    super()
    this.state = {}
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
    return (
      <div>
        {this.renderList(this.props.getAllInsurer)}
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({})

const mapStateToProps = state => ({
  getAllInsurer: state.getAllInsurer,
})

export default connect(mapStateToProps, mapDispatchToProps)(CardInsure)
