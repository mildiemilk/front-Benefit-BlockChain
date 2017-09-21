import styled from 'styled-components';

export const DivClaim = styled.div`
  padding: 30px 50px;
`;
export const Status = styled.div`
  height: 31px;
  border-radius: 6px;
  text-align: center;
  padding: 5px;
  color: white;
  background-color: ${props => props.color};
`;
export const StatusTag = styled.div`
  border-radius: 6px;
  color: white;
  background-color: ${props => props.color};
  width: 80%;
  text-align: center;
`;
