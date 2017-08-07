import React, { Component } from 'react'
import { Card, Comment, Button, Form } from 'semantic-ui-react'

export default class ChatBox extends Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <Comment.Group style={{ marginLeft: '5%', paddingTop: '5%', paddingRight: '16px' }}>
        <Comment>
          <Card style={{ width: '700px' }}>
            <Comment.Content>
              <Comment.Avatar as="a" src="../../../postbox/group-13.png" />
              <Comment.Author style={{ marginLeft: '2%' }} as="a">
                Broker 123
              </Comment.Author>
              <Comment.Metadata>
                <span> 11 มิถุนายน เวลา 15.00 น.</span>
              </Comment.Metadata>
              <Comment.Text style={{ marginLeft: '8%' }}>
                สวัสดีครับ รบกวนขอรายละเอียดเพิ่มเติมครับ
              </Comment.Text>
              <Comment.Actions />
            </Comment.Content>
          </Card>
          <Comment.Group>
            <Comment>
              <Card style={{ width: '650px', backgroundColor: '#edf2f6' }}>
                <Comment.Content>
                  <Comment.Avatar as="a" src="../../../postbox/group-25.png" />
                  <Comment.Author style={{ marginLeft: '2%' }} as="a">
                    บริษัท เอบีซี จำกัด
                  </Comment.Author>
                  <Comment.Metadata>
                    <span>11 มิถุนายน เวลา 15.23 น.</span>
                  </Comment.Metadata>
                  <Comment.Text style={{ marginLeft: '8%' }}>
                    ได้ค่ะ ต้องการเอกสารอะไรเพิ่มคะ
                  </Comment.Text>
                  <Comment.Actions />
                </Comment.Content>
              </Card>
            </Comment>
          </Comment.Group>
        </Comment>
        <div style={{ marginTop: '30%' }}>
          <Form reply>
            <Form.TextArea />
            <Button
              style={{
                width: '210px',
                height: '40px',
                borderRadius: '20px',
                backgroundColor: '#3a7bd5',
              }}
              content="ตอบกลับ"
              primary
            />
          </Form>
        </div>
      </Comment.Group>
    )
  }
}
