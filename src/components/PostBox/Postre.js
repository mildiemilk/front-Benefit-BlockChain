import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { PostreText } from './Styled'
import { Card, Image, Checkbox } from 'semantic-ui-react'

export default class Postre extends Component {
  render() {
    return (
      <div>
        <Card.Group>
          <Card style={{ width: '1000px' }}>
            <Card.Content>
              <Image
                floated="left"
                size="mini"
                src="../../../postbox/group-25.png"
              />
              <Card.Header>
                บริษัท เอบีซี จำกัด
              </Card.Header>
              <Card.Meta>
                11 มิถุนายน เวลา 11.04 น.
              </Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <Card.Description>
                <strong>
                  <PostreText>จำนวนพนักงานที่ต้องการแผนประกัน :</PostreText>
                </strong>
                {' '}
                <PostreText>1300</PostreText>
                {' '}
                <br />
                <br />
                <strong>
                  <PostreText>รูปแบบประกันที่ต้องการ :</PostreText>
                </strong>
                <PostreText> Fixed Plan </PostreText>
                <br />
                <br />
                <strong>
                  <PostreText>อัพโหลดแผนประกันที่ใช้ในปัจจุบัน :</PostreText>
                </strong>
                <PostreText> Insurance_Plan_2016.pdf</PostreText>
                <br />
                <br />
                <strong><PostreText>แผนประกันที่ต้องการ :</PostreText></strong>
                <PostreText><Checkbox label="OPD" /></PostreText>
                <PostreText><Checkbox label="IPD" /></PostreText>
                <PostreText><Checkbox label="Dental" /></PostreText>
                <PostreText><Checkbox label="Life" /></PostreText>
              </Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
      </div>
    )
  }
}
