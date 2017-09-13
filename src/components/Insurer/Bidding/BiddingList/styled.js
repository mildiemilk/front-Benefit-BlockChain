import styled from 'styled-components';
import { Image } from 'semantic-ui-react';

export const BiddingElement = styled.div`
  width: 100%;
  height: 216px;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 3px 2px 0 rgba(0, 0, 0, 0.09);
  border: solid 1px #cecece;
  padding: 18px;
  margin-bottom: 10px;
`;

export const ContantBid = styled.div`
    width: 100%;
    height: 70px;
    border-radius: 6px;
    background-color: #ffffff;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
    border: solid 1px #d3d3d3;
    padding:10px;
`;

export const Pic = styled.div`
    border-radius: 50%;
    background-color: #5c6879;
    width: 40px;
    height: 40px;
    text-align: center;
    padding: 5%;
    margin: 7%;
    display: inline-block;
    padding
`;

export const StatusDiv = styled.div`
    width: 190px;
    height: 50px;
    border-radius: 6px;
    border: solid 1px #d8d8d8;
    display: inline-block;
    margin: 0px 4px;
    padding: 15px;
`;

export const EmtryStatusDiv = styled.div`
    width: 190px;
    display: inline-block;
    margin: 0px 4px;
`;

export const DisplayOption = styled.div`
  width: 103px;
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
  height: 52px;
  width: 52px;
  }
`;
