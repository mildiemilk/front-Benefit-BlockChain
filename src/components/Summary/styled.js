import styled from 'styled-components';

export const DivChart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  flex-direction: column;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`;
