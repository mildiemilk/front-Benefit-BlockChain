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
