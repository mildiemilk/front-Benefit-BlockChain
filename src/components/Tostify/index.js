import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import PropTypes from 'prop-types';
import 'react-toastify/dist/ReactToastify.min.css';
import styled from 'styled-components';

const Button = styled.button`
width: 164px;
height: 40px;
border-radius: 20px;
background-color: #3a7bd5;
padding: 1%;
color: white;
display:inline-block;
float:right;
border-color: white;
margin-right:2.5%;
cursor: pointer;
`;
class Tostify extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
  }
  constructor() {
    super();
    this.state = {
      hideProgressBar: true,
    }
  }
  render() {
    return (
      <div style={{ display: 'inline' }}>
        <Button onClick={this.props.handleSubmit}>
          บันทึก
        </Button>
        <ToastContainer
          hideProgressBar={this.state.hideProgressBar}
          autoClose={1500}
          position={toast.POSITION.TOP_RIGHT}
          style={{ zIndex: '30' }}
        />
      </div>
    );
  }
}

export default Tostify;
