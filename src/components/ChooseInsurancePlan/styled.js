import styled from 'react-sc'
import { Image, Accordion } from 'semantic-ui-react'
import Dropzone from 'react-dropzone'
import _ from 'lodash'
export const Detail = styled.div`
    border-radius: 5px;
    background-color: #ffffff;
    box-shadow: 0 1px 7px 2px rgba(0, 0, 0, 0.08);
    margin-top:3%;
    padding: 5%;
    padding-top: 25px;
    height: 850px;

`

export const Head = styled.p`
    font-size: 30px;
  	letter-spacing: 0.4px;
    font-weight: bold;

`
export const TextInbox = styled.div`
    position: relative;
    left:65px;
    top: -10px;
    font-family: Kanit;
    font-size: 15px;
    letter-spacing: 0.2px;
    color: #323028;
`
export const Inboxtext = styled.div`
    font-size: 20px;
    color: #ffffff;
  	letter-spacing: 0.3px;
    padding-left: 5%;
    padding-top: 4%;
    text-align: center;
`
export const Inner = styled.div`
    display: inline-block;
    width: 100%;
    height: 650px;
    border-radius: 5px;
    background-color: #ffffff;
    background-color: var(--white-two);
    box-shadow: 0 3px 2px 0 rgba(0, 0, 0, 0.09);
    border: solid 1px #cecece;
    margin-right: 10px;
`
export const InnerHead = styled.div`
    width: 100%;
    height: 60px;
    border-radius: 5px 5px 0px 0px;
    background-color: #5c6879;
`

export const InnerRight = styled.div`

    width: 100%;
    height: 650px;
    border-radius: 5px;
    background-color: #ffffff;
    background-color: var(--white-two);
    box-shadow: 0 3px 2px 0 rgba(0, 0, 0, 0.09);
    border: solid 1px #cecece;

`
export const InnerHead2 = styled.div`

      width: 100%;
      height: 60px;
      border-radius: 5px 5px 0px 0px;
      background-color: #3a7bd5;
`
export const ManagePlan = styled.div`
  width: 95%;
  height: 60px;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: #f2f2f2;
  border: solid 1px #e6e6e6;
  padding: 8px;
  margin: 10px;
`
export const Submit = styled.button`
    position: relative;
    left:60%;
    top:  15px;
    height: 40px;
    width: 164px;
    border-radius: 20px;
    color: #ffffff;
    background-color: #f7555f;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
    text-align: center;
    border-style: solid;
`
export const AccordionStyle = styled(Accordion)`
  &&&{
    background-color: #f3f3f3;
  }
`
export const AccordionStyle2 = styled(Accordion)`
  &&&{
    background: #c0ccda;
  }
`
export const ImageIcon1 = styled(Image)`
  &&&{
     position: relative;
     left:35px;
     top:30px;
     width: 25px;
     height: 25px;
  }
`
export const ImageIcon2 = styled(Image)`
  &&&{
     position: relative;
     left: 0px;
     top: -32px;
     width: 25px;
     height: 27px;
  }
`
export const EmptyPlan = styled.div`
  margin: 8px;
  width: 97%;
  height: 50px;
  border-radius: 5px;
  border-style: dashed;
  border-color:#9b9b9b;
  padding:10px;

`
export const EmptyPlanText = styled.div`
    text-align: center;
    top:auto;
    font-weight: 500;
    font-size: 15px;
    letter-spacing: 0.2px;
    color: #9b9b9b;
`

//----------------------------------------------------------------------------------------------

export const Header = styled.span`
  width: 253px;
  height: 30px;
  font-size: 20px;
  letter-spacing: 0.3px;
  text-align: left;
  color: #323028;
  font-weight: bold;
`

export const HeaderSpace = styled.div`
  margin-top: 15px;
  margin-bottom: 30px;
`

export const Rec = styled.div`
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 1px 7px 2px rgba(0, 0, 0, 0.08);
  padding-top: 3%;
  padding-bottom: 5%;
`

export const Blog = styled.div`
  width: 100%;
  height: 209.9px;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: #ffffff;
  background-color: var(--white-two);
  box-shadow: 0 1px 7px 2px rgba(0, 0, 0, 0.08);
  border: solid 1px #979797;
`

export const Blogs = styled.div`
  width: 100%;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: #ffffff;
  background-color: var(--white-two);
  box-shadow: 0 1px 7px 2px rgba(0, 0, 0, 0.08);
  padding: 20px;
`

export const PlanName = styled.span`
  width: 149px;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.2px;
  text-align: left;
  color: #323028;
`

export const NameInput = styled.input`
  width: 77%;
  height: 40px;
  border-radius: 3px;
  background-color: #ffffff;
  background-color: var(--white-two);
  border: solid 1px #dddddd;
  padding: 1%;
  margin-left: 1%;
`

export const BlogImg = styled.img`
  width: 70px;
  height: 70px;
  opacity: 0.5;
  position: absolute;
  left: 62%;
  margin-top: 65px;
`

export const BlogContent = styled.span`
  width: 200px;
  height: 21px;
  opacity: 0.5;
  font-size: 14px;
  letter-spacing: 0.2px;
  text-align: center;
  color: #9b9b9b;
  position: absolute;
  margin-left: 220px;
  margin-top: 10%;
`

export const AddPlan = styled.div`
  width: 110%;
  height: 50px;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  background-color: #e4e4e4;
  box-shadow: 0 1px 7px 2px rgba(0, 0, 0, 0.08);
  border-color: #e4e4e4;
  border-style: solid;
  text-align: center;
  padding-top: 12px;
  cursor: pointer;
`

