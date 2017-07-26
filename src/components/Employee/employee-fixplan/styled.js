import styled from 'react-sc'
import { Image } from 'semantic-ui-react'

export const Submit = styled.button`
    height: 40px;
    width: 100%;
    border-radius: 20px;
    color: #ffffff;
    background-color: #3a7bd5;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
    text-align: center;
    border-style: solid;
    margin-bottom: 32px;
    margin-top:10px;
`
export const BoxStyle = styled.div`
  width: 100%;
  height: 110px;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(137, 137, 137, 0.5);
  margin-bottom: 8px;
`

export const HeaderBox = styled.div`
  width: 100%;
  border-radius: 5px 5px 0px 0px;
  height: 29px;
  background-color: #c8ddf6;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.43;
  letter-spacing: 0.3px;
  color: #3a7bd5;
  padding-left: 4%;
    padding-top: 7px;
`
export const HeaderBoxRight = styled.p`
  font-size: 11px;
  line-height: 2;
  letter-spacing: 0.2px;
  text-align: right;
`
export const DataStyle = styled.div`
  padding-left: 7%;
  padding-top: 5%;
  font-size: 73%;
  text-align: left;
  line-height: 1.55;
  letter-spacing: 0.3px;
`
export const ImageInbox = styled(Image)`
  &&&{
    height: 100%;
    width: 100%;
    display:inline-block;
    margin-top: 15%;
  }
`