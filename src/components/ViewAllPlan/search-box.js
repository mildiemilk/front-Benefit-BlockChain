import React from 'react'
import PropTypes from 'prop-types'
import { Input } from 'semantic-ui-react'

class SearchBox extends React.Component {
  static propTypes = {
    name: PropTypes.number.isRequired,
    callback: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props)
    this.state = {
      keyword: props.name,
    }
  }

  handleInputChange(event) {
    this.setState(
      {
        keyword: event.target.value,
      },
      () => {
        this.props.callback(this.state.keyword)
      },
    )
  }

  render() {
    return (
      <div className="ViewAllPlan">
        <Input
          style={{ marginTop: '20%' }}
          action="ไป"
          placeholder="ค้นหา"
          defaultValue={this.state.keyword}
          onChange={event => this.handleInputChange(event)}
        />
      </div>
    )
  }
}

export default SearchBox
