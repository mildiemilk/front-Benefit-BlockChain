import React from 'react'
import { SearchView, SearchButton } from './Styled'

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
      <div>
        <SearchView
          input
          type="text"
          placeholder="ค้นหา"
          value={this.state.keyword}
          onChange={event => this.handleInputChange(event)}
        />
        <SearchButton> ไป </SearchButton>
      </div>
    )
  }
}

export default SearchBox
