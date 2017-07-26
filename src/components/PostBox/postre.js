import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'react-sc'
import PropTypes from 'prop-types'
import { Card, Image, Checkbox } from 'semantic-ui-react'
import { PostreText, TopSpace } from './styled'

const CardHeader = styled(Card)`
  &&&{
    margin: 0 0 0 0;
    padding-top: 0.2%;
    font-size: 20px;
    box-shadow: 0 0 0 0;
  }
`

const Checkboxs = styled(Checkbox)`
  &&&{
    margin-bottom: 5px;
  }
`

class Postre extends Component {
  static propTypes = {
    data: PropTypes.shape.isRequired,
  }

  constructor() {
    super()
    this.state = {}
  }

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
              <CardHeader>
                บริษัท เอบีซี จำกัด
              </CardHeader>
              <Card.Meta>
                11 มิถุนายน เวลา 11.04 น.
              </Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <Card.Description>
                <TopSpace className="row">
                  <div className="large-4 columns">
                    <strong>
                      <PostreText>จำนวนพนักงานที่ต้องการแผนประกัน</PostreText>
                    </strong>
                  </div>
                  <div className="large-8 columns">
                    {' '}
                    <PostreText>{this.props.data.numberOfEmployee}</PostreText>
                    {' '}
                  </div>
                </TopSpace>

                <TopSpace className="row">
                  <div className="large-4 columns">
                    <strong>
                      <PostreText>รูปแบบประกันที่ต้องการ</PostreText>
                    </strong>
                  </div>
                  <div className="large-8 columns">
                    <PostreText>{this.props.data.typeOfInsurance}</PostreText>
                  </div>
                </TopSpace>

                <TopSpace className="row">
                  <div className="large-4 columns">
                    <strong>
                      <PostreText>อัพโหลดแผนประกันที่ใช้ในปัจจุบัน</PostreText>
                    </strong>
                  </div>
                  <div className="large-8 columns">
                    <PostreText>Insurance_Plan_2016.pdf</PostreText>
                  </div>
                </TopSpace>

                <TopSpace className="row">
                  <div className="large-4 columns">
                    <strong>
                      <PostreText>วันหมดอายุกรมทัน</PostreText>
                    </strong>
                  </div>
                  <div className="large-8 columns">
                    {' '}
                    <PostreText>{this.props.data.day}</PostreText>
                    {'/'}
                    <PostreText>{this.props.data.month}</PostreText>
                    {'/'}
                    <PostreText>{this.props.data.year}</PostreText>
                  </div>
                </TopSpace>

                <TopSpace className="row">
                  <div className="large-4 columns">
                    <strong>
                      <strong>
                        <PostreText>แผนประกันที่ต้องการ</PostreText>
                      </strong>
                    </strong>
                  </div>
                  <div className="large-8 columns">
                    <PostreText>
                      <Checkboxs
                        label="ค่ารักษาพยาบาลกรณีผู้ป่วยใน (IPD)"
                        checked={this.props.data.IPD}
                      />
                      <br />
                    </PostreText>
                    <PostreText>
                      <Checkboxs
                        label="ค่ารักษาพยาบาลกรณีผู้ป่วยนอก (OPD)"
                        checked={this.props.data.OPD}
                      />
                      <br />
                    </PostreText>
                    <PostreText>
                      <Checkboxs
                        label="ค่ารักษาทันตกรรม (Dental)"
                        checked={this.props.data.dental}
                      />
                      <br />
                    </PostreText>
                    <PostreText>
                      <Checkboxs
                        label="ประกันชีวิต (Life)"
                        checked={this.props.data.life}
                      />
                      <br />
                    </PostreText>
                    <PostreText>
                      <Checkboxs
                        label="อื่นๆ: &nbsp;"
                        checked={this.props.data.other}
                      />
                      {this.props.data.otherDes}
                    </PostreText>
                  </div>
                </TopSpace>

              </Card.Description>
            </Card.Content>
          </Card>
        </Card.Group>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  data: state.fillsimpleReducer,
})

export default connect(mapStateToProps, null)(Postre)
