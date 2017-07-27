import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'react-sc'
import { Redirect } from 'react-router-dom'
import { Rating } from 'semantic-ui-react'
import PropTypes from 'prop-types'
import NavInsure from '../NavInsure'
import { postBox } from '../../api/post-box'
import {
  Reg3,
  PostBoxFront,
  Open4,
  Time,
  Space,
  Reg8,
  RecPostBox,
  ChatBoxName,
  ChatBoxImg,
} from './styled'
import Chatlist from './chat-list'
import Chatbox from './chat-box'
import Postre from './postre'
import ModalPostBox from './modal-postbox'

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
    postBox: PropTypes.func.isRequired,
  }

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
    const { selectBroker } = this.props

    if (selectBroker) {
      return <Redirect to="/submitplan" />
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
