import styled from 'styled-components';

export const DivImg = styled.div`
  width: 39.8px;
  height: 39.8px;
  border-radius: 5px;
  background-color: #ffffff;
  border: solid 1px #d7d7d7;
  display: inline-block;
  text-align: center;
  padding-top: 8px;
  cursor: pointer;
`;
export const TextList = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: #a9a9a9;
  display: inline-block;
  margin-right: 4px;
`;
export const DivHead = styled.div`
  position: relative;
`;
export const TextElip = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
`;
export const StatusTag = styled.div`
  border-radius: 6px;
  width: 100%;
  height: 20px;
  color: white;
  background-color:${props => props.color};
`;
