import React, { Component } from 'react'
import { Card } from './styled'
import { getSelectInsurer } from '../../api/choose-insurer'
import { connect } from 'react-redux'

class Insurer extends React.Component {
  constructor(props) {
    super(props)

    props.getSelectInsurer()
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
const mapDispatchToProps = dispatch => ({
  getSelectInsurer: () => dispatch(getSelectInsurer()),
})

const mapStateToProps = state => ({
  insurers: state.getSelectInsurer.defaultInsurer,
})

export default connect(mapStateToProps, mapDispatchToProps)(Insurer)
