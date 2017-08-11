import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card } from './styled';
import { getSelectInsurer } from '../../api/choose-insurer';

class Insurer extends React.Component {
  static propTypes = {
    getSelectInsurer: PropTypes.func.isRequired,
    insurers: PropTypes.arrayOf(PropTypes.object).isRequired,
  }
  constructor(props) {
    super(props);

    props.getSelectInsurer();
  }

  renderList = insurers => {
    const list = insurers.map(insurer => (
      <Card className="large-2 columns">
        {insurer.insurerName}
      </Card>
    ));
    return list;
  }

  render() {
    return (
      <div>
        <div className="row">
          {this.renderList(this.props.insurers)}
        </div>
      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  getSelectInsurer: () => dispatch(getSelectInsurer()),
});

const mapStateToProps = state => ({
  insurers: state.getSelectInsurer.defaultInsurer,
});

export default connect(mapStateToProps, mapDispatchToProps)(Insurer);
