import styled from 'styled-components';
import { Image } from 'semantic-ui-react';

export const Backgroundiv = styled.div`
    height: 100%;
    padding: 7% 5%;
`;

export const TinyText = styled.div`
    font-size: 12px;
    color: #34495e;
    margin: 5px;
`;

export const UploadText = styled.div`
    font-size: 14px;
    letter-spacing: 0.2px;
    text-align: center;
`;
export const DataStyle = styled.div`
    padding-left: 7%;
    padding-top: 5%;
    font-size: 73%;
    text-align: left;
    line-height: 1.55;
    letter-spacing: 0.3px;
`;

export const BrowsButton = styled.label`
    margin-left: 5px;
    padding: 2% 30% 2% 30%;
    border-radius: 3px;
    background-color: #c4c4c4;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
    font-size: 14px;
    letter-spacing: 0.3px;
    text-align: center;
    color: #323028;
`;
export const SubmitButton = styled.button`
    width: 100%;
    height: 40px;
    border-radius: 20px;
    background-color: #3a7bd5;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
    border: solid 1px rgba(155, 155, 155, 0.64);
    font-size: 14px;
    letter-spacing: 0.3px;
    text-align: center;
    color: #ffffff;

`;

export const NewLine = styled.div`
  margin-bottom: 13px;
`;
export const ImageInbox = styled(Image)`
  &&&{
    height: 100%;
    width: 100%;
    display:inline-block;
    margin-top: 15%;
  }
`;
