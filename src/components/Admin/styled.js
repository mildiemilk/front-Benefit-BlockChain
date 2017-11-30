import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';

export const Head = styled.div`
  position: fixed;
  border: none;
  background-color: #EA7a5d;
  height: 65px;
  width: 100%;
  z-index: 20;
  display: flex;
  align-items: center;
`;

export const DivList = styled.div`
  position: absolute;
  top: 73px;
  width: 100%;
  padding: 30px 35px 30px 30px;
`;
export const Text = styled.div`
  color: white;
  margin-left: 29px;
  font-size: 21px;
`;
export const NavList = styled.div`
  background-color: wheat;
  padding-left: 15px;
  width: 100%;
  height: 44px;
  font-size: 19px;
  border-radius: 5px;
  box-shadow: 0 1px 5px 0 rgba(84, 84, 84, 0.29)
`;
export const Block = styled.div`
  margin-left: 10px;
  width: 40px;
  height: 40px;
  border-radius: 4px;
  border: solid 2px #80400B;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #80400B;
  &:hover {
    background: white;
    cursor: pointer;
  }
`;
export const LedgerStyled = styled.div`
  margin-left: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const LastLedger = LedgerStyled.extend`
  background-color: #80400B;
  color: #EA7a5d;
`;
export const Icons = styled(Icon)`
  color: #80400B;
`;
export const Lists = styled.div`
  font-size: 15px;
  line-height: 22px;
  color: darkolivegreen;
`;
export const BoxList = styled.div`
  border-top: solid rgba(84, 84, 84, 0.29);
  padding-top: 8px;
`;

