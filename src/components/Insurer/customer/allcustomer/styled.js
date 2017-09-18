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
  }
`;
