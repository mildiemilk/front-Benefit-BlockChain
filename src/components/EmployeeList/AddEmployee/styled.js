import styled from 'styled-components';

export const Detail = styled.div`
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  margin-bottom: 40px;
`;
export const Text = styled.div`
  display: inline-block;
  text-align: center;
  padding: 16px;
  height: 50px;
  width: calc(100% / 3);
  border-bottom: solid 1px rgba(151,151,151,0.66);
  border-right: ${props => props.last ? 'none' : 'solid 1px rgba(151, 151, 151, 0.66)'};
  background-color: #f6f6f6;
  cursor: pointer;
`;
export const Profile = styled.div`
  padding: 40px;
`;
export const PersonalDiv = styled.div`
  padding: 40px;
`;
export const DefaultImg = styled.div`
  position: relative;
  width: 135px;
  height: 135px;
  overflow: hidden;
  border-radius: 50%;
  margin: auto;
  display: block;
  background-color: #d8d8d8;
  border: solid 1px #979797;
`;
export const Upload = styled.label`
  position: absolute;
  top: 45px;
  left: 23px;
  text-align: center;
`;
export const TextUpload = styled.div`
  display: inline-block;
`;
export const Input = styled.input`
  display: none;
  position: absolute;
`;
export const DetailProfile = styled.div`
  width: 100%;
`;
export const TextProfile = styled.div`
  font-size: 14px;
  letter-spacing: 0.3px;
  color: #323028;
`;
export const HeadProfile = TextProfile.extend`
  margin: 15px 0px;
  font-weight: 500;
`;
export const InputBox = styled.input`
  height: 40px;
  width: 100%;
  margin: 10px 0px;
  border-radius: 3px;
  background-color: #ffffff;
  background-color: var(--white-two);
  border: solid 1px #dddddd;
`;
export const InputForm = styled.input`
  margin: 22px 0px;
`;
export const AddDetail = styled.div`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.3px;
  color: #9b9b9b;
  margin-top: 15px;
  cursor: pointer;
`;
export const ClaimDiv = styled.div`
  height: 300px;
  text-align: center;
  margin-top: 100px;
`;
export const ClaimText = styled.div`
  font-size: 20px;
  letter-spacing: 0.3px;
  text-align: center;
  color: #9b9b9b;
  margin-top: 16px;
`;
