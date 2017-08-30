import styled from 'styled-components';

export const Pic = styled.div`
  border-radius: 50%;
  background-color: #5c6879;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Box = styled.div`
  height: 110px;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12);
  border: solid 1px #d3d3d3;
  padding: 22px;
  margin-bottom: 32px;
  position: relative;
`;
export const Text = styled.div`
  font-size: 14px;
  color: #505050;
  position: absolute;
  left: 97px;
  top: 21px;
`;
export const Number = Text.extend`
  font-size: 40px;
  top: 52px;
  left: 96px
`;
export const Filter = styled.div`
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  background-color: #ffffff;
  border: solid 1px #dddddd;
`;
