import styled from 'styled-components';
import { Image } from 'semantic-ui-react';

export const Detail = styled.div`
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 1px 7px 2px rgba(0, 0, 0, 0.08);
  margin-top:3%;
  padding: 30px 42px !important;
  padding-top: 25px;
  height: 100%;
`;
export const Head = styled.div`
  font-size: 30px;
  letter-spacing: 0.4px;
  font-weight: bold;

`;
export const TextNormal = styled.div`
  font-family: Kanit;
  font-size: 14px;
  letter-spacing: 0.2px;
  text-align: left;
  color: #323028;
  padding-bottom: 2%;
  padding-top: 27px;
`;
export const Inner = styled.div`
  border-radius: 8px;
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  -ms-border-radius: 8px;
  width: 100%;
  height: 100%;
  border: solid 1px rgba(151, 151, 151, 0.66);
  margin-bottom: 15px;
  padding-bottom: 17px;
  padding: 20px;
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
  margin-top: 19px;
  margin-left: 8px;
`;
export const Uploads = styled.div`
  margin-top: 15px;
  margin-left: 8px;
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
  width: 140px;
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
