import React from 'react'
import { Card, Check, Cardlast } from './styled'
import { connect } from 'react-redux'
import { getAllInsurer } from '../../api/chooseInsurer'
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
          id={insurers.indexOf(insurer)}
          onChange={this.props.handleCheck}
        />
        {insurer.insurerName}
        hhh
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

const mapStateToProps = state => ({
  insurerList: state.getAllInsurer,
})

export default connect(mapStateToProps, mapDispatchToProps)(CardInsure)
