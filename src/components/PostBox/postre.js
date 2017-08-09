import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import moment from 'moment'
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

const CardDescription = styled(Card.Description)`
  &&&{
    max-width: 100%;
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
    const { numberOfEmployee, typeOfInsurance, date, IPD, OPD, dental,
            other, otherDes, life } = this.props.data
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
              <CardDescription>
                <TopSpace className="row">
                  <div className="large-5 columns">
                    <strong>
                      <PostreText>จำนวนพนักงานที่ต้องการแผนประกัน</PostreText>
                    </strong>
                  </div>
                  <div className="large-7 columns">
                    {' '}
                    <PostreText>{numberOfEmployee}</PostreText>
                    {' '}
                  </div>
                </TopSpace>

                <TopSpace className="row">
                  <div className="large-5 columns">
                    <strong>
                      <PostreText>รูปแบบประกันที่ต้องการ</PostreText>
                    </strong>
                  </div>
                  <div className="large-7 columns">
                    <PostreText>{typeOfInsurance}</PostreText>
                  </div>
                </TopSpace>

                <TopSpace className="row">
                  <div className="large-5 columns">
                    <strong>
                      <PostreText>อัพโหลดแผนประกันที่ใช้ในปัจจุบัน</PostreText>
                    </strong>
                  </div>
                  <div className="large-7 columns">
                    <PostreText>Insurance_Plan_2016.pdf</PostreText>
                  </div>
                </TopSpace>

                <TopSpace className="row">
                  <div className="large-5 columns">
                    <strong>
                      <PostreText>วันหมดอายุกรมธรรม์</PostreText>
                    </strong>
                  </div>
                  <div className="large-7 columns">
                    {' '}
                    <PostreText>{moment(date).locale('th')
                  .format('DD MMMM YYYY')}</PostreText>
                  </div>
                </TopSpace>

                <TopSpace className="row">
                  <div className="large-5 columns">
                    <strong>
                      <strong>
                        <PostreText>แผนประกันที่ต้องการ</PostreText>
                      </strong>
                    </strong>
                  </div>
                  <div className="large-7 columns">
                    <PostreText>
                      <Checkboxs
                        label="ค่ารักษาพยาบาลกรณีผู้ป่วยใน (IPD)"
                        checked={IPD}
                      />
                      <br />
                    </PostreText>
                    <PostreText>
                      <Checkboxs
                        label="ค่ารักษาพยาบาลกรณีผู้ป่วยนอก (OPD)"
                        checked={OPD}
                      />
                      <br />
                    </PostreText>
                    <PostreText>
                      <Checkboxs
                        label="ค่ารักษาทันตกรรม (Dental)"
                        checked={dental}
                      />
                      <br />
                    </PostreText>
                    <PostreText>
                      <Checkboxs
                        label="ประกันชีวิต (Life)"
                        checked={life}
                      />
                      <br />
                    </PostreText>
                    <PostreText>
                      <Checkboxs
                        label="อื่นๆ: &nbsp;"
                        checked={other}
                      />
                      {otherDes}
                    </PostreText>
                  </div>
                </TopSpace>

              </CardDescription>
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
