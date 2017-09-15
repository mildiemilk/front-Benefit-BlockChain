import styled from 'styled-components';

export const DivCover = styled.div`
  height: 250px;
  opacity: 0.5;
  border-radius: 5px;
  background-color: #4a4a4a;
  box-shadow: 0 1px 7px 2px rgba(0, 0, 0, 0.08);
`;
export const Upload = styled.label`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const Input = styled.input`
  display: none;
  position: absolute;
`;
export const ButtonUp = styled.div`
  color: white;
  border-radius: 20px;
  background-color: #3a7bd5;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
  width: 217px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TextBox = styled.textarea`
  width: 100%;
  max-width: 100%;
  min-height: 90px;
  resize: none;
  border: solid 1px #dddddd;
`;