export const AddContent = styled.span`
  width: 145px;
  height: 24px;
  font-size: 12px;
  font-weight: 500;
  letter-spacing: 0.2px;
  text-align: left;
  color: #9b9b9b;
`

export const AddTopic = styled.span`
  width: 145px;
  height: 24px;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0.3px;
  text-align: center;
`

export const BackButton = styled.button`
  width: 164px;
  height: 40px;
  border-radius: 20px;
  background-color: #f7555f;
  color: #ffffff;
  border-color: #f7555f;
  border-style: solid;
  margin-top: 25px;
`

export const NextButton = styled.button`
  width: 164px;
  height: 40px;
  border-radius: 20px;
  background-color: #46b3b8;
  color: white;
  border-color: #46b3b8;
  border-style: solid;
  margin-top: 25px;
`

export const SaveButton = styled.button`
  width: 164px;
  height: 40px;
  border-radius: 20px;
  background-color: #3a7bd5;
  color: #ffffff;
  border-color: #3a7bd5;
  border-style: solid;
  margin-top: 3%;
  margin-left: 72%;
`

export const Line = styled.hr`
  width: 100%;
  height: 2px;
  border: solid 1px #c3c3c3;
  margin: 3% 0;
`

export const PlanContent = styled.p`
  width: 190px;
  font-size: 14px;
  letter-spacing: 0.2px;
  text-align: left;
  color: #4a4a4a;
`

export const PlanBox = styled.div`
  width: 100%;
  height: 76px;
  border-radius: 5px;
  background-color: #ffffff;
  border: solid 1px #c1c1c1;
  position: relative;
  margin-top: 18px;
  &::before {
        content: "";
    width: 22px;
    height: 74px;
    border-top-left-radius: 5px;
    border-bottom-left-radius: 5px;
		background: #3a7bd5;
		position: absolute;
    }
`

export const PlanImg = styled.img`
  width: 50px;
  height: 50px;
  position: absolute;
  margin-left: 4.5%;
  margin-top: 2.1%;
`

export const PlanTopic = styled.span`
  width: 250px;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 0.2px;
  text-align: left;
  color: #4a4a4a;
  position: absolute;
  margin-left: 14%;
  margin-top: 4.5%;
`

export const ToggleBox = styled.div`
  width: 54px;
  height: 38px;
  border-radius: 5px;
  background-color: #ececec;
  margin-left: 51%;
  margin-top: 18px;
  padding-top: 8px;
  padding-left: 6px;
`

export const ModalHeader = styled.p`
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.4px;
  text-align: center;
  color: #323028;
`

export const ModalTopic = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #323028;;
  letter-spacing: 0.3px;
  text-align: left;
`

export const ModalContent = styled.p`
  width: 300px;
  height: 24px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.3px;
  text-align: left;
  color: #323028;
`

export const EditButton = styled.button`
    width: 40%;
    height: 40px;
    border-radius: 20px;
    color: #ffffff;
    background-color: #f7555f;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
    border-color: #f7555f;
    border-style: solid;
    color: #ffffff;
`

export const PostButton = styled.button`
    width: 40%;
    height: 40px;
    border-radius: 20px;
    color: #ffffff;
    background-color: #3a7bd5;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
    border-color: #3a7bd5;
    border-style: solid;
    color: #ffffff;
    margin-left: 2%;
`

export const PostMainButton = styled.button`
    width: 174px;
    height: 40px;
    border-radius: 20px;
    background-color: #f7555f;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
    border-color: #f7555f;
    border-style: solid;
    color: #ffffff;
    margin-left: 82%;
`

export const LineModal = styled.hr`
  width: 100%;
  height: 1px;
  color: #979797;
`

export const TableHeader = styled.p`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: #323028;
`

export const LifeTopic = styled.span`
  width: 249px;
  height: 25px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.56;
  letter-spacing: 0.2px;
  text-align: left;
  color: #4a4a4a;
  position: absolute;
  margin-left: -30%;
  margin-top: 2.5%;
`

export const TextInBoxs = styled.span`
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  color: #323028;
`

export const OPDTopic = styled.span`
  width: 100%px;
  height: 25px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.56;
  letter-spacing: 0.2px;
  text-align: left;
  color: #4a4a4a;
  position: absolute;
  margin-left: -30%;
  margin-top: 1.2%;
`

export const IPDTopic = styled.span`
  width: 100%;
  height: 25px;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.56;
  letter-spacing: 0.2px;
  text-align: left;
  color: #4a4a4a;
`

export const IPDDetail = styled.span`
  width: 344px;
  height: 48px;
  font-size: 12px;
  font-weight: 300;
  letter-spacing: 0px;
  text-align: left;
  color: #323028;
  position: relative;
  left: 4%;
`

export const HiddenBox = styled.div`
  color: #323028;
  height: 73px;
  width: 628px;
  border-bottom: solid 1px #979797;
  border-right: solid 1px #979797;
  border-left: solid 1px #979797;
`

export const HiddenContent = styled.span`
  width: 600px;
  height: 25px;
  font-size: 14px;
  color: #323028;
  position: absolute;
  margin-top: 15px;
  margin-left: 1%;
`

export const Img = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  margin-left: 2%;
  margin-right: 73%;
  margin-top: 2%;
`

export const Sub = styled.span`
  width: 100%;
  height: 18px;
  font-size: 10px;
  font-weight: 300;
  letter-spacing: 0px;
  text-align: left;
  color: #323028;
`
