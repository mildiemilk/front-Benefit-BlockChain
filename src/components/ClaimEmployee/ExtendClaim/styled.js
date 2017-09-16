import styled from 'styled-components';

export const DivClaim = styled.div`
  padding: 16px 20px;
  padding: ${props => props.padding};
  margin: ${props => props.margin};
`;

export const NumRef = styled.div`
  font-size: 14px
  color: #505050;
`;
export const Head = NumRef.extend`
  font-size: 18px;
  font-weight: 500;
  line-height: 27px;
`;
export const ListDetail = styled.div`
  font-size: 14px;
  letter-spacing: 0.3px;
  color: #323028;
  color: ${props => props.color};
  font-size: ${props => props.fontSize};
`;
export const List = ListDetail.extend`
  font-weight: 500;
`;
export const Box = styled.div`
  width: 100%;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 1px 5px 0 rgba(0,0,0,0.2);
  padding: 23px;
  margin-bottom: 10px
`;
export const DivList = styled.div`
  display: inline-block;
  margin-left: 18px;
`;
export const HeadLink = styled.div`
  font-size: 14px;
  color: #323028;
  color: ${props => props.color};
  display: inline-block;
  cursor: pointer;
  margin-bottom: 10px;
`;
export const DivInsurance = DivClaim.extend`
  text-align: center;
  min-height: 325px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
