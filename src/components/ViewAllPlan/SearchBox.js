import React from 'react'
import { SearchView, SearchButton } from './Styled'
import { Input } from 'semantic-ui-react'
import styled from 'react-sc'

class SearchBox extends React.Component {
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
      <div className="SearchViewPlan">
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
