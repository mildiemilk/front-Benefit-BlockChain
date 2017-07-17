import React, { Component } from 'react'
import { Card } from './styled'
import { chooseInsurerReducer } from '../../api/choose-insurer'
import { connect } from 'react-redux'

class Insurer extends Component {
  constructor(props) {
    super(props)
  }

  renderList = insurers => {
    console.log(insurers)
    return insurers.map(insurer => (
      <Card className="large-2 columns">
        {insurer.insurerName}
      </Card>
    ))
  }

  render() {
    return (
      <div>
        <div className="row">
          {this.renderList(this.props.insurers)}
        </div>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch => ({})

const mapStateToProps = state => ({
  insurers: state.chooseInsurerReducer.insurers,
})

export default connect(mapStateToProps, null)(Insurer)
