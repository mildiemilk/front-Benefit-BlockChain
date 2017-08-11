import styled from 'styled-components';

export const DetailDiv = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 1px 7px 2px rgba(0, 0, 0, 0.08);
  padding: 5% 8%;
  margin-bottom: 2%;
`;

export const Text = styled.div`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.3px;
  color: #323028;

`;
export const TextLine = styled.div`
  font-size: 14px;
  letter-spacing: 0.2px;
  color: #4a4a4a;
  margin: 3% 0%;

`;
export const Box = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  border: solid 1px #979797;
  position: relative;
`;

export const Setting = styled.div`
  width: 115px;
  height: 35px;
  border-radius: 6px;
  background-color: #3a7bd5;
  color: #ffffff;
  padding: 2% 3%;
  position: absolute;
  left: 69%;
  top: 13px;
  cursor: pointer;
`;

export const Image = styled.img`
  position: absolute;
  top: 14%;

`;
export const DivImage = styled.div`
  position: relative;
  top: 21%;
  padding-top: 15%;

`;
export const BoxIn = styled.div`
  position: relative;
`;
export const Toggled = styled.div`
  background-color: #d9e2ec;
  width: 100%;
  height: 100%;
  display: inline-block;
  text-align: center;
  padding: 3% 0%;
  padding: 6% 0%;
`;
export const HeadList = styled.div`
  padding: 10px 10px;
  font-size: 14px;
  font-weight: 500;
`;

export const HeadLists = styled.div`
  padding: 4% 5%;
  font-size: 14px;
`;

export const TextInput = styled.input`
  margin: 0% 5% 2% 5%;
  width: 90%;
  &::placeholder{
      padding-left: 2%;
  }
  border-radius: 5px;
  border: solid 1px #d9d9d9;
`;

export const DetailList = styled.div`
  border-radius: 5px;
  margin: 3% 5% 4% 5%;
  line-height: 2;
  color: #4a4a4a;
`;

export const ButtonDelete = styled.div`
  float: right;
  cursor: pointer;
  display: inline-block;
`;

export const TextList = styled.div`
  padding: 1% 3%;
  background-color: #cddaed;
  border-radius: 5px;
  margin-bottom: 2%;
`;

export const Back = styled.div`
  font-size: 16px;
  letter-spacing: 0.3px;
  color: #bfbfbf;
  padding: 15px 0px;
  cursor: pointer;
  margin: 2% 0%;
`;

export const SettingList = styled.div`
  font-size: 18px;
  font-weight: 600;
  letter-spacing: 0.2px;
  color: #323028;
  margin: 2%;
`;

export const DivInput = styled.input`
  margin-right: 4%;
`;

export const SettingLine = styled.div`
  margin: 0% 10%;
`;

export const ButtonSetting = styled.div`
  width: 81.6px;
  height: 30px;
  border-radius: 5px;
  background-color: #42bc69;
  display: inline-block;
  margin-left: 25%;
  color: white;
  padding: 1% 2%;
`;

export const ButtonSettings = styled.div`
  width: 81.6px;
  height: 30px;
  border-radius: 5px;
  background-color: #42bc69;
  display: inline-block;
  margin-left: 31%;
  color: #ffffff;
  padding: 1% 2%;
`;
export const BackButton = styled.button`
  width: 164px;
  height: 40px;
  border-radius: 20px;
  background-color: #f7555f;
  color: #ffffff;
  border-color: #f7555f;
  border-style: solid;
  margin-top: 25px;
`;

export const NextButton = styled.button`
  width: 164px;
  height: 40px;
  border-radius: 20px;
  background-color: #46b3b8;
  color: white;
  border-color: #46b3b8;
  border-style: solid;
  margin-top: 25px;
`;
