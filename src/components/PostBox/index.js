import React, { Component } from 'react'
import { Grid, Image, Button, Comment, Form } from 'semantic-ui-react'
import { Divider, Card, Feed, Rating } from 'semantic-ui-react'
import {
  Reg4,
  Reg3,
  Reg,
  PostBoxFront,
  Open4,
  Date1,
  Probox,
  Probox2,
  PostContent,
  Space,
  PostStepBox,
} from './Styled'
import { Reg8, Broke, SelectBroke, RecPostBox } from './Styled'
import Chatlist from './ChatList'
import Chatbox from './ChatBox'
import Steps from './Step'
import Postre from './Postre'

export default class PostBox extends Component {
  render() {
    return (
      <div>
        <div className="row">
          <div className="row">
            <PostContent>จัดแผนสิทธิประโยชน์</PostContent>
            <Divider inverted />
            <Space><PostStepBox><Steps /></PostStepBox></Space>
          </div>
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

              <Space>
                <Reg3>
                  <div>
                    <Open4> Open (4) </Open4>
                    <Date1> Date </Date1>
                  </div>
                  <div>
                    <Broke>
                      <Card.Content extra>
                        <Feed>
                          <Feed.Event>
                            <Feed.Label
                              style={{ marginTop: '1%' }}
                              image="../../../postbox/group-13.png"
                            />
                            <Feed.Content>
                              <Feed.Summary style={{ color: '#ffffff' }}>
                                Broker 123
                              </Feed.Summary>
                              <Rating
                                defaultRating={3}
                                maxRating={5}
                                size="mini"
                                disabled
                              />
                            </Feed.Content>
                          </Feed.Event>
                        </Feed>
                      </Card.Content>
                      <SelectBroke>
                        <Button
                          style={{
                            width: '210px',
                            height: '40px',
                            borderRadius: '20px',
                            backgroundColor: '#f7555f',
                          }}
                          content="เลือก Broker"
                          primary
                        />
                      </SelectBroke>
                    </Broke>
                  </div>
                </Reg3>
              </Space>
            </div>
            <div className="row">
              <div className="large-3 columns"> <Chatlist /> </div>
              <div className="large-9 columns">
                {' '}<Reg8><Probox2><Chatbox /></Probox2></Reg8>{' '}
              </div>
            </div>
          </RecPostBox>
        </div>
      </div>
    )
  }
}
