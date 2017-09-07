import styled from 'styled-components';

export const Detail = styled.div`
  border-radius: 8px;
  padding: 40px;
  background-color: #ffffff;
  box-shadow: 0 1px 5px 0 rgba(0, 0, 0, 0.2);
  margin-bottom: 40px;
`;
export const Button = styled.div`
  height: 40px;
  width: 100%;
  color: white;
  border-radius: 20px;
  background-color: ${props => props.cancle ? '#f7555f' : '#386cb2'};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 21px 0px;
  cursor: pointer;
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
export const Pic = styled.div`
  border-radius: 50%;
  background-color:  ${props => props.color};;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
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
