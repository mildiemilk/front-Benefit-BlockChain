import styled from 'styled-components';


export const Head = styled.div`
  font-size: 20px;
  margin-top: 15px;
`;
export const DivType = styled.div`
  height: 40px;
  border-radius: 5px;
  background-color: #ffffff;
  border: solid 1px #dddddd;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const TextType = styled.div`
  font-size: 14px;
  display: inline-block;
  margin-left: 10px;
  padding-right: 12px;
`;
export const DivFill = styled.div`
  border-radius: 5px;
  background-color: #ffffff;
  border: solid 1px #dddddd;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
`;
export const Input = styled.input`
  display: inline-block;
`;
export const DivList = styled.div`
  border-right: ${props => props.border};
  text-align: center;
`;
export const CircleStatus = styled.div`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background-color: ${props => props.color};    
  margin-right: 10px;
  display: inline-block;
`;
export const DivPic = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 15px;
`;

export const AllClaimText = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #505050;
  margin-top: 26px;
  margin-bottom: 10px;
`;
export const TextClaim = styled.div`
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.4px;
  color: #a9a9a9;
  margin-left: 10px;
  color: ${props => props.color};
`;
export const ListBox = styled.div`
  height: 70px;
  background-color: #ffffff;
  box-shadow: 0 2px 5px 0 rgba(180, 180, 180, 0.5);
  justify-content: center;
  padding-left: 20px;
  margin-top: 10px;
`;
export const HeadList = styled.div`
  padding-left: 20px;
`;
export const TextList = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
`;
export const IconBox = styled.div`
  width: 32px;
  height: 32px;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.color};
  background-color: ${props => props.bgcolor};
`;
