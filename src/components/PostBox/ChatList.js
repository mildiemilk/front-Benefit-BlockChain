import React, { Component } from 'react'
import { Card, Feed, Rating, Divider, Header } from 'semantic-ui-react'
import styled from 'react-sc'

const CardLink = styled(Card.Content)`
  &&&{
    &:active {
    background: red;
  }
  }
`

export default class ChatList extends Component {
  render() {
    return (
      <Card.Group style={{ borderRadius: '0px' }}>
        <Card>
          <CardLink extra>
            <Feed>
              <Feed.Event href="#card-example-link-card222">
                <Feed.Label image="../../../postbox/group-22.png" />
                <Feed.Content>
                  <Feed.Summary>
                    Broker 234 <Feed.Date content="5m" />
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
          </CardLink>

          <Card.Content extra>
            <Feed>
              <Feed.Event href="#card-example-link-card">
                <Feed.Label image="../../../postbox/group-22.png" />
                <Feed.Content>
                  <Feed.Summary>
                    Broker 234 <Feed.Date content="5m" />
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

          <Card.Content extra>
            <Feed>
              <Feed.Event href="#card-example-link-card">
                <Feed.Label image="../../../postbox/group-22.png" />
                <Feed.Content>
                  <Feed.Summary>
                    Broker 234 <Feed.Date content="5m" />
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

          <Card.Content extra>
            <Feed>
              <Feed.Event>
                <Feed.Label image="../../../postbox/group-22.png" />
                <Feed.Content>
                  <Feed.Summary>
                    Broker 234 <Feed.Date content="5m" />
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
        </Card>
      </Card.Group>
    )
  }
}
