import styled from 'styled-components';
import { Image } from 'semantic-ui-react';

export const Detail = styled.div`
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 1px 7px 2px rgba(0, 0, 0, 0.08);
  padding: 1% 3%;
`;
export const Head = styled.div`
  font-size: 30px;
  letter-spacing: 0.4px;
  font-weight: bold;

`;
export const TextNormal = styled.div`
  font-size: 1vw;
  color: #323028;
  @media screen and (min-width: 1440px) {
    font-size: 14px;
  }
`;
export const Inner = styled.div`
  border-radius: 8px;
  border: solid 1px rgba(151, 151, 151, 0.66);
  margin-bottom: 15px;
  padding-bottom: 17px;
  padding: 3%;
  margin: 1% 3%;
  @media screen and (min-width: 1440px) {
    padding: 20px;
  }
`;
export const FileuploadBox = styled.div`
  margin-bottom: 10px;
  height: 2.8vw;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
  border: solid 1px rgba(155, 155, 155, 0.64);
  @media screen and (min-width: 1440px) {
    height: 40px;
  }
`;
export const FileuploadBoxs = FileuploadBox.extend`
  margin-top: 12px;
`;
export const Upload = styled.div`
  margin-top: 19px;
  margin-left: 8px;
`;
export const Uploads = styled.div`
  margin-top: 15px;
  margin-left: 8px;
`;
export const BrowsButton = styled.label`
  border-radius: 20px;
  background-color: #3a7bd5;
  box-shadow: none;
  text-align: center;
  border: none;
  color: #ffffff;
  cursor: pointer;
  display: block;
  width: 11.4vw;
  height: 2.8vw;
  line-height: 2.8vw;
  font-size: 1.3vw;
  float: right;
  @media screen and (min-width: 1440px) {
    width: 164px;
    height: 40px;
    font-size: 18px;
    line-height: 40px;
  }
`;
export const AddBlockButton = styled.div`
  position: relative;
  left: 35%;
  width: 163px;
  height: 40px;
  margin-left: 5px;
  border-radius: 20px;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  -ms-border-radius: 20px;
  color: #ffffff;
  background-color: #3a7bd5;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
  text-align: center;
  border-color: #3a7bd5;
  border-style: solid;
  color: #ffffff;
  cursor:pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Submit = styled.button`
  height: 35px;
  width: 140px;
  border-radius: 20px;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  -ms-border-radius: 20px;
  color: #ffffff;
  background-color: #f7555f;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
  text-align: center;
  border: none;
  margin-left: -5%;
`;
export const inputStyle = styled.input`
  opacity: 0;
  position: absolute;
`;
export const Imagestyle = styled(Image)`
  &&&{
    position:relative;
    left:10px;
    display: block;
    margin: auto;
    width: 74px;
    height: 63px;
  }
`;
