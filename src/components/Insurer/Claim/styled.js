import { Icon, Popup, Image } from 'semantic-ui-react';
import styled from 'styled-components';

export const Head = styled.p`
  margin-bottom: 0px;
  padding-top:24px;
  font-size: 30px;
`;
export const Text = styled.div`
  text-align: center;
  font-size: 14px;
`;
export const TextIn = styled.div`
  text-align: center;
  font-size: 14px;
  color: #515151;
`;

export const Nav = styled.div`
height: 200px;
  border-radius: 6px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.12);
  border: solid 1px #d3d3d3;
  /* position: relative; */
  display: inline-block;
  width: 100%;
  margin: 5px;
`;
export const NavClaim = styled.div`
  height: 150px;
  border-radius: 6px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
  border: solid 1px #d3d3d3;
  position: relative;
`;
export const NavDetail = styled.div`
  border-radius: 6px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
  border: solid 1px #d3d3d3;
  position: relative;
`;

export const Card = styled.div`
  height: 84px;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 3px 2px 0 rgba(0, 0, 0, 0.08);
  border: solid 1px #cecece;
  padding: 3.2% 0%;
  position: relative;
  overflow: hidden;
  &::before {
      content: "";
  width: 17px;
  background: #29C393;
  position: absolute;
  height: 100%;
  top: 0;
  }
`;

export const BoxDetail = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 3px 2px 0 rgba(0, 0, 0, 0.08);
  border: solid 1px #cecece;
`;
export const Back = styled.div`
  font-size: 20px;
  letter-spacing: 0.3px;
  color: #bfbfbf;
  margin-bottom: 24px;
  cursor: pointer;
`;

export const IconPointer = styled(Icon)`
  cursor: pointer;
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

export const HeadBar = styled.div`
  width: 100%;
  height: 50px;
  background: #3a7bd5;
  padding: 1.5% 0%;
  padding-left: 4%;
`;
export const TextLine = styled.div`
  font-size: 16px;
`;

export const List = styled.div`
  float: left !important;
  margin-right: 16px;
  margin-top: 16px;
  width: 296.5px !important;
  height: 70px;
  border-radius: 5px;
  background-color: #d8d8d8;
  border: solid 1px #979797;
  position: relative;
`;
export const IconPlan = styled(Icon)`
  &&&{
  margin:7% ;
  display: absolute;
  }
`;

export const DetailList = styled.div`
  display: inline-block;
  position: absolute;
  top: 16px;
`;

export const PopupList = styled.div`
  position: absolute;
  bottom: 35%;
  left: 85%;
  cursor: pointer;
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

export const HeadList = styled.div`
  color: white;
  font-size: 16px;
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
export const TextInsure = styled.div`
  font-size: 16px;
  display: inline-block;
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
export const FontNum = styled.div`
  font-size: 40px;
  display: inline-block;
  position: absolute;
  bottom: 37%;
  left: 36%;
`;
export const FontNumAucTime = styled(FontNum)`
  &&& {
  font-size: 35px;
  color: #505050;
  }
`;
export const TextNav = styled.div`
  margin-top: 1%;
`;

export const CountTime = styled.div`
  display: inline-block;
  font-size: 35px;
  color: #323028;
`;

export const DisplayTime = styled.div`
  display: none;
`;
export const DisplayTimeout = styled.div`
  color: #f7555f;
  font-size: 45px;
`;
export const ButtonStatusCancle = styled.div`
  width: 80%;
  height: 41px;
  border-radius: 30px;
  background-color: #9b9b9b;
  color: white;
  margin-left: 12%;
  margin-top: -7%;
  padding: 7%;
`;
export const ButtonNew = styled.button`
  width: 174px;
  height: 40px;
  border-radius: 20px;
  background-color: #f7555f;
  font-size: 120%;
  border-color: #f7555f;
  border-style: solid;
  color: #ffffff;
  position: absolute;
  margin-top: 1.5%;
  margin-left: 43%;
`;
export const Companies = styled.div`
  margin-top: 12px;
  float: left;
  display: block;
  height: 110px;
`;
export const ProfileImg = styled.div`
  width: 54px;
  height: 54px;
  border-radius: 50%;
  background-color: red;
  margin-right: 10px;
`;
export const CompaniesInfo = styled.div`
  position: relative;
  display: block;
`;
export const StyleStatus = styled.div`
  padding-top: 40px;
  padding-left: 20px;
`;
export const DivImg = styled.div`
  width: 39.8px;
  height: 39.8px;
  border-radius: 5px;
  background-color: #ffffff;
  border: solid 1px #d7d7d7;
  display: inline-block;
  text-align: center;
  padding-top: 8px;
  cursor: pointer;
`;
export const FileuploadBox = styled.div`
  margin-bottom: 10px;
  margin-top: 19px;
  padding:8px;
  width: 100%;
  height: 40px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
  border: solid 1px rgba(155, 155, 155, 0.64);
`;
export const FileuploadBoxs = FileuploadBox.extend`
  margin-top: 12px;
`;
export const Upload = styled.div`
  margin-left: 8px;
  width: 100px;
  margin: -10px;
`;
export const BrowsButton = styled.label`
  border-radius: 20px;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  -ms-border-radius: 20px;
  background-color: #3a7bd5;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
  text-align: center;
  border-color: #3a7bd5;
  border-style: solid;
  color: #ffffff;
  padding: 4% 20%;
  cursor: pointer;
  margin-right: 10px;
  display: block;
  width: 100%;
`;
export const TextNormal = styled.div`
  font-family: Kanit;
  font-size: 14px;
  letter-spacing: 0.2px;
  text-align: left;
  color: #323028;
  padding-left: 2%;
  padding-bottom: 2%;
  padding-top: 27px;
  margin-left: 19px;
`;

export const Headtext = styled.div`
  padding-top: 20px;
  display: inline-block;
  font-size: 32px;
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
  border-radius: 50%;
  }
`;
export const StatusTag = styled.div`
  border-radius: 6px;
  color: white;
  background-color: ${props => props.color};
  width: 80%;
  text-align: center;
`;
export const ListDetail = styled.div`
  font-size: 14px;
  letter-spacing: 0.3px;
  color: #323028;
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
`;
