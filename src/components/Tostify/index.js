import React, { Component } from 'react';
// import { ToastContainer, toast } from 'react-toastify';
import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.min.css';
// import styled from 'styled-components';

class Tostify extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  }
  constructor(props) {
    super(props);
    this.state = {
      hideProgressBar: true,
    };
  }
  render() {
    return (
      <div className="choose-in-save-btn">
        <button
          className="submit-plan-btn-form-submit-plan btn-blue"
          onClick={this.props.handleSubmit}
        >
          บันทึก
        </button>
        {/* <ToastContainer
          hideProgressBar={this.state.hideProgressBar}
          autoClose={1500}
          position={toast.POSITION.TOP_RIGHT}
          style={{ zIndex: '30' }}
        /> */}
      </div>
    );
  }
}

export default Tostify;
