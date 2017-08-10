import styled from 'styled-components';
import { Image } from 'semantic-ui-react';

export const Submit = styled.button`
    position: relative;
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
`;
export const ImageStyle = styled(Image)`
  &&&{
    width: 585px;
    height: : 242px;
    display: block;
    margin: auto;
  }
`;

export const Head = styled.p`
  font-family: Kanit;
  font-weight: bold;
  font-size: 28px;
  margin-bottom: 10px;
`;
export const Space = styled.div`
  padding: 13%;
  text-align: center;
  font-size: 25px;
`;
