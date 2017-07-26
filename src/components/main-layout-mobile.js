import React from 'react'
import { push as Menu } from 'react-burger-menu'
import styled from 'react-sc'
import { Divider, Icon } from 'semantic-ui-react'
const List = styled.div`
  font-size: 16px;
	letter-spacing: 0.3px;
  font-weight: 300;
	color: #4a4a4a;
  padding: 6% 10%;
  &:active,&:hover,&:focus{
    background: #c8ddf6;
  }
`
const Number = styled.div`
  font-size: 12px;
	letter-spacing: 0.3px;
  font-weight: 300;
  color: #323028;
`
const Head = styled.div`
  font-size: 16px;
  font-weight: 500;
	letter-spacing: 0.3px;
	color: #323028;
  margin-top:10%; 
`
const HeadDiv = styled.div`
  padding-left: 10%;
  padding-top: 15%;
`
const SettingDiv = styled.div`
  margin-top: 36%;
`
const Dividers = styled(Divider)`
  &&&{
    height: 2px;
	  border: solid 1px #f0f0f0;
    margin: 8% 0%;
  }
`

class SideBar extends React.Component {
  constructor() {
    super()
    this.state = {
      isClosed: true
    }
  }
  showSettings = (event) => {
    event.preventDefault();
  }

  hamburger_cross = () => {
    const { isClosed } = this.state
    if (isClosed) {
      this.setState({ isClosed: false })
    }
    else {
      this.setState({ isClosed: true })
    }
  }

  OverlayStyle = (isClosed) => {
    if (isClosed == false) {
      return 'is-open'
    }
  }

  render() {
    return (
      <div>
        <Menu burgerButtonClassName={this.OverlayStyle(this.state.isClosed)} onStateChange={this.hamburger_cross} width={'230px'} pageWrapId={"page-wrap"} >
          <HeadDiv>
            <Icon name='user circle' size='huge'/>
            <Head>สมศรี ช่างสงสัย</Head>
            <Number>เลขพนักงาน : 0000001</Number>
          </HeadDiv>
          <Dividers />
          <div>
            <List>สิทธิประโยชน์ของฉัน</List>
            <List>เคลม</List>
            <List>สถานะการเคลม</List>
            <List>ประวัติการเคลม</List>
            <List>ค้นหาโรงพยาบาล</List>
            <List>โปรไฟล์</List>
          </div>
          <SettingDiv>
            <List>ตั้งค่า</List>
            <List>ออกจากระบบ</List>
          </SettingDiv>
        </Menu>
      </div>
    );
  }
}

export default SideBar
