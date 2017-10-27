import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card } from './styled';
import { getSelectInsurer } from '../../api/choose-insurer';
import { Logo } from '../ChooseInsurer/styled';

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
    const list = insurers.map((insurer, i) => (
      <Card className="large-2 mediam-2 small-2 columns" key={i.toString()}>
        <div className="choose-in-box-grap-a choose-in-in-name">
          {insurer.companyName}
        </div>
        <div className="choose-in-img-in-box">
          <Logo src={insurer.logo.link} alt="logo" />
        </div>
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
