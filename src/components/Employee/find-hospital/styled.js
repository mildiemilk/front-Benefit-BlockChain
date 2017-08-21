import styled from 'styled-components';
import { Image, Input } from 'semantic-ui-react';


export const BackgroundWhite = styled.div`
    height: 100%;
    width: 100%;
    background-color: #f9f9f9;
`;

export const Head = styled.div`
  padding:35px 0px 16px 0px ;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  color: #4a4a4a;
`;

export const HeadInBox = styled.div`
  font-size: 14px;
  font-weight: 500;
  text-align: left;
`;
export const DataInBox = styled.div`
  font-size: 12px;
  font-weight: 500;
  text-align: left;
`;
export const ElementBackground = styled.div`
  width: 100%;
  height: 100%;
  margin: 2px 0px;
  padding: 16px 40px;
  background-color: #ffffff;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.08);
`;
export const BoxSearch = styled.div`
  width: 100%;
  height: 40px;
  margin: 8px 0px;
  display:block;
  margin:auto;
  background-color: #ffffff;
  border: solid 1px #dddddd;
`;

export const BackToIndex = styled.div`
  width: 100%;
  height: 68px;
  text-align: center;
  padding-top: 36px;
  color:#3a7bd5;
  font-size: 14px;
`;

export const ImageInbox = styled(Image)`
  &&&{
    height: 100%;
    width: 100%;
    display:inline-block;
    margin-top: 15%;
  }
`;
export const Inputs = styled(Input)`
  &&&{
  &::-webkit-input-placeholder {
      font-family:kanit;
    }
  }
`;
