import styled from 'styled-components';

export const DivContent = styled.div`
  text-align: left;
  padding: ${props => props.padding};
  margin-top: 20px;
  position: relative;
`;
export const Text = styled.div`
  font-size: 14px;
  position: absolute;
  top: 15px;
`;
export const TextDetail = styled.div`
  font-size: 14px;
  margin-bottom: 10px;
`;
export const ButtonPopup = styled.button`
  border-radius: 3px;
  background-color: #e4e4e4;
  border: solid 1px #dddddd;
  width: 100%;
  padding: 10px;
`;
export const Input = styled.input`
  height: 40px;
  border-radius: 3px;
  background-color: #ffffff;
  border: solid 1px #dddddd;
  width: 100%;
  margin: bottom: 10px;
`;
