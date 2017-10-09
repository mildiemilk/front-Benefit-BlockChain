import { Icon, Popup } from 'semantic-ui-react';
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
  height: 130px;
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
  margin-bottom: 10px;
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
  background-color: ${props => props.color};
  border: solid 1px #979797;
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
  width: 79px;
  height: 79px;
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
  font-size: 35px;
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
export const FontTime = styled(FontNum)`
  &&& {
  font-size: 35px;
  color: #505050;
  top: ${props => props.top};
  position: absolute;
  }
`;
export const TextNav = styled.div`
  margin-top: 1%;
  display: inline-block;
`;

export const CountTime = styled.div`
  display: inline-block;
  font-size: 35px;
  color: #323028;
`;
export const DivCountDown = styled.div`
  display: flex;
  flex-direction: column;
`;
export const DisplayTime = styled.div`
  display: none;
`;
export const DisplayTimeout = styled.div`
  color: #f7555f;
  font-size: 39px;
`;
export const ButtonStatusCancle = styled.div`
  width: 100%;
  height: 41px;
  border-radius: 30px;
  background-color: #9b9b9b;
  color: white;
  margin-left: -10px;
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

export const Unit = styled.div`
  font-size: 14px;
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;
