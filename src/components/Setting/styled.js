import styled from 'styled-components';
import { Image, Input } from 'semantic-ui-react';

export const BiddingElement = styled.div`
  width: 100%;
  height: 216px;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 3px 2px 0 rgba(0, 0, 0, 0.09);
  border: solid 1px #cecece;
  padding: 18px;
  margin-bottom: 10px;
`;

export const HeadText = styled.div`
  font-size: 32px;
  font-weight: 500;
  text-align: left;
  margin-top: 32px;
  margin-bottom: 9px;
`;

export const ContentBox = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: #ffffff;
  box-shadow: 0 1px 7px 2px rgba(0, 0, 0, 0.08);
`;

export const HeadContentBox = styled.div`
  height: 100%;
`;
export const SubContentBox = styled.div`
  height: 58px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.3px;
  text-align: left;
  padding: 21px;
`;

export const LeftBox = styled.div`
  height: 58px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.3px;
  text-align: left;
  padding: 21px;
`;

export const DataBox = styled.div`
  height: 58px;
  width: 30%;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.3px;
  text-align: left;
  padding: 21px;
  display: inline-block;
  margin-right: 10px;
`;

export const DataBoxEm = styled.div`
  height: 58px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.3px;
  text-align: left;
  padding: 21px 0px;
`;

export const SecondDataBox = styled.div`
  height: 58px;
  width: 85%;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.3px;
  text-align: left;
  padding: 21px;
  display: inline-block;
  margin-right: 10px;
`;

export const RightBox = styled.span`
  padding: 4px 14px;
  display: inline-block;
  width: 60px;
  height: 30px;
  border-radius: 4px;
  border: solid 1px #979797;
  margin-top: 15px;
  cursor: pointer;
  text-align: center;
`;

export const DividerSubBox = styled.hr`
  width: 93%;
  margin: auto;
  line-height: 1;
  height: 0;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .05em;
  color: #979797;
`;

export const TagDiv = styled.div`
  height: 30px;
  display: inline-block;
  border-radius: 5px;
  background-color: #cddaed;
  font-size: 14px;
  letter-spacing: 0.2px;
  text-align: left;
  color: #4a4a4a;
  margin: 2px 4px;
  padding: 5px 8px;
`;

export const DividerBox = styled.hr`
  margin: 0px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .05em;
  border: solid 1px #dadada;
`;

export const DividerBoxEm = styled.hr`
  margin-top: 20px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: .05em;
  border: solid 1px #dadada;
`;

export const ImageCompany = styled(Image)`
  &&& {
  height: 52px;
  width: 52px;
  }
`;

export const InputStyle = styled(Input)`
  &&& {
  font-size: 14px;
  font-family: Kanit;
  margin-right: 30px;
  width: 300px;
  }
`;
