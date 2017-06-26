import React, { Component } from 'react'
import { Card, Feed, Rating, Divider, Header } from 'semantic-ui-react'

export default class ChatList extends Component {
  render() {
    return (
      <Card.Group style={{ width: '285px' }}>
        <Card>
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
