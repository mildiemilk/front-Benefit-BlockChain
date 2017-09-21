import React, { Component } from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Head from '../../Head';
import '../../../styles/InsurerStyle/Claim.scss';
import { getCompanyClaim } from '../../../api/Insurer/claim';
// import { Detail } from '../../StyleComponent';
import {
  Nav,
  // ProfileImg,
  // ProfileImg,
  ImageCompany,
} from './styled';

// const ProfileImg = styled(Nav)`
//   width: '54px',
//   height: '54px',
//   border-radius: '50%',
//   margin-right: '10px',
// }`;

class ClaimList extends Component {
  static propTypes = {
    // children: PropTypes.element.isRequired,
    getCompanyClaim: PropTypes.func.isRequired,
    claim: PropTypes.shape({}).isRequired,
  }

  constructor(props) {
    super(props);
    this.state = {
      claim: [],
    };
  }
  componentWillMount() {
    this.props.getCompanyClaim();
  }
  renderElement = claim => {
    const list = claim.map((claim, id) => (
      <Nav id={id} >
        <Link to={`/claim/${claim.companyId}`}>
          <div className="text-main">
            <ImageCompany
              src={claim.logo}
              alt="time"
            />
            {/* <ProfileImg><img src={claim.logo} alt="time" avatar /> </ProfileImg> */}
            <div className="insurertext2">
              <span>{claim.companyName}</span><br />
              จำนวนพนักงาน : &nbsp;{claim.numberOfEmployees} คน<br />
              วันเริ่มกรมธรรม์ใหม่ :&nbsp;
              {moment(claim.startNewInsurance)
              .locale('th')
              .format('DD MMMM YYYY')} <br />
              วันสิ้นสุดกรมธรรม์เก่า :&nbsp;
              {moment(claim.expiredOldInsurance)
              .locale('th')
              .format('DD MMMM YYYY')}
            </div>
            <div className="insurertext3">
              <input type="button" name="" value="" />
            </div>
          </div>
          <div className="insurertext4">
            <div className="status-text">กำลังพิจารณา <span> {claim.amount} </span></div>
          </div>
        </Link>
      </Nav>
    ));
    return list;
  }
  render() {
    const { claim } = this.props;
    // console.log('claim--', this.props.claim);
    return (
      <div className="ClaimList">
        <Head className="insurerheade-text" content="รายการเคลม" />
        <div className="row">
          <div className="large-6 columns box-left">
            {claim.length > 0
            ? this.renderElement(claim)
            : null
            }
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  claim: state.claimListReducer.claim,
});

const mapDispatchToProps = dispatch => ({
  getCompanyClaim: () => dispatch(getCompanyClaim()),

});
export default connect(mapStateToProps, mapDispatchToProps)(ClaimList);
