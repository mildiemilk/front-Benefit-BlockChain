import React from 'react';
import PropTypes from 'prop-types';
import { Input } from 'semantic-ui-react';
import MediaQuery from 'react-responsive';

class SearchBox extends React.Component {
  static propTypes = {
    // name: PropTypes.number.isRequired,
    callback: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      // keyword: props.name,
    };
  }

  handleInputChange(event) {
    this.setState(
      {
        keyword: event.target.value,
      },
      () => {
        this.props.callback(this.state.keyword);
      },
    );
  }

  render() {
    return (
      <div>
        <MediaQuery query="(max-width: 767px)">
          <Input
            className="searchHospital-input"
            icon="search"
            iconPosition="left"
            placeholder="ค้นหาโรงพยาบาล"
            onChange={event => this.handleInputChange(event)}
          />
        </MediaQuery>
        <MediaQuery query="(min-width: 768px)">
          <Input
            className="searchHospital-input-Desktop"
            icon="search"
            iconPosition="left"
            placeholder="ค้นหาโรงพยาบาล"
            onChange={event => this.handleInputChange(event)}
          />
        </MediaQuery>
      </div>
    );
  }
}

export default SearchBox;
