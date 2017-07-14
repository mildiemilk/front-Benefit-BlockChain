import React from 'react'
import { Card, Check } from './styled'
import { connect } from 'react-redux'
import { getAllInsurer } from '../../api/choose-insurer'
class CardInsure extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  handleDefaultCheck = (e) =>{

   this.props.insurerChecked.map(insurerCheckedis => {
      if(e === insurerCheckedis.insurerName){
        return true
        }
   })
  }

  renderList = insurers => {

    return insurers.map(insurer => (
      <Card className="large-2 columns">
        <Check
          type="checkbox"
          id={insurers.indexOf(insurer)}
          defaultChecked={this.handleDefaultCheck(insurer.insurerName)}
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

const mapStateToProps = state => ({
  insurerChecked: state.chooseInsurerReducer.insurers,
  insurerList: state.getAllInsurer,
})

export default connect(mapStateToProps, mapDispatchToProps)(CardInsure)
