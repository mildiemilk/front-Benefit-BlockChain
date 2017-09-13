import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Grid, Image, Container, Icon, Checkbox, Divider } from 'semantic-ui-react';
import { Head, Bar } from './styled';
import artboard1 from '../../image/dashboard/artboard-1.png';
import artboard2 from '../../image/dashboard/artboard-2.png';
import artboard3 from '../../image/dashboard/artboard-3.png';
import artboard5 from '../../image/dashboard/artboard-5.png';
import artboard6 from '../../image/dashboard/artboard-6.png';
import artboard7 from '../../image/dashboard/artboard-7.png';
import { getCompleteStep } from '../../../api/profile-company';


class Dashboard extends Component {
  static propTypes = {
    getCompleteStep: PropTypes.func.isRequired,
    completeStep: PropTypes.arrayOf(PropTypes.bool).isRequired,
  }

  constructor() {
    super();
    this.state = {
      path: [
        '/simplerequirement',
        '/bidding',
        '/chooseinsuranceplan',
        '/selectrealtime',
      ],
      label: [
        '1. แผนประกันภัย',
        '2. ประมูลราคา',
        '3. จัดแผนสิทธิประโยชน์',
        '4. สรุปจำนวนพนักงาน',
      ],
    };
  }

  componentDidMount = () => {
    this.props.getCompleteStep();
  }

  getStep = () => {
    const { completeStep } = this.props;
    const { path, label } = this.state;
    const allStep = completeStep.map((step, number) => {
      const canGo = completeStep.lastIndexOf(true) + 1 === number;
      if (canGo) {
        return (
          <div className="large-3 columns">
            <Link to={{ pathname: path[number] }} >
              <Checkbox keys={number} label={label[number]} checked={step} />
            </Link>
          </div>
        );
      }
      return (
        <div className="large-3 columns">
          <Checkbox keys={number} label={label[number]} checked={step} />
        </div>
      );
    });
    return allStep;
  }

  render() {
    const { completeStep } = this.props;
    let step = '';
    if (completeStep.indexOf(false) !== -1) {
      step = (
        <div>
          <div className="navTop">
            <Icon name="warning sign" size="big" inverted />
            ดำเนินขั้นตอนต่อไปนี้เพื่อใช้งาน BenefiTable
          </div>
          <Bar className="row">
            {this.getStep()}
          </Bar>
        </div>
      );
    }

    return (
      <div className="dashboard">
        {step}
        <Head>
          ยินดีต้อนรับเข้าสู่ BenefiTable
        </Head>
        <Divider />

        <Grid className="dash">
          <Grid.Column width={3} />
          <Grid.Column width={12}>
            <Grid>
              <Grid.Row columns={3}>
                <Grid.Column>
                  <Link to="/dashboard" >
                    <Image
                      className="block"
                      centered
                      src={artboard7}
                      shape="circular"
                    />
                  </Link>
                  <Container textAlign="center"> ลูกค้าของคุณ </Container>
                </Grid.Column>
                <Grid.Column>
                  <Link to="/biddinglist" >
                    <Image
                      className="block"
                      centered
                      src={artboard3}
                      shape="circular"
                    />
                  </Link>
                  <Container textAlign="center"> การเสนอราคา</Container>
                </Grid.Column>
                <Grid.Column>
                  <Link to="/claim" >
                    <Image className="block" src={artboard2} shape="circular" />
                  </Link>
                  <Container textAlign="center"> รายการเคลม </Container>
                </Grid.Column>
              </Grid.Row>
              <Grid.Row columns={3}>
                <Grid.Column>
                  <Link to="/plan" >
                    <Image className="block" src={artboard1} shape="circular" />
                  </Link>
                  <Container textAlign="center"> แผนประกันภัย </Container>
                </Grid.Column>
                <Grid.Column>
                  <Link to="/profile" >
                    <Image className="block" src={artboard5} shape="circular" />
                  </Link>
                  <Container textAlign="center"> โปรไฟล์ของคุณ </Container>
                </Grid.Column>
                <Grid.Column>
                  <Link to="/setting" >
                    <Image className="block" src={artboard6} shape="circular" />
                  </Link>
                  <Container textAlign="center"> ตั้งค่า </Container>
                </Grid.Column>
              </Grid.Row>
            </Grid>

          </Grid.Column>
          <Grid.Column width={3} />
        </Grid>

      </div>
    );
  }
}
const mapDispatchToProps = dispatch => ({
  getCompleteStep: () => dispatch(getCompleteStep()),
});

const mapStateToProps = state => ({
  completeStep: state.profile.completeStep,
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
