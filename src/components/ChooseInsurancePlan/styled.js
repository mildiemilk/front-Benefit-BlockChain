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
export const TextInbox = styled.p`
    position: relative;
    left:65px;
    top: -10px;
    font-family: Kanit;
    font-size: 15px;
    letter-spacing: 0.2px;
    color: #323028;
`
export const Inboxtext = styled.p`
    font-size: 20px;
    color: #ffffff;
  	letter-spacing: 0.3px;
    padding-left: 5%;
    padding-top: 4%;
    text-align: center;
`
export const Inner = styled.div`
    display: inline-block;
    width: 450px;
    height: 650px;
    border-radius: 5px;
    background-color: #ffffff;
    background-color: var(--white-two);
    box-shadow: 0 3px 2px 0 rgba(0, 0, 0, 0.09);
    border: solid 1px #cecece;
    margin-right: 10px;
`
export const InnerHead = styled.div`
    width: 449px;
    height: 60px;
    border-radius: 5px 5px 0px 0px;
    background-color: #5c6879;
`

export const InnerRight = styled.div`

    position: relative;
    top:-650px;
    left:470px;
    width: 450px;
    height: 650px;
    padding:10px;
    border-radius: 5px;
    background-color: #ffffff;
    background-color: var(--white-two);
    box-shadow: 0 3px 2px 0 rgba(0, 0, 0, 0.09);
    border: solid 1px #cecece;

`
export const InnerHead2 = styled.div`
      position: relative;
      top:-10px;
      left: -10px;
      width: 449px;
      height: 60px;
      border-radius: 5px 5px 0px 0px;
      background-color: #3a7bd5;
`
export const ManagePlan = styled.div`
  width: 427px;
  height: 60px;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: #f2f2f2;
  border: solid 1px #e6e6e6;
  padding: 8px;
`
export const Submit = styled.button`
    position: relative;
    right: -700px;
    top:  -640px;
    height: 40px;
    width: 164px;
    height: 40px;
    border-radius: 20px;
    color: #ffffff;
    background-color: #f7555f;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
    text-align: center;
    border-style: solid;
    color: #ffffff;
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
  width: 427px;
  height: 50px;
  border-radius: 5px;
  border-style: dashed;
  border-color:#9b9b9b;
  padding:10px;
  
`
export const EmptyPlanText = styled.p`

    text-align: center;
    top:auto;
    font-weight: 500;
    font-size: 15px;
    letter-spacing: 0.2px;
    color: #9b9b9b;
`
