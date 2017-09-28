import styled from 'styled-components';
import { Image } from 'semantic-ui-react';

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
