import React, { Component, PropTypes } from 'react'
import { Redirect } from 'react-router-dom';
import { Grid, Image, Button, Comment, Form } from 'semantic-ui-react'
import { Divider, Card, Feed, Rating } from 'semantic-ui-react'
import {
  Reg4,
  Reg3,
  Reg,
  PostBoxFront,
  Open4,
  Time,
  Probox,
  Probox2,
  PostContent,
  Space,
  PostStepBox,
} from './Styled'
import {
  Reg8,
  Broke,
  SelectBroke,
  RecPostBox,
  contentWarpper,
  ChatBoxName,
  ChatBoxImg,
} from './Styled'
import Chatlist from './ChatList'
import Chatbox from './ChatBox'
import Steps from './Step'
import Postre from './Postre'
import styled from 'react-sc'
import ModalPostBox from './ModalPostBox'
import NavInsure from '../NavInsure'
import { postBox } from '../../api/postBox'
import { connect } from 'react-redux'

const RatingNew = styled(Rating)`
  &&&{
    position: absolute;
    margin-left: 24.5%;
    margin-top: 3%;
  }
`

class PostBox extends Component {
  static propTypes = {
    selectBroker: PropTypes.bool.isRequired,
  };

  constructor() {
    super()
    this.state = {
      step: 2,
      passwordToConfirm: '',
    }
  }
  handlePost = e => {
    e.preventDefault()
    const { passwordToConfirm } = this.state
    this.props.postBox(passwordToConfirm)
  }

  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  render() {
    const { selectBroker } = this.props;
    console.log(selectBroker);

    if (selectBroker) {
      return <Redirect to="/submitplan" />;
    }

    return (
      <div>
        <NavInsure step={this.state.step} />
        <div className="row">
          <RecPostBox>
            <div className="row">
              <div className="large-10 large-offset-1 columns">
                <PostBoxFront>
                  <br /><br /><br />กระดานสนทนา
                </PostBoxFront>
                <Space><Postre /></Space>
              </div>
            </div>
            <div className="row">
              <div className="large-10 large-offset-1 columns">
                <Space>
                  <Reg3>
                    <Open4>Open (4)</Open4>
                    <Time> Time </Time>
                    <ChatBoxImg src="../../../postbox/group-25.png" />
                    <ChatBoxName> Broker 123 </ChatBoxName>
                    <RatingNew
                      defaultRating={3}
                      maxRating={5}
                      size="mini"
                      disabled
                    />
                    <ModalPostBox
                      handlePost={this.handlePost}
                      handleChange={this.handleChange}
                    />
                  </Reg3>
                </Space>
              </div>
            </div>

            <div className="row">
              <div
                className="large-3 large-offset-1 columns"
                style={{ paddingRight: '0%' }}
              >
                <Chatlist />
              </div>
              <div className="large-7 columns" style={{ paddingLeft: '0%' }}>
                <Reg8><Chatbox /></Reg8>
              </div>
              <div className="large-1 columns" />
            </div>
          </RecPostBox>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  selectBroker: state.postBoxReducer.selectBroker,
})

const mapDispatchToProps = dispatch => ({
  postBox: passwordToConfirm => dispatch(postBox(passwordToConfirm)),
})

export default connect(mapStateToProps, mapDispatchToProps)(PostBox)
