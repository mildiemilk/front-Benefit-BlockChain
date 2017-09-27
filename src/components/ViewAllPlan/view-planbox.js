import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { Icon, Popup } from 'semantic-ui-react';

class ViewPlanBox extends Component {
  static propTypes = {
    planList: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
    handleCopy: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleOpen: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderList = () => {
    const {
      planList,
      handleCopy,
      handleChange,
      handleOpen,
    } = this.props;
    const plans = planList.map((element, index) => (
      <tr key={index.toString()}>
        <td>
          <input
            className="view-checkbox-list-plan"
            type="checkbox"
            name="selectPlan"
            data-tag={index}
            ref={index}
            value={element.planId}
            onChange={handleChange}
          />
        </td>
        <td> {element.planName} </td>
        <td> {element.updateBy} </td>
        <td>
          {
            moment(element.updatedAt)
            .locale('th')
            .format('DD MMMM YYYY')
          }
        </td>
        <td>
          <Link to={`/submitplan/${index}`}>
            <Popup
              trigger={<Icon disabled name="edit" size="large" />}
              content="แก้ไขแผน"
              position="bottom left"
              size="mini"
              basic
            />
          </Link>
          <Popup
            trigger={
              <Icon
                disabled
                name="paste"
                size="large"
                onClick={() => handleCopy(element.planId)}
              />
            }
            content="คัดลอกแผน"
            position="bottom left"
            size="mini"
            basic
          />
          <Popup
            trigger={
              <Icon
                disabled
                name="trash"
                size="large"
                onClick={() => handleOpen(element.planId)}
              />
            }
            content="ลบแผน"
            position="bottom left"
            size="mini"
            basic
          />
        </td>
      </tr>
    ));
    return plans;
  }

  render() {
    return (
      <table>
        <tbody>
          {this.renderList()}
        </tbody>
      </table>
    );
  }
}

export default ViewPlanBox;
// const mapDispatchToProps = dispatch => ({
//   deletePlan: planId => dispatch(deletePlan(planId)),
// });

// const mapStateToProps = () => ({});

// export default connect(mapStateToProps, mapDispatchToProps)(ViewPlanBox);
