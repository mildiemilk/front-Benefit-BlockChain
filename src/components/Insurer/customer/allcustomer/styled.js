import styled from 'styled-components';
import { Image, Icon, Popup } from 'semantic-ui-react';

export const Nav = styled.div`
  margin: 10px 15px;
  width: 45%;
  display: inline-block;
  height: 199px;
  border-radius: 6px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.12);
  border: solid 1px #d3d3d3;
  position: relative;
`;
export const Navmanage = styled.div`
  margin: 10px 15px;
  width: 95%;
  display: inline-block;
  height: 100px;
  border-radius: 6px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.12);
  border: solid 1px #d3d3d3;
  position: relative;
`;
export const Headtext = styled.div`
  padding-top: 20px;
  display: inline-block;
  font-size: 32px;
`;
export const Head = styled.p`
  margin-bottom: 0px;
  padding-top:24px;
  font-size: 20px;
`;
export const DisplayOption = styled.div`
  height: 40px;
  border-radius: 8px;
  border: solid 1px #bfbfbf;
  display:inline-block;
  margin: 0px 4px;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  font-size: 13px;
`;

export const DisplaySide = styled.div`
  height: 40px;
  display:inline-block;
  margin: 0px 4px;
  padding: 10px;
  text-align: center;
`;

export const ImageCompany = styled(Image)`
  &&& {
  height: 54px;
  width: 54px;
  margin-right: 10px;
  float: left;
  }
`;
export const Font = styled.div`
  font-size: 16px;
  display: inline-block;
  position: absolute;
  bottom: 62%;
  left: 36%;
`;
export const FontAucTime = styled(Font)`
  &&& {
  font-size: 16px;
  }
`;
export const Pic = styled.div`
  border-radius: 50%;
  background-color: #5c6879;
  width: 60px;
  height: 60px;
  text-align: center;
  padding: 5%;
  margin: 7%;
  display: inline-block;
`;
export const FontNum = styled.div`
  font-size: 20px;
  display: inline-block;
  position: absolute;
  bottom: 37%;
  left: 36%;
`;
export const TextNav = styled.div`
  margin-top: 1%;
`;
export const TextIn = styled.div`
  text-align: center;
  font-size: 14px;
  color: #515151;
`;
export const InSide = styled.div`
  margin: 30px 0px;
  margin-left: 40px;
`;
export const TextSide = styled.div`
  padding-left: 16%;
  text-align: center;
  font-size: 16px;
`;
export const List = styled.div`
  float: left !important;
  margin-right: 16px;
  margin-top: 16px;
  width: 296.5px !important;
  height: 70px;
  border-radius: 5px;
  background-color: ${props => props.color};
  border: solid 1px #979797;
  background-color: #d8d8d8;
  position: relative;
`;
export const IconPlan = styled(Icon)`
  &&&{
  position: absolute;
  top: 19px;
  left: 21px;
  }
`;

export const DetailList = styled.div`
  display: inline-block;
  position: absolute;
  top: 16px;
  left: 60px;
`;

export const PopupList = styled.div`
  position: absolute;
  bottom: 35%;
  left: 85%;
  cursor: pointer;
`;
export const TextLine = styled.div`
  font-size: 16px;
`;
export const TextInsure = styled.div`
  font-size: 16px;
  display: inline-block;
`;
export const Special = styled.div`
  display: inline-block;
  background-color: #f7555f;
  color: white;
  font-size: 14px;
  text-align: center;
  padding: 0% 3%;
  margin-left: 4%;
`;
export const BoxDetail = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 3px 2px 0 rgba(0, 0, 0, 0.08);
  border: solid 1px #cecece;
`;
export const ButtonPlan = styled.div`
  height: 40px;
  width: 165px;
  color: white;
  border-radius: 20px;
  background-color: ${props => props.next ? '#46b3b8' : '#d8d8d8'};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 21px 0px;
  cursor: pointer;
  float: right;
  margin:  ${props => props.margin};
`;
export const CustomerName = styled.div`
  margin: 0px 20px;
  display: inline-block;
  font-size: 16px;
  text-align: left;
`;
export const displayTag = styled.div`
border-radius: 50px;
color: white;
background-color: ${props => props.color};
width: 80%;
height: 20px
text-align: center;
border: solid 1px #d8d8d8;
`;
export const StatusTag = styled.div`
  border-radius: 6px;
  color: white;
  background-color: ${props => props.color};
  width: 80%;
  text-align: center;
`;
export const TextElip = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
`;
export const PopupView = styled(Popup)`
  &&&{
  cursor: pointer;
  background: #3a7bd5;
  &::before {
    background: #3a7bd5;
  }
  color: white;
  }
`;
